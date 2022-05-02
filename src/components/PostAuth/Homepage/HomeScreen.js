import React from "react";
import NoteList from '../NoteList/NoteList'
import WhatsHappening from "./whats-happening";
import {useProfile} from "../../Contexts/profile-context";


const HomeScreen = () => {
  const {profile} = useProfile()

  return(
      <div>
        {/*{profile?<WhatsHappening profile={profile}/>:<></>}*/}
        <NoteList profile={profile}/>
      </div>
  )
}
export default HomeScreen;