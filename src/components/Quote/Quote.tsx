import React from 'react';
import './styles.scss';

export interface QuoteProps extends Omit<React.HTMLAttributes<HTMLElement>, 'prefix'> {
    children: React.ReactNode;
    prefix?: string;
    cite?: React.ReactNode;
    citeUrl?: string;
    className?: string;
}

export const Quote = ({ children, prefix, cite, citeUrl, className, ...rest }: QuoteProps) => {
    const rootClasses = ['parlour-quote', className].filter(Boolean).join(' ');

    return (
        <figure className={rootClasses} {...rest}>
            {prefix && <p className="parlour-quote__prefix">{prefix}</p>}
            <blockquote className="parlour-quote__blockquote" cite={citeUrl}>
                <p className="parlour-quote__text">{children}</p>
            </blockquote>
            {cite && <figcaption className="parlour-quote__cite">{cite}</figcaption>}
        </figure>
    );
};
