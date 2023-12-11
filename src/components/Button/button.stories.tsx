import { ComponentProps } from 'react';
import Button from './button';

export default {
  title: 'Input Group/Button',
  argTypes: { onClick: { action: 'clicked' } },
};

export const Primary = (args: ComponentProps<typeof Button>) => {
  return <Button {...args} />;
};

Primary.args = {
  children: 'Button',
};
