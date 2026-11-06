import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '../Container/Container';
import { Quote } from './Quote';

const meta: Meta<typeof Quote> = {
    title: 'Components/Content/Quote',
    component: Quote,
    tags: ['!autodocs'],
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Default: Story = {
    args: {
        prefix: 'From the readme',
        children:
            'I write code the way I write prose — short sentences, few adjectives, and the door always open for someone else to walk through later.',
        cite: 'From /readme',
    },
};

export const QuoteOnly: Story = {
    args: {
        children:
            'I write code the way I write prose — short sentences, few adjectives, and the door always open for someone else to walk through later.',
    },
};

export const InDarkContainer: Story = {
    args: {
        prefix: 'From the readme',
        children:
            'I write code the way I write prose — short sentences, few adjectives, and the door always open for someone else to walk through later.',
        cite: 'From /readme',
    },
    render: (args) => (
        <Container color="dark" maxWidth="alignfull" contentWidth="alignwide">
            <Quote {...args} />
        </Container>
    ),
};
