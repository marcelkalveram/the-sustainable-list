import React from 'react';
import { mainStyles } from './styles';

export const Main = ({ children }) => (
  <div className="main">
    {children}
    <style jsx>{mainStyles}</style>
  </div>
);
