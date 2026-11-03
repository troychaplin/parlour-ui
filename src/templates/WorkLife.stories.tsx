import type { Meta, StoryObj } from '@storybook/react-vite';

import { Main } from '../components/Main/Main';
import { Container } from '../components/Container/Container';
import { SkipLink } from '../components/SkipLink';
import { ExperimentsData } from '../data/ExperimentsData';
import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { SiteFooter } from '../components/SiteFooter/SiteFooter';
import { SiteHeader } from '../components/SiteHeader/SiteHeader';
import { InfoBar } from '../components/InfoBar/InfoBar';
import { HeroHeader } from '../components/HeroHeader/HeroHeader';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import { GridGroup } from '../components/GridGroup/GridGroup';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { ProjectData } from '../data/ProjectData';

const meta: Meta = {
    title: 'Overview/Templates',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

export const WorkLife: Story = {
    parameters: {
        a11y: {
            config: {
                rules: [{ id: 'color-contrast', enabled: false }],
            },
        },
    },
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
                        prefix="Skills and experience."
                        title="Nineteen years of"
                        titleAccent="building for the web"
                    >
                        <ul className="parlour-hero-header__stats">
                            <li>7 released plugins</li>
                            <li>5 experimental projects</li>
                            <li>3 active contributions</li>
                        </ul>
                    </HeroHeader>
                </Container>

                <Container color="light" maxWidth="alignfull" contentWidth="alignwide">
                    <SectionHeader prefix="Releases · Open source" title="Things I ship." />
                    <GridGroup>
                        {ProjectData.map(({ id, ...project }) => (
                            <ProjectCard key={id} {...project} />
                        ))}
                    </GridGroup>
                </Container>

                <Container color="dark" maxWidth="alignfull" contentWidth="alignwide">
                    <SectionHeader
                        prefix="Experiments · Open source"
                        title="Things I experiment with."
                    />
                    <GridGroup dividerColor="dark" dividers="columns" gap="2-x-large">
                        {ExperimentsData.map(({ id, ...experiment }) => (
                            <ProjectCard
                                key={id}
                                backgroundColor="dark"
                                border={false}
                                {...experiment}
                            />
                        ))}
                    </GridGroup>
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
