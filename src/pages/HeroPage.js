import React from "react";
import image1 from "../images/house2.jpg";
import image2 from "../images/house3.jpg";
import home_icon from "../images/realtor-icon-4-dark.png";
import p2 from "../images/p2.png";
import coffee from "../images/coffee.png";
import firebase from "firebase/compat";
import cookie from "js-cookie";
import logo from "../images/sm3.png";

import {
  scrollCTA,
  isFunnel,
  mainButtonLink,
  mainButtonTitle,
  contactButtonTitle,
  businessBlurb,
  contactEmail,
  contactPhone,
  contactTitle,
  mailChimpSource,
  secondary,
  imageURLArray,
  secondaryContent,
  secondaryContentTitle,
  supportingBlurb,
  supportingHeading,
  supportingHeadingTitle,
  titleBlurb,
  titleContent,
  RouteItems,
  contactBlurb,
  businessBlurbShort,
  secondaryContent1,
  p3Content1,
  p3Heading1,
  secondaryHeader,
  secondaryHeading1,
  secondaryPhoto1,
  contactCTA,
  p3ContentPhoto,
  backgroundType,
  bgClass,
  tLogo,
  hasScroll,
  supportingHeading2,
  igT,
  mapsCenter,
  businessName,
  font,
} from "../content";
import { rootStore } from "../stores/Store";
import { toJS } from "mobx";
import builder from "../images/builder.png";
import SimpleMap from "./SimpleMap";
import { NavBar } from "./MarketingHeroPage";

