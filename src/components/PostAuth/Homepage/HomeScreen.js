import React from "react";
import NoteList from '../NoteList/NoteList'
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
  return(
      <div>
        <WhatsHappening/>
        <NoteList/>
      </div>
  )
}
export default HomeScreen;