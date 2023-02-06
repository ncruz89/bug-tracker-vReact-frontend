import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./shared/pages/Main.component";
import RootLayout from "./shared/components/RootLayout.component";

import "./App.scss";
import AddBug from "./shared/pages/AddBug/AddBug.component";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="bugs/new" element={<AddBug />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
