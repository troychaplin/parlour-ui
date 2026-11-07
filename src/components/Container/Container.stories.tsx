import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { Container } from './Container';
import { MultiParagraph, SingleParagraph } from '../../data/SampleContent';
import {
    backgroundColorClasses,
    borderRadiusClasses,
    maxWidthClasses,
} from '../../utils/propClasses';

const colorOptions = Object.keys(backgroundColorClasses) as (keyof typeof backgroundColorClasses)[];
const borderOptions = ['none', 'top', 'bottom', 'both', 'all'] as const;
const widthOptions = Object.keys(maxWidthClasses);

const meta: Meta<typeof Container> = {
    title: 'Components/Layout/Container',
    component: Container,
    tags: ['!autodocs'],
    argTypes: {
        as: {
            control: 'select',
            options: ['div', 'section', 'header', 'main', 'footer', 'article', 'nav', 'aside'],
        },
        maxWidth: {
            control: 'select',
            options: widthOptions,
        },
        contentWidth: {
            control: 'select',
            options: widthOptions,
        },
        color: {
            control: 'select',
            options: colorOptions,
        },
        border: {
            control: 'inline-radio',
            options: borderOptions,
        },
        borderRadius: {
            control: 'select',
            options: Object.keys(borderRadiusClasses),
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
type Story = StoryObj<typeof Container>;

export const Default: Story = {
    args: {
        color: 'light',
        border: 'all',
        maxWidth: 'alignwide',
    },
    render: (args) => (
        <Main>
            <Container {...args}>
                <MultiParagraph count={2} />
            </Container>
        </Main>
    ),
};

export const Colors: Story = {
    render: () => (
        <Main hasPadding={false}>
            {colorOptions.map((color) => (
                <Container key={color} color={color} maxWidth="alignfull" contentWidth="alignwide">
                    <p>color=&quot;{color}&quot;</p>
                    <SingleParagraph />
                </Container>
            ))}
        </Main>
    ),
};

export const Borders: Story = {
    render: () => (
        <Main>
            {borderOptions.map((border) => (
                <Container key={border} color="pale" border={border} maxWidth="alignwide">
                    <p>border=&quot;{border}&quot;</p>
                </Container>
            ))}
        </Main>
    ),
};

export const BordersFullWidth: Story = {
    render: () => (
        <Main hasPadding={false}>
            <Container color="dark" maxWidth="alignfull" contentWidth="alignwide">
                <p>color=&quot;dark&quot; — no border by default</p>
            </Container>
            <Container color="dark" border="top" maxWidth="alignfull" contentWidth="alignwide">
                <p>border=&quot;top&quot;</p>
            </Container>
            <Container color="medium" border="both" maxWidth="alignfull" contentWidth="alignwide">
                <p>color=&quot;medium&quot; border=&quot;both&quot;</p>
            </Container>
            <Container color="white" border="all" maxWidth="alignfull" contentWidth="alignwide">
                <p>
                    color=&quot;white&quot; border=&quot;all&quot; — top and bottom only at full
                    width
                </p>
            </Container>
        </Main>
    ),
};

export const Stacked: Story = {
    render: () => (
        <Main hasPadding={false}>
            <Container color="light" border="both" maxWidth="alignfull" contentWidth="alignwide">
                <SingleParagraph />
            </Container>
            <Container color="light" border="both" maxWidth="alignfull" contentWidth="alignwide">
                <SingleParagraph />
            </Container>
            <Container color="pale" border="bottom" maxWidth="alignfull" contentWidth="alignwide">
                <SingleParagraph />
            </Container>
            <Container color="pale" maxWidth="alignfull" contentWidth="alignwide">
                <SingleParagraph />
            </Container>
        </Main>
    ),
};

export const Wide: Story = {
    args: {
        maxWidth: 'alignwide',
    },
    render: (args) => (
        <Main>
            <Container {...args}>
                <MultiParagraph count={2} />
            </Container>
        </Main>
    ),
};

export const FullWidthConstrained: Story = {
    args: {
        color: 'pale',
        maxWidth: 'alignfull',
        contentWidth: 'aligncontent',
    },
    render: (args) => (
        <Main hasPadding={false}>
            <Container {...args}>
                <MultiParagraph count={2} />
            </Container>
        </Main>
    ),
};
