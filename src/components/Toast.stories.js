import { storiesOf } from '@storybook/vue';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Toast from './Toast.vue';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [{ name: 'DSM background', value: '#f8f8fa', default: true }]
  })
  .add(
    'Toast',
    () => {
      const iconValues = ['default', 'warning', 'error', 'info', 'success'];

      return {
        components: { Toast },
        props: {
          textKnob: { default: text('text', 'This is a notification message') },
          statusKnob: { default: select('status', iconValues, 'default') }
        },
        template: '<toast :status=statusKnob>{{textKnob}}</toast>'
      };
    },
    {
      'in-dsm': { id: '5d8c8e54fb2dc7903eb52ef2', componentPath: './Toast.vue' }
    }
  );
