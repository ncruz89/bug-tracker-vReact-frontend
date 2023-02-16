import React, { createContext, useState } from "react";

const defaultBugs = [
  {
    assignTo: "Nathan",
    createdAt: "02/03/2023",
    createdBy: "Nathan",
    title: "a bug description",
    details:
      "A much longer description of the actual bug issues on top of anything else the creator may want to pass along",
    owner: "Nathan",
    priority: "Normal",
    status: "Open",
    updatedAt: undefined,
    id: "b1",
    comments: [],
  },
  {
    assignTo: "Nathan",
    createdAt: "02/03/2023",
    createdBy: "Nathan",
    title: "a bug description.",
    details:
      "A much longer description of the actual bug issues on top of anything else the creator may want to pass along. This one is different.",
    owner: "Nathan",
    priority: "Critical",
    status: "Closed",
    updatedAt: undefined,
    id: "b2",
    comments: [],
  },
  {
    assignTo: "Nina",
    createdAt: "02/04/2023",
    createdBy: "Nathan",
    title: "replace flexbox with grid for bug details.",
    details:
      "A much longer description of the actual bug issues on top of anything else the creator may want to pass along",
    owner: "Nathan",
    priority: "Critical",
    status: "In Progress",
    updatedAt: undefined,
    id: "b3",
    comments: [],
  },
];

export const BugsContext = createContext({
  bugs: [],
  setBugs: () => {},
});

export const BugsProvider = ({ children }) => {
  const [bugs, setBugs] = useState(defaultBugs);

  const value = {
    bugs,
    setBugs,
  };

  return <BugsContext.Provider value={value}>{children}</BugsContext.Provider>;
};
