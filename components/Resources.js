import React from "react";
import Image from "next/image";

function Resources() {
  return (
    <div
      style={{
        backgroundColor: "white",
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
            color: "black",
            marginRight: "556.33px",
          }}
        >
          Resources
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
            src="https://i.ibb.co/Zg5rv2Y/61779b485e784e1fed620a02-Resource-01-png.png"
          />
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "700",
              marginTop: "32px",
              color: "black",
            }}
          >
            A high-converting, high-performing template
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
            Turpis senectus amet tortor in sodates odio tettus. Pretium id amet,
            euismod sceteriscue vetit.
          </h1>
          <button
            style={{
              backgroundColor: "#F7F9FC",
              paddingBlock: "10px",
              color: "black",
              paddingInline: "28px",
              fontSize: "14px",
              lineHeight: "24px",
              fontWeight: "500",
              marginTop: "32px",
            }}
          >
            Read Article
          </button>
        </div>

        <div>
          <Image
            width="304"
            height="320"
            src="https://i.ibb.co/M79hHKX/61779b485e784e6eb7620a01-Resource-02-png.png"
          />
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "700",
              marginTop: "32px",
              color: "black",
            }}
          >
            With a clean, minimal and professional look
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
            Turpis senectus amet tortor in sodates odio tettus. Pretium id amet,
            euismod sceteriscue vetit.
          </h1>
          <button
            style={{
              backgroundColor: "#F7F9FC",
              paddingBlock: "10px",
              color: "black",
              paddingInline: "28px",
              fontSize: "14px",
              lineHeight: "24px",
              fontWeight: "500",
              marginTop: "32px",
            }}
          >
            Read Article
          </button>
        </div>

        <div>
          <Image
            width="304"
            height="320"
            src="https://i.ibb.co/hfH2Ybz/61779b485e784e0526620a03-Resource-03-png.png"
          />
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "700",
              marginTop: "32px",
              color: "black",
            }}
          >
            Opus made our journey possible
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
            Turpis senectus amet tortor in sodates odio tettus. Pretium id amet,
            euismod sceteriscue vetit.
          </h1>
          <button
            style={{
              backgroundColor: "#F7F9FC",
              paddingBlock: "10px",
              color: "black",
              paddingInline: "28px",
              fontSize: "14px",
              lineHeight: "24px",
              fontWeight: "500",
              marginTop: "32px",
            }}
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resources;
