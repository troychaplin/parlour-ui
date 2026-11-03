import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonGroup, type ButtonGroupProps } from './ButtonGroup';
import { Button, type ButtonProps } from '../Button/Button';
import { borderRadiusClasses } from '../../utils/propClasses';

const alignOptions = ['start', 'center', 'end'] as const;

// The Playground story's Button args. Storybook passes a story's args to its one `component`, so
// the Buttons' props are story-level args here and the Playground render hands them to every
// Button. Each has the Button prop name as its display `name`, which Docs.mdx's ControlTabs
// filters on; `category` groups them in the canvas Controls panel.
type PlaygroundArgs = ButtonGroupProps & {
    buttonColor?: ButtonProps['color'];
    buttonRounded?: ButtonProps['rounded'];
    buttonIsSmall?: boolean;
    buttonIsOutline?: boolean;
    buttonDisabled?: boolean;
};

const buttonColors = [undefined, 'medium', 'light'] as const;

const meta: Meta<PlaygroundArgs> = {
    title: 'Components/Elements/Button Group',
    component: ButtonGroup,
    tags: ['!autodocs'],
    argTypes: {
        align: {
            control: 'inline-radio',
            options: alignOptions,
        },
    },
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
};

export default meta;
type Story = StoryObj<PlaygroundArgs>;

export const Playground: Story = {
    args: {
        buttonRounded: 'sm',
        buttonIsSmall: false,
        buttonIsOutline: false,
        buttonDisabled: false,
    },
    argTypes: {
        buttonColor: {
            name: 'color',
            description:
                '`color` on every Button. Leave it unset to keep each Button its own colour',
            control: 'select',
            options: ['light', 'medium', 'dark', 'white', 'link'],
            table: { category: 'Button' },
        },
        buttonRounded: {
            name: 'rounded',
            description: '`rounded` on every Button',
            control: 'select',
            options: Object.keys(borderRadiusClasses),
            table: { category: 'Button' },
        },
        buttonIsSmall: {
            name: 'isSmall',
            description: '`isSmall` on every Button',
            control: 'boolean',
            table: { category: 'Button' },
        },
        buttonIsOutline: {
            name: 'isOutline',
            description: '`isOutline` on every Button',
            control: 'boolean',
            table: { category: 'Button' },
        },
        buttonDisabled: {
            name: 'disabled',
            description: '`disabled` on every Button',
            control: 'boolean',
            table: { category: 'Button' },
        },
    },
    render: (args) => (
        <ButtonGroup align={args.align}>
            {['Dark', 'Neutral', 'Light'].map((text, i) => (
                <Button
                    key={text}
                    text={text}
                    color={args.buttonColor ?? buttonColors[i]}
                    rounded={args.buttonRounded}
                    isSmall={args.buttonIsSmall}
                    isOutline={args.buttonIsOutline}
                    disabled={args.buttonDisabled}
                />
            ))}
        </ButtonGroup>
    ),
};

export const Default: Story = {
    render: (args) => (
        <ButtonGroup {...args}>
            <Button text="Dark" />
            <Button text="Neutral" color="medium" />
            <Button text="Light" color="light" />
        </ButtonGroup>
    ),
};

export const Centered: Story = {
    args: {
        align: 'center',
    },
    render: (args) => (
        <ButtonGroup {...args}>
            <Button text="Dark" />
            <Button text="Neutral" color="medium" />
            <Button text="Light" color="light" />
        </ButtonGroup>
    ),
};

export const End: Story = {
    args: {
        align: 'end',
    },
    render: (args) => (
        <ButtonGroup {...args}>
            <Button text="Dark" />
            <Button text="Neutral" color="medium" />
            <Button text="Light" color="light" />
        </ButtonGroup>
    ),
};
