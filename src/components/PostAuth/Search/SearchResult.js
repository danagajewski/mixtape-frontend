import React from "react";

const SearchResult = (data) => {
  console.log(data.data)
  return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="row">
          <div className="col-4">
            {'album' in data.data && 'cover' in data.data.album ?
            <img src={data.data.album.cover} alt="Fail"/> : <img src="https://twitter.com/lizippel/photo" alt="Fail"/>}
          </div>
          <div className="col-4">
            <span>{data.data.title}</span>
          </div>
          <div className="col-4">
            <span>{'artist' in data.data && 'name' in data.data.artist ?
              data.data.artist.name : "Lior"}</span>
          </div>
        </div>
      </li>
  )
}
export default SearchResult