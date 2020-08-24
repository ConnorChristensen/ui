import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import UiButton from '@/components/ui-button.vue';

const actionsData = {
    onClick: action('onClick'),
};

const buttonData = {};

const buttonTemplate = `<ui-button :button="button" @handleClick="onClick">Default Button</ui-button>`;

storiesOf('Components/Button', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: { UiButton },
        template: buttonTemplate,
        props: {
            button: {
              default: () => buttonData,
            },
        },
        methods: actionsData
    }))
    .add('primary', () => ({
        components: { UiButton },
        template: buttonTemplate,
        props: {
            button: {
              default: () => ({
                  ...buttonData,
                  type: 'btn--primary',
                  label: 'Primary Button'
              })
            },
        },
        methods: actionsData
    }))
    .add('secondary', () => ({
        components: { UiButton },
        template: buttonTemplate,
        props: {
            button: {
              default: () => ({
                  ...buttonData,
                  type: 'btn--secondary',
                  label: 'Secondary Button'
              })
            },
        },
        methods: actionsData
    }));
