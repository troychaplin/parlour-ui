import type { Meta, StoryObj } from '@storybook/react-vite';

import { Main } from '../components/Main/Main';
import { Container } from '../components/Container/Container';
import { SkipLink } from '../components/SkipLink';
import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { SiteFooter } from '../components/SiteFooter/SiteFooter';
import { SiteHeader } from '../components/SiteHeader/SiteHeader';
import { InfoBar } from '../components/InfoBar/InfoBar';
import { HeroHeader } from '../components/HeroHeader/HeroHeader';
import {
    ContentList,
    ContentListItem,
    ContentListIndex,
    ContentListLabel,
    ContentListBody,
    ContentListTitle,
    ContentListExcerpt,
    ContentListMeta,
} from '../components/ContentList';
import { FlexGroup } from '../components/FlexGroup/FlexGroup';
import { Pagination } from '../components/Pagination/Pagination';
import { BlogPostData } from '../data/PostData';

const meta: Meta = {
    title: 'Overview/Templates',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

export const Post: Story = {
    render: () => (
        <>
            <SkipLink />
            <SiteHeader
                siteTitle="troychaplin.work"
                siteTitleAccent="troychaplin"
                navItems={[
                    { href: '/about', label: 'About' },
                    { href: '/blog', label: 'Blog' },
                    { href: '/resume', label: 'Resume' },
                ]}
            >
                <ButtonGroup>
                    <Button text="Sponsor Me" href="/sponsor" isSmall isOutline />
                </ButtonGroup>
            </SiteHeader>
            <InfoBar />

            <Main hasPadding={false}>
                <Container color="pale" maxWidth="alignfull" contentWidth="alignwide">
                    <HeroHeader
                        prefix="// Writing"
                        prefixStyle="mono"
                        title="Notes from the trenches."
                    >
                        <ul className="parlour-hero-header__stats">
                            <li>184 essays</li>
                            <li>2007 — 2026</li>
                        </ul>
                    </HeroHeader>
                </Container>

                <Container color="pale" maxWidth="alignfull" contentWidth="alignwide">
                    <FlexGroup direction="column" gap="2-x-large">
                        <ContentList backgroundHover="dark-subtle">
                            {BlogPostData.map((post) => (
                                <ContentListItem key={post.id}>
                                    <ContentListIndex>No. {post.id}</ContentListIndex>
                                    <ContentListLabel>{post.category}</ContentListLabel>
                                    <ContentListBody>
                                        <ContentListTitle href={post.href} level={2}>
                                            {post.title}
                                        </ContentListTitle>
                                        <ContentListExcerpt>{post.excerpt}</ContentListExcerpt>
                                    </ContentListBody>
                                    <ContentListMeta align="end">
                                        <span>{post.date}</span>
                                        <span>{post.readTime}</span>
                                    </ContentListMeta>
                                </ContentListItem>
                            ))}
                        </ContentList>
                        <Pagination
                            currentPage={1}
                            totalPages={21}
                            href="/blog/page/{page}"
                            firstPageHref="/blog"
                            align="end"
                            label="Blog pages"
                        />
                    </FlexGroup>
                </Container>
            </Main>

            <SiteFooter
                name="Troy Chaplin"
                nameHref="/"
                text={
                    <>
                        Powered by{' '}
                        <a href="https://troychaplin.github.io/parlour-ui/">Parlour UI</a>, a React
                        and WordPress framework
                    </>
                }
                github="https://github.com"
                wordpress="https://profiles.wordpress.org/areziaal"
                x="https://x.com"
                bluesky="https://bsky.app"
                linkedin="https://www.linkedin.com"
            />
        </>
    ),
};
