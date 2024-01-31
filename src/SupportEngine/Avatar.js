import React, { useState } from "react";
import { styles } from "./styles";

const Avatar = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div style={props.style}>
      <div
        className="transition-3"
        style={{
          ...styles.avatarHello,
          ...{ opacity: hover ? "1" : "0" },
        }}
      >
        Hey Its Gilbert
      </div>
      <div
        className="transition-3"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => props.onClick && props.onClick()}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hover ? "1px solid #f9f0ff" : "4px solid #7a39e0" },
        }}
      />
    </div>
  );
};

export default Avatar;
