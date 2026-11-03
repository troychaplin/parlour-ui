import { maxWidthClasses } from '../../utils/propClasses';
import './styles.scss';

type maxWidthKeys = keyof typeof maxWidthClasses;

export interface ContentListProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    as?: 'ul' | 'ol' | 'div';
    size?: 'small' | 'large';
    backgroundHover?: 'light' | 'dark';
    maxWidth?: maxWidthKeys;
}

export const ContentList = ({
    children,
    as = 'ul',
    size = 'large',
    backgroundHover,
    maxWidth,
    className,
    ...rest
}: ContentListProps) => {
    const ContentListWrapper = as;

    const rootClasses = [
        'parlour-content-list',
        `parlour-content-list--${size}`,
        backgroundHover && `parlour-content-list--bg-hover-${backgroundHover}`,
        maxWidth && maxWidthClasses[maxWidth],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    // list-style: none drops list semantics in Safari/VoiceOver, so restore them explicitly.
    const listRole = as === 'ul' || as === 'ol' ? 'list' : undefined;

    return (
        <ContentListWrapper className={rootClasses} role={listRole} {...rest}>
            {children}
        </ContentListWrapper>
    );
};
