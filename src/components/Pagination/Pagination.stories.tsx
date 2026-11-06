import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '../Container/Container';
import { backgroundColorClasses } from '../../utils/propClasses';
import { Pagination } from './Pagination';

const colorOptions = Object.keys(backgroundColorClasses) as (keyof typeof backgroundColorClasses)[];
const alignOptions = ['start', 'center', 'end'] as const;

const meta: Meta<typeof Pagination> = {
    title: 'Components/Navigation/Pagination',
    component: Pagination,
    tags: ['!autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: colorOptions,
        },
        align: {
            control: 'inline-radio',
            options: alignOptions,
        },
    },
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    args: {
        currentPage: 1,
        totalPages: 21,
        href: '/blog/page/{page}',
        firstPageHref: '/blog',
    },
};

export const MiddlePage: Story = {
    args: {
        currentPage: 10,
        totalPages: 21,
        href: '/blog/page/{page}',
        firstPageHref: '/blog',
    },
};

export const LastPage: Story = {
    args: {
        currentPage: 21,
        totalPages: 21,
        href: '/blog/page/{page}',
        firstPageHref: '/blog',
    },
};

export const FewPages: Story = {
    args: {
        currentPage: 2,
        totalPages: 4,
        href: '/blog/page/{page}',
        firstPageHref: '/blog',
    },
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--parlour--spacing-large)' }}>
            {colorOptions.map((color) => (
                <Pagination
                    key={color}
                    color={color}
                    label={`Pagination, ${color}`}
                    currentPage={1}
                    totalPages={21}
                    href="/blog/page/{page}"
                />
            ))}
        </div>
    ),
};

export const Alignment: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--parlour--spacing-large)' }}>
            {alignOptions.map((align) => (
                <Pagination
                    key={align}
                    align={align}
                    label={`Pagination, ${align}`}
                    currentPage={1}
                    totalPages={21}
                    href="/blog/page/{page}"
                />
            ))}
        </div>
    ),
};

export const InDarkContainer: Story = {
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        currentPage: 3,
        totalPages: 21,
        href: '/blog/page/{page}',
        firstPageHref: '/blog',
        align: 'center',
    },
    render: (args) => (
        <Container color="dark" maxWidth="alignfull" contentWidth="alignwide">
            <Pagination {...args} />
        </Container>
    ),
};
