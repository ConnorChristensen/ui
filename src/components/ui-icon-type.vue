<template>
    <span :aria-label="type">
        <icon-info
            v-if="type === 'information'"
            class="text-blue-2"
            aria-label="information"
        />

        <icon-error
            v-if="type === 'error'"
            class="text-red-1"
            aria-label="information"
        />

        <icon-success
            v-if="type === 'success'"
            class="text-green-1"
            aria-label="success"
        />

        <icon-warning
            v-if="type === 'warning'"
            class="text-yellow-1"
            aria-label="warning"
        />
    </span>
</template>

<script>
import {
    Error as IconError,
    Warning as IconWarning,
    Success as IconSuccess,
    Info as IconInfo,
} from '@funda/icons/lib/vue';

export default {
    components: { IconError, IconWarning, IconSuccess, IconInfo },
    props: {
        type: {
            type: String,
            default: 'information',
            validator: (value) =>
                ['information', 'error', 'success', 'warning'].includes(value),
        },
    },
};
</script>
