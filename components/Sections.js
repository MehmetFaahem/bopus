import React from "react";

function Sections() {
  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: "96px",
        paddingInline: "196px",
        display: "flex",
      }}
    >
      <div>
        <div className="flex place-items-start">
          <div
            style={{
              backgroundColor: "#1355FF",
              height: "64px",
              width: "64px",
              placeContent: "center",
              display: "flex",
              placeItems: "center",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.459501 5.48628C0.0680006 5.35578 0.0642508 5.14503 0.467001 5.01078L14.7822 0.23928C15.179 0.10728 15.4062 0.32928 15.2952 0.71778L11.2048 15.0323C11.0923 15.429 10.8635 15.4425 10.6955 15.066L8 9L12.5 3.00003L6.5 7.5L0.459501 5.48628Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            style={{
              marginLeft: "32px",
            }}
          >
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "700",
                width: "150px",
                lineHeight: "32px",
              }}
            >
              Choose your sections
            </h1>
            <p
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "24px",
                width: "330.89px",
                marginTop: "11px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>

        <div
          className="flex place-items-start"
          style={{
            marginTop: "71px",
          }}
        >
          <div
            style={{
              backgroundColor: "#1355FF",
              height: "64px",
              width: "64px",
              placeContent: "center",
              display: "flex",
              placeItems: "center",
            }}
          >
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2.25H2V12.75L8.969 5.7795C9.1096 5.6389 9.3004 5.5599 9.4992 5.5599C9.6981 5.5599 9.8889 5.6389 10.0295 5.7795L14 9.7575V2.25ZM0.5 1.49475C0.50137 1.29778 0.58018 1.10926 0.71938 0.96991C0.85859 0.83056 1.04704 0.75157 1.244 0.75H14.756C15.167 0.75 15.5 1.08375 15.5 1.49475V13.5052C15.4986 13.7022 15.4198 13.8907 15.2806 14.0301C15.1414 14.1694 14.953 14.2484 14.756 14.25H1.244C1.04661 14.2498 0.85737 14.1712 0.71787 14.0316C0.57836 13.892 0.5 13.7026 0.5 13.5052V1.49475ZM5 6.75C4.60218 6.75 4.22064 6.592 3.93934 6.3107C3.65804 6.0294 3.5 5.6478 3.5 5.25C3.5 4.85218 3.65804 4.47064 3.93934 4.18934C4.22064 3.90804 4.60218 3.75 5 3.75C5.39782 3.75 5.77936 3.90804 6.0607 4.18934C6.342 4.47064 6.5 4.85218 6.5 5.25C6.5 5.6478 6.342 6.0294 6.0607 6.3107C5.77936 6.592 5.39782 6.75 5 6.75Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            style={{
              marginLeft: "32px",
            }}
          >
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "700",
                width: "220px",
                lineHeight: "32px",
              }}
            >
              Add the images and text you need
            </h1>
            <p
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "24px",
                width: "330.89px",
                marginTop: "11px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: "149.11px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            width: "600px",
            letterSpacing: "-1.44 px",
            lineHeight: "56px",
          }}
        >
          Create pages using beautiful components.
        </h1>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "36px",
            marginTop: "31px",
            height: "108px",
            width: "525.87px",
            marginLeft: "60px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
          consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non
          lectus dapibus, a pulvinar mauris aliquam.
        </p>
        <button
          style={{
            backgroundColor: "#F7F9FC",
            paddingBlock: "10px",
            color: "black",
            marginLeft: "60px",
            marginTop: "72px",
            paddingInline: "28px",
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "500",
            marginBottom: "238px",
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Sections;
