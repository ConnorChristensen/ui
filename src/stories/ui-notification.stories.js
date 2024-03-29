import UiNotification from '@/components/ui-notification.vue';
import { Close as IconClose } from '@funda/icons/lib/vue';

export default {
    title: 'Visual/Notification',
    component: UiNotification,
    argTypes: {
        notificationText: {
            control: {
                type: 'text',
            },
        },
        type: {
            control: {
                type: 'select',
                options: ['information', 'error', 'success', 'warning'],
            },
        },
        rounded: {
            control: {
                options: [true, false],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiNotification, IconClose },
    template: `<ui-notification v-bind="$props">
            <template v-slot:notificationBody>
                <p class="m-0 flex-auto">{{ notificationText }}</p>

                <button
                    type="button"
                    class="leading-6 rounded-sm inline-flex text-center items-center justify-center align-middle cursor-pointer whitespace-no-wrap ml-3 bg-transparent border-none p-0 h-auto border-0 text-dark-2"
                    aria-label="Close"
                >
                    <span aria-hidden="true">
                        <icon-close />
                    </span>
                </button>
            </template>

        </ui-notification>`,
});

export const Notification = Template.bind({});
Notification.args = {
    type: 'success',
    notificationText: 'Lorem ipsum dolor sit amet.',
};
