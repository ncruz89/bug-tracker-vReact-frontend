import React, { Fragment, useContext } from "react";

import ErrorModal from "../components/UIElements/ErrorModal.component";
import Spinner from "../components/UIElements/Spinner/Spinner.component";
import BugList from "../../bugs/BugList/BugList.component";
import Card from "../components/UIElements/Card/Card.component";
import BugHeader from "../../bugs/BugHeader/BugHeader.component";

import { BugsContext } from "../Context/Bugs.context";
import { useHttpClient } from "../hooks/http-hook";

const Main = () => {
  const { bugs } = useContext(BugsContext);
  const { isLoading, error, clearError } = useHttpClient();

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <Spinner />
        </div>
      )}
      {!isLoading && bugs && (
        <Card style={{ padding: ".5rem 1rem 0 1rem" }}>
          <BugHeader />
          <BugList bugs={bugs} />
        </Card>
      )}
    </Fragment>
  );
};

export default Main;
