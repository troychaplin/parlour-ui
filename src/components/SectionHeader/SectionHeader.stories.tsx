import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from './SectionHeader';
import { Main } from '../Main/Main';
import { Container } from '../Container/Container';
import { maxWidthClasses } from '../../utils/propClasses';

const sizeOptions = ['small', 'medium', 'large', 'x-large'] as const;
const dividerOptions = [0, 1, 2, 3, 4] as const;
const widthOptions = Object.keys(maxWidthClasses) as (keyof typeof maxWidthClasses)[];

const meta: Meta<typeof SectionHeader> = {
    title: 'Components/Headers/Section Header',
    component: SectionHeader,
    tags: ['!autodocs'],
    decorators: [
        (Story) => (
            <Main>
                <Story />
            </Main>
        ),
    ],
    argTypes: {
        level: {
            control: 'inline-radio',
            options: [1, 2, 3, 4],
        },
        size: {
            control: 'inline-radio',
            options: sizeOptions,
        },
        divider: {
            control: 'inline-radio',
            options: dividerOptions,
        },
        maxWidth: {
            control: 'select',
            options: widthOptions,
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
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
    args: {
        prefix: 'Releases · Open source',
        title: 'Things I ship.',
    },
};

export const WithDescription: Story = {
    args: {
        level: 1,
        size: 'x-large',
        divider: 0,
        prefix: '// Writing · WordPress · theme.json',
        title: 'Block-based theme.json: a sane way to organize tokens at scale.',
        description: (
            <>
                After three years of rewriting <code>theme.json</code> from scratch on every
                project, I finally settled on a folder structure and merge strategy that survives
                the next core update — and the one after that.
            </>
        ),
    },
};

export const TitleOnly: Story = {
    args: {
        title: 'Things I ship.',
    },
};

export const Sizes: Story = {
    render: () => (
        <div>
            {sizeOptions.map((size) => (
                <SectionHeader
                    key={size}
                    size={size}
                    prefix={`size="${size}"`}
                    title="Things I ship."
                    description="Plugins, block themes and the small tools I keep coming back to."
                />
            ))}
        </div>
    ),
};

export const Dividers: Story = {
    render: () => (
        <div>
            {dividerOptions.map((divider) => (
                <SectionHeader
                    key={divider}
                    divider={divider}
                    prefix={`divider={${divider}}`}
                    title="Things I ship."
                />
            ))}
        </div>
    ),
};

export const MaxWidths: Story = {
    render: () => (
        <>
            {widthOptions.map((maxWidth) => (
                <SectionHeader
                    key={maxWidth}
                    maxWidth={maxWidth}
                    prefix={`maxWidth="${maxWidth}"`}
                    title="Things I ship."
                />
            ))}
        </>
    ),
};

export const InLightContainer: Story = {
    args: {
        prefix: 'Releases · Open source',
        title: 'Things I ship.',
    },
    render: (args) => (
        <Container color="light" maxWidth="alignfull" contentWidth="alignwide">
            <SectionHeader {...args} />
        </Container>
    ),
};

export const InMediumContainer: Story = {
    args: {
        prefix: 'Releases · Open source',
        title: 'Things I ship.',
    },
    render: (args) => (
        <Container color="medium" maxWidth="alignfull" contentWidth="alignwide">
            <SectionHeader {...args} />
        </Container>
    ),
};

export const InDarkContainer: Story = {
    args: {
        prefix: 'Releases · Open source',
        title: 'Things I ship.',
        description: (
            <>
                Plugins, block themes and the small tools I keep coming back to, most built on{' '}
                <code>theme.json</code>.
            </>
        ),
    },
    render: (args) => (
        <Container color="dark" maxWidth="alignfull" contentWidth="alignwide">
            <SectionHeader {...args} />
        </Container>
    ),
};
