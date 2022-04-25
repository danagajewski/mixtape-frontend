import React, {useRef} from "react";
import {useState, useEffect} from "react";

import {searchDeezer} from "../../services/deezer-service";
import SearchResult from "./SearchResult";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router";

const Searcher = () => {
  const [ans, setAns] = useState()
  const {searchString} = useParams()
  const songRef = useRef()
  const navigate = useNavigate()
  // const location = useLocation()

  const getAnswer = async () => {
    if (songRef.current.value !== "") {
      const data = await searchDeezer(songRef.current.value) // add current.value ?
      setAns(data);
      navigate(`/search/${songRef.current.value}`)
    }
  };

  useEffect(() => {
    if (searchString) {
      songRef.current.value = searchString
      getAnswer()
    }
  }, []);
  // const response = searchDeezer("George Harrison")

  // {"data" in ans : console.log(ans["data"]) ? console.log(ans)}
  console.log(ans === undefined)
  return (
      <div>
        <h1>Search me!</h1>

        <ul className="list-group">
          <li className="list-group-item">
            <button
                onClick={getAnswer}
                className="btn btn-primary float-end">
              Search
            </button>
            <input ref={songRef}
                   placeholder="What song are you're looking for?"
                   className="form-control w-75"/>
          </li>
          {ans !== undefined ?
              ans.data.map((dataPoint) => (<SearchResult data={dataPoint}/>))
              :
              ""
          }
        </ul>
      </div>
  )

}

export default Searcher;