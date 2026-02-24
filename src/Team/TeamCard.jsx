// import Jife from "../assets/Jife_Williams_Image.jpeg"

import { useState } from "react";

function TeamCard({ image, name, title, bio }) {
  const [readMore, setReadMore] = useState(false);
  const preview = bio.substring(0, 165);

  function handleBio() {
    setReadMore(!readMore);
  }

  return (
    <>
      <div className="Team_IW">
        <div>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p className="title">{title}</p>
        </div>

        <p className="read">
          {readMore ? bio : preview + "..."}
          <span className="read" onClick={handleBio}>
            {readMore ? "read less" : "read more"}
          </span>
        </p>
      </div>
    </>
  );
}

export default TeamCard;
