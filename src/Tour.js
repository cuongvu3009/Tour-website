import React, { useState } from "react";

function Tour({ id, name, image, info, price }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div key={id}>
      <img src={image} alt={name} />
      <h4>{price}</h4>
      <p>{readMore ? info : `${info.substring(0, 200)}`}</p>
      <button onClick={() => setReadMore(!readMore)}>
        {readMore ? "Show less" : "Read more"}
      </button>
    </div>
  );
}

export default Tour;
