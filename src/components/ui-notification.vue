<template>
    <div :class="cssClasses" class="items-start flex p-3">
        <ui-icon-type :type="type" class="mr-3" />
        <slot name="notificationBody" />
    </div>
</template>

<script>
import UiIconType from './ui-icon-type.vue';

export default {
    components: { UiIconType },
    props: {
        type: {
            type: String,
            default: 'information',
            validator: (value) =>
                ['information', 'error', 'success', 'warning'].includes(value),
        },
        rounded: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        cssClasses() {
            const type = {
                information: 'bg-white',
                error: 'bg-red-2',
                success: 'bg-green-2',
                warning: 'bg-yellow-2',
            }[this.type];
            const rounded = this.rounded ? 'rounded' : '';
            return `${type} ${rounded}`;
        },
    },
};
</script>
