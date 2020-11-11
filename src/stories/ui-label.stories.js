import UiLabel from '@/components/ui-label.vue';

export default {
    title: 'Forms/Label',
    component: UiLabel,
};

const Template = () => ({
    components: { UiLabel },
    template: '<ui-label>Label</ui-label>',
});

export const Label = Template.bind({});