import {
    maxWidthClasses,
    elementClasses,
    borderRadiusClasses,
    backgroundColorClasses,
} from '../../utils/propClasses';
import './styles.scss';

type maxWidthKeys = keyof typeof maxWidthClasses;
type elementKeys = keyof typeof elementClasses;
type borderRadiusKeys = keyof typeof borderRadiusClasses;
type colorKeys = keyof typeof backgroundColorClasses;

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    as?: elementKeys;
    maxWidth?: maxWidthKeys;
    contentWidth?: maxWidthKeys;
    color?: colorKeys;
    borderRadius?: borderRadiusKeys;
    border?: 'none' | 'top' | 'bottom' | 'both' | 'all';
}

export const Container = ({
    children,
    as = 'div',
    maxWidth = 'aligncontent',
    contentWidth = 'aligncontent',
    color,
    className,
    borderRadius = 'md',
    border,
    ...rest
}: ContainerProps) => {
    const ContainerWrapper = as;

    // light and white have always been bordered, so they keep `all` unless told otherwise
    const resolvedBorder = border ?? (color === 'light' || color === 'white' ? 'all' : 'none');

    const rootClasses = [
        'parlour-layout parlour-container',
        'is-layout-constrained',
        maxWidth,
        color && `parlour-container--no-gap parlour-container--${color}`,
        color && resolvedBorder !== 'none' && `parlour-container--border-${resolvedBorder}`,
        borderRadius && `parlour-container--radius-${borderRadius}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const contentClasses = ['has-global-padding', contentWidth, color && 'has-root-padding']
        .filter(Boolean)
        .join(' ');

    return (
        <ContainerWrapper className={rootClasses} {...rest}>
            <div className={contentClasses}>{children}</div>
        </ContainerWrapper>
    );
};
