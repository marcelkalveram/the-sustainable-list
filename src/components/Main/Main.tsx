import React, { type ReactNode, type ReactElement } from "react";
import { mainStyles } from "./styles";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps): ReactElement => (
  <div className="main">
    {children}
    <style jsx>{mainStyles}</style>
  </div>
);
