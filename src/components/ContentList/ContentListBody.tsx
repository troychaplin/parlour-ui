export interface ContentListBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const ContentListBody = ({ children, className, ...rest }: ContentListBodyProps) => {
    const bodyClasses = ['parlour-content-list__body', className].filter(Boolean).join(' ');

    return (
        <div className={bodyClasses} {...rest}>
            {children}
        </div>
    );
};
