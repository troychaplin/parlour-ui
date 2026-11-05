import React from 'react';
import { colorClasses, fontSizeClasses } from '../../utils/propClasses';
import { brandIcons, type BrandIconName } from './brandIcons';
import './styles.scss';

type colorKeys = keyof typeof colorClasses;
// Hero and heading sizes are for headings, not icons.
type fontSizeKeys = Exclude<keyof typeof fontSizeClasses, 'hero' | `heading-${string}`>;

export interface BrandIconProps extends Omit<
    React.SVGProps<SVGSVGElement>,
    'name' | 'color' | 'size'
> {
    name: BrandIconName;
    label?: string;
    text?: string;
    color?: colorKeys;
    size?: fontSizeKeys;
    className?: string;
}

export const BrandIcon = ({
    name,
    label,
    text,
    color,
    size,
    className,
    style,
    ...rest
}: BrandIconProps) => {
    const rootClasses = ['parlour-brand-icon', `parlour-brand-icon--${name}`, className]
        .filter(Boolean)
        .join(' ');

    const a11yProps = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };

    const rootStyle =
        color || size
            ? {
                  color: color && `var(--parlour--color-${colorClasses[color]})`,
                  fontSize: size && `var(--parlour--font-size-${fontSizeClasses[size]})`,
              }
            : undefined;

    const renderIcon = (iconStyle?: React.CSSProperties) => (
        <svg
            className={rootClasses}
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="currentColor"
            focusable="false"
            style={iconStyle}
            {...a11yProps}
            {...rest}
        >
            <path d={brandIcons[name].path} />
        </svg>
    );

    if (!text) {
        return renderIcon(rootStyle || style ? { ...rootStyle, ...style } : undefined);
    }

    const groupClasses = [
        'parlour-brand-icon-group',
        size && `parlour-brand-icon-group--size-${fontSizeClasses[size]}`,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <span className={groupClasses} style={rootStyle}>
            {renderIcon(style)}
            <span className="parlour-brand-icon-group__text">{text}</span>
        </span>
    );
};
