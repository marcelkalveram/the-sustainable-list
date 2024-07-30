import React, { type ReactElement } from "react";
import { Pane, majorScale } from "evergreen-ui";
import { className, styles } from "./styles";

export const Container = ({ children, ...rest }): ReactElement => (
  <>
    <Pane
      className={`content-container ${className}`}
      display="flex"
      padding={majorScale(7)}
      paddingTop={majorScale(6)}
      marginLeft="auto"
      marginRight="auto"
      {...rest}
    >
      {children}
    </Pane>
    {styles}
  </>
);
