import React from "react";
import Image from "next/image";

function Stamps() {
  return (
    <div
      style={{
        marginTop: "170px",
        paddingInline: "288px",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          placeContent: "center",
          placeItems: "center",
        }}
      >
        <Image src="https://i.ibb.co/wJg30jy/2.png" width={100} height="50" />

        <h1
          style={{
            fontSize: "24px",
            fontWeight: "700",
            width: "325.84px",
            lineHeight: "32px",
            textAlign: "center",
            marginTop: "56.21px",
          }}
        >
          The Opus UI Kit lets you showcase your work in style. It&apos;s helped
          take our business online
        </h1>

        <h1
          style={{
            fontSize: "16px",
            fontWeight: "700",
            width: "325.84px",
            lineHeight: "24px",
            textAlign: "center",
            marginTop: "49px",
          }}
        >
          Alexa F.
        </h1>

        <h1
          style={{
            fontSize: "16px",
            fontWeight: "500",
            marginTop: "7px",
          }}
        >
          <span
            style={{
              color: "#67718E",
            }}
          >
            DESIGNER
          </span>{" "}
          <span
            style={{
              color: "#1355FF",
            }}
          >
            @STAMPS
          </span>
        </h1>
      </div>
      <div
        style={{
          marginLeft: "280px",
        }}
      >
        <Image
          src="https://i.ibb.co/NCRpsX0/61779b485e784ea1ab62098c-Testimonial-Image-png.png"
          width={352}
          height="445"
        />
      </div>
    </div>
  );
}

export default Stamps;
