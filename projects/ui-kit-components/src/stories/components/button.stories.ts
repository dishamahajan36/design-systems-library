import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../../lib/button/button.component'; 

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],

  decorators: [], 

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'loading'],
      description: "Defines the button's visual style based on its intended action.",
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: "Defines the button's size (small, medium, large).",
    },
    disabled: {
      control: 'boolean',
      description: 'When true, the button will be non-interactive and appears visually disabled.',
    },
    loading: {
      control: 'boolean',
      description: 'When true, the button will display a loading indicator.',
    },
  },
  args: {
    size: 'md',
    disabled: false,
    loading: false,
  },
};

export default meta; 
type Story = StoryObj<ButtonComponent>;

// --- Individual Stories ---

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `<lib-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading">Primary Button</lib-button>`,
  }),
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  render: (args) => ({
    props: args,
    template: `<lib-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading">Secondary Button</lib-button>`,
  }),
  args: { variant: 'secondary' },
};

export const Success: Story = {
  render: (args) => ({
    props: args,
    template: `<lib-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading">Success Button</lib-button>`,
  }),
  args: { variant: 'success' },
};

export const Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `<lib-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading">Disabled Button</lib-button>`,
  }),
  args: { disabled: true },
};

export const Loading: Story = {
  render: (args) => ({
    props: args,
    template: `<lib-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading">Loading Button</lib-button>`,
  }),
  args: { loading: true },
};

export const SmallButton: Story = {
  render: (args) => ({
    props: args,
    template: `<lib-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading">Small Button</lib-button>`,
  }),
  args: { size: 'sm' },
};

export const LargeButton: Story = {
  render: (args) => ({
    props: args,
    template: `<lib-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading">Large Button</lib-button>`,
  }),
  args: { size: 'lg' },
};

// --- Story to show multiple variants and sizes for comprehensive comparison ---
export const AllVariantsAndSizes: Story = {
  render: () => ({
    template: `
        <style>
            /* Local styles for this specific story to arrange buttons in a grid */
            .button-grid {
                display: grid;
                grid-template-columns: repeat(4, auto); /* 4 columns: Variant label, then sm, md, lg buttons */
                gap: var(--space-md) var(--space-lg); /* Uses your semantic spacing tokens */
                align-items: center;
                padding: var(--space-lg); /* Padding around the grid */
                background-color: var(--color-surface-alt); /* Uses a semantic color token */
                border-radius: var(--border-radius-md); /* Uses a semantic border radius token */
            }
            .button-grid h4 {
                margin: 0;
                padding: 0;
                text-align: right;
                padding-right: var(--space-md);
                font-weight: var(--font-weight-semibold); /* Uses a semantic font weight token */
                color: var(--color-text-default); /* Uses a semantic text color token */
            }
        </style>
        <div class="button-grid">
            <h4>Primary</h4>
            <lib-button variant="primary" size="sm">Primary Small</lib-button>
            <lib-button variant="primary" size="md">Primary Medium</lib-button>
            <lib-button variant="primary" size="lg">Primary Large</lib-button>

            <h4>Secondary</h4>
            <lib-button variant="secondary" size="sm">Secondary Small</lib-button>
            <lib-button variant="secondary" size="md">Secondary Medium</lib-button>
            <lib-button variant="secondary" size="lg">Secondary Large</lib-button>

            <h4>Success</h4>
            <lib-button variant="success" size="sm">Success Small</lib-button>
            <lib-button variant="success" size="md">Success Medium</lib-button>
            <lib-button variant="success" size="lg">Success Large</lib-button>

            <h4>Loading</h4>
            <lib-button variant="primary" size="md" [loading]="true">Loading</lib-button>
            <lib-button variant="details" size="md" [loading]="true">Loading Details</lib-button>
        </div>
    `,
    props: {}
  }),
  parameters: {
    controls: { hideNoControlsWarning: true, exclude: ['variant', 'size', 'disabled'] },
  },
};

// --- Story demonstrating content projection with an icon ---
export const CustomContent: Story = {
  render: (args) => ({
    props: args,
    template: `
      <lib-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <span>Button with Icon</span>
      </lib-button>
    `,
  }),
  args: {
    variant: 'secondary',
    size: 'md',
  },
};
