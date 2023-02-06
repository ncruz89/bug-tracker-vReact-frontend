import React, { createContext, useState } from "react";

const defaultBugs = [
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
