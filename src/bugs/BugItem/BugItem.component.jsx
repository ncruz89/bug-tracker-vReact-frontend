import React, { Fragment, useState } from "react";

import Button from "../../shared/components/UIElements/Button/Button.component";
import Modal from "../../shared/components/UIElements/Modal/Modal.component";
import ErrorModal from "../../shared/components/UIElements/ErrorModal.component";

import { useHttpClient } from "../../shared/hooks/http-hook";

import "./BugItem.styles.scss";

const BugItem = ({
  owner,
  createdTime,
  status,
  title,
  priority,
  assignedTo,
  details,
  id,
  updatedLastAt,
}) => {
  const [showBugModal, setShowBugModal] = useState(false);
  const { error, isLoading, clearError } = useHttpClient();

  const openBugHandler = () => setShowBugModal(true);
  const closeBugHandler = () => setShowBugModal(false);

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showBugModal}
        onCancel={closeBugHandler}
        header={title}
        footer={<Button onClick={closeBugHandler}>CLOSE</Button>}
      >
        <div className="bug-item__modal-content">
          <h1>Additional Details:</h1>
          <p>{details}</p>
        </div>
      </Modal>
      <li className="bug-item">
        <h4 className="bug-item__title">{title}</h4>
        <div className="bug-details-container">
          <h4>{owner}</h4>
          <h4>{createdTime}</h4>
          <div>
            <p data-status={status}>{status}</p>
          </div>
          <h4>{assignedTo}</h4>
          <h4>{priority}</h4>
        </div>
        <div className="view-button-container">
          <Button inverse onClick={openBugHandler}>
            VIEW
          </Button>
        </div>
      </li>
    </Fragment>
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
