export interface ContentListIndexProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: 'muted' | 'accent';
}

export const ContentListIndex = ({
    children,
    variant = 'muted',
    className,
    ...rest
}: ContentListIndexProps) => {
    const indexClasses = [
        'parlour-content-list__index',
        `parlour-content-list__index--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <span className={indexClasses} {...rest}>
            {children}
        </span>
    );
};
