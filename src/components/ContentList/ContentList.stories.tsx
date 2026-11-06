import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContentList, type ContentListProps } from './ContentList';
import { ContentListItem } from './ContentListItem';
import { ContentListIndex, type ContentListIndexProps } from './ContentListIndex';
import { ContentListMeta, type ContentListMetaProps } from './ContentListMeta';
import { ContentListLabel, type ContentListLabelProps } from './ContentListLabel';
import { ContentListImage } from './ContentListImage';
import { ContentListBody } from './ContentListBody';
import { ContentListTitle, type ContentListTitleProps } from './ContentListTitle';
import { ContentListExcerpt } from './ContentListExcerpt';
import { Main } from '../Main/Main';
import { Container } from '../Container/Container';
import { GridGroup } from '../GridGroup/GridGroup';
import { HeroHeader } from '../HeroHeader/HeroHeader';
import { PostData } from '../../data/PostData';
import { maxWidthClasses } from '../../utils/propClasses';

// The Playground story's part args. Storybook passes a story's args to its one `component`, so
// each part's props are story-level args here and the Playground render hands them to the parts.
// Each has the part's prop name as its display `name`, which Docs.mdx's ControlTabs filters on, so
// those names must stay unique; `category` groups them by part in the canvas Controls panel.
type PlaygroundArgs = ContentListProps & {
    indexVariant?: ContentListIndexProps['variant'];
    metaAlign?: ContentListMetaProps['align'];
    showMeta?: boolean;
    labelColor?: ContentListLabelProps['color'];
    showImage?: boolean;
    titleLevel?: ContentListTitleProps['level'];
    showExcerpt?: boolean;
};

const meta: Meta<PlaygroundArgs> = {
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
            options: ['light', 'light-subtle', 'dark', 'dark-subtle'],
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
type Story = StoryObj<PlaygroundArgs>;

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

export const Playground: Story = {
    args: {
        maxWidth: 'alignwide',
        indexVariant: 'muted',
        metaAlign: 'end',
        showMeta: true,
        labelColor: 'accent',
        showImage: false,
        titleLevel: 3,
        showExcerpt: true,
    },
    argTypes: {
        indexVariant: {
            name: 'variant',
            description: '`variant` on each ContentListIndex',
            control: 'inline-radio',
            options: ['muted', 'accent'],
            table: { category: 'ContentListIndex' },
        },
        metaAlign: {
            name: 'align',
            description: '`align` on each ContentListMeta',
            control: 'inline-radio',
            options: ['start', 'end'],
            table: { category: 'ContentListMeta' },
        },
        showMeta: {
            description: 'Adds or removes ContentListMeta in each row',
            control: 'boolean',
            table: { category: 'ContentListMeta' },
        },
        labelColor: {
            name: 'color',
            description: '`color` on each ContentListLabel',
            control: 'inline-radio',
            options: ['accent', 'muted'],
            table: { category: 'ContentListLabel' },
        },
        showImage: {
            description: 'Adds or removes ContentListImage in each row',
            control: 'boolean',
            table: { category: 'ContentListImage' },
        },
        titleLevel: {
            name: 'level',
            description: '`level` on each ContentListTitle',
            control: 'inline-radio',
            options: [2, 3, 4],
            table: { category: 'ContentListTitle' },
        },
        showExcerpt: {
            description: 'Adds or removes ContentListExcerpt in each row',
            control: 'boolean',
            table: { category: 'ContentListExcerpt' },
        },
    },
    render: (args) => (
        <ContentList
            as={args.as}
            size={args.size}
            backgroundHover={args.backgroundHover}
            maxWidth={args.maxWidth}
        >
            {PostData.map((post) => (
                <ContentListItem key={post.id}>
                    <ContentListIndex variant={args.indexVariant}>No. {post.id}</ContentListIndex>
                    {args.showImage && <ContentListImage src={post.image} alt="" />}
                    <ContentListLabel color={args.labelColor}>{post.category}</ContentListLabel>
                    <ContentListBody>
                        <ContentListTitle level={args.titleLevel} href={post.href}>
                            {post.title}
                        </ContentListTitle>
                        {args.showExcerpt && (
                            <ContentListExcerpt>{post.excerpt}</ContentListExcerpt>
                        )}
                    </ContentListBody>
                    {args.showMeta && (
                        <ContentListMeta align={args.metaAlign}>
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                        </ContentListMeta>
                    )}
                </ContentListItem>
            ))}
        </ContentList>
    ),
};

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
        backgroundHover: 'dark-subtle',
        children: defaultRows,
    },
};

export const InDarkContainer: Story = {
    args: {
        backgroundHover: 'light-subtle',
        children: defaultRows,
    },
    render: (args) => (
        <Container color="dark" maxWidth="alignfull" contentWidth="alignwide">
            <ContentList {...args} />
        </Container>
    ),
};
