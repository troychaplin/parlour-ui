'use client';

import { useLinkContext } from '../LinkProvider/useLinkContext';

export interface CardLinkProps extends React.ComponentPropsWithoutRef<'a'> {
    href: string;
    children: React.ReactNode;
}

export const CardLink = ({ href, children, className, ...rest }: CardLinkProps) => {
    const LinkComponent = useLinkContext();
    const linkClasses = ['parlour-card__link', className].filter(Boolean).join(' ');

    return (
        // eslint-disable-next-line react-hooks/static-components -- injected via context, stable across renders
        <LinkComponent className={linkClasses} href={href} {...rest}>
            {children}
        </LinkComponent>
    );
};
