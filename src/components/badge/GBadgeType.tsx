import { BadgeProps } from "@chakra-ui/react";
import React from "react";
import { GBadge, defaultType } from "./index";
interface GBadgeProps extends BadgeProps {
  nameType: string;
}

export const GBadgeType: React.FC<GBadgeProps> = ({
  children,
  nameType,
  ...rest
}) => {
  const colorType = defaultType.filter((data) => {
    if (nameType == data.name) {
      return data.color;
    }
  });
  return (
    <GBadge colorScheme={colorType[0]?.color} {...rest}>
      {children}
    </GBadge>
  );
};
