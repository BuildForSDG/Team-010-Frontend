import React from "react";

import { Select } from "./styles";

export default ({ children, ...props }) => (
  <Select style={props.style}>{children}</Select>
);
