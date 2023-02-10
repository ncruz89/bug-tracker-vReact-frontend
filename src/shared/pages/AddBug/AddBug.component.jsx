import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Input from "../../../shared/components/FormElements/Input/Input.component.jsx";
import Button from "../../components/UIElements/Button/Button.component";
import ErrorModal from "../../components/UIElements/ErrorModal.component";
import Spinner from "../../components/UIElements/Spinner/Spinner.component";

import { BugsContext } from "../../Context/Bugs.context.jsx";
import { useForm } from "../../hooks/form-hook";
import { useHttpClient } from "../../hooks/http-hook";
import { VALIDATOR_REQUIRE } from "../../util/validators";

import "./AddBug.styles.scss";

const AddBug = () => {
  const { bugs, setBugs } = useContext(BugsContext);
  const { isLoading, error, clearError } = useHttpClient();
  const navigate = useNavigate();

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      details: {
        value: "",
        isValid: true,
      },
      assignee: {
        value: "Nathan",
        isValid: true,
      },
      severity: {
        value: "Low",
        isValid: true,
      },
    },
    false
  );

  const bugSubmitHandler = (event) => {
    event.preventDefault();
    console.log("form submitted!: ", formState);
    const newBug = {
      assignTo: formState.inputs.assignee.value,
      createdAt: new Date().toLocaleDateString(),
      createdBy: "Nathan",
      title: formState.inputs.title.value,
      details: formState.inputs.details.value,
      owner: "Nathan",
      priority: formState.inputs.severity.value,
      status: "Open",
      id: uuidv4(),
    };
    setBugs([...bugs, newBug]);
    navigate("/");
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="bug-form" onSubmit={bugSubmitHandler}>
        {isLoading && <Spinner asOverlay />}
        <Input
          id="title"
          type="text"
          label="Bug"
          errorText="Please enter bug title"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id="details"
          label="Additional Details"
          validators={[]}
          initialIsValid={true}
          onInput={inputHandler}
        />
        <Input
          type="assignee-select"
          id="assignee"
          label="Assignee"
          initialIsValid={true}
          initialValue="Nathan"
          validators={[]}
          onInput={inputHandler}
        />
        <Input
          type="severity-select"
          id="severity"
          label="Severity"
          initialValue="Low"
          initialIsValid={true}
          validators={[]}
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD BUG
        </Button>
      </form>
    </Fragment>
  );
};

export default AddBug;
