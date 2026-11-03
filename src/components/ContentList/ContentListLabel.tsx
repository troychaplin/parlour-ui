export interface ContentListLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    color?: 'accent' | 'muted';
}

export const ContentListLabel = ({
    children,
    color = 'accent',
    className,
    ...rest
}: ContentListLabelProps) => {
    const labelClasses = [
        'parlour-content-list__label',
        `parlour-content-list__label--${color}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <span className={labelClasses} {...rest}>
            {children}
        </span>
    );
};
