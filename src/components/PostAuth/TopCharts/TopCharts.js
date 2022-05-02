import React, {useEffect, useState} from "react";
import {spotifyCharts} from "../../services/spotify-service";
import ChartSong from "./ChartSong";
import '../mixtape-home.css'

const TopCharts = () => {
  const [ans, setAns] = useState()
  const getAnswer = async () => {
      const data = await spotifyCharts() // add current.value ?
      setAns(data);
  };
  useEffect(() => {
    getAnswer()
  }, [])
  if (ans) {
  }
  return (
      <>
        <div className="list-group mt-top-chart">
          <div className="list-group-item list-group-item-action active">
            <h4 style={{textAlign: "center"}}>Top Tracks Today</h4>
          </div>
          {ans !== undefined ?
              ans.content.slice(0,10).map((dataPoint) => (<ChartSong data={dataPoint} key={dataPoint.songId}/>))
              :
              ""
          }
        </div>
      </>
  );
}
export default TopCharts;