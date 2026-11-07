import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from './SectionHeader';
import { Main } from '../Main/Main';
import { Container } from '../Container/Container';

const sizeOptions = ['small', 'medium', 'large', 'x-large'] as const;
const dividerOptions = [0, 1, 2, 3, 4] as const;

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
    },
    render: (args) => (
        <Container color="dark" maxWidth="alignfull" contentWidth="alignwide">
            <SectionHeader {...args} />
        </Container>
    ),
};
