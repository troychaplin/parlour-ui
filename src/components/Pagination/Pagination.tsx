'use client';

import React from 'react';
import { useLinkContext } from '../LinkProvider/useLinkContext';
import { backgroundColorClasses, justifyClasses } from '../../utils/propClasses';
import './styles.scss';

type colorKeys = keyof typeof backgroundColorClasses;
type alignKeys = keyof typeof justifyClasses;

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
    currentPage: number;
    totalPages: number;
    href: string;
    firstPageHref?: string;
    color?: colorKeys;
    align?: alignKeys;
    label?: string;
}

type PageItem = number | 'ellipsis-start' | 'ellipsis-end';

// The first and last pages always show, with the current page and one either side between them.
// Near either end the run grows to five pages, so the list keeps the same length as you page through.
const getPageItems = (current: number, total: number): PageItem[] => {
    if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (current <= 4) {
        return [1, 2, 3, 4, 5, 'ellipsis-end', total];
    }

    if (current >= total - 3) {
        return [1, 'ellipsis-start', total - 4, total - 3, total - 2, total - 1, total];
    }

    return [1, 'ellipsis-start', current - 1, current, current + 1, 'ellipsis-end', total];
};

export const Pagination = ({
    currentPage,
    totalPages,
    href,
    firstPageHref,
    color,
    align = 'start',
    label = 'Pagination',
    className,
    ...rest
}: PaginationProps) => {
    const LinkComponent = useLinkContext();

    if (totalPages < 2) {
        return null;
    }

    const pageHref = (page: number) =>
        page === 1 && firstPageHref ? firstPageHref : href.replace('{page}', String(page));

    const rootClasses = [
        'parlour-pagination',
        `parlour-pagination--align-${justifyClasses[align]}`,
        color && `parlour-pagination--${backgroundColorClasses[color]}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPages;

    return (
        <nav className={rootClasses} aria-label={label} {...rest}>
            <ul className="parlour-pagination__list">
                <li>
                    {hasPrev ? (
                        // eslint-disable-next-line react-hooks/static-components -- injected via context, stable across renders
                        <LinkComponent
                            className="parlour-pagination__step parlour-pagination__step--prev"
                            href={pageHref(currentPage - 1)}
                            rel="prev"
                        >
                            <span aria-hidden="true">←</span> Prev
                        </LinkComponent>
                    ) : (
                        <span
                            className="parlour-pagination__step parlour-pagination__step--prev"
                            aria-disabled="true"
                        >
                            <span aria-hidden="true">←</span> Prev
                        </span>
                    )}
                </li>

                {getPageItems(currentPage, totalPages).map((item) => {
                    if (typeof item !== 'number') {
                        return (
                            <li
                                key={item}
                                className="parlour-pagination__ellipsis"
                                aria-hidden="true"
                            >
                                …
                            </li>
                        );
                    }

                    if (item === currentPage) {
                        return (
                            <li key={item}>
                                <span
                                    className="parlour-pagination__page parlour-pagination__page--current"
                                    aria-current="page"
                                >
                                    <span className="sr-only">Page </span>
                                    {item}
                                </span>
                            </li>
                        );
                    }

                    return (
                        <li key={item}>
                            <LinkComponent
                                className="parlour-pagination__page"
                                href={pageHref(item)}
                            >
                                <span className="sr-only">Page </span>
                                {item}
                            </LinkComponent>
                        </li>
                    );
                })}

                <li>
                    {hasNext ? (
                        // eslint-disable-next-line react-hooks/static-components -- injected via context, stable across renders
                        <LinkComponent
                            className="parlour-pagination__step parlour-pagination__step--next"
                            href={pageHref(currentPage + 1)}
                            rel="next"
                        >
                            Next <span aria-hidden="true">→</span>
                        </LinkComponent>
                    ) : (
                        <span
                            className="parlour-pagination__step parlour-pagination__step--next"
                            aria-disabled="true"
                        >
                            Next <span aria-hidden="true">→</span>
                        </span>
                    )}
                </li>
            </ul>
        </nav>
    );
};
