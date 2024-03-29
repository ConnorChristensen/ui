import UiButton from '@/components/ui-button.vue';

export default {
    title: 'Forms/Button',
    component: UiButton,
    argTypes: {
        tone: {
            control: {
                type: 'select',
                options: [
                    'primary',
                    'primary-alt',
                    'secondary',
                    'secondary-alt',
                    'tertiary',
                    'transparent',
                    'danger',
                ],
            },
        },
        disabled: {
            control: {
                options: [true, false],
            },
        },
        small: {
            control: {
                options: [true, false],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiButton },
    template: `<div class="bg-blue-5 p-4">
            <ui-button :tone="tone" @click="onClick" :disabled="disabled" :small="small" class="mr-8">Button</ui-button>
            <ui-button href="#" :tone="tone" :disabled="disabled" :small="small" class="mr-8">Link</ui-button>
            <ui-button href="#" :tone="tone" disabled :small="small">Disabled</ui-button>
        </div>`,
});

export const Button = Template.bind({});
Button.args = {
    tone: 'primary',
    disabled: false,
    onClick() {},
};
Button.parameters = {
    a11y: {
        config: {
            rules: [{ id: 'color-contrast', enabled: false }],
        },
    },
};
