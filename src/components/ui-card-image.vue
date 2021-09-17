<template>
    <ui-card :variant="variant">
        <template #image>
            <div
                v-if="size === 'big'"
                class="overflow-hidden relative h-0 pt-40 md:rounded-t-sm"
            >
                <img
                    class="absolute block w-full h-full top-0 left-0 object-cover"
                    v-bind="$attrs"
                    loading="lazy"
                />
            </div>
            <img
                v-else
                class="block px-0 md:px-4 pt-0 md:pt-4 w-full md:w-auto rounded-t-sm md:rounded-none"
                v-bind="$attrs"
                loading="lazy"
            />
        </template>
        <slot />
    </ui-card>
</template>

<script>
import UiCard from './ui-card.vue';

export default {
    components: {
        UiCard,
    },
    inheritAttrs: false,
    props: {
        variant: {
            type: String,
            default: 'default',
        },
        size: {
            type: String,
            default: 'big',
        },
    },
};
</script>
