import React from "react";
import NoteList from '../NoteList/NoteList'
import WhatsHappening from "./whats-happening";
import {useProfile} from "../../Contexts/profile-context";


const HomeScreen = () => {
  const {profile} = useProfile()
  console.log(profile)

  return(
      <div>
        {profile?<WhatsHappening profile={profile}/>:<></>}
        <NoteList/>
      </div>
  )
}
export default HomeScreen;