export const scrollActivate = () => {
  const scrollElements = document.querySelectorAll(".js-scroll");

  var throttleTimer;

  const throttle = (callback, time) => {
    if (throttleTimer) return;

    throttleTimer = true;
    setTimeout(() => {
      callback();
      throttleTimer = false;
    }, time);
  };

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el);
      }
    });
  };
  var timer = 0;
  var count = 0;
  var scroll = 0;

  window.addEventListener("scroll", () => {
    throttle(() => {
      handleScrollAnimation();
    }, 250);
  });
};
export class HeroPage extends React.Component {
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
    console.log(businessBlurbShort, contactTitle, contactPhone, "????");
    this.state = {
      code: "",
      showSaleSuccess: false,
      currentMainImage: 0,
      mainArray: [image1, image2],
      content: {
        scrollCTA: scrollCTA || false,
        isFunnel: isFunnel || false,
        mapsCenter: mapsCenter,
        businessName: businessName,
        businessBlurb: businessBlurb,
        businessBlurbShort: businessBlurbShort,
        supportingBlurb: supportingBlurb,
        contactBlurb: contactBlurb,
        contactEmail: contactEmail,
        contactPhone: contactPhone,
        contactTitle: contactTitle,
        p3Content1: p3Content1,
        p3Heading1: p3Heading1,
        mainButtonTitle: mainButtonTitle,
        mainButtonLink: mainButtonLink,
        font: font,

        secondaryContent: secondaryContent,
        secondaryContent1: secondaryContent1,
        secondaryContentTitle: secondaryContentTitle,
        secondaryHeader: secondaryHeader,
        secondaryHeading1: secondaryHeading1,
        supportingHeading: supportingHeading,
        supportingHeadingTitle: supportingHeadingTitle,
        titleBlurb: titleBlurb,
        titleContent: titleContent,
        supportingHeading2,

        backgroundType: backgroundType,
        class: bgClass,
        imageURLArray: imageURLArray,
        routeItems: [],
        routeItemsDefault: RouteItems,
        logo: tLogo,
        hasScroll: hasScroll,
        igT: igT,
      },
    };
  }

  componentDidMount() {
    scrollActivate();
  }
  changeCode(e) {
    this.setState({ code: e.target.value });
  }
  shiftCurrentImage() {}
  nextImage() {
    this.setState({
      currentMainImage: this.state.currentMainImage + 1,
    });
  }
  handleContentFormChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      const { content } = prevState;
      content[name] = value;
      return { content };
    });
  };

  render() {
    let customerHasPaid = false;
    console.log(
      "test:",
      firebase.apps.length,
      toJS(rootStore.pageStore.code),
      isFunnel,
      !this.state.isFunnel
    );

    const isMobile = window.innerWidth <= 768;
    return (
      <div>
        {!this.state.isFunnel ? null : (
          <NavBar
            content={this.state.content}
            isMarketing={false}
            routeItems={
              this.state.content.routeItemsDefault
                ? this.state.content.routeItemsDefault.concat(
                    this.state.content.routeItems
                  )
                : RouteItems
            }
            backgroundType={this.state.content.backgroundType || "bg-dark-blue"}
          />
        )}
        <div
          style={{
            height: "100%",
            position: "relative",
            backgroundColor: this.state.content.backgroundType,
            color: this.state.content.font,
          }}
        >
          <div style={{ color: this.state.content.font }}>
            <div>
              <div
                style={{
                  position: "absolute",
                  zIndex: 8999,
                  width: "100%",
                  marginTop: "100px",
                }}
              >
                {/* <div
                  style={{
                    paddingTop: 80,
                    marginBottom: 0,
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ maxWidth: 350 }}
                    src={this.state.content.logo || logo}
                  />
                </div> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      padding: 30,
                      minWidth: 300,
                      maxWidth: 630,
                      width: "100%",
                      paddingTop: 0,
                      paddingLeft: 10,
                      paddingRight: 0,
                      textAlign: "center",
                    }}
                  >
                    <h1>{this.state.content.titleContent}</h1>{" "}
                    <p style={{ fontSize: 20, marginLeft: 0 }} className="mb-4">
                      {this.state.content.titleBlurb}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <div
                        className="altButtonOuter"
                        onClick={() => {
                          firebase.analytics().logEvent("view_contact_btn");
                          this.contactRef.current.scrollIntoView();
                        }}
                      >
                        <div
                          className="altButton"
                          style={{
                            backgroundColor: this.state.content.class,
                            color: this.state.content.font,
                          }}
                        >
                          Apply Now
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      paddingTop: 40,
                      marginBottom: 0,
                      display: "flex",
                      justifyContent: isMobile ? "center" : "flex-end",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{
                        maxWidth: isMobile ? 515 : 710,
                        marginTop: isMobile ? "-70px" : "-180px",
                        position: isMobile ? "relative" : "absolute",
                      }}
                      src={this.state.content.logo || logo}
                    />
                  </div>
                </div>
              </div>
              <div className="myDIV" style={{ minHeight: 900 }}>
                <img
                  onClick={() => {
                    this.nextImage();
                  }}
                  key={this.state.currentMainImage}
                  src={
                    this.state.content.imageURLArray[0] ||
                    this.state.content.generatedImageURI
                  }
                  className="fadedshort"
                  style={{
                    width: "100%",
                    height: 790,
                    objectFit: "cover",
                    borderBottom: "2px solid #000",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="py-6 bg-mainColor"
            style={{ padding: 0, overflow: "hidden" }}
          >
            <div
              style={{
                backgroundColor: this.state.content.backgroundType,
                // backgroundImage: `linear-gradient(to bottom, ${this.state.content.backgroundType}, ${this.state.content.class})`,
              }}
            >
              <div
                className={`container `}
                style={{
                  width: isMobile ? "100%" : "75%",
                  position: "relative",
                  marginRight: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    // backgroundImage: `linear-gradient(to bottom, ${this.state.content.backgroundType}, ${this.state.content.class})`,
                    background: ` ${this.state.content.class}`,
                    border: `1px solid ${this.state.content.class}`,
                    borderBottomLeftRadius: isMobile ? 0 : 30,
                    borderTopLeftRadius: isMobile ? 0 : 30,
                  }}
                ></div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 40,
                    flexWrap: "wrap",
                    paddingBottom: 40,
                    marginBottom: 70,
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img
                      style={{
                        margin: 30,
                        width: "50vw",
                        minWidth: 350,
                        position: "relative",
                        zIndex: 9999,
                        borderRadius: 20,
                      }}
                      src={
                        (this.state.content.imageURLArray &&
                          this.state.content.imageURLArray[2]) ||
                        logo
                      }
                      alt=""
                      width="50%"
                    />
                  </div>
                  <div
                    style={{
                      minWith: "99vw",
                      minWidth: 300,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        paddingLeft: 15,
                        marginBottom: 0,
                        whiteSpace: "break-spaces",
                        color: this.state.content.font,
                        position: "relative",
                        zIndex: 9999,
                      }}
                    >
                      {this.state.content.secondaryContentTitle}
                    </h3>
                    <p
                      style={{
                        fontSize: 18,
                        paddingLeft: 15,
                        paddingTop: 10,
                        whiteSpace: "break-spaces",
                        color: this.state.content.font,
                        position: "relative",
                        zIndex: 9999,
                      }}
                    >
                      {this.state.content.secondaryContent}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="container"
                style={{
                  marginTop: "50px ",
                  marginBottom: "100px ",
                  color: this.state.content.font,
                  width: "100%",
                }}
              >
                <div style={{ paddingTop: 60 }}>
                  <div
                    className={`scrollContainer`}
                    style={{
                      borderRadius: 12,
                      backgroundImage: isMobile
                        ? ` ${this.state.content.class}`
                        : `linear-gradient(
                        to top,
                        ${this.state.content.class} 75%,
                        transparent 75%)`,
                      width: "100%",
                    }}
                  >
                    <div
                      className={`${
                        this.state.content.hasScroll &&
                        "scroll-element js-scroll slide-left starting"
                      }`}
                      style={{ padding: 33, width: "100%" }}
                    >
                      {/*  */}
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          style={{
                            margin: 30,
                            width: "30vw",
                            minWidth: 350,
                            position: "relative",
                            zIndex: 9999,
                            borderRadius: 20,
                          }}
                          src={
                            (this.state.content.imageURLArray &&
                              this.state.content.imageURLArray[2]) ||
                            logo
                          }
                          alt=""
                          width="50%"
                        />
                      </div>
                      <div className="px-4">
                        <p>
                          <h1
                            style={{
                              fontSize: "1.5rem",
                              whiteSpace: "break-spaces",
                              textAlign: "center",
                            }}
                          >
                            {this.state.content.supportingHeadingTitle}
                          </h1>
                          <p
                            style={{
                              fontSize: 18,

                              whiteSpace: "break-spaces",
                              textAlign: "center",
                            }}
                          >
                            {this.state.content.supportingHeading}
                          </p>
                        </p>
                      </div>
                      <br />
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* new section  */}
              <div
                className="new-container"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: 20,
                  position: "relative",
                  justifyContent: "center",
                  width: isMobile ? "100%" : "75%",
                  // backgroundImage: `linear-gradient(to top, ${this.state.content.backgroundType}, ${this.state.content.class})`,
                  background: `${this.state.content.class}`,
                  marginTop: 50,
                  marginLeft: 0,
                  borderBottomRightRadius: isMobile ? 0 : 30,
                  borderTopRightRadius: isMobile ? 0 : 30,
                  marginBottom: 100,
                  border: `1px solid ${this.state.content.class}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 40,
                    flexWrap: "wrap",
                    paddingBottom: 40,
                    marginBottom: 70,
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img
                      style={{
                        margin: 30,
                        width: "50vw",
                        minWidth: 350,
                        position: "relative",
                        zIndex: 9999,
                        borderRadius: 20,
                      }}
                      src={
                        (this.state.content.imageURLArray &&
                          this.state.content.imageURLArray[2]) ||
                        logo
                      }
                      alt=""
                      width="50%"
                    />
                  </div>
                  <div style={{ minWith: "99vw", minWidth: 300 }}>
                    <h3
                      style={{
                        paddingLeft: 15,
                        marginBottom: 0,
                        whiteSpace: "break-spaces",
                        color: this.state.content.font,
                        position: "relative",
                        zIndex: 9999,
                        textAlign: "center",
                      }}
                    >
                      {this.state.content.p3Heading1}
                    </h3>
                    <p
                      style={{
                        fontSize: 18,
                        paddingLeft: 15,
                        paddingTop: 10,
                        whiteSpace: "break-spaces",
                        color: this.state.content.font,
                        position: "relative",
                        zIndex: 9999,
                        textAlign: "center",
                      }}
                    >
                      {this.state.content.p3Content1}
                    </p>
                  </div>
                </div>
              </div>

              {/* template example of where the review section may go. to be replaced */}
              <div
                className="reveiew-header"
                style={{
                  height: "100%",
                  width: "100%",
                  color: this.state.content.font,
                  textAlign: "center",
                }}
              >
                <h3>
                  Dont just take our word for it. See what our clients have to
                  say.
                </h3>
              </div>
              <div
                className="review-section"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: this.state.content.class,
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexDirection: "row",
                  padding: 50,
                  overflow: "scroll",
                }}
              >
                <div
                  className="review"
                  style={{
                    height: "200px",
                    width: "250px",
                    backgroundColor: "#fff",
                    borderRadius: 20,
                  }}
                ></div>
                <div
                  className="review"
                  style={{
                    height: "200px",
                    width: "250px",
                    backgroundColor: "#fff",
                    borderRadius: 20,
                  }}
                ></div>
                <div
                  className="review"
                  style={{
                    height: "200px",
                    width: "250px",
                    backgroundColor: "#fff",
                    borderRadius: 20,
                  }}
                ></div>
              </div>
              {/* </div> */}
              <div ref={this.contactRef} style={{ marginTop: 40 }}>
                <div
                  className={`supportingColor secondaryBackgroundColor`}
                  style={{
                    marginTop: 40,
                    padding: 40,
                    margin: 0,
                    backgroundColor: this.state.content.class,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                      <div
                        className="templateCTA"
                        onClick={() => {
                          firebase.analytics().logEvent("view_range_btn");
                          window.location.href =
                            this.state.content.mainButtonLink;
                        }}
                      >
                        <div
                          className="altButton"
                          style={{
                            backgroundColor: this.state.content.class,
                            color: this.state.content.font,
                          }}
                        >
                          {this.state.content.mainButtonTitle || "Apply Now"}
                        </div>
                      </div>
                      <p
                        style={{
                          marginBottom: 30,
                          paddingLeft: 15,
                          paddingTop: 10,
                          width: "60vw",
                          minWidth: 300,
                          textAlign: "center",
                          whiteSpace: "break-spaces",
                          color: this.state.content.font,
                        }}
                      >
                        {this.state.content.contactBlurb}
                        <br />
                        <br />
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        <div style={{ padding: 10 }}>
                          <div style={{ position: "relative" }}>
                            <i
                              style={{ position: "absolute", top: 0, left: 0 }}
                              className="material-icons"
                            >
                              mail
                            </i>{" "}
                          </div>
                          <div style={{ marginLeft: 40 }}>
                            <b></b>
                            {this.state.content.contactEmail}
                          </div>
                        </div>
                        <br />
                        <div style={{ padding: 10 }}>
                          <div style={{ position: "relative" }}>
                            <i
                              style={{ position: "absolute", top: 0, left: 0 }}
                              className="material-icons"
                            >
                              local_phone
                            </i>{" "}
                          </div>
                          <div style={{ marginLeft: 40 }}>
                            <b></b>
                            {this.state.content.contactPhone}
                          </div>
                        </div>
                        <br />
                      </div>
                      <div></div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {this.state.content.mapsCenter && (
                          <SimpleMap
                            center={this.state.content.mapsCenter}
                            name={this.state.content.businessName}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
