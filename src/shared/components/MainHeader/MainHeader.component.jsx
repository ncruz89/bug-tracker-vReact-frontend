import React from "react";

import "./MainHeader.styles.scss";

// Main Header Component
// receives children prop
// renders a header element with a class and children
const MainHeader = ({ children }) => {
  return <header className="main-header">{children}</header>;
};

export default MainHeader;
