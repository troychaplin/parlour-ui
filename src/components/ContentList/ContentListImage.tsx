export interface ContentListImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

export const ContentListImage = ({ src, alt, className, ...rest }: ContentListImageProps) => {
    const imageClasses = ['parlour-content-list__image', className].filter(Boolean).join(' ');

    return <img className={imageClasses} src={src} alt={alt} {...rest} />;
};
