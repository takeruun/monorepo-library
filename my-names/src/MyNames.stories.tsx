import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyNames } from './MyNames';

export default {
  title: 'MyNames',
  component: MyNames,
} as ComponentMeta<typeof MyNames>;

const MyNamesTemplate: ComponentStory<typeof MyNames> = (props) => {
  return <MyNames {...props} />;
};

export const Default = MyNamesTemplate.bind({});
