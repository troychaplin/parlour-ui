import React from 'react';
import { maxWidthClasses } from '../../utils/propClasses';

import './styles.scss';

type maxWidthKeys = keyof typeof maxWidthClasses;

export interface SectionHeaderProps extends Omit<
    React.HTMLAttributes<HTMLElement>,
    'title' | 'prefix'
> {
    className?: string;
    prefix?: string;
    title?: string;
    description?: React.ReactNode;
    level?: 1 | 2 | 3 | 4;
    size?: 'small' | 'medium' | 'large' | 'x-large';
    divider?: 0 | 1 | 2 | 3 | 4;
    maxWidth?: maxWidthKeys;
}

export const SectionHeader = ({
    className,
    prefix,
    title,
    description,
    level = 2,
    size = 'medium',
    divider = 1,
    maxWidth,
    ...rest
}: SectionHeaderProps) => {
    const rootClasses = [
        'parlour-section-header',
        `parlour-section-header--${size}`,
        `parlour-section-header--divider-${divider}`,
        maxWidth && maxWidthClasses[maxWidth],
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const Heading = `h${level}` as const;

    return (
        <header className={rootClasses} {...rest}>
            {prefix && <p className="parlour-section-header__prefix">{prefix}</p>}
            {title && <Heading className="parlour-section-header__title">{title}</Heading>}
            {description && <p className="parlour-section-header__description">{description}</p>}
        </header>
    );
};
