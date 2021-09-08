import UiInput from '@/components/ui-input.vue';

export default {
    title: 'Forms/Input',
    component: UiInput,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: [
                    'text',
                    'number',
                    'email',
                    'password',
                    'search',
                    'tel',
                    'url',
                ],
            },
        },
        prefixText: {
            control: {
                type: 'text',
            },
        },
        suffixText: {
            control: {
                type: 'text',
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiInput },
    template:
        '<ui-input @change="onChange" :type="type" :isValid="isValid" :placeholder="placeholder" :value="value" :disabled="disabled"/>',
});
export const Input = Template.bind({});
Input.args = {
    type: 'text',
    isValid: true,
    value: 'lorem ipsum sitamet doloris.',
    placeholder: 'placeholder',
    disabled: false,
    onChange() {},
};

const TemplatePrefixSuffix = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiInput },
    template: `
        <ui-input v-bind="$props">
            <template v-slot:prefix>
                <div class="text-light-1 py-2 pl-4">{{ prefixText }}</div>
            </template>
            <template v-slot:suffix>
                <div class="text-light-1 py-2 pr-4">{{ suffixText }}</div>
            </template>
        </ui-input>`,
});

export const InputExtras = TemplatePrefixSuffix.bind({});
InputExtras.args = {
    ...Input.args,
    prefixText: 'PF',
    suffixText: 'SF',
};
InputExtras.parameters = {
    a11y: {
        config: {
            rules: [{ id: 'color-contrast', enabled: false }],
        },
    },
};
