import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContentList } from './ContentList';
import { ContentListItem } from './ContentListItem';
import { ContentListIndex } from './ContentListIndex';
import { ContentListMeta } from './ContentListMeta';
import { ContentListLabel } from './ContentListLabel';
import { ContentListImage } from './ContentListImage';
import { ContentListBody } from './ContentListBody';
import { ContentListTitle } from './ContentListTitle';
import { ContentListExcerpt } from './ContentListExcerpt';
import { Main } from '../Main/Main';
import { Container } from '../Container/Container';
import { GridGroup } from '../GridGroup/GridGroup';
import { HeroHeader } from '../HeroHeader/HeroHeader';
import { PostData } from '../../data/PostData';
import { maxWidthClasses } from '../../utils/propClasses';

const meta: Meta<typeof ContentList> = {
    title: 'Components/Content/Content List',
    component: ContentList,
    tags: ['!autodocs'],
    decorators: [
        (Story) => (
            <Main>
                <Story />
            </Main>
        ),
    ],
    argTypes: {
        // Children are JSX, which the object control can only show as a raw React element
        children: {
            control: false,
        },
        as: {
            control: 'inline-radio',
            options: ['ul', 'ol', 'div'],
        },
        size: {
            control: 'inline-radio',
            options: ['small', 'large'],
        },
        backgroundHover: {
            control: 'inline-radio',
            options: ['light', 'dark'],
        },
        maxWidth: {
            control: 'select',
            options: Object.keys(maxWidthClasses),
        },
    },
    parameters: {
        layout: 'fullscreen',
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ContentList>;

const defaultRows = PostData.map((post) => (
    <ContentListItem key={post.id}>
        <ContentListIndex>No. {post.id}</ContentListIndex>
        <ContentListLabel>{post.category}</ContentListLabel>
        <ContentListBody>
            <ContentListTitle href={post.href}>{post.title}</ContentListTitle>
            <ContentListExcerpt>{post.excerpt}</ContentListExcerpt>
        </ContentListBody>
        <ContentListMeta align="end">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
        </ContentListMeta>
    </ContentListItem>
));

export const Default: Story = {
    args: {
        maxWidth: 'alignwide',
        children: defaultRows,
    },
};

export const WithMeta: Story = {
    render: () => (
        <ContentList maxWidth="alignwide">
            {PostData.slice(0, 3).map((post) => (
                <ContentListItem key={post.id}>
                    <ContentListIndex>No. {post.id}</ContentListIndex>
                    <ContentListMeta>
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                    </ContentListMeta>
                    <ContentListLabel>{post.category}</ContentListLabel>
                    <ContentListBody>
                        <ContentListTitle href={post.href}>{post.title}</ContentListTitle>
                        <ContentListExcerpt>{post.excerpt}</ContentListExcerpt>
                    </ContentListBody>
                </ContentListItem>
            ))}
        </ContentList>
    ),
};

export const WithImage: Story = {
    render: () => (
        <ContentList as="ol" maxWidth="alignwide">
            {PostData.map((post, i) => (
                <ContentListItem key={post.id}>
                    <ContentListIndex variant="accent">
                        {String(i + 1).padStart(2, '0')}
                    </ContentListIndex>
                    <ContentListImage src={post.image} alt="" />
                    <ContentListLabel color="muted">
                        {post.type} · {post.category}
                    </ContentListLabel>
                    <ContentListBody>
                        <ContentListTitle href={post.href}>{post.title}</ContentListTitle>
                        <ContentListExcerpt>{post.excerpt}</ContentListExcerpt>
                    </ContentListBody>
                    <ContentListMeta align="end">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                    </ContentListMeta>
                </ContentListItem>
            ))}
        </ContentList>
    ),
};

export const SmallInColumn: Story = {
    render: () => (
        <GridGroup columns={2} gap="4-x-large" align="start" maxWidth="alignwide">
            <HeroHeader
                size="small"
                level={2}
                prefix="// Latest writing"
                prefixStyle="mono"
                title="From the"
                titleAccent="front of the editor."
            >
                <p>
                    Three recent pieces. Most are about WordPress, but a few wander into AI,
                    frontend, or the occasional book note.
                </p>
            </HeroHeader>
            <ContentList size="small">
                {PostData.slice(0, 3).map((post) => (
                    <ContentListItem key={post.id}>
                        <ContentListIndex>No. {post.id}</ContentListIndex>
                        <ContentListLabel>{post.category}</ContentListLabel>
                        <ContentListBody>
                            <ContentListTitle href={post.href}>{post.title}</ContentListTitle>
                        </ContentListBody>
                    </ContentListItem>
                ))}
            </ContentList>
        </GridGroup>
    ),
};

export const BackgroundHover: Story = {
    args: {
        maxWidth: 'alignwide',
        backgroundHover: 'dark',
        children: defaultRows,
    },
};

export const InDarkContainer: Story = {
    args: {
        backgroundHover: 'light',
        children: defaultRows,
    },
    render: (args) => (
        <Container color="dark" maxWidth="alignfull" contentWidth="alignwide">
            <ContentList {...args} />
        </Container>
    ),
};
