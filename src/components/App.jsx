import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout/Layout";
import { Home } from "../pages/Home";
import { Tweets } from "../pages/Tweets";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
