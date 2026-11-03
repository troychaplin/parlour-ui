'use client';

import { useLinkContext } from '../LinkProvider/useLinkContext';

export interface ContentListTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    level?: 2 | 3 | 4;
    href?: string;
}

export const ContentListTitle = ({
    children,
    level = 3,
    href,
    className,
    ...rest
}: ContentListTitleProps) => {
    const LinkComponent = useLinkContext();
    const Heading = `h${level}` as const;
    const titleClasses = ['parlour-content-list__title', className].filter(Boolean).join(' ');

    if (href) {
        return (
            <Heading className={titleClasses} {...rest}>
                {/* eslint-disable-next-line react-hooks/static-components -- injected via context, stable across renders */}
                <LinkComponent className="parlour-content-list__link" href={href}>
                    {children}
                </LinkComponent>
            </Heading>
        );
    }

    return (
        <Heading className={titleClasses} {...rest}>
            {children}
        </Heading>
    );
};
