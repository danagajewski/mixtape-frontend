import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./components/PreAuth/SignIn"
import Register from "./components/PreAuth/Register"
import SpotifyAuth from "./components/HomePage/Spotify/authentication"
import HomeScreen from "./components/PostAuth/Homepage/HomeScreen";
import ExploreComponent from "./components/PostAuth/Explore/ExploreComponent";
import Index from "./components/PostAuth";
import NotificationsScreen
  from "./components/PostAuth/Notifications/NotificationsScreen";
import Profile from "./components/PostAuth/Profile/Profile";
import SecureRoute from "./components/Secure/secure-route";
import {ProfileProvider} from "./components/Contexts/profile-context";

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
                <Route path="spotify"
                       exact={true}
                       element={<SpotifyAuth/>}/>
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
                  <Route path="profile"
                         exact={true}
                         element={<Profile
                             userId="625dbcbaf5c4aaea8788d377"/>}/>
                </Route>
                <Route path="profile"
                       exact={true}
                       element={<SecureRoute><Profile/></SecureRoute>}/>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </ProfileProvider>
  );
}

export default App;
