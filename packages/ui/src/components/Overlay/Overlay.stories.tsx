import { Story, Meta } from '@storybook/react';
import Overlay, { OverlayProps } from './Overlay';

export default {
  component: Overlay,
  title: 'Overlay',
} as Meta;

const Template: Story<OverlayProps> = (args) => (
  <Overlay isOpen={args.isOpen}>
    <div>Overlay Sample</div>
  </Overlay>
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: false,
};
