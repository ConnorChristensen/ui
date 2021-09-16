import { Trash as IconTrash } from '@funda/icons/lib/vue';
import UiIconButton from '@/components/ui-icon-button.vue';

export default {
    title: 'Forms/Button/Icon',
    component: UiIconButton,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiIconButton, IconTrash },
    template: `
        <UiIconButton v-bind="$props">
            <IconTrash />
        </UiIconButton>`,
});
export const Default = Template.bind({});
Default.args = {
    href: '',
    disabled: false,
};
