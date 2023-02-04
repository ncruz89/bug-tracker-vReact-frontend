import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./shared/pages/Main.component";
import RootLayout from "./shared/components/RootLayout.component";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
