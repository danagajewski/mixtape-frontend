import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./components/PreAuth/SignIn"
import Register from "./components/PreAuth/Register"

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route path="login"
                     exact={true}
                     element={<SignIn/>}/>
              <Route path=""
                     exact={true}
                     element={<Register/>}/>
              <Route path="home"
                     exact={true}
                     element={<Register/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
