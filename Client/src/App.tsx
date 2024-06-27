import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "./Pages/Create";
import Read from "./Pages/Read";
import Update from "./Pages/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/updateUsers" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
