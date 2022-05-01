import React, {useEffect, useState} from "react";
import {spotifyCharts} from "../../services/spotify-service";
import ChartSong from "./ChartSong";

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
    console.log(ans.content)
  }
  return (
      <>
        <div className="list-group" style={{"list-style-type":"none"}}>
          <div className="list-group-item list-group-item-action active">
            <h4 style={{textAlign: "center"}}>Top Tracks Today</h4>
          </div>
          {ans !== undefined ?
              ans.content.slice(0,10).map((dataPoint) => (<ChartSong data={dataPoint}/>))
              :
              ""
          }
        </div>
      </>
  );
}
export default TopCharts;