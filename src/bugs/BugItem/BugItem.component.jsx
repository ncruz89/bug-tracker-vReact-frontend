import React, { Fragment, useEffect, useState, useContext } from "react";

import Button from "../../shared/components/UIElements/Button/Button.component";
import Modal from "../../shared/components/UIElements/Modal/Modal.component";
import ErrorModal from "../../shared/components/UIElements/ErrorModal.component";
import Input from "../../shared/components/FormElements/Input/Input.component";
import Card from "../../shared/components/UIElements/Card/Card.component";

import { BugsContext } from "../../shared/Context/Bugs.context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

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
  const [viewedBug, setViewedBug] = useState();
  const { bugs, setBugs } = useContext(BugsContext);
  const { error, isLoading, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm({
    status: {
      value: "Open",
      isValid: true,
    },
    note: {
      value: "",
      isValid: false,
    },
  });

  const openBugHandler = () => {
    setShowBugModal(true);
    const bug = bugs.find((bug) => bug.id === id);
    setViewedBug(bug);
  };
  const closeBugHandler = () => {
    setShowBugModal(false);
    setViewedBug(null);
  };

  useEffect(() => {
    if (viewedBug) {
      setFormData({
        status: {
          value: viewedBug.status || "Open",
          isValid: true,
        },
        note: {
          value: "",
          isValid: false,
        },
      });
    }
  }, [setViewedBug, setFormData, viewedBug]);

  const addNoteHandler = () => {
    const newNote = formState.inputs.note.value;
    console.log(newNote);
  };

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
          <div className="bug-modal__content-header">
            <Input
              type="bug-status"
              id="status"
              label="Status: "
              initialIsValid={true}
              initialValue={viewedBug && viewedBug.status}
              validators={[]}
              onInput={inputHandler}
            />

            <h1>Additional Details:</h1>
          </div>
          <p>{details}</p>
          <div className="bug-modal__comment-section">
            <h5>Comments: </h5>
            {viewedBug && viewedBug.status !== "Closed" && (
              <div className="bug-modal__add-note-container">
                <Input
                  rows={2}
                  id="note"
                  onInput={inputHandler}
                  placeholder="add a note"
                  validators={[VALIDATOR_REQUIRE()]}
                />
                <div className="bug-modal__add-note-button">
                  <Button
                    disabled={!formState.isValid}
                    classes="bug-modal__note-button"
                    onClick={addNoteHandler}
                  >
                    Add
                  </Button>
                </div>
              </div>
            )}
            {viewedBug && viewedBug.comments.length > 0 && <Card></Card>}
          </div>
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
