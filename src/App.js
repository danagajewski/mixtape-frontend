import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./components/PreAuth/SignIn"
import Register from "./components/PreAuth/Register"
import HomeScreen from "./components/PostAuth/Homepage/HomeScreen";
import ExploreComponent from "./components/PostAuth/Explore/ExploreComponent";
import Index from "./components/PostAuth";
import NotificationsScreen
  from "./components/PostAuth/Notifications/NotificationsScreen";
import Profile from "./components/PostAuth/Profile/Profile";
import SecureRoute from "./components/Secure/secure-route";
import {ProfileProvider} from "./components/Contexts/profile-context";
import LoginNew from "./components/PreAuth/NewLogin";
import Searcher from "./components/PostAuth/Search/Searcher";

function App() {
  return (
      <ProfileProvider>
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
                <Route path="login-spotify"
                       exact={true}
                       element={<LoginNew/>}/>
                <Route path="auth/callback"
                       exact={true}
                       element={<Register/>}/>
                <Route path="mix/"
                       element={<Index/>}>
                  <Route index
                         element={<HomeScreen/>}/>
                  <Route path="explore"
                         exact={true}
                         element={<ExploreComponent/>}/>
                  <Route path="notifications"
                         exact={true}
                         element={<NotificationsScreen/>}/>
                </Route>
                <Route path="profile"
                       exact={true}
                       element={<SecureRoute><Profile/></SecureRoute>}/>
                <Route path="search"
                       exact={true}
                       element={<Searcher/>}/>
                <Route path="search/:searchString"
                       element={<Searcher/>}/>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </ProfileProvider>
  );
}

export default App;
