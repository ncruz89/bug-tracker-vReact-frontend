import React, { Fragment } from "react";

import MainNav from "./MainNav/MainNav.component";

const RootLayout = ({ children }) => {
  return (
    <Fragment>
      <MainNav />
      <main>{children}</main>
    </Fragment>
  );
};

export default RootLayout;
