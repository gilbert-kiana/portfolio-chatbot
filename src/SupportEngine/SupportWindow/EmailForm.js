import React, { useState } from "react";

import { styles } from "../styles";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";

import Avatar from "../Avatar";

const EmailForm = (props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function getOrCreateUser(callback) {
    axios
      .put(
        "https://api.chatengine.io/users/",
        {
          username: email,
          secret: email,
          email: email,
        },
        { headers: { "Private-key": process.env.REACT_APP_CE_PRIVATE_KEY } }
      )
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        // You may want to handle the error and provide feedback to the user
      });
  }

  function getOrCreateChat(callback) {
    axios
      .put(
        "https://api.chatengine.io/chats/",
        {
          usernames: ["gilbert", email],
          is_direct_chat: true,
        },
        { headers: { "Private-key": process.env.REACT_APP_CE_PRIVATE_KEY } }
      )
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.error("Error creating chat:", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(process.env.REACT_APP_CE_PRIVATE_KEY);
    setLoading(true);
    console.log("sending email", email);

    getOrCreateUser((user) => {
      props.setUser(user);
      getOrCreateChat((chat) => props.setChat(chat));
    });
  }

  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{
          height: props.visible ? "100%" : "0%",
          opacity: props.visible ? "1" : 0,
        },
      }}
    >
      <div style={{ height: "0px" }}>
        <div style={styles.stripe}></div>
      </div>

      <div
        className="transition-5"
        style={{
          ...styles.loadingDiv,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "0.33" : "0",
          },
        }}
      />
      <LoadingOutlined
        className="transition-5"
        style={{
          ...styles.loadingIcon,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "1" : "0",
            fontSize: "82px",
            top: "calc(50% - 41px)",
            left: "calc(50% - 41px)",
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Avatar
          style={{
            position: "relative",
            left: "calc(50% - 44px)",
            top: "10%",
          }}
        />

        <div style={styles.topText}>
          Welcome to my <br /> Support
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ position: "relative", width: "100%", top: "19.75%" }}
        >
          <input
            style={styles.emailInput}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </form>
        <div style={styles.bottomText}>
          Enter Your Email <br />
          To Get Started{" "}
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
