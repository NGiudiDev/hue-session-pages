import React from "react";

import { PasswordRecoveryLayout } from "./password_recovery_layout";

const meta = {
  component: PasswordRecoveryLayout,
  tags: ["autodocs"],
  title: "PasswordRecoveryLayout",
};

export const Playground = {
  args: {

  },
  render: (args) => (
    <PasswordRecoveryLayout {...args} />
  ),
};

export default meta;