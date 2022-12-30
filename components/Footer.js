import React from "react";
import Image from "next/image";

export default function Footer() {
  const Logo = () => {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9993 0.666016C21.3593 0.666016 27.3327 6.63935 27.3327 13.9993C27.3327 21.3593 21.3593 27.3327 13.9993 27.3327C6.63935 27.3327 0.666016 21.3593 0.666016 13.9993C0.666016 6.63935 6.63935 0.666016 13.9993 0.666016ZM13.9993 24.666C19.902 24.666 24.666 19.902 24.666 13.9993C24.666 8.0967 19.902 3.33268 13.9993 3.33268C12.5981 3.33093 11.2102 3.60563 9.9153 4.14106C8.6204 4.67649 7.4438 5.46212 6.45296 6.45296C5.46212 7.4438 4.67649 8.6204 4.14106 9.9153C3.60563 11.2102 3.33093 12.5981 3.33268 13.9993C3.33268 19.902 8.0967 24.666 13.9993 24.666ZM13.9993 21.9993C9.5727 21.9993 5.99935 18.426 5.99935 13.9993C5.99935 9.5727 9.5727 5.99935 13.9993 5.99935C18.426 5.99935 21.9993 9.5727 21.9993 13.9993C21.9993 18.426 18.426 21.9993 13.9993 21.9993ZM13.9993 11.3327C12.5327 11.3327 11.3327 12.5327 11.3327 13.9993C11.3327 15.466 12.5327 16.666 13.9993 16.666C15.466 16.666 16.666 15.466 16.666 13.9993C16.666 12.5327 15.466 11.3327 13.9993 11.3327Z"
          fill="#1355FF"
        />
      </svg>
    );
  };

  return (
    <div
      style={{
        paddingTop: "194.67px",
        paddingInline: "198px",
      }}
    >
      <div>
        <div
          className="flex"
          style={{
            marginBottom: "55.82px",
          }}
        >
          <Logo />
          <Image
            src="https://i.ibb.co/DfVH2Bg/Capture.png"
            height="20"
            width="60"
          />
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div>
              <h1
                style={{
                  color: "#B6BCCE",
                  letterSpacing: "1.5px",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                OVERVIEW
              </h1>
              <div>
                <p id="footerItems">Overview</p>
                <p id="footerItems">Landings</p>
                <p id="footerItems">Company</p>
                <p id="footerItems">Pricing</p>
                <p id="footerItems">CMS Pages</p>
                <p id="footerItems">Accounts</p>
                <p id="footerItems">Buy for figma</p>
              </div>
            </div>

            <div
              style={{
                marginLeft: "105.66px",
              }}
            >
              <h1
                style={{
                  color: "#B6BCCE",
                  letterSpacing: "1.5px",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                PAGES
              </h1>
              <div>
                <p id="footerItems">Landing 1</p>
                <p id="footerItems">Landing 2</p>
                <p id="footerItems">Landing 3</p>
                <p id="footerItems">Company 1</p>
                <p id="footerItems">Company 2</p>
                <p id="footerItems">Company 3</p>
                <p id="footerItems">Blog 1</p>
                <p id="footerItems">Blog 2</p>
                <p id="footerItems">Contact 1</p>
                <p id="footerItems">Contact 2</p>
                <p id="footerItems">Contact 3</p>
              </div>
            </div>

            <div
              style={{
                marginLeft: "105.66px",
              }}
            >
              <h1
                style={{
                  color: "#B6BCCE",
                  letterSpacing: "1.5px",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                PAGES
              </h1>
              <div>
                <p id="footerItems">Case Studies</p>
                <p id="footerItems">Careers</p>
                <p id="footerItems">Pricing 1</p>
                <p id="footerItems">Pricing 2</p>
                <p id="footerItems">Pricing 3</p>
                <p id="footerItems">Login</p>
                <p id="footerItems">Register</p>
                <p id="footerItems">Forgot Password</p>
                <p id="footerItems">Blog Post</p>
                <p id="footerItems">Team Member</p>
                <p id="footerItems">Case Study</p>
                <p id="footerItems">Job Post</p>
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: "108.67px",
            }}
          >
            <div
              style={{
                borderColor: "#F2F3F8",
                borderWidth: "2px",
                borderStyle: "solid",
                padding: "2px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <input
                  placeholder="Email address"
                  style={{
                    padding: "15px",
                  }}
                />
                <button
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    paddingBlock: "11px",
                    paddingInline: "24px",
                    backgroundColor: "#1355FF",
                    color: "white",
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                    lineHeight: "24px",
                    color: "#B6BCCE",
                    marginTop: "35px",
                  }}
                >
                  OPUS FOR WEBFLOW
                </h1>
                <h1
                  style={{
                    color: "#1355FF",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "32px",
                    letterSpacing: "-0.28 px",
                    marginTop: "9px",
                  }}
                >
                  Lorem Ipsum
                </h1>
              </div>
              <div
                style={{
                  marginLeft: "127px",
                }}
              >
                <h1
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                    lineHeight: "24px",
                    color: "#B6BCCE",
                    marginTop: "35px",
                  }}
                >
                  OPUS FOR FIGMA
                </h1>
                <h1
                  style={{
                    color: "#1355FF",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "32px",
                    letterSpacing: "-0.28 px",
                    marginTop: "9px",
                  }}
                >
                  Lorem Ipsum
                </h1>
              </div>
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "32px",
                marginTop: "42px",
              }}
            >
              <span
                style={{
                  color: "#B6BCCE",
                }}
              >
                © Template by
              </span>{" "}
              <span
                style={{
                  color: "#1355FF",
                }}
              >
                Lorem
              </span>{" "}
              <span
                style={{
                  color: "#B6BCCE",
                }}
              >
                - Powered by
              </span>{" "}
              <span
                style={{
                  color: "#1355FF",
                }}
              >
                Ipsum
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#F2F3F8",
            marginTop: "49px",
          }}
        />
        <div
          style={{
            marginTop: "31px",
            marginBottom: "41px",
            display: "flex",
          }}
        >
          <h1
            style={{
              color: "#67718E",
              fontSize: "400",
              lineHeight: "24px",
              letterSpacing: "-0.28 px",
            }}
          >
            Style Guide
          </h1>
          <h1
            style={{
              color: "#67718E",
              fontSize: "400",
              lineHeight: "24px",
              letterSpacing: "-0.28 px",
              marginLeft: "34.60px",
            }}
          >
            Licence
          </h1>
          <h1
            style={{
              color: "#67718E",
              fontSize: "400",
              lineHeight: "24px",
              letterSpacing: "-0.28 px",
              marginLeft: "34.60px",
            }}
          >
            Changelog
          </h1>
        </div>
      </div>
    </div>
  );
}
