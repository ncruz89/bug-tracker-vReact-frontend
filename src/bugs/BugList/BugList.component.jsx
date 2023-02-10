import React from "react";

import BugItem from "../BugItem/BugItem.component";

import "./BugList.styles.scss";

const BugList = ({ bugs }) => {
  if (bugs.length === 0) {
    return (
      <div className="center">
        <h2>No bugs found. Login to create one!</h2>
      </div>
    );
  }

  return (
    <ul className="bug-list">
      {bugs.map((bug) => {
        return (
          <BugItem
            key={bug.id}
            owner={bug.owner}
            title={bug.title}
            details={bug.details}
            priority={bug.priority}
            status={bug.status}
            createdTime={bug.createdAt}
            assignedTo={bug.assignTo}
            id={bug.id}
            updatedLastAt={bug.updatedAt}
          />
        );
      })}
    </ul>
  );
};

export default BugList;
