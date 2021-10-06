import UiTag from '@/components/ui-tag.vue';

export default {
    title: 'Visual/Tag',
    component: UiTag,
    argType: {
        text: {
            type: String,
        },
    },
};

const Template = (_, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
        UiTag,
    },
    template: '<UiTag v-bind="$props">{{text}}</UiTag>',
});

export const Tag = Template.bind({});
Tag.args = {
    text: 'Amsterdam',
    description: '',
    disabled: false,
};
