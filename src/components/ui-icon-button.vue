<template>
    <a v-if="showLink" :href="href" :class="cssClasses">
        <slot />
    </a>
    <button v-else :class="cssClasses" :disabled="disabled" v-on="$listeners">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            enabledClasses: 'text-blue-2 hover:text-blue-1 cursor-pointer',
            disabledClasses: 'text-light-1 cursor-default',
        };
    },
    computed: {
        cssClasses() {
            return [this.disabled ? this.disabledClasses : this.enabledClasses];
        },
        showLink() {
            // if the button is disabled, we want to switch to showing a button
            // so the user can not click the disabled icon and still follow the
            // link.
            return this.href && this.href.length > 0 && !this.disabled;
        },
    },
};
</script>
