import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrandIcon } from './BrandIcon';
import { colorClasses, fontSizeClasses } from '../../utils/propClasses';
import { brandIcons, type BrandIconName } from './brandIcons';

const iconNames = Object.keys(brandIcons) as BrandIconName[];

const meta: Meta<typeof BrandIcon> = {
    title: 'Components/Elements/Brand Icon',
    component: BrandIcon,
    tags: ['!autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: iconNames,
        },
        color: {
            control: 'select',
            options: Object.keys(colorClasses),
        },
        size: {
            control: 'select',
            options: Object.keys(fontSizeClasses).filter(
                (size) => size !== 'hero' && !size.startsWith('heading-'),
            ),
        },
    },
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof BrandIcon>;

export const Default: Story = {
    args: {
        name: 'react',
        label: 'React',
        size: '2-x-large',
    },
};

export const AllIcons: Story = {
    render: () => (
        <ul
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(8rem, 1fr))',
                gap: 'var(--parlour--spacing-large)',
                padding: 0,
                listStyle: 'none',
            }}
        >
            {iconNames.map((name) => (
                <li
                    key={name}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'var(--parlour--spacing-x-small)',
                    }}
                >
                    <BrandIcon name={name} size="x-large" />
                    <code style={{ fontSize: 'var(--parlour--font-size-x-small)' }}>{name}</code>
                </li>
            ))}
        </ul>
    ),
};

export const Color: Story = {
    args: {
        name: 'wordpress',
        text: 'Built for WordPress',
        color: 'accent-primary',
        size: 'large',
    },
};

export const WithText: Story = {
    args: {
        name: 'wordpress',
        text: 'WordPress',
        size: 'x-large',
    },
};
