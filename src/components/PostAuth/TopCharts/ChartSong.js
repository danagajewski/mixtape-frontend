import React from "react";
import {useNavigate} from "react-router-dom";

const ChartSong = (data) => {
  console.log(data)
  const navigate = useNavigate()
  return(
      // <li className="list-group-item justify-content-between align-items-center">
      //   <div onClick={() => {navigate(`/mix/search/${data.data.track_title}`)}}>
      <a href={`/mix/search/${data.data.track_title}`} className="list-group-item list-group-item-action">
        <div className="row">
            <div className="col-2">
              {data.data.trend === "up" ?
                  <i className="fa-solid fa-arrow-up" style={{color: "#00ff99"}}/>
              :
                  <i className="fa-solid fa-arrow-down"
                     style={{color: "#ff5050"}}/>}
              <span> {data.data.position}</span>
            </div>
            <div className="col-3">
              {"thumbnail" in data.data ?
                  <img src={data.data.thumbnail} alt="Fail"/> : <img
                      src="https://twitter.com/lizippel/photo" alt="Fail"/>}
            </div>
            <div className="col-4">
              <p>{data.data.track_title}</p>
            </div>
            <div className="col-3">
              <span>{data.data.artists[0]}</span>
            </div>
        </div>
            {/*<button onClick={() => {navigate(`/details/${data.data.id}`)}}>Click Me</button>*/}
      </a>

  )

}

export default ChartSong;