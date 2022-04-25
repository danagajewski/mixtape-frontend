import React, {useEffect, useRef, useState} from "react";

import {searchDeezerById} from "../../services/deezer-service";
import {useParams} from "react-router";
// import {useNavigate} from "react-router-dom";

const SearchDetails = () => {
  const [ans, setAns] = useState()
  const {searchDetailString} = useParams()
  const songId = useRef()

  const getAnswer = async () => {
    if (songId.current.value !== "") {
      const data = await searchDeezerById(songId.current)
      setAns(data)
    }
  }

  useEffect(() => {
    if (searchDetailString) {
      songId.current = searchDetailString
      getAnswer()
    }
  }, [])
  console.log(ans)
  // console.log(searchDetailString)

  return (
      // <h1>Success</h1>
      <div className="card border-primary mb-3" >
        <div className="card-header">{ans ? ans.artist.name : ""}</div>
        <div className="card-body">
          <h4 className="card-title">{ans ? ans.title : ""}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{ans ? ans.album.title : ""}</h6>
          <img src={ans ? ans.artist.picture : ""}/>
          <p className="card-text">Some quick example text to build on the card
            title and make up the bulk of the card's content.</p>
        </div>
      </div>
  )
}
export default SearchDetails;