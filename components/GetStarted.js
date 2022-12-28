import React from "react";
import Image from "next/image";

function GetStarted() {
  return (
    <div
      style={{
        backgroundColor: "#061237",
        width: "full",
        height: "818px",
        paddingTop: "95px",
      }}
    >
      <div className="flex place-items-center">
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            marginLeft: "288px",
            letterSpacing: "-1.44 px",
            lineHeight: "56px",
            color: "white",
            marginRight: "356.33px",
          }}
        >
          Ways to work with us
        </h1>
        <button
          style={{
            backgroundColor: "#1355FF",
            paddingBlock: "10px",
            color: "white",
            paddingInline: "28px",
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "500",
          }}
        >
          Get Started
        </button>
      </div>
      <div
        style={{
          paddingInline: "220px",
          marginTop: "77px",
          display: "flex",
          placeItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Image
            width="304"
            height="320"
            src="https://i.ibb.co/S3VbPyp/61779b485e784e7332620990-Content-Image-01-png.png"
          />
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "700",
              marginTop: "32px",
              color: "white",
            }}
          >
            Project Management
          </h1>
          <h1
            style={{
              color: "#B6BCCE",
              lineHeight: "32px",
              fontWeight: "400",
              fontSize: "16px",
              width: "320px",
              marginTop: "12px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            consectetur eros. Aliquam erat volutpat.
          </h1>
        </div>

        <div>
          <Image
            width="304"
            height="320"
            src="https://i.ibb.co/fnZc9pf/61779b485e784e495d620991-Content-Image-02-png.png"
          />
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "700",
              marginTop: "32px",
              color: "white",
            }}
          >
            Advanced Analytics
          </h1>
          <h1
            style={{
              color: "#B6BCCE",
              lineHeight: "32px",
              fontWeight: "400",
              fontSize: "16px",
              width: "320px",
              marginTop: "12px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            consectetur eros. Aliquam erat volutpat.
          </h1>
        </div>

        <div>
          <Image
            width="304"
            height="320"
            src="https://i.ibb.co/6w1cHZz/61779b485e784e5077620992-Content-Image-03-png.png"
          />
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "700",
              marginTop: "32px",
              color: "white",
            }}
          >
            Marketing & Dashboard
          </h1>
          <h1
            style={{
              color: "#B6BCCE",
              lineHeight: "32px",
              fontWeight: "400",
              fontSize: "16px",
              width: "320px",
              marginTop: "12px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            consectetur eros. Aliquam erat volutpat.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
