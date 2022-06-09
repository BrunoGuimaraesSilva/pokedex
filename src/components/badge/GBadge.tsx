import { Badge, BadgeProps } from "@chakra-ui/react";
import React from "react";

export const GBadge: React.FC<BadgeProps> = ({ children, ...rest }) => {
  return <Badge {...rest}>{children}</Badge>;
};
