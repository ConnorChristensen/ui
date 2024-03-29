import UiBadge from '@/components/ui-badge.vue';

export default {
    title: 'Visual/Badge',
    component: UiBadge,
};

const Template = () => ({
    components: { UiBadge },
    template: `
        <ui-badge>
            Badge
        </ui-badge>`,
});

export const Badge = Template.bind({});
Badge.parameters = {
    a11y: {
        config: {
            rules: [{ id: 'color-contrast', enabled: false }],
        },
    },
};
