import UiIconType from '@/components/ui-icon-type.vue';

export default {
    title: 'Visual/Icon Type',
    component: UiIconType,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['information', 'error', 'success', 'warning'],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiIconType },
    template: '<ui-icon-type v-bind="$props" />',
});

export const IconType = Template.bind({});
IconType.args = {
    type: 'success',
};
