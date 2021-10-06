<template>
    <div
        class="bg-blue-5 inline-flex justify-center items-center border border-blue-2 py-2 px-4 margin-auto cursor-default rounded-sm select-none"
        :title="description"
    >
        <slot />
        <button
            v-if="!disabled"
            class="ml-2 text-blue-2 hover:text-blue-0"
            aria-label="Close"
            @click="$emit('delete')"
        >
            <IconClose />
        </button>
    </div>
</template>

<script>
import { Close as IconClose } from '@funda/icons/lib/vue';

export default {
    components: {
        IconClose,
    },
    props: {
        description: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
