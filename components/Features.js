import React from "react";
import Image from "next/image";

function Features() {
  return (
    <div
      style={{
        marginTop: "198px",
        paddingInline: "196px",
        display: "flex",
        justifyContent: "space-between",
        placeItems: "center",
      }}
    >
      <div>
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
            }}
          >
            Features
          </p>
        </div>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            width: "600px",
            letterSpacing: "-1.44 px",
            lineHeight: "56px",
          }}
        >
          You’re not just doing business. You’re doing life.
        </h1>

        <div className="flex flex-col mt-16">
          <div className="flex place-items-center">
            <div
              style={{
                backgroundColor: "#F5F9FF",
                height: "32px",
                width: "32px",
                position: "relative",
                borderRadius: "32px",
              }}
            >
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  top: "12.46px",
                  right: "10.48px",
                }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5194 2.041L4.75 8.53967L0.480591 4.44097L1.51939 3.35897L4.75 6.46027L10.4806 0.958923L11.5194 2.041Z"
                  fill="#1355FF"
                />
              </svg>
            </div>
            <h1
              style={{
                fontSize: "16px",
                lineHeight: "32px",
                fontWeight: "500",
                marginLeft: "20px",
              }}
            >
              Responsive Components
            </h1>
          </div>

          <div className="flex place-items-center mt-4">
            <div
              style={{
                backgroundColor: "#F5F9FF",
                height: "32px",
                width: "32px",
                position: "relative",
                borderRadius: "32px",
              }}
            >
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  top: "12.46px",
                  right: "10.48px",
                }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5194 2.041L4.75 8.53967L0.480591 4.44097L1.51939 3.35897L4.75 6.46027L10.4806 0.958923L11.5194 2.041Z"
                  fill="#1355FF"
                />
              </svg>
            </div>
            <h1
              style={{
                fontSize: "16px",
                lineHeight: "32px",
                fontWeight: "500",
                marginLeft: "20px",
              }}
            >
              Over 50 Sections
            </h1>
          </div>

          <div className="flex place-items-center mt-4">
            <div
              style={{
                backgroundColor: "#F5F9FF",
                height: "32px",
                width: "32px",
                position: "relative",
                borderRadius: "32px",
              }}
            >
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  top: "12.46px",
                  right: "10.48px",
                }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5194 2.041L4.75 8.53967L0.480591 4.44097L1.51939 3.35897L4.75 6.46027L10.4806 0.958923L11.5194 2.041Z"
                  fill="#1355FF"
                />
              </svg>
            </div>
            <h1
              style={{
                fontSize: "16px",
                lineHeight: "32px",
                fontWeight: "500",
                marginLeft: "20px",
              }}
            >
              Handcrafted Pages
            </h1>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="https://i.ibb.co/ChPRYdB/61779b485e784eb11c620a3d-Group-40-png.png"
          width="502"
          height="614"
        />
      </div>
    </div>
  );
}

export default Features;
