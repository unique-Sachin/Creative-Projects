import MyButton from "./MyButton";
export default {
  title: "components/MyButton",
  component: MyButton,
};
const Template = (args) => <MyButton {...args} />;

export const DisabledBtn = Template.bind({});
DisabledBtn.args = {
  disabled: true,
};
export const ClickBtn = Template.bind({});
ClickBtn.args = {
  disabled: false,
  onClick: () => console.log("hello"),
};
