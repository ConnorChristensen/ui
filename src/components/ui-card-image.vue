<template>
    <ui-card :variant="variant">
        <template #image>
            <img
                v-if="smallImage"
                class="block px-0 md:px-4 pt-0 md:pt-4 w-full md:w-auto rounded-t-sm md:rounded-none m-auto max-w-sm"
                v-bind="$attrs"
                loading="lazy"
            />
            <div
                v-else
                class="overflow-hidden relative h-0 pt-40 md:rounded-t-sm"
            >
                <img
                    class="absolute block w-full h-full top-0 left-0 object-cover"
                    v-bind="$attrs"
                    loading="lazy"
                />
            </div>
        </template>
        <div class="md:text-center">
            <slot />
        </div>
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
        smallImage: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
