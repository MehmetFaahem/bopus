import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import GetStarted from "../components/GetStarted";
import Sections from "../components/Sections";
import Features from "../components/Features";
import Knowledge from "../components/Knowledge";
import Stamps from "../components/Stamps";
import Resources from "../components/Resources";
import Footer from "../components/Footer";

export default function Home() {
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

  const array = [...Array(36)];

  return (
    <div>
      <Head>
        <title>Opus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={<Logo />} />
      </Head>
      <div className="bg-white">
        <div className="relative">
          <div id="logo">
            <div className="flex place-items-center justify-between">
              <div className="flex">
                <Logo />
                <Image
                  src="https://i.ibb.co/DfVH2Bg/Capture.png"
                  height="20"
                  width="60"
                />
              </div>
              <div className="mobile:hidden laptop:flex space-x-6">
                <Link href="/">Overview</Link>
                <Link href="/">Pages</Link>
                <Link href="/">Template</Link>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#1355FF",
                    padding: "10px",
                    color: "white",
                  }}
                  className="mobile:hidden laptop:flex"
                >
                  Contact Us
                </button>
                <button className="px-2 py-3 laptop:hidden mobile:flex border-2 border-gray-300">
                  <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.57812 12C1.29479 12 1.05746 11.904 0.866125 11.712C0.674125 11.5207 0.578125 11.2833 0.578125 11C0.578125 10.7167 0.674125 10.4793 0.866125 10.288C1.05746 10.096 1.29479 10 1.57812 10H17.5781C17.8615 10 18.0988 10.096 18.2901 10.288C18.4821 10.4793 18.5781 10.7167 18.5781 11C18.5781 11.2833 18.4821 11.5207 18.2901 11.712C18.0988 11.904 17.8615 12 17.5781 12H1.57812ZM1.57812 7C1.29479 7 1.05746 6.904 0.866125 6.712C0.674125 6.52067 0.578125 6.28333 0.578125 6C0.578125 5.71667 0.674125 5.479 0.866125 5.287C1.05746 5.09567 1.29479 5 1.57812 5H17.5781C17.8615 5 18.0988 5.09567 18.2901 5.287C18.4821 5.479 18.5781 5.71667 18.5781 6C18.5781 6.28333 18.4821 6.52067 18.2901 6.712C18.0988 6.904 17.8615 7 17.5781 7H1.57812ZM1.57812 2C1.29479 2 1.05746 1.90433 0.866125 1.713C0.674125 1.521 0.578125 1.28333 0.578125 1C0.578125 0.716667 0.674125 0.479 0.866125 0.287C1.05746 0.0956668 1.29479 0 1.57812 0H17.5781C17.8615 0 18.0988 0.0956668 18.2901 0.287C18.4821 0.479 18.5781 0.716667 18.5781 1C18.5781 1.28333 18.4821 1.521 18.2901 1.713C18.0988 1.90433 17.8615 2 17.5781 2H1.57812Z"
                      fill="#1355FF"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              height: "64px",
              width: "64px",
              backgroundColor: "#1355FF",
              marginInline: "100px",
            }}
          />

          <div
            style={{
              height: "636.39px",
              width: "529.19px",
              backgroundColor: "#1355FF",

              right: 0,
              top: "120px",
              zIndex: 2,
            }}
            className="absolute"
          >
            <div id="vectors" className="grid gap-y-10">
              {array.map((_, index) => (
                <div
                  key={index}
                  style={{
                    height: "3px",
                    width: "3px",
                    backgroundColor: "#0133B7",
                  }}
                />
              ))}
            </div>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#0133B7",
                top: "96px",
                right: "218px",
                zIndex: 5,
                position: "absolute",
              }}
            />
          </div>
        </div>
        <div>
          <div
            style={{
              height: "615px",
              width: "1200px",
              backgroundColor: "#061237",
              zIndex: -1,
            }}
          >
            <div
              style={{
                backgroundColor: "#1355FF",
                position: "absolute",
                left: "164px",
                height: "32px",
                width: "32px",
              }}
            />
            <h1
              style={{
                color: "white",
                fontSize: "64px",
                fontWeight: "700",
                lineHeight: "68px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "266px",
                paddingTop: "143px",
              }}
              className="space-x-1"
            >
              Built for
              <span className="flex">
                enterprise{" "}
                <span className="ml-6">
                  <svg
                    width="54"
                    height="73"
                    viewBox="0 0 54 73"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.48438 69C15.4574 63.5673 44.5282 45.8518 49.0268 18.4518C54.6501 -15.7981 6.08525 20.8139 32.1569 67.1103"
                      stroke="#1355FF"
                      stroke-width="8"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>{" "}
              </span>
              <span>businesses.</span>
            </h1>
            <div
              className="absolute"
              style={{
                right: "266px",
                top: "264px",
                zIndex: 3,
              }}
            >
              <div
                className="bg-white absolute"
                style={{
                  height: "288px",
                  width: "336px",
                  top: "299px",
                  left: "182px",
                  padding: "40px",
                }}
              >
                <h1
                  style={{
                    fontSize: "16px",
                    lineHeight: "32px",
                  }}
                >
                  I felt like I couldn&apos;t grow until I moved to Opus. Now I
                  am encouraged to sell more with them.
                </h1>
                <h1
                  style={{
                    color: "#333333",
                    fontWeight: 700,
                    fontSize: "24px",
                    marginTop: "23px",
                    display: "flex",
                  }}
                >
                  Frank Dublin{" "}
                  <span className="ml-11">
                    <svg
                      width="53"
                      height="40"
                      viewBox="0 0 53 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.3883 8.9564C18.759 9.28706 15.2456 10.6924 12.8483 13.1724C10.451 15.5697 9.45896 18.8351 9.87229 22.9684H11.3603C11.939 21.1497 13.4683 20.2404 15.9483 20.2404C18.1803 20.2404 20.123 21.1084 21.7763 22.8444C23.4296 24.5804 24.2563 26.8537 24.2563 29.6644C24.2563 32.7231 23.2643 35.2031 21.2803 37.1044C19.2963 39.0057 16.6923 39.9564 13.4683 39.9564C9.41762 39.9564 6.27629 38.4684 4.04429 35.4924C1.81229 32.4337 0.696289 28.4244 0.696289 23.4644C0.696289 17.4297 2.51496 12.2217 6.15229 7.84039C9.87229 3.37639 15.6176 0.89638 23.3883 0.400391V8.9564ZM51.4123 8.9564C46.783 9.28706 43.2696 10.6924 40.8723 13.1724C38.475 15.5697 37.4416 18.8351 37.7723 22.9684H39.2603C39.839 21.1497 41.4096 20.2404 43.9723 20.2404C46.2043 20.2404 48.147 21.1084 49.8003 22.8444C51.4536 24.5804 52.2803 26.8537 52.2803 29.6644C52.2803 32.7231 51.2883 35.2031 49.3043 37.1044C47.3203 39.0057 44.7163 39.9564 41.4923 39.9564C37.359 39.9564 34.1763 38.4684 31.9443 35.4924C29.795 32.4337 28.7203 28.4244 28.7203 23.4644C28.7203 17.4297 30.539 12.2217 34.1763 7.84039C37.8963 3.37639 43.6416 0.89638 51.4123 0.400391V8.9564Z"
                        fill="#DADDE7"
                      />
                    </svg>
                  </span>
                </h1>

                <h1
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  <span
                    style={{
                      color: "#67718E",
                    }}
                  >
                    CEO
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
              <Image
                src="https://i.ibb.co/yPwqhmg/61779b485e784ee5e1620a21-Image-png.png"
                width={"470"}
                height={"587"}
              />
            </div>
            <div
              style={{
                backgroundColor: "#0B1A46",
                width: "93px",
                height: "93px",
                position: "absolute",
                left: "123.9px",
                top: "538.75px",
              }}
            />
            <h3
              style={{
                width: "420.98px",
                height: "108px",
                color: "white",
                fontWeight: "400",
                lineHeight: "36px",
                marginLeft: "266px",
                marginTop: "16px",
                fontSize: "18px",
              }}
            >
              Opus includes everything you need to build a beautiful website for
              your business. Built to perform and look good doing so.
            </h3>
            <div className="flex flex-row place-items-center mt-10">
              <button
                style={{
                  backgroundColor: "#1355FF",
                  color: "white",
                  padding: "13px",
                  marginLeft: "266px",
                }}
              >
                Learn More
              </button>
              <button className="text-white ml-8">Explore Pages</button>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#F7F9FC",
              width: "392px",
              height: "116px",
              position: "absolute",
              left: "266px",
            }}
          >
            <div
              style={{
                paddingBlock: "48px",
                marginLeft: "100px",
                display: "flex",
              }}
            >
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.141 2.5C5.559 2.5 4.754 2.669 4.013 3.065C3.39502 3.39015 2.89015 3.89502 2.565 4.513C2.169 5.253 2 6.059 2 7.64V13.358C2 14.94 2.169 15.745 2.565 16.486C2.902 17.116 3.383 17.597 4.013 17.934C4.753 18.33 5.559 18.499 7.141 18.499H8.859C10.441 18.499 11.246 18.33 11.987 17.934C12.605 17.6089 13.1098 17.104 13.435 16.486C13.831 15.746 14 14.94 14 13.358V7.64C14 6.058 13.831 5.253 13.435 4.512C13.1098 3.89402 12.605 3.38915 11.987 3.064C11.247 2.669 10.441 2.5 8.86 2.5H7.14H7.141ZM7.141 0.5H8.859C10.873 0.5 11.953 0.778 12.931 1.301C13.8973 1.81249 14.6875 2.60269 15.199 3.569C15.722 4.547 16 5.627 16 7.641V13.359C16 15.373 15.722 16.453 15.199 17.431C14.6875 18.3973 13.8973 19.1875 12.931 19.699C11.953 20.222 10.873 20.5 8.859 20.5H7.14C5.126 20.5 4.046 20.222 3.068 19.699C2.10169 19.1875 1.31149 18.3973 0.8 17.431C0.278 16.453 0 15.373 0 13.359V7.64C0 5.626 0.278 4.546 0.801 3.568C1.31292 2.60192 2.10347 1.81206 3.07 1.301C4.047 0.778 5.127 0.5 7.141 0.5ZM7 4.5H9V9.5H7V4.5Z"
                  fill="#B6BCCE"
                />
              </svg>
              <span
                style={{
                  color: "#B6BCCE",
                  marginLeft: "16px",
                  letterSpacing: "1.5px",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                SCROLL FOR MORE
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#1355FF",
              width: "588px",
              height: "116px",
              position: "absolute",
              right: "266px",
            }}
          />
        </div>
        <div>
          <h1
            style={{
              marginTop: "212px",
              fontSize: "32px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Trusted and loved by the world&apos;s best teams
          </h1>
          <div className="flex place-content-center mt-10">
            <Image
              src="https://i.ibb.co/N2n4kw4/gd.png"
              width="1000"
              height="800"
            />
          </div>
          <div
            style={{
              paddingInline: "257.23px",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "160px",
            }}
          >
            <div className="text-center">
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "37px",
                }}
              >
                99.95%
              </h1>
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Accuracy rate
              </h1>
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#67718E",
                }}
              >
                in fulfilling orders
              </h1>
            </div>

            <div className="text-center">
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "37px",
                }}
              >
                5,000+
              </h1>
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Ecommerce businesses
              </h1>
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#67718E",
                }}
              >
                partner with Opus
              </h1>
            </div>

            <div className="text-center">
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "37px",
                }}
              >
                99.96%
              </h1>
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Of orders ship on time
              </h1>
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#67718E",
                }}
              >
                within SLA
              </h1>
            </div>

            <div className="text-center">
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "37px",
                }}
              >
                <span style={{ color: "#DADDE7" }}>#</span>
                <span>1</span>
              </h1>
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Best Fulfillment Technology
              </h1>
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#67718E",
                }}
              >
                by AdWeek’s Retail Awards
              </h1>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundColor: "#F7F9FC",
                height: "64px",
                width: "64px",
                left: "260px",
                position: "absolute",
                marginTop: "216px",
                overflow: "visible",
              }}
            />
            <p
              style={{
                position: "absolute",
                fontSize: "14px",
                fontWeight: "700",
                top: "1730px",
                left: "292px",
                color: "#67718E",
              }}
            >
              VIDEO TITLE
            </p>
          </div>
          <div>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                marginTop: "311px",
                marginLeft: "260px",
              }}
            >
              Inform users with video sections
            </h1>
            <div
              style={{
                paddingInline: "260px",
                marginTop: "57px",
                position: "relative",
                zIndex: 60,
              }}
            >
              <div
                style={{
                  width: "92px",
                  height: "92px",
                  borderRadius: "46px",
                  position: "absolute",
                  backgroundColor: "white",
                  marginBlock: "227px",
                  marginInline: "448px",
                }}
              >
                <div style={{ padding: "38.5px" }}>
                  <svg
                    width="15"
                    height="19"
                    viewBox="0 0 15 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.22 10.0199L0.971251 18.8524C0.877134 18.9151 0.767783 18.9509 0.654866 18.9564C0.541933 18.9618 0.429667 18.9364 0.33 18.8831C0.230333 18.8298 0.147 18.7503 0.0888999 18.6534C0.0307833 18.5564 6.66667e-05 18.4454 0 18.3324V0.667405C6.66667e-05 0.554355 0.0307833 0.443438 0.0888999 0.346455C0.147 0.249488 0.230333 0.170088 0.33 0.116722C0.429667 0.0633716 0.541933 0.0380381 0.654866 0.0434381C0.767783 0.0488381 0.877134 0.0847719 0.971251 0.147405L14.22 8.97992C14.3057 9.03692 14.3758 9.11426 14.4243 9.20509C14.4728 9.29576 14.4983 9.39709 14.4983 9.49992C14.4983 9.60276 14.4728 9.70409 14.4243 9.79475C14.3758 9.88542 14.3057 9.96276 14.22 10.0199Z"
                      fill="#061237"
                    />
                  </svg>
                </div>
              </div>
              <Image
                src="https://i.ibb.co/Jr7kJHS/61779b485e784e6a236209a7-Video-Section-png.png"
                height="550"
                width="992"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "right",
              }}
            >
              <div id="vectors2" className="grid gap-y-10">
                {array.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      height: "3px",
                      width: "3px",
                      backgroundColor: "#DADDE7",
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  backgroundColor: "#F2F3F8",
                  width: "92px",
                  height: "92px",
                  position: "absolute",
                  left: "168px",
                  zIndex: 70,
                }}
              />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "36px",
                  marginTop: "31px",
                  height: "108px",
                  width: "525.87px",
                  marginRight: "278.13px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar
                arcu non lectus dapibus, a pulvinar mauris aliquam.
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "250px",
            }}
          >
            <div
              style={{
                backgroundColor: "#F7F9FC",
                width: "64px",
                height: "64px",
                position: "absolute",
                left: "196px",
              }}
            />
            <div className="flex">
              <div>
                <h1
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    marginLeft: "196px",
                    marginTop: "70px",
                    width: "400px",
                    letterSpacing: "-1.44 px",
                    lineHeight: "56px",
                  }}
                >
                  Make your site better with Opus
                </h1>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "36px",
                    marginTop: "31px",
                    height: "108px",
                    width: "525.87px",
                    marginLeft: "260px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  eget consectetur eros. Aliquam erat volutpat. Praesent
                  pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.
                </p>
                <button
                  style={{
                    backgroundColor: "#1355FF",
                    paddingBlock: "10px",
                    color: "white",
                    marginLeft: "260px",
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
              <div>
                <div
                  style={{
                    backgroundColor: "#F2F3F8",
                    width: "342.36px",
                    height: "496.42px",
                    marginLeft: "215.32px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "white",
                    width: "418px",
                    height: "184px",
                    top: "2835.5px",
                    right: "200px",
                  }}
                >
                  <h1
                    style={{
                      color: "black",
                      fontSize: "24px",
                      fontWeight: "700",
                      lineHeight: "32px",
                      padding: "40px",
                    }}
                  >
                    <svg
                      width="16"
                      height="26"
                      viewBox="0 0 16 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        marginBottom: "32.65px",
                      }}
                    >
                      <path
                        d="M9.38751 13.95L13.25 24.5675L9.72751 25.85L5.86251 15.2325L0.647507 19.1775L2.51001 0.54126L15.9175 13.62L9.38751 13.95Z"
                        fill="#1355FF"
                      />
                    </svg>
                    Build or Customize a Website in Minutes
                  </h1>
                </div>

                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "white",
                    width: "418px",
                    height: "184px",
                    top: "3059.5px",
                    right: "200px",
                  }}
                >
                  <h1
                    style={{
                      color: "black",
                      fontSize: "24px",
                      fontWeight: "700",
                      lineHeight: "32px",
                      padding: "40px",
                    }}
                  >
                    <svg
                      width="24"
                      height="28"
                      viewBox="0 0 24 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        marginBottom: "32.65px",
                      }}
                    >
                      <path
                        d="M0.599609 21.0675C2.3198 13.4559 5.9954 6.4246 11.2634 0.667528C11.357 0.565618 11.4708 0.484268 11.5976 0.428618C11.7243 0.372968 11.8612 0.344238 11.9996 0.344238C12.138 0.344238 12.2749 0.372968 12.4017 0.428618C12.5284 0.484268 12.6422 0.565618 12.7359 0.667528C12.9434 0.892528 13.1159 1.08253 13.2521 1.23628C18.2478 6.8886 21.7379 13.7092 23.3996 21.0675C20.7234 21.6313 17.9746 22.0013 15.1696 22.16L12.5584 27.3825C12.5064 27.4862 12.4266 27.5734 12.3279 27.6343C12.2293 27.6952 12.1156 27.7275 11.9996 27.7275C11.8836 27.7275 11.77 27.6952 11.6713 27.6343C11.5726 27.5734 11.4928 27.4862 11.4409 27.3825L8.8296 22.16C6.0627 22.0036 3.3115 21.6384 0.599609 21.0675ZM11.9996 17.25C12.9942 17.25 13.948 16.8549 14.6513 16.1517C15.3545 15.4484 15.7496 14.4946 15.7496 13.5C15.7496 12.5055 15.3545 11.5516 14.6513 10.8484C13.948 10.1451 12.9942 9.75 11.9996 9.75C11.005 9.75 10.0512 10.1451 9.348 10.8484C8.6447 11.5516 8.2496 12.5055 8.2496 13.5C8.2496 14.4946 8.6447 15.4484 9.348 16.1517C10.0512 16.8549 11.005 17.25 11.9996 17.25Z"
                        fill="#1355FF"
                      />
                    </svg>
                    Our UI Kit was made for creativity.
                  </h1>
                </div>
              </div>
            </div>
            <GetStarted />
            <Sections />
            <Features />
            <Knowledge />
            <Stamps />
            <Resources />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
