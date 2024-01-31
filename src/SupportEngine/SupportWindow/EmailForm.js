import React, { useState } from "react";

import { styles } from "../styles";

import { LoadingOutlined } from "@ant-design/icons";

import Avatar from "../Avatar";

const EmailForm = (props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    console.log("sending email", email);
  }

  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{
          height: "100%",
          opacity: "1",
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
          <div>
            Enter Your Email <br />
            To Get Started{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
