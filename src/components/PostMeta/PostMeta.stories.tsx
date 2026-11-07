import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '../Container/Container';
import { PostMeta } from './PostMeta';

const meta: Meta<typeof PostMeta> = {
    title: 'Components/Content/Post Meta',
    component: PostMeta,
    tags: ['!autodocs'],
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof PostMeta>;

export const Default: Story = {
    args: {
        name: 'Troy Chaplin',
        details: 'Developer · Ottawa',
        avatar: 'https://picsum.photos/seed/author/88/88',
        published: '2026-04-21',
        updated: '2026-04-24',
    },
};

export const PublishedOnly: Story = {
    args: {
        name: 'Troy Chaplin',
        details: 'Developer · Ottawa',
        avatar: 'https://picsum.photos/seed/author/88/88',
        published: '2026-04-21',
    },
};

export const NoAvatar: Story = {
    args: {
        name: 'Troy Chaplin',
        details: 'Developer · Ottawa',
        published: '2026-04-21',
        updated: '2026-04-24',
    },
};

export const NoDivider: Story = {
    args: {
        name: 'Troy Chaplin',
        details: 'Developer · Ottawa',
        avatar: 'https://picsum.photos/seed/author/88/88',
        published: '2026-04-21',
        divider: false,
    },
};

export const InDarkContainer: Story = {
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        name: 'Troy Chaplin',
        details: 'Developer · Ottawa',
        avatar: 'https://picsum.photos/seed/author/88/88',
        published: '2026-04-21',
        updated: '2026-04-24',
    },
    render: (args) => (
        <Container color="dark" maxWidth="alignfull" contentWidth="alignwide">
            <PostMeta {...args} />
        </Container>
    ),
};
