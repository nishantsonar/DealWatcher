import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./Components/SignUp";
import About from "./Components/About";
import SignIn from "./Components/SignIn";
import Contact from "./Components/ContactUs";
import HomePage from "./Components/HomePage";
import {UserContextProvider} from "./Components/Context/userContext";
import AddLinks from "./Components/AddLinks";
import SuccessPage from "./Components/SuccessPage";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/addlink" element={<AddLinks />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Signin" element={<SignIn />} />
            <Route exact path="/SignUp" element={<SignUp />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/success" element={<SuccessPage />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
