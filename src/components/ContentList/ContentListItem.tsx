export interface ContentListItemProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    as?: 'li' | 'div';
}

export const ContentListItem = ({
    children,
    as = 'li',
    className,
    ...rest
}: ContentListItemProps) => {
    const ItemWrapper = as;
    const itemClasses = ['parlour-content-list__item', className].filter(Boolean).join(' ');

    return (
        <ItemWrapper className={itemClasses} {...rest}>
            {children}
        </ItemWrapper>
    );
};
