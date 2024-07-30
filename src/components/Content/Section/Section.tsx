import React, { type ReactNode } from "react";
import { Pane } from "evergreen-ui";
import { styles } from "./styles";

interface SectionProps {
  children: ReactNode;
  noPadding?: boolean;
  className?: string;
}

export const Section = ({ children, noPadding, className }: SectionProps) => (
  <>
    <Pane
      className={`section ${className}`}
      width="50%"
      paddingRight={noPadding ? 0 : "10%"}
    >
      {children}
    </Pane>
    {styles}
  </>
);
