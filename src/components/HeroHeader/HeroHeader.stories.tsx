import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeroHeader } from './HeroHeader';
import { Main } from '../Main/Main';
import { Container } from '../Container/Container';
import { GridGroup } from '../GridGroup/GridGroup';
import { SingleParagraph } from '../../data/SampleContent';

const stats = (
    <ul className="parlour-hero-header__stats">
        <li>7 released plugins</li>
        <li>5 experimental projects</li>
        <li>3 active contributions</li>
    </ul>
);

const sizeOptions = ['small', 'medium', 'large'] as const;
const prefixStyleOptions = ['italic', 'mono'] as const;

const meta: Meta<typeof HeroHeader> = {
    title: 'Components/Headers/Hero Header',
    component: HeroHeader,
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
        level: {
            control: 'inline-radio',
            options: [1, 2, 3],
        },
        size: {
            control: 'inline-radio',
            options: sizeOptions,
        },
        prefixStyle: {
            control: 'inline-radio',
            options: prefixStyleOptions,
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
type Story = StoryObj<typeof HeroHeader>;

export const Default: Story = {
    args: {
        prefix: 'Section Prefix',
        title: 'Section Title',
        titleAccent: 'Highlight',
        children: stats,
    },
};

export const TitleOnly: Story = {
    args: {
        title: 'Section Title',
    },
};

export const WithParagraph: Story = {
    args: {
        prefix: 'Section Prefix',
        title: 'Section Title',
        children: <SingleParagraph />,
    },
};

export const PrefixStyles: Story = {
    render: () => (
        <>
            {prefixStyleOptions.map((prefixStyle) => (
                <>
                    <HeroHeader
                        key={prefixStyle}
                        prefixStyle={prefixStyle}
                        size="medium"
                        level={2}
                        prefix={`prefixStyle="${prefixStyle}"`}
                        title="Section Title"
                        titleAccent="Highlight"
                    />
                    <br />
                </>
            ))}
        </>
    ),
};

export const Sizes: Story = {
    render: () => (
        <>
            {sizeOptions.map((size) => (
                <>
                    <HeroHeader
                        key={size}
                        size={size}
                        level={2}
                        prefix={`size="${size}"`}
                        title="Section Title"
                        titleAccent="Highlight"
                    />
                    <br />
                </>
            ))}
        </>
    ),
};

export const SmallInColumn: Story = {
    render: () => (
        <GridGroup columns={2} gap="4-x-large" maxWidth="alignwide">
            <HeroHeader
                size="small"
                level={2}
                prefix="// Latest writing"
                prefixStyle="mono"
                title="From the"
                titleAccent="front of the editor."
            >
                <SingleParagraph />
            </HeroHeader>
            <SingleParagraph index={1} />
        </GridGroup>
    ),
};

export const InLightContainer: Story = {
    args: {
        prefix: 'Section Prefix',
        title: 'Section Title',
        titleAccent: 'Highlight',
        children: stats,
    },
    render: (args) => (
        <Container color="light" maxWidth="alignfull" contentWidth="alignwide">
            <HeroHeader {...args} />
        </Container>
    ),
};

export const InMediumContainer: Story = {
    args: {
        prefix: 'Section Prefix',
        title: 'Section Title',
        titleAccent: 'Highlight',
        children: stats,
    },
    render: (args) => (
        <Container color="medium" maxWidth="alignfull" contentWidth="alignwide">
            <HeroHeader {...args} />
        </Container>
    ),
};

export const InDarkContainer: Story = {
    args: {
        prefix: 'Section Prefix',
        title: 'Section Title',
        titleAccent: 'Highlight',
        children: stats,
    },
    render: (args) => (
        <Container color="dark" maxWidth="alignfull" contentWidth="alignwide">
            <HeroHeader {...args} />
        </Container>
    ),
};
