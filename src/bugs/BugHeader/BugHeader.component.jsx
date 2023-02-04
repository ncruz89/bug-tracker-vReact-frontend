import React from "react";

import "./BugHeader.styles.scss";

const BugHeader = () => {
  return (
    <div className="bug-header-container">
      <h6 className="bug-header__desc">BUG</h6>
      <div className="bug-header__details-container">
        <h6>ASSIGNER</h6>
        <h6>CREATED ON</h6>
        <h6>STATUS</h6>
        <h6>ASSIGNEE</h6>
        <h6>SEVERITY</h6>
      </div>
    </div>
  );
};

export default BugHeader;
