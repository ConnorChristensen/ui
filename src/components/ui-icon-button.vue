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
    computed: {
        cssClasses() {
            const enabledClasses =
                'text-blue-2 hover:text-blue-1 cursor-pointer';
            const disabledClasses = 'text-light-1 cursor-default';
            return `leading-6 inline-flex whitespace-no-wrap border-solid rounded-sm align-middle text-center items-center justify-center focus:outline-none ${
                this.disabled ? disabledClasses : enabledClasses
            } `;
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
