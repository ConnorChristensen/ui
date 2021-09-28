<template>
    <div
        class="group shadow relative rounded-sm bg-white border-solid border-l-4 flex p-4 pr-10 m-3"
        :class="[borderColorClass]"
    >
        <ui-icon-type :type="type" class="mr-3" />

        <div class="m-0 flex-auto overflow-hidden">
            <slot />
        </div>

        <ui-button
            tone="tertiary"
            aria-label="close"
            class="top-0 right-0 absolute px-2 opacity-0 group-hover:opacity-100 focus:outline-none active:outline-none hover:outline-none"
            @click="close"
        >
            <span class="w-6 h-6" aria-hidden="true">
                <icon-close />
            </span>
        </ui-button>
    </div>
</template>

<script>
import UiButton from './ui-button.vue';
import UiIconType from './ui-icon-type.vue';

export default {
    components: {
        UiButton,
        UiIconType,
    },
    props: {
        type: {
            type: String,
            default: 'information',
            validator: (value) =>
                ['information', 'error', 'success', 'warning'].includes(value),
        },
    },
    computed: {
        borderColorClass() {
            return {
                information: 'border-blue-2',
                error: 'border-red-1',
                success: 'border-green-1',
                warning: 'border-yellow-1',
            }[this.type];
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>
