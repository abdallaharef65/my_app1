import Home from "./Home/Home";
import Sing from "./sign-in/sign-inGoogleComponent";
import { Routes, Route } from "react-router-dom";
import Nav from "./nav/nav";

const App = () => {
  // console.log("render");

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />

        <Route path="Sing" element={<Sing />} />
      </Route>
    </Routes>
  );
};

export default App;
