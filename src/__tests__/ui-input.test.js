import { mount } from '@vue/test-utils';
import UiInput from '@/components/ui-input.vue';

const SLOT_PREFIX = '€';
const SLOT_SUFFIX = 'icon';

describe('UiInput', () => {
    let wrapper, input;
    beforeEach(() => {
        const div = document.createElement('div');
        div.id = 'root';
        document.body.appendChild(div);

        wrapper = mount(UiInput, {
            slots: {
                prefix: SLOT_PREFIX,
                suffix: SLOT_SUFFIX,
            },
            attachTo: '#root',
        });
        input = wrapper.find('input');
    });

    it('Should set border classes when isValid is set', async () => {
        await wrapper.setProps({ isValid: false });
        expect(wrapper.vm.isValid).toBe(false);
        expect(wrapper.classes()).toContain('border-red-1');

        await wrapper.setProps({ isValid: true });
        expect(wrapper.vm.isValid).toBe(true);
        expect(wrapper.classes()).toContain('border-light-1');
    });

    it('Should set border classes when is focused', async () => {
        await input.trigger('focus');
        expect(wrapper.classes()).toContain('border-dark-3');

        await input.trigger('blur');
        expect(wrapper.classes()).toContain('border-light-1');
    });

    it('Should render slot when slot is set', () => {
        expect(wrapper.text()).toContain(SLOT_PREFIX);
        expect(wrapper.text()).toContain(SLOT_SUFFIX);
    });

    it('Should emit input event with value', () => {
        const value = 'test-emit-event';
        input.setValue(value);
        expect(wrapper.emitted().input[0]).toEqual([value]);
    });
});
