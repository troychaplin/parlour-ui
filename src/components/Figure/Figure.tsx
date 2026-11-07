import React from 'react';
import { maxWidthClasses } from '../../utils/propClasses';
import './styles.scss';

type maxWidthKeys = keyof typeof maxWidthClasses;

type FigureSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'full';
type FigureAlignType = 'left' | 'right' | 'center' | 'none';

export interface FigureProps {
    children: React.ReactNode;
    caption?: string;
    size?: FigureSizeType;
    align?: FigureAlignType;
    maxWidth?: maxWidthKeys;
}

export const Figure = ({
    children,
    caption,
    size = 'full',
    align = 'none',
    maxWidth,
}: FigureProps) => {
    // alignleft / alignright opt the figure out of the is-layout-constrained
    // rule in layout.css that would otherwise force margin-left/right: auto
    // and prevent float margins from applying.
    const layoutAlignClass = align === 'left' ? 'alignleft' : align === 'right' ? 'alignright' : '';

    // The layout widths are for block figures; a floated figure keeps its `size`.
    const isFloated = align === 'left' || align === 'right';

    const rootClasses = [
        'parlour-figure',
        `parlour-figure--${size}`,
        align !== 'none' ? `parlour-figure--${align}` : '',
        layoutAlignClass,
        maxWidth && !isFloated && maxWidthClasses[maxWidth],
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <figure className={rootClasses}>
            <div className="parlour-figure__inner">
                {children}
                {caption && <figcaption className="parlour-figure__caption">{caption}</figcaption>}
            </div>
        </figure>
    );
};
