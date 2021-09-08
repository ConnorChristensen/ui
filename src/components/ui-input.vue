<template>
    <div
        class="relative rounded-sm border shadow-inner flex items-center overflow-hidden"
        :class="[backgroundColor, outlineColor]"
        @click="focusField"
    >
        <template v-if="hasPrefix">
            <slot name="prefix"></slot>
        </template>
        <input
            ref="field"
            class="py-2 px-4 outline-none text-base font-normal h-11 flex-grow bg-transparent"
            v-bind="$attrs"
            @focus="isFocused = true"
            @blur="isFocused = false"
            v-on="inputListeners"
        />
        <template v-if="hasSuffix">
            <slot name="suffix"></slot>
        </template>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        isValid: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            isFocused: false,
        };
    },
    computed: {
        inputListeners() {
            var vm = this;
            return Object.assign({}, this.$listeners, {
                input(event) {
                    vm.$emit('input', event.target.value);
                },
            });
        },
        hasPrefix() {
            return Boolean(this.$slots['prefix']);
        },
        hasSuffix() {
            return Boolean(this.$slots['suffix']);
        },
        backgroundColor() {
            if (this.$attrs.disabled) {
                return 'bg-light-3';
            }
            return 'bg-white';
        },
        outlineColor() {
            if (!this.isValid) {
                return 'border-red-1';
            }
            return this.isFocused ? 'border-dark-3' : 'border-light-1';
        },
    },
    methods: {
        focusField() {
            // If the user clicks anywhere within the containing div, we want to
            // redirect focus to the input field inside the div, which makes it
            // feel like the prefix and suffix are located within the input
            // fields. There is, however, no need to manually handle focus
            // if the only thing in the div is the input
            if (this.hasPrefix || this.hasSuffix) {
                this.$refs.field.focus();
            }
        },
    },
};
</script>
