import React from "react";

import { PasswordUpdateLayout } from "./password_update_layout";

const meta = {
  component: PasswordUpdateLayout,
  tags: ["autodocs"],
  title: "PasswordUpdateLayout",
};

export const Playground = {
  args: {

  },
  render: (args) => (
    <PasswordUpdateLayout {...args} />
  ),
};

export default meta;