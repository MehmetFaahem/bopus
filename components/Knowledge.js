import React from "react";
import Image from "next/image";

function Knowledge() {
  return (
    <div
      style={{
        marginTop: "174px",
        paddingInline: "196px",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "#B9ECFF",
            width: "32px",
            height: "32px",
            marginLeft: "403.55px",
          }}
        />
        <div
          style={{
            backgroundColor: "#F5FCFF",
            width: "403.55px",
            height: "500px",
            position: "relative",
          }}
        >
          <Image
            style={{
              position: "absolute",
              left: "64px",
              bottom: "64px",
            }}
            height="412"
            width="448"
            src="https://i.ibb.co/Tt0yBs5/61779b485e784e42646209c7-Content-20-Image-p-500-png.png"
          />
          <div
            style={{
              backgroundColor: "#D6F4FF",
              width: "92px",
              height: "92px",
              position: "absolute",
              left: "467.55px",
              top: "432px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          marginLeft: "164.52px",
        }}
      >
        <div
          style={{
            backgroundColor: "#F7F9FC",
            height: "64px",
            width: "64px",
            position: "relative",
          }}
        >
          <p
            style={{
              position: "absolute",
              fontSize: "14px",
              fontWeight: "700",
              left: "32px",
              color: "#67718E",
              marginTop: "19px",
              width: "200px",
            }}
          >
            OUR KNOWLEDGE
          </p>
        </div>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            width: "420px",
            letterSpacing: "-1.44 px",
            lineHeight: "56px",
          }}
        >
          A UI Kit that&apos;s Modern & Elegant
        </h1>

        <p
          style={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "36px",
            marginTop: "31px",
            height: "108px",
            width: "525.87px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
          consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non
          lectus dapibus, a pulvinar mauris aliquam.
        </p>
      </div>
    </div>
  );
}

export default Knowledge;
