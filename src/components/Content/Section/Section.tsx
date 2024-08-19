import React, { type ReactNode } from "react";
import { Pane } from "evergreen-ui";
import { styles, className } from "./styles";

interface SectionProps {
  children: ReactNode;
  noPadding?: boolean;
  wrapperClassName?: string;
}

export const Section = ({
  children,
  noPadding,
  wrapperClassName,
}: SectionProps) => (
  <>
    <Pane
      className={`section ${className} ${wrapperClassName}`}
      width="50%"
      paddingRight={noPadding ? 0 : "10%"}
    >
      {children}
    </Pane>
    {styles}
  </>
);
