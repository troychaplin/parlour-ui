import type { Meta, StoryObj } from '@storybook/react-vite';

import { Main } from '../components/Main/Main';
import { Container } from '../components/Container/Container';
import { SkipLink } from '../components/SkipLink';
import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { SiteFooter } from '../components/SiteFooter/SiteFooter';
import { SiteHeader } from '../components/SiteHeader/SiteHeader';
import { InfoBar } from '../components/InfoBar/InfoBar';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import { PostMeta } from '../components/PostMeta/PostMeta';
import { Figure } from '../components/Figure/Figure';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';
import { Quote } from '../components/Quote/Quote';
import { CodeDataThemeJson } from '../data/CodeData';
// import {
//     ContentList,
//     ContentListItem,
//     ContentListIndex,
//     ContentListLabel,
//     ContentListBody,
//     ContentListTitle,
//     ContentListExcerpt,
//     ContentListMeta,
// } from '../components/ContentList';
// import { FlexGroup } from '../components/FlexGroup/FlexGroup';
// import { Pagination } from '../components/Pagination/Pagination';
// import { BlogPostData } from '../data/PostData';

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

            <Main hasPadding={true}>
                <SectionHeader
                    level={1}
                    prefix="// Writing · WordPress · theme.json"
                    title="Block-based theme.json: a sane way to organize tokens at scale."
                    size="x-large"
                    divider={0}
                    maxWidth="aligncontent"
                    description={
                        <>
                            After three years of rewriting <code>theme.json</code> from scratch on
                            every project, I finally settled on a folder structure and merge
                            strategy that survives the next core update — and the one after that.
                        </>
                    }
                />
                <PostMeta
                    avatar="https://picsum.photos/seed/author/112/112"
                    details="Developer · Ottawa"
                    name="Troy Chaplin"
                    published="2026-04-21"
                    updated="2026-04-24"
                />
                <Figure maxWidth="alignwide" align="none" size="full">
                    <img
                        alt="Landscape with trees and mountains"
                        height="600"
                        src="https://picsum.photos/id/15/1200/600"
                        width="1200"
                    />
                </Figure>

                <p>
                    Every block theme I&apos;ve shipped started the same way: an empty{' '}
                    <code>theme.json</code>, a copy of the last project&apos;s file open in another
                    tab, and an afternoon spent deciding which of its settings still made sense. By
                    the third or fourth theme the file was over a thousand lines long and nobody,
                    including me, could say why half of it was there.
                </p>
                <p>
                    The fix wasn&apos;t a cleverer schema. It was treating <code>theme.json</code>{' '}
                    as a build output rather than a file you edit by hand.
                </p>

                <h2>Split it by concern</h2>
                <p>
                    Tokens, element styles and block styles change for different reasons and at
                    different speeds, so they live in different files. A small build step merges
                    them, in a fixed order, into the <code>theme.json</code> WordPress reads.
                </p>
                <ul>
                    <li>
                        <strong>Tokens</strong> — colours, spacing, type scale. These change rarely
                        and come from the design system.
                    </li>
                    <li>
                        <strong>Elements</strong> — links, headings, buttons. Set once per theme.
                    </li>
                    <li>
                        <strong>Blocks</strong> — one small file per core block that needs styling,
                        so a change to buttons never touches the cover block.
                    </li>
                </ul>

                <CodeBlock code={CodeDataThemeJson} color="light" borderRadius="sm" />

                <h2>Let the merge decide, not the editor</h2>
                <p>
                    The order matters more than the structure. Tokens merge first, elements second
                    and blocks last, so a block file can always override an element style but never
                    redefine a token. When core adds a new setting, it goes in one place and every
                    theme built from the same tokens picks it up.
                </p>

                <Container color="white" maxWidth="alignfull" contentWidth="aligncontent">
                    <Quote
                        prefix="The rule I keep coming back to"
                        cite="Me, after the fourth rewrite"
                    >
                        If you can&apos;t say which file a setting came from, it shouldn&apos;t be
                        in the output.
                    </Quote>
                </Container>

                <h2>What survives a core update</h2>
                <p>
                    Since moving to this setup I&apos;ve upgraded through two major WordPress
                    releases without touching a single theme&apos;s styles. The schema version
                    changed, the merge script changed in one line, and the generated file changed
                    everywhere — which is exactly where I want the churn to be.
                </p>
                <p>
                    The next post walks through the merge script itself, including how it handles
                    style variations without duplicating the token layer.
                </p>
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
