import React, { Fragment, useState, useEffect } from "react";

import ErrorModal from "../components/UIElements/ErrorModal.component";
import Spinner from "../components/UIElements/Spinner/Spinner.component";
import BugList from "../../bugs/BugList/BugList.component";
import Card from "../components/UIElements/Card/Card.component";

import { useHttpClient } from "../hooks/http-hook";
import BugHeader from "../../bugs/BugHeader/BugHeader.component";

const bugs = [
  {
    assignTo: "Nathan",
    createdAt: "02/03/2023",
    createdBy: "Nathan",
    desc: "a bug description",
    owner: "Nathan",
    priority: "Normal",
    status: "Open",
    updatedAt: undefined,
    id: "b1",
  },
  {
    assignTo: "Nathan",
    createdAt: "02/03/2023",
    createdBy: "Nathan",
    desc: "a bug description.",
    owner: "Nathan",
    priority: "Critical",
    status: "Closed",
    updatedAt: undefined,
    id: "b2",
  },
  {
    assignTo: "Nina",
    createdAt: "02/04/2023",
    createdBy: "Nathan",
    desc: "replace flexbox with grid for bug details.",
    owner: "Nathan",
    priority: "Critical",
    status: "In Progress",
    updatedAt: undefined,
    id: "b3",
  },
];

const Main = () => {
  const { isLoading, error, clearError } = useHttpClient();
  const [loadedBugs, setLoadedBugs] = useState();

  useEffect(() => {
    setLoadedBugs(bugs);
  }, []);

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <Spinner />
        </div>
      )}
      {!isLoading && loadedBugs && (
        <Card style={{ padding: ".5rem 1rem 0 1rem" }}>
          <BugHeader />
          <BugList bugs={loadedBugs} />
        </Card>
      )}
    </Fragment>
  );
};

export default Main;
