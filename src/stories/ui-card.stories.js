import UiCard from '@/components/ui-card.vue';
import UiCardImage from '@/components/ui-card-image.vue';
import UiCardTitle from '@/components/ui-card-title.vue';
import UiNotification from '@/components/ui-notification.vue';

export default {
    title: 'Layout/Card',
    component: UiCard,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['default', 'elevated'],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiCard },
    template: ` <ui-card :variant="variant">
                    Card content
                </ui-card>`,
});
export const Card = Template.bind({});

const TemplateInside = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiCard, UiNotification },
    template: ` <ui-card :variant="variant">
                    <template v-slot:title>
                        Card title inside
                    </template>
                    Card content
                </ui-card>`,
});
export const CardTitleInside = TemplateInside.bind({});

const TemplateSubtitleOutside = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiCard, UiCardTitle },
    template: ` <div class="bg-light-2 p-4">
                    <ui-card-title>
                        <template v-slot:title>
                            Title title outside
                        </template>
                        <template v-slot:intro>
                            Subtitle
                        </template>
                    </ui-card-title>
                    <ui-card :variant="variant">
                        Card content
                    </ui-card>
                </div>`,
});
export const CardTitleSubtitleOutside = TemplateSubtitleOutside.bind({});

const TemplateOutside = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiCard, UiCardTitle },
    template: ` <div class="bg-light-2 p-4">
                    <ui-card-title>
                        <template v-slot:title>
                            Title title outside
                        </template>
                    </ui-card-title>
                    <ui-card :variant="variant">
                        Card content
                    </ui-card>
                </div>`,
});
export const CardTitleOutside = TemplateOutside.bind({});

const TemplateNotification = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiCard, UiNotification },
    template: ` <ui-card :variant="variant">
                    <template v-slot:notifications>
                        <ui-notification type="success" :rounded="false" class=" px-4 md:px-6">
                            <template v-slot:notificationBody>
                                Success notification
                            </template>
                        </ui-notification>
                    </template>
                    Card content
                </ui-card>`,
});
export const CardWithNotification = TemplateNotification.bind({});

const TemplateTitleNotification = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiCard, UiNotification },
    template: ` <ui-card :variant="variant">
                    <template v-slot:title>
                        Card title inside
                    </template>
                    <template v-slot:notifications>
                        <ui-notification type="success" :rounded="false" class=" px-4 md:px-6">
                            <template v-slot:notificationBody>
                                Success notification
                            </template>
                        </ui-notification>
                    </template>
                    Card content
                </ui-card>`,
});
export const CardTitleNotification = TemplateTitleNotification.bind({});

const TemplateImage = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiCardImage },
    template: ` <ui-card-image v-bind="$props">
                    Card content
                </ui-card-image>`,
});

export const CardImage = TemplateImage.bind({});
CardImage.args = {
    variant: 'default',
    smallImage: false,
    src: 'https://placekitten.com/300/200',
    alt: 'A kitty cat',
};
