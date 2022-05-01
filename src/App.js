import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./components/PreAuth/SignIn"
import Register from "./components/PreAuth/Register"
import HomeScreen from "./components/PostAuth/Homepage/HomeScreen";
import ExploreComponent from "./components/PostAuth/Explore/ExploreComponent";
import Index from "./components";
import NotificationsScreen
  from "./components/PostAuth/Notifications/NotificationsScreen";
import MyProfile from "./components/PostAuth/Profile/MyProfile";
import SecureRoute from "./components/Secure/secure-route";
import {ProfileProvider} from "./components/Contexts/profile-context";
import LoginNew from "./components/PreAuth/NewLogin";
import Searcher from "./components/PostAuth/Search/Searcher";
import SearchDetails from "./components/PostAuth/Search/SearchDetails";
import Privacy from "./components/PreAuth/privacy";
import MainPage from "./components/PostAuth/MainPages";
import Profile from "./components/PostAuth/Profile/Profile";
import SemiSecureRoute from "./components/Secure/semi-secure-route";
import Followers from "./components/PostAuth/Followers/Followers";
import Following from "./components/PostAuth/Followers/Following";

function App() {
  return (
      <ProfileProvider>
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/"
                     element={<Index/>}>
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
                <Route path="privacy"
                       exact={true}
                       element={<Privacy/>}/>
                <Route path="mix/"
                       element={<MainPage/>}>
                  <Route index
                         element={<SemiSecureRoute><HomeScreen/></SemiSecureRoute>}/>
                  <Route path="explore"
                         exact={true}
                         element={<ExploreComponent/>}/>
                  <Route path="notifications"
                         exact={true}
                         element={<NotificationsScreen/>}/>
                  <Route path="search"
                         exact={true}
                         element={<Searcher/>}/>
                  <Route path="search/:searchString"
                         element={<Searcher/>}/>
                  <Route path="details/:searchDetailString"
                         element={<SecureRoute><SearchDetails/></SecureRoute>}/>
                </Route>
                <Route path="profile"
                       exact={true}
                       element={<SecureRoute><MyProfile/></SecureRoute>}/>
                <Route path="profile/:pid"
                       exact={true}
                       element={<SemiSecureRoute><Profile/></SemiSecureRoute>}/>
                <Route path="profile/followers/:pid"
                       exact={true}
                       element={<Followers/>}/>
                <Route path="profile/following/:pid"
                       exact={true}
                       element={<Following/>}/>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </ProfileProvider>
  );
}

export default App;
