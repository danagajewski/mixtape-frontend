import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./components/PreAuth/SignIn"
import Register from "./components/PreAuth/Register"
import SpotifyAuth from "./components/HomePage/Spotify/authentication"
import HomeScreen from "./components/PostAuth/Homepage/HomeScreen";
import ExploreComponent from "./components/PostAuth/Explore/ExploreComponent";
import Index from "./components/PostAuth";
import NotificationsScreen
  from "./components/PostAuth/Notifications/NotificationsScreen";

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
                       element={<ExploreComponent/>}/>
                <Route path="notifications"
                       element={<NotificationsScreen/>}/>
              </Route>
          </Route>
        </Routes>
      </div>
</BrowserRouter>
)
  ;
}

export default App;
