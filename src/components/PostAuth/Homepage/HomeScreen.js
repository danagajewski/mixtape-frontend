import React from "react";
import NoteList from '../NoteList/NoteList'
import WhatsHappening from "./whats-happening";

import Player from "./Player";

const HomeScreen = () => {
  return(
      <div>
        {/*<Player/>*/}
        <WhatsHappening/>
        <NoteList/>
      </div>
  )
}
export default HomeScreen;