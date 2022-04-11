import React from 'react'

const Follow = ({
      follow = {
        'name' : 'NASA',
        'tag' : '@NASA',
        'image' : "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
      }
}) => {
  return(
          <li className="list-group-item">
            <div className="container p-0 m-0">
              <div className="row m-0">
                <div className="col-2 p-0 m-0">
                  <img
                      src={`${follow.image}`}
                      className="wd-round-image" alt={""}/>
                </div>
                <div className="col-7">
                  <p className="wd-content">{follow.name} <i className="fa-solid fa-check-circle"/></p>
                  <p className="wd-content-ends">{follow.tag}</p>
                </div>
                <div className="col-3 m-0 p-0 d-flex justify-content-end">
                  <button type="button"
                          className="btn btn-primary btn-lg w-100 wd-rounded-button wd-float-right m-0 p-0">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </li>
  )
}

export default Follow;