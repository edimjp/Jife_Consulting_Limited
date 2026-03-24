// import Jife from "../assets/Jife_Williams_Image.jpeg"

// import { useState } from "react";

function TeamCard({ image, name, title, bio, readMore, onToggle }) {
  // const [readMore, setReadMore] = useState(false);
  const preview = bio.substring(0, 155);

  // function handleBio() {
  //   setReadMore(!readMore);
  // }

  return (
    <>
      <div className="Team_IW">
        <div>
          <img src={image} alt={name} className="reveal" />
          <h2 className="reveal">{name}</h2>
          <p className="title reveal">{title}</p>
        </div>

        <p className="read reveal">
          {readMore ? bio : preview + "..."}
          <span className="read" onClick={onToggle}>
            {readMore ? "read less" : "read more"}
          </span>
        </p>
      </div>
    </>
  );
}

export default TeamCard;
