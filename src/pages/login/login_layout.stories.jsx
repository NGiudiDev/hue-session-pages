import React from "react";

import { LoginLayout } from "./login_layout";

const meta = {
  component: LoginLayout,
  tags: ["autodocs"],
  title: "LoginLayout",
};

export const Playground = {
  args: {

  },
  render: (args) => (
    <LoginLayout {...args} />
  ),
};

export default meta;