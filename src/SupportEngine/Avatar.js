import React, { useState } from "react";
import { styles } from "./styles";

const Avatar = (props) => {
  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px" }}>
      <div style={{ ...styles.chatWithMeButton }} />
    </div>
  );
};

export default Avatar;
