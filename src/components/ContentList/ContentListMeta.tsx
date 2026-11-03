export interface ContentListMetaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    align?: 'start' | 'end';
}

export const ContentListMeta = ({
    children,
    align = 'start',
    className,
    ...rest
}: ContentListMetaProps) => {
    const metaClasses = [
        'parlour-content-list__meta',
        `parlour-content-list__meta--${align}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={metaClasses} {...rest}>
            {children}
        </div>
    );
};
