import React from "react";
import {useNavigate} from "react-router-dom";

const SearchResult = (data) => {
  console.log(data.data)
  const navigate = useNavigate()
  return (
      <li className="list-group-item justify-content-between align-items-center">
        <div onClick={() => {
          navigate(`/mix/details/${data.data.id}`)
        }}>
          <div className="row">
            <div className="col-4">
              {'album' in data.data && 'cover' in data.data.album ?
                  <img src={data.data.album.cover} alt="Fail"/> : <img
                      src="https://twitter.com/lizippel/photo" alt="Fail"/>}
            </div>
            <div className="col-4">
              <p>{data.data.title}</p>
            </div>
            <div className="col-2">
            <span>{'artist' in data.data && 'name' in data.data.artist ?
                data.data.artist.name : "Lior"}</span>
            </div>
            {/*<button onClick={() => {navigate(`/details/${data.data.id}`)}}>Click Me</button>*/}
          </div>
        </div>
      </li>
  )
}
export default SearchResult