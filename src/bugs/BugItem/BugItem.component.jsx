import React from "react";

import "./BugItem.styles.scss";

const BugItem = ({
  owner,
  createdTime,
  status,
  desc,
  priority,
  assignedTo,
  id,
  updatedLastAt,
}) => {
  return (
    <li className="bug-item">
      <h4 className="bug-item__desc">{desc}</h4>
      <div className="bug-details-container">
        <h4>{owner}</h4>
        <h4>{createdTime}</h4>
        <div>
          <p data-status={status}>{status}</p>
        </div>
        <h4>{assignedTo}</h4>
        <h4>{priority}</h4>
      </div>
    </li>
  );
};

export default BugItem;

/* old bug styling

    <h6>
        Created By: {owner} on {createdTime}
      </h6>
      <p>
        <span className="label label-info" data-status={status}>
          {status}
        </span>
      </p>
      <h3>{desc}</h3>
      <p className="details priority">
        <img src={priorityIcon} className="icon" alt="priority icon" />
        {priority}
      </p>
      <p className="details user">
        <img src={userIcon} className="icon" alt="user icon" />
        {assignedTo}
      </p>
      <button className="bug-list-btn btn-close" data-id={id}>
        Close
      </button>
      <button className="bug-list-btn btn-delete" data-id={id}>
        Delete
      </button>
      */
