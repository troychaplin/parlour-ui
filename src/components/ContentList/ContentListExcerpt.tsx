export interface ContentListExcerptProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export const ContentListExcerpt = ({ children, className, ...rest }: ContentListExcerptProps) => {
    const excerptClasses = ['parlour-content-list__excerpt', className].filter(Boolean).join(' ');

    return (
        <p className={excerptClasses} {...rest}>
            {children}
        </p>
    );
};
