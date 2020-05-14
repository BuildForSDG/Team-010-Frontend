import React from "react";

import { Button } from "./styles";

export default ({ children, ...props }) => (
  <Button style={props.style}>{children}</Button>
);
