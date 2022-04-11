import React from "react";

const BigPicture = ({
  image_link = "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
}) => {
  return (
  <div className="container border p-0 mt-2 border-0">
          <div className="card bg-white text-white border-0">
            <img className="wd-whole-width"
                 src={`${image_link}`} alt={""}/>
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <h2 className="card-title" style={{"color":"white"}}>SpaceX's Starship</h2>
            </div>
          </div>
        </div>
  );
}

export default BigPicture;