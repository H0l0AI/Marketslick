import React from "react";
import image1 from "../images/realtor-010.jpeg";
import image2 from "../images/realtor-010.png";
import logo from "../images/sm3.png";
import firebase from "firebase/compat";
import { rootStore } from "../stores/Store";

import product from "../images/product2.png";
import service from "../images/service2.png";
import { SwatchesPicker } from "react-color";
import {
  mainButtonLink,
  mainButtonTitle,
  contactButtonTitle,
  businessBlurb,
  contactEmail,
  contactPhone,
  contactTitle,
  mailChimpSource,
  secondary,
  pageTitle,
  secondaryContent,
  secondaryContentTitle,
  supportingBlurb,
  supportingHeadingTitle,
  supportingHeading,
  titleBlurb,
  titleContent,
  autoCompletePlaces,
  RouteItems,
  contactBlurb,
  secondaryHeader,
  secondaryPhoto1,
  secondaryHeading1,
  secondaryContent1,
  businessBlurbShort,
  contactCTA,
  p3ContentPhoto,
  p3Heading1,
  p3Content1,
} from "../content";
import { FileImporter, loadingComponent2 } from "./FileImporter";
import GoogleMyBusinessForm from "./GoogleMyBusinessForm";
import cookie from "js-cookie";
import { useHistory } from "react-router";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import {Widget} from "@typeform/embed-react";
import {GetAllResponses, signUpUsingEmail} from "../stores/PageService";
export const FacebookButton = (props) => {
  const history = useHistory();

  function handleClick() {
    props.signUpHandler("facebook");
    // history.push('/sso/google');
  }

  return (
    <div
      style={{
        width: 320,
        padding: 12,
        backgroundColor: "#1877F2",
        color: "#fff",
        cursor: "pointer",
      }}
      className="sign-up-button google-sign-up"
      onClick={handleClick}
    >
      <img
        className="social-sign-up-icon"
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"
        alt="Sign up with Facebook"
      />
      <span className="social-sign-up-text">Facebook</span>
    </div>
  );
};
export const GoogleButton = (props) => {
  const history = useHistory();

  function handleClick() {
    props.signUpHandler("google");
    // history.push('/sso/google');
  }

  return (
    <div
      style={{ width: 300, padding: 12, cursor: "pointer" }}
      className="sign-up-button google-sign-up"
      onClick={handleClick}
    >
      <img
        className="social-sign-up-icon"
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Sign up with Google"
      />
      <span className="social-sign-up-text">Google</span>
    </div>
  );
};
function signUpUsingSocial() {
  return rootStore.pageStore.signUpUsingGoogle();
}
function signUpUsingFacebook() {
  return rootStore.pageStore.signUpUsingFacebook();
}
export const NavBar = (props) => (
  <nav
    className={`navbar navbar-expand-xl navbar-dark myNav navTextColor gunNav`}
    style={{ height: 60 }}
  >
    <div className="container">
      <button
        className="navbar-toggler rounded-4 shadow-sm"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse px-3"
        id="navbarSupportedContent"
      >
        {props.userEmail ? (
          <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (props.userEmail) {
                    return props.resetFrontPage();
                  }
                  {
                    return null;
                  }
                }}
                className="nav-link"
                aria-current="page"
              >
                Color Scheme
              </a>
            </li>
            <li
              className="nav-item"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <a className="nav-link" aria-current="page">
                Home
              </a>
            </li>
            <li
              className="nav-item"
              style={{ cursor: "pointer" }}
              onClick={() => {
                rootStore.pageStore.signOut().then(()=>{
                  return window.location.reload(true);

                });
              }}
            >
              <a className="nav-link" aria-current="page">
                {" "}
                {props.userEmail ? (
                  <>Sign Out</>
                ) : (
                  <GoogleButton signUpHandler={signUpUsingSocial.bind(this)} />
                )}
              </a>
            </li>
          </ul>
        ) : null}
      </div>
    </div>


  </nav>
);

@inject("rootStore")
@observer
class CreatorFunnel extends React.Component {
  constructor(props) {
    super(props);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.contactRef = React.createRef();

    this.state = {
      continueModal: false,
      accessibleWidth: 390,
      accessibleHeight: 390,
      code: cookie.get("code"),
      emailFormFields: {
        email: "",
        password: "",
      },
      pageTitle: pageTitle || "",
      rContent: "<p></p>",
      rText: "",
      linkArray: [],
      loadState: null,
      colorSelectorModal: true,
      editModal: 'frontPage',
      logo: null,
      routeItemsDefault: RouteItems,
      routeItems: [],
      places: [],
      plainCode: 0,
      generatedImageURIArray: [],
      imageURLArray: [],
      bgSelectorActive: false,
      classSelectorActive: false,
      currentMainImage: 0,
      mainArray: [image1, image2],
      classArray: [
        "gbg1",
        "gbg2",
        "gbg3",
        "gbg4",
        "gbg5",
        "gbg6",
        "gbg7",
        "gbg8",
        "gbg9",
        "gbg10",
        "gbg11",
        "gbg12",
        "gbg13",
        "gbg14",
        "gbg15",
        "gbg16",
        "gbg17",
        "gbg18",
        "gbg19",
        "gbg20",
        "gbg21",
        "gbg22",
        "bg37",
        "bg38",
        "bg39",
        "bg40",
        "bg41",
        "bg42",
        "bg43",
        "bg44",
        "one",
        "two",
        "three",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
      ],
      class: {hex: "#3f51b5"},
      classIndex: 0,
      backgroundArray: [
        "one",
        "two",
        "three",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "mockImageBackground",
        "gbg1",
        "gbg2",
        "gbg3",
        "gbg4",
        "gbg5",
        "gbg6",
        "gbg7",
        "gbg8",
        "gbg9",
        "gbg10",
        "gbg11",
        "gbg12",
        "gbg13",
        "gbg14",
        "gbg15",
        "gbg16",
        "gbg17",
        "gbg18",
        "gbg19",
        "gbg20",
        "gbg21",
        "gbg22",
        "bg37",
        "bg38",
        "bg39",
        "bg40",
        "bg41",
        "bg42",
        "bg43",
        "bg44",
      ],
      backgroundType: {hex: "#4264ea"},
      font: {hex: "#fff"},
      backgroundIndex: 0,
      content: {
        pageTitle: "",
        titleContent: titleContent,
        titleBlurb: titleBlurb,
        supportingHeading: supportingHeading,
        supportingHeadingTitle: supportingHeadingTitle || "",
        secondaryContentTitle: secondaryContentTitle,
        secondaryContent: secondaryContent,
        contactTitle: contactTitle,
        contactBlurb: contactBlurb,
        contactPhone: contactPhone,
        contactEmail: contactEmail,
        secondaryHeader: secondaryHeader,
        secondaryHeading1: secondaryHeading1,
        secondaryContent1: secondaryContent1,
        businessBlurb: businessBlurb,
        businessBlurbShort: businessBlurbShort,
        p3Heading1: p3Heading1,
        p3Content1: p3Content1,
        backgroundType: "mockImageBackground",
        class: "one",
        routeItems: [],
        mainButtonLink: "",
        preferredDomain: "http://example-business.co.nz",
      },
    };
  }

  shiftCurrentImage() {
    setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  nextImage() {
    this.setState({
      currentMainImage: this.state.currentMainImage + 1,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      accessibleWidth: window.innerWidth,
      accessibleHeight: window.innerHeight,
    });
  }

  async componentDidMount() {
    console.log('Edit section key:', toJS(rootStore.pageStore.editSection))


    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const userSubmittedTemplated = await rootStore.pageStore.getTemplatesWithId(
        rootStore.pageStore.userId
    );
    console.log("from user", toJS(rootStore.pageStore.activeTemplate));
    console.log("EXISTING", cookie.get("code"), cookie.get("wasPurchased"));
    console.log("test test test ", userSubmittedTemplated, '...', toJS(rootStore.pageStore.editSection));

    if (rootStore.pageStore.editSection) {
      const frontPageForms = ['logo', 'secondaryTitle', 'titleContent', 'titleBlurb']
      const isFrontPage = frontPageForms.includes(rootStore.pageStore.editSection)
      this.setState({editModal: isFrontPage ? 'frontPage' : 'secondPage', editSection: rootStore.pageStore.editSection})

    }
    if(!cookie.get("code")&&!rootStore.pageStore.editSection){
      this.setState({editSection:undefined})
    }
    else if (userSubmittedTemplated &&cookie.get("code")&& !rootStore.pageStore.editSection) {
      this.setState({editModal: 'frontPage', editSection: 'titleBlurb'})
    }



    let code = cookie.get("code");
    //todo update purchase edit mode
    if (code && cookie.get("wasPurchased")) {
      firebase
          .firestore()
          .collection("templates")
          .get()
          .then((data) => {
            const dataToLoad = data.docs.find(
                (doc) =>
                    doc.id ===
                    (rootStore.pageStore.code
                        ? `t-${rootStore.pageStore.code}`
                        : "live")
            );
            if (dataToLoad && dataToLoad.data()) {
              console.log(dataToLoad.data(), "LOAD");
              this.setState({
                selectedBusinessInfo: dataToLoad.data().content.businessInfo,
                logo: dataToLoad.data().content.logo,
                imageURLArray: dataToLoad.data().content.imageURLArray,
                code: rootStore.pageStore.code || code,
                content: dataToLoad.data().content,
                mainArray: [
                  dataToLoad.data().content.imageURLArray
                      ? dataToLoad.data().content.imageURLArray[0]
                      : null,
                ],
              });
              return console.log("images:", this.state.imageURLArray);
            }
          });
    } else {
      //todo fix
      console.log('i am editing', this.state.editSection)
      if (userSubmittedTemplated.content) {
        console.log("USER SUBMITTED:", userSubmittedTemplated);
        this.setState({
          editModal:'frontPage',
          editSection:'titleBlurb',
          serviceTypeReady: true,
          businessNameReady: true,
          domainNameReady: true,
          restOfFormReady: true,
          linkArray: userSubmittedTemplated.content.linkArray,
          selectedBusinessInfo: userSubmittedTemplated.content.businessInfo,
          imageURLArray: userSubmittedTemplated.content.imageURLArray,
          pageTitle: userSubmittedTemplated.content.pageTitle,
          logo: userSubmittedTemplated.content.logo,
          serviceType: userSubmittedTemplated.content.serviceType,
          firstName: userSubmittedTemplated.content.firstName,
          generatedImageURI: userSubmittedTemplated.content.generatedImageURI,
          generatedImageURIArray: userSubmittedTemplated.content.generatedImageURIArray,
          class: {hex: userSubmittedTemplated.content.class},
          font: {hex: userSubmittedTemplated.content.font},
          backgroundType:{hex:userSubmittedTemplated.content.backgroundType},
          code: rootStore.pageStore.code || code,
          userContinued: true,
          colorSelectorModal: false,
          content: userSubmittedTemplated.content,
          mainArray: [
            userSubmittedTemplated.content.imageURLArray
                ? userSubmittedTemplated.content.imageURLArray[0]
                : null,
          ],
        });
      }
      code = Math.floor(Math.random() * 10000);
      cookie.set("pw", code);
      return this.setState({plainCode: code});
    }
  }

  switchBackgroundType() {
    let index = this.state.backgroundIndex;
    if (index < this.state.backgroundArray.length - 1) {
      index = this.state.backgroundIndex + 1;
    } else {
      index = 0;
    }
    let content = this.state.content;
    content["backgroundType"] = this.state.backgroundArray[index];
    this.setState({
      backgroundIndex: index,
      backgroundType: this.state.backgroundArray[index],
      content: content,
    });
  }

  handleContentFormChange = (event) => {
    const {name, value} = event.target;
    this.setState((prevState) => {
      const {content} = prevState;
      content[name] = value;
      return {content};
    });
  };
  handleAdditionalFormChange = (event, index) => {
    const {name, value} = event.target;
    const routeItems = this.state.routeItems;
    routeItems[index][`${name}`] = value;
    console.log(
        this.state.routeItems[index],
        this.state.routeItems[index][`${name}`],
        value
    );
    this.setState({routeItems: routeItems});
  };

  renderBGSelector(shouldRender) {
    this.setState({
      bgSelectorActive: !this.state.bgSelectorActive,
      classSelectorActive: false,
      fontSelectorActive: false,
    });
  }

  renderClassSelector(shouldRender) {
    this.setState({
      classSelectorActive: !this.state.classSelectorActive,
      bgSelectorActive: false,
      fontSelectorActive: false,
    });
  }

  renderFontSelector(shouldRender) {
    this.setState({
      classSelectorActive: false,
      bgSelectorActive: false,
      fontSelectorActive: true,
    });
  }

  uploadBrandImage = async (e, fileInput, index) => {
    let file;
    try {
      if (!fileInput) {
        this.setState({filename: e.target.files[0].name, uploading: true});
        const files = Array.from(e.target.files);
        file = files[0];
      } else {
        this.setState({filename: fileInput.name, uploading: true});
        file = fileInput;
      }
      const formData = new FormData();
      let storageRef = firebase.storage().ref();
      // @ts-ignore
      let practiceImageRef = storageRef.child(
          `images/${this.state.code}/${index}`
      );
      // @ts-ignore
      let uploadTask = practiceImageRef.put(file);
      // @ts-ignore
      uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log("ERROR writefile", error);
            let imageUrlArray = this.state.imageURLArray;
            imageUrlArray[index] = null;
            this.setState({
              imageURLArray: imageUrlArray,
              filename: null,
              uploading: false,
            });
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            // @ts-ignore
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              let imageUrlArray = this.state.imageURLArray;
              imageUrlArray[index] = downloadURL;
              this.setState({uploading: false, imageURLArray: imageUrlArray});
              // @ts-ignore
            });
          }
      );
    } catch (e) {
      console.log("ERROR catchblock", e);
      let imageUrlArray = this.state.imageURLArray;
      imageUrlArray[index] = null;
      this.setState({
        imageURLArray: imageUrlArray,
        filename: null,
        uploading: false,
      });
    }
  };
  uploadLogoImage = async (e, fileInput, index,hasURL) => {
    console.log(hasURL)
    this.setState({loadingLogo: true});
    let file;
    try {
      if(hasURL){
        console.log('blobbing it up ',hasURL)

        let blob = await fetch(process.env.REACT_APP_PROXY_URL+hasURL,{
          headers: {
            'authorization': `bearer ${process.env.REACT_APP_FORMS_PAT+process.env.REACT_APP_FORMS_PAT2}`,
          }
        }).then(r => r.blob());
        blob.lastModifiedDate = new Date();
        blob.name = 'imageLogo';
        file = blob;
        console.log('blobbed it up ',file)
      }
      if (!fileInput && !hasURL) {
        this.setState({filename: e.target.files[0].name, uploading: true});
        const files = Array.from(e.target.files);
        file = files[0];
      } else if (!hasURL) {
        this.setState({filename: fileInput.name, uploading: true});
        file = fileInput;
      }
      const formData = new FormData();

      formData.append("image_file", file);
      formData.append("return_type", "2");
      /*
            formData: {
                sync: "1",
                    image_file: file,
            }*/

      const response = await fetch(
          process.env.REACT_APP_PROXY_URL +
          "https://techhk.aoscdn.com/api/tasks/visual/segmentation",
          {
            method: "POST",
            headers: {"X-API-KEY": process.env.REACT_APP_SEGMENTATION_K},
            body: formData,
          }
      );
      const r = await response.json();
      console.log("res", r.data.task_id);
      const responseImage = await fetch(
          `${process.env.REACT_APP_PROXY_URL}https://techhk.aoscdn.com/api/tasks/visual/segmentation/${r.data.task_id}`,
          {
            method: "GET",
            headers: {"X-API-KEY": process.env.REACT_APP_SEGMENTATION_K},
          }
      );
      const image = await responseImage.json();
      const base64image = "data:image/png;base64," + image.data.image;

      console.log("res", image, base64image);

      let storageRef = firebase.storage().ref();
      // @ts-ignore
      let practiceImageRef = storageRef.child(`images/${this.state.code}/logo`);
      // @ts-ignore
      let uploadTask = practiceImageRef.putString(
          base64image.split(",")[1],
          "base64",
          {contentType: "image/png"}
      );
      if (!image.data || !r.data) {
        uploadTask = practiceImageRef.put(file);
      }
      // @ts-ignore
      uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log("ERROR writefile", error);
            let logo = this.state.logo;
            logo = null;
            this.setState({
              logo: logo,
              filename: null,
              uploading: false,
              loadingLogo: false,
              imageError: e.message,
            });
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            // @ts-ignore
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              let logo = this.state.logo;
              logo = downloadURL;
              this.setState({uploading: false, logo: logo});
              // @ts-ignore
            });
          }
      );
    } catch (e) {
      //todo fix
      console.log("ERROR catchblock", e);
      let logo = this.state.logo;
      logo = null;
      if(hasURL){
        console.log('doing it with no apis...',file,hasURL)
        let storageRef = firebase.storage().ref();
        // @ts-ignore
        let practiceImageRef = storageRef.child(`images/${this.state.code}/logo`);
       return  practiceImageRef.put(file).then((snapshot) => {
          snapshot.ref.getDownloadURL().then((downloadURL) => {
            let logo = this.state.logo;
            logo = downloadURL;
            return this.setState({uploading: false, logo: logo});
            // @ts-ignore
          })
        });
      }
      else if (!fileInput&&!hasURL) {
        // this.setState({filename: e.target.files[0].name, uploading: true});
        // const files = Array.from(e.target.files);
        // file = files[0];
      } else {
        this.setState({filename: fileInput.name, uploading: true});
        file = fileInput;
      }
      let storageRef = firebase.storage().ref();
      // @ts-ignore
      let practiceImageRef = storageRef.child(`images/${this.state.code}/logo`);
      // @ts-ignore
      let uploadTask = practiceImageRef.put(file);
      // @ts-ignore
      uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log("ERROR writefile", error);
            let logo = this.state.logo;
            logo = null;
            this.setState({
              logo: logo,
              filename: null,
              uploading: false,
              loadingLogo: false,
              imageError: e.message,
            });
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            // @ts-ignore
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              let logo = this.state.logo;
              logo = downloadURL;
              this.setState({uploading: false, logo: logo});
              // @ts-ignore
            });
          }
      );
    } finally {
      this.setState({imageError: null});
    }
  };

  uploadBrandImageAdditional = async (e, fileInput, index, routeItemsIndex) => {
    console.log("TEST", index, routeItemsIndex);
    let file;
    try {
      if (!fileInput) {
        this.setState({filename: e.target.files[0].name, uploading: true});
        const files = Array.from(e.target.files);
        file = files[0];
      } else {
        this.setState({filename: fileInput.name, uploading: true});
        file = fileInput;
      }
      const formData = new FormData();
      let storageRef = firebase.storage().ref();
      // @ts-ignore
      let practiceImageRef = storageRef.child(
          `images/${this.state.code}/${routeItemsIndex}-${index}`
      );
      // @ts-ignore
      let uploadTask = practiceImageRef.put(file);
      // @ts-ignore
      uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log("ERROR writefile", error);
            let imageUrlArray =
                this.state.routeItems[routeItemsIndex].imageURLArray;
            imageUrlArray[index] = null;
            const routeItems = this.state.routeItems;
            routeItems[routeItemsIndex].imageURLArray = imageUrlArray;
            this.setState({uploading: false, routeItems: routeItems});
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            // @ts-ignore
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              let imageUrlArray =
                  this.state.routeItems[routeItemsIndex].imageURLArray;
              imageUrlArray[index] = downloadURL;
              const routeItems = this.state.routeItems;
              routeItems[routeItemsIndex].imageURLArray = imageUrlArray;
              this.setState({uploading: false, routeItems: routeItems});
              // @ts-ignore
            });
          }
      );
    } catch (e) {
      console.log("ERROR catchblock", e);
      let imageUrlArray = this.state.routeItems[routeItemsIndex].imageURLArray;
      imageUrlArray[index] = null;
      const routeItems = this.state.routeItems;
      routeItems[routeItemsIndex].imageURLArray = imageUrlArray;
      this.setState({uploading: false, routeItems: routeItems});
    }
  };

  handleChangeComplete(color) {
    this.setState({backgroundType: color});
  }

  handleChangeCompleteClass(color) {
    this.setState({class: color});
  }

  handleChangeCompleteFont(color) {
    this.setState({font: color});
  }

  BGSelector = () => {
    return (
        <div
            style={{
              margin: 40,
              marginBottom: 0,
              borderRadius: 12,
              width: 400,
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              alignContent: "center",
            }}
        >
          <SwatchesPicker
              color={this.state.backgroundType}
              onChangeComplete={this.handleChangeComplete.bind(this)}
          />
        </div>
    );
  };
  ClassSelector = () => {
    return (
        <div
            style={{
              margin: 40,
              marginBottom: 0,
              borderRadius: 12,
              width: 400,
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              alignContent: "center",
            }}
        >
          <SwatchesPicker
              color={this.state.class}
              onChangeComplete={this.handleChangeCompleteClass.bind(this)}
          />
        </div>
    );
  };
  FontSelector = () => {
    return (
        <div
            style={{
              margin: 40,
              marginBottom: 0,
              borderRadius: 12,
              width: 400,
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              alignContent: "center",
            }}
        >
          <SwatchesPicker
              color={this.state.font}
              onChangeComplete={this.handleChangeCompleteFont.bind(this)}
          />
        </div>
    );
  };
  fontSelector = () => {
    return (
        <div
            style={{
              margin: 40,
              marginBottom: 0,
              borderRadius: 12,
              width: 400,
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              alignContent: "center",
            }}
        >
          <SwatchesPicker
              color={this.state.font}
              onChangeComplete={this.handleChangeCompleteFont.bind(this)}
          />
        </div>
    );
  };

  changeRouteNameInput(e) {
    this.setState({routeNameInput: e.target.value});
  }

  handleEmailFormChange = (event) => {
    const {name, value} = event.target;
    this.setState((prevState) => {
      const {emailFormFields} = prevState;
      emailFormFields[name] = value;
      return {emailFormFields};
    });
  };

  handleAddRoute(name) {
    this.state.routeItems.push({
      name: name,
      type: "standard",
      href: `/pages/additional${
          this.state.routeItems ? this.state.routeItems.length : 0
      }`,
      routeTag: `view_additional${
          this.state.routeItems ? this.state.routeItems.length : 0
      }_nav`,
      secondaryHeader: name,
      imageURLArray: [],
    });
    let content = this.state.content;

    this.setState({content: content, routeNameInput: ""});
  }

  resetFrontPage() {
    return this.setState({editModal: null, colorSelectorModal: true});
  }

  changeLinkName(e) {
    return this.setState({addLinkName: e.target.value});
  }

  changeLinkHref(e) {
    return this.setState({addLinkHref: e.target.value});
  }

  addLink(name, href) {
    let newArray = this.state.linkArray || [];
    newArray.push({name: name, link: href});
    return this.setState({linkArray: newArray});
  }

  triggerAutoComplete(data) {
    const key = process && process.env.REACT_APP_MAPS_KEY;
    rootStore.pageStore.autoCompletePlacesAction(data, key).then((res) => {
      console.log("...FACES", res, key);
      this.setState({places: res && res.predictions, businessName: data, userHasClickedResetOption: false});
    });
  }

  getGeneratedPhotoWithPhrase = async (index, phrase) => {
    return new Promise(async (resolve, reject) => {
      try {
        this.setState({generatedImagesLoading: true});
        const modelId = "26a1a203-3a46-42cb-8cfa-f4de075907d8";
        const url =
            process.env.REACT_APP_PROXY_URL +
            `https://api.tryleap.ai/api/v1/images/models/${modelId}/inferences`;
        const options = {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `Bearer ${process.env.REACT_APP_LEAP_KEY}`,
          },
          body: JSON.stringify({
            prompt: `A clean and elegant photo advertising ${phrase}`,
            negativePrompt: `${process.env.REACT_APP_NEGATIVE_PROMPT}`,
            steps: 10,
            width: 1024,
            height: 600,
            numberOfImages: 1,
            promptStrength: 7,
            seed: 4523184,
          }),
        };

        const res = await fetch(url, options);
        const r = await res.json();
        console.log("response??", r);
        const id = r.id;
        setTimeout(async () => {
          const urlSingle =
              process.env.REACT_APP_PROXY_URL +
              `https://api.tryleap.ai/api/v1/images/models/${modelId}/inferences/${id}`;
          const optionsSingle = {
            method: "GET",
            headers: {
              accept: "application/json",
              authorization: `Bearer ${process.env.REACT_APP_LEAP_KEY}`,
            },
          };

          const imageJson = await fetch(urlSingle, optionsSingle).then((res) =>
              res.json()
          );
          console.log("FINAL IMAGE", imageJson);
          try {
          if (imageJson.state !== "processing" || imageJson.state !== "failed"|| imageJson.state !== "queued") {

              const generatedImages = this.state.generatedImageURIArray
              const imageURLArray = this.state.imageURLArray
              generatedImages[index] = imageJson.images && imageJson.images[0].uri
              //fallback only if images dont already exist
              imageURLArray[index + 1] = imageURLArray[index + 1] ? imageURLArray[index + 1] : imageJson.images[0].uri


              this.setState({
                imageURLArray: imageURLArray,
                generatedImageURIArray: generatedImages,
                generatedImagesLoading: false,
              }, () => resolve(generatedImages));

            }
          else
            {
              this.setState({generatedImagesLoading: false});
            }
          }catch(e){
            this.setState({generatedImagesLoading: false,generatedImageURIArray:[]});
          }
        }, 60000);
      } catch (e) {
        this.setState({imageError: e.message});
        reject(e.message)
      }
    })
  };

  getGeneratedPhoto = async (types, business) => {
    return new Promise(async (resolve, reject) => {

      try {
        this.setState({generatedImageLoading: true});
        const modelId = "26a1a203-3a46-42cb-8cfa-f4de075907d8";
        const url =
            process.env.REACT_APP_PROXY_URL +
            `https://api.tryleap.ai/api/v1/images/models/${modelId}/inferences`;
        const options = {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `Bearer ${process.env.REACT_APP_LEAP_KEY}`,
          },
          body: JSON.stringify({
            prompt: `A clean and elegant ${typeof types === 'string' ? types : types[0]}, ${business} slightly out of focus`,
            negativePrompt: `${process.env.REACT_APP_NEGATIVE_PROMPT}`,
            steps: 10,
            width: 1024,
            height: 600,
            numberOfImages: 1,
            promptStrength: 7,
            seed: 4523184,
          }),
        };

        const res = await fetch(url, options);
        const r = await res.json();
        console.log("response??", r);
        const id = r.id;
        setTimeout(async () => {
          const urlSingle =
              process.env.REACT_APP_PROXY_URL +
              `https://api.tryleap.ai/api/v1/images/models/${modelId}/inferences/${id}`;
          const optionsSingle = {
            method: "GET",
            headers: {
              accept: "application/json",
              authorization: `Bearer ${process.env.REACT_APP_LEAP_KEY}`,
            },
          };

          const imageJson = await fetch(urlSingle, optionsSingle).then((res) =>
              res.json()
          );
          console.log("FINAL IMAGE", imageJson);
          try {
            if (imageJson.state !== "processing" || imageJson.state !== "failed" || imageJson.state !== "queued") {

              this.setState({
                generatedImageURI: imageJson.images ? imageJson.images[0].uri : null,
                generatedImageLoading: false,
              }, () => resolve());
            } else {
              this.setState({generatedImageLoading: false});
            }
          }catch(e){
            this.setState({
              generatedImageURI:null,
              generatedImageLoading: false,
            }, () => resolve());
          }
        }, 60000);
      } catch (e) {
        reject(e.message);
        this.setState({imageError: e.message});
      }
    })
  };

  generateContentFromPrefilledData = async () => {
    let content = this.state.content;
    content.contactPhone = "";
    content.contactAddress = "";
    content.contactTypes = [];
    content.location = {};
    content.businessName = this.state.businessName;
    content.titleBlurb = "Hang on, we are coming up with a smooth tagline...";
    let mapsCenter = {
      lat: 59.95,
      lng: 30.33,
    };
    rootStore.pageStore
        .testRytrBlurb(
            this.state.firstName,
            this.state.serviceType,
            this.state.pageTitle
        )
        .then(async ({rawHtml}) => {
          console.log("res222", rawHtml);
          let rytrBlurb = rawHtml.replace(/<[^>]*>?/gm, "");
          let content = this.state.content;
          await rootStore.pageStore
              .testRytrBlurb(
                  this.state.firstName,
                  `${this.state.serviceType} at ${this.state.businessName}`,
                  rytrBlurb
              )
              .then(async ({rawHtml}) => {
                console.log("res,", rawHtml);
                let rytrBlurb = rawHtml.replace(/<[^>]*>?/gm, "");
                let content = this.state.content;
                content.titleBlurb = rytrBlurb;
                content.titleContent = rytrBlurb
                const photo = await this.getGeneratedPhoto(
                    `${this.state.serviceType} at ${this.state.businessName}`,
                    this.state.businessName
                );
                console.log('I should have photo from prefill',photo)

                this.setState({rContent: "", content: content, loading: false});
              });
          content.titleContent = rytrBlurb;
          this.setState({rContent: "", content: content, loading: false});
          return rytrBlurb;
        });

    this.setState({
      selectedBusinessInfo: null,
      content: content,
      mapsCenter,
      businessName: this.state.pageTitle,
      formSubmitted:false,
    });
  };
  editSecondSection = async () => {
    try {
      let splitCode =
          this.state.code ||
          cookie.get("code") ||
          this.state.plainCode.toString();
      splitCode = splitCode
          .replace(/\s+/g, "-")
          .toLowerCase();
      firebase
          .analytics()
          .logEvent("template_init_wg", {code: splitCode});
      rootStore.pageStore.setCode(
          splitCode || this.state.plainCode
      );
      firebase
          .firestore()
          .collection("templates")
          .get()
          .then((data) => {
            console.log("data:", data.docs[0].data());
          });
      let content = this.state.content;
      content.pageTitle = this.state.pageTitle;
      content.imageURLArray = this.state.imageURLArray || [];
      content.routeItems = this.state.routeItems || [];
      content.routeItemsDefault =
          this.state.routeItemsDefault || [];
      content.logo = this.state.logo || "";
      content.templateType =
          this.state.templateSelected || "dm";
      content.linkArray = this.state.linkArray || [];
      content.businessInfo = this.state
          .selectedBusinessInfo || {name: ""};
      content.backgroundType =
          this.state.themeBackground|| this.state.backgroundType.hex || "#656565";
      content.class = this.state.themeClass||this.state.class.hex || "#4264ea";
      content.font = this.state.themeFont||this.state.font.hex || "#a2a2a2";
      content.firstName = this.state.firstName || "";
      content.userEmail = rootStore.pageStore.userEmail;
      content.emailAddress=this.state.emailAddress;
      content.generatedImageURI =
          this.state.generatedImageURI || "";
      content.serviceType = this.state.serviceType;
      content.firstName = this.state.firstName;
      content.emailAddress = this.state.userEmail||this.state.emailAddress
      cookie.set("templateType", this.state.templateSelected);
      console.log(
          "SET:",
          splitCode,
          this.state.plainCode,
          ":",
          content
      );
      const websiteHasEmptyRequiredFields = Object.entries(
          content
      ).some(([key, value]) => {
        console.log("value", key, value);
        if (
            value === null ||
            value === "" ||
            typeof value === undefined
        ) {
          console.log("ERRROR", key, "in:", value);
        }
        return value === null || value === "";
      });
      if (websiteHasEmptyRequiredFields) {
        console.log(websiteHasEmptyRequiredFields, 'empty required fields');
        this.setState({
          builderError: "Non empty fields detected",
        });
      }

      //

      const user = await rootStore.pageStore.signUpUsingEmailButDontLogin({email:this.state.emailAddress,password:this.state.password},(res)=>{
        console.log('signed up...',res)
        //todo create the website now

      })
      let documentUserId = rootStore.pageStore.userId || user&&user.id
      if (documentUserId) {
        //TODO fix editing
        firebase
            .firestore()
            .collection("users")
            .doc(`${documentUserId}`)
            .set({
              templateCode: `t-${
                  splitCode || this.state.plainCode
              }`,
            })
            .then(() => {
              console.log(
                  "Document successfully written for",
                  documentUserId,
                  `t-${splitCode || this.state.plainCode}`
              );
              window.location.href = "/pages";
            })
            .catch((e) => {
              console.log("doc failed on ", e);
            });
      }
      return firebase
          .firestore()
          .collection("templates")
          .doc(`t-${splitCode || this.state.plainCode}`)
          .set({
            content: content,
            author: documentUserId || "Guest",
          })
          .then(async () => {
            console.log("Document successfully written!");


            if (this.state.linkArray) {
              firebase
                  .firestore()
                  .collection("links")
                  .doc(splitCode)
                  .set({links: this.state.linkArray})
                  .then(() => {
                    console.log(
                        "Wrote link array",
                        this.state.linkArray,
                        splitCode
                    );
                  });
            }
          })
          .catch((error) => {
            console.error(
                "Error writing document: ",
                error,
                content,
                this.state.content
            );
          });
      console.log("something may have happened");
    } catch (e) {
      console.log("massive blunder", e);
      this.setState({builderError: `${e}`});
    }


  }
  editFrontSection = async () => {
    let content = this.state.content;
    content.supportingHeading =
        "Hold on tight, we are writing your supporting heading...";
    content.secondaryContent =
        "Just a moment, we are writing about you...";
    this.setState({content: content});
    return rootStore.pageStore
        .testRytrMain(
            this.state.firstName,
            this.state.serviceType,
            this.state.businessName,
            this.state.content.titleContent,
            this.state.content.titleBlurb
        )
        .then(async ({rawHtml}) => {
          let content = this.state.content;
          console.log('Content Raw Form: ', rawHtml)
          //todo make it smarter, split h2 into heading and p into body tags

          let el = document.createElement('html');
          el.innerHTML = rawHtml
          const headings = el.getElementsByTagName('h3');
          const paragraphs = el.getElementsByTagName('p');

          console.log('headings', headings)
          console.log('paragraphs', paragraphs)


          let contentFormattedString = rawHtml.replace(
              /<[^>]*>?/gm,
              " "
          );
          console.log('Content Formatted Form: ', contentFormattedString)


          if (headings[0]) {
            content.supportingHeadingTitle = headings[0] && headings[0].innerText;
            content.supportingHeading = paragraphs[0] && paragraphs[0].innerText;
            content.secondaryContent = paragraphs[1] && paragraphs[1].innerText;
            content.secondaryContentTitle = headings[1] && headings[1].innerText;
            content.p3Heading1 = headings[2] && headings[2].innerText;
            content.p3Content1 = paragraphs[2] && paragraphs[2].innerText;
            await Promise.all([this.getGeneratedPhotoWithPhrase(0, headings[0].innerText),this.getGeneratedPhotoWithPhrase(1, headings[1].innerText),this.getGeneratedPhotoWithPhrase(2, headings[2].innerText)])

          } else {
            let contentFormatted = contentFormattedString
                .replace(/([A-Z])/g, " $1")
                .split("-");
            content.supportingHeadingTitle = 'Heading One'
            content.supportingHeading = contentFormattedString;
            content.secondaryContentTitle = 'Heading Two'
            content.secondaryContent = 'Empty section, please edit to update.'
            content.p3Heading1 = 'Heading Three'
            content.p3Content1 = 'Empty section, please edit to update.'
            await Promise.all([this.getGeneratedPhotoWithPhrase(0, contentFormatted[0]),
              this.getGeneratedPhotoWithPhrase(1, contentFormatted[1]),
              this.getGeneratedPhotoWithPhrase(2, contentFormatted[2])
            ])


          }

          return this.setState({
            rContent: "",
            content: content,
            loading: false,
            pageOneLoading:false,
          });
        });
  }

  getRelevantBusinessInfo(placeInformation) {
    this.setState({ loading: true });
    const key = process && process.env.REACT_APP_MAPS_KEY;
    rootStore.pageStore
      .getRelevantBusinessInfo(placeInformation, key)
      .then((info) => {
        console.log("...INFO", info);
        if (info) {
          let content = this.state.content;
          content.contactPhone = info.phoneNumber || "";
          content.contactAddress = info.address || "";
          content.contactTypes = info.types || [];
          content.location = info.location || {};
          content.businessName = info.name;
          content.titleBlurb =
            "Hang on, we are coming up with a smooth tagline...";
          let mapsCenter = {
            lat: 59.95,
            lng: 30.33,
          };
          if (info.location) {
            mapsCenter = {
              lat: info.location.latitude,
              lng: info.location.longitude,
            };
            content.mapsCenter = mapsCenter;
          }
          rootStore.pageStore
            .testRytrBlurb(
              this.state.firstName,
              this.state.serviceType,
              info.types.join(" ")
            )
            .then(async ({rawHtml}) => {
              console.log("res,", {rawHtml});
              let rytrBlurb = {rawHtml}.replace(/<[^>]*>?/gm, "");
              let content = this.state.content;
              await rootStore.pageStore
                .testRytrBlurb(
                  this.state.firstName,
                  `${this.state.serviceType} at ${info.name}`,
                  rytrBlurb
                )
                .then(async ({rawHtml}) => {
                  console.log("res,", rawHtml);
                  let rytrBlurb = rawHtml.replace(/<[^>]*>?/gm, "");
                  let content = this.state.content;
                  content.titleBlurb = rytrBlurb;
                  await this.getGeneratedPhoto(info.types, info.name);

                  this.setState({
                    rContent: "",
                    content: content,
                    loading: false,
                  });
                });
              content.titleContent = rytrBlurb;
              this.setState({ rContent: "", content: content, loading: false });
              return rytrBlurb;
            });

          this.setState({
            selectedBusinessInfo: info,
            content: content,
            mapsCenter,
            businessName: info.name,
          });
        } else {
          this.setState({ selectedBusinessInfo: null });
        }
      });
  }
  renderEditModal(modalType,editFrontSection,editSecondSection) {
    let modalComponent = null;
    switch (modalType) {
      case "LinkPage":
        modalComponent = (
          <div>
            <h3 style={{ textAlign: "center" }}>
              Create a page that serves as your social media entry point!
            </h3>
            <p style={{ textAlign: "center" }}>
              Your link tree will be easily accessible, both on your website and
              at cashies.io/{this.state.code || cookie.get("code")}
            </p>
            {this.state.builderError && (
              <p style={{ fontSize: 12, color: "red", textAlign: "center" }}>
                {this.state.builderError}
              </p>
            )}
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <input
                style={{ width: "50%" }}
                placeholder={"The title to your link page"}
                type="text"
                className="templateInputH1"
                onChange={this.handleContentFormChange}
                value={this.state.content.linkTitle}
                name={"linkTitle"}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: 100,
                maxHeight: 500,
                flexWrap: "wrap",
              }}
            >
              <input
                type="text"
                className="templateInputP"
                style={{
                  width: 300,
                  color: "#0e1e46",
                  border: "1px solid #0e1e46",
                }}
                value={this.state.addLinkName}
                onChange={(e) => {
                  this.changeLinkName(e);
                }}
                placeholder={"Enter name for your link, ie. Facebook"}
              />
              <input
                type="text"
                className="templateInputP"
                style={{
                  width: 300,
                  color: "#0e1e46",
                  border: "1px solid #0e1e46",
                }}
                value={this.state.addLinkHref}
                onChange={(e) => {
                  this.changeLinkHref(e);
                }}
                placeholder={
                  "Enter URL for your link, ie. https://www.mywebsite.com"
                }
              />
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  onClick={() => {
                    this.addLink(
                      this.state.addLinkName,
                      this.state.addLinkHref
                    );
                  }}
                  style={{ marginBottom: 10, marginLeft: 10, width: 200 }}
                  className="altButton whiteButton magOrange"
                >
                  Add link
                </div>
                <br />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 200,
              }}
            >
              <ul>
                {this.state.linkArray &&
                  this.state.linkArray.map((link) => (
                    <li>
                      <b>{link.name}</b> : {link.link}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        );
        break;
      case "Extra":
        modalComponent = null;
        break;

      case "secondPage":
        modalComponent = (
          <>
            <div
                onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  this.renderBGSelector(false);
                  this.renderFontSelector(false);
                  this.renderClassSelector(false)
                }}
                style={{ position: "absolute", zIndex: 9999, right: -45, top: 20 }}
            >
              {this.state.bgSelectorActive && this.BGSelector()}
              {this.state.classSelectorActive && this.ClassSelector()}
              {this.state.fontSelectorActive && this.FontSelector()}
            </div>
            <h3 style={{ textAlign: "center", fontWeight: 300 }}>
              <div
                  style={{
                    zIndex: 9998,
                    display: "flex",
                    justifyContent: "center",
                  }}
              >
                <div
                    className={"templateMaker"}
                    style={{

                      margin: 0,
                      height: 180,

                      top: 0,
                    }}
                >
                  <div className="fadedshort">
                    <p style={{fontSize:16}}>Modify theme by clicking the content you want to change color</p>
                    <div
                        onClick={() => {
                          this.renderBGSelector(true);
                        }}
                        style={{
                          cursor: "pointer",
                          margin: 30,
                          width:290,
                          padding: 20,
                          backgroundColor: this.state.backgroundType.hex,
                        }}
                    >
                      <div
                          style={{

                            display: "flex",

                            borderRadius: 4,
                          }}
                      >
                        <div
                            onClick={(e) => {
                              e.stopPropagation();
                              this.renderClassSelector(true);
                            }}
                            style={{
                              cursor: "pointer",
                              width: 200,
                              height: 100,
                              padding: 25,
                              marginTop: 40,
                              borderRadius: 4,
                              backgroundColor: this.state.class.hex,
                            }}
                        >
                          <p
                              onClick={(e) => {
                                e.stopPropagation();
                                this.renderFontSelector(true);
                              }}
                              style={{
                                fontSize: 12,
                                width: "50%",
                                color: this.state.font.hex,
                                fontWeight: 700,
                                cursor: "pointer",
                              }}
                          >
                            Example text
                          </p>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </h3>{" "}
            {this.state.generatedImagesLoading&&<div style={{width:'100%',color:'red',textAlign:'center'}}>Images loading</div>}
            {this.state.generatedImageURIArray?<div>
              {this.state.generatedImageURIArray[0]&&<img width={400} src={this.state.generatedImageURIArray[0]} />}
            {this.state.generatedImageURIArray[0]&&<img width={400} src={this.state.generatedImageURIArray[1]} />}
            {this.state.generatedImageURIArray[0]&&<img width={400} src={this.state.generatedImageURIArray[2]} />}
                </div>:null}

            <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              this.renderBGSelector(false);
              this.renderFontSelector(false);
              this.renderClassSelector(false)

            }} style={{ fontSize: 20, paddingBottom: 0 }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 40,
                    flexWrap: "wrap",
                    paddingBottom: 10,
                    marginBottom: 0,
                  }}
                >
                  <div>
                    <FileImporter
                      practiceLogoURL={logo}
                      imageURL={this.state.generatedImageURIArray&&this.state.generatedImageURIArray[0]||this.state.imageURLArray[1]}
                      index={1}
                      display={true}
                      routeItemsIndex={null}
                      uploadStatus={"success"}
                      onChange={this.uploadBrandImage.bind(this)}
                      filename={this.state.filename}
                      loading={this.state.uploading}
                    />
                  </div>
                  <div style={{ width: "55%", minWidth: 350, paddingLeft: 15 }}>
                    <p
                      style={{
                        fontSize: 18,
                        paddingLeft: 0,
                        paddingTop: 10,
                        whiteSpace: "break-spaces",
                        height: 200,
                      }}
                    >
                      <input
                        type="text"
                        className="templateInputP"
                        onChange={this.handleContentFormChange}
                        value={this.state.content.supportingHeadingTitle}
                        name={"supportingHeadingTitle"}
                      />
                      <textarea
                        style={{ height: 155 }}
                        className="templateInputP"
                        onChange={this.handleContentFormChange}
                        value={this.state.content.supportingHeading}
                        name={"supportingHeading"}
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="container" style={{ minWidth: 350 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      paddingTop: 0,
                      display: "block",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      marginTop: 40,
                    }}
                  >
                    <input
                      type="text"
                      className="templateInputP"
                      onChange={this.handleContentFormChange}
                      value={this.state.content.secondaryContentTitle}
                      name={"secondaryContentTitle"}
                    />
                    <textarea
                      style={{ height: 110 }}
                      className="templateInputP"
                      onChange={this.handleContentFormChange}
                      value={this.state.content.secondaryContent}
                      name={"secondaryContent"}
                    />
                  </div>
                  <div>
                    <div>
                      <FileImporter
                        practiceLogoURL={logo}
                        imageURL={this.state.generatedImageURIArray&&this.state.generatedImageURIArray[1]||this.state.imageURLArray[2]}
                        index={2}
                        display={true}
                        routeItemsIndex={null}
                        uploadStatus={"success"}
                        onChange={this.uploadBrandImage.bind(this)}
                        filename={this.state.filename}
                        loading={this.state.uploading}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                >
                  <div style={{ paddingTop: 10 }}>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingTop: 0,
                          flexWrap: "wrap",
                          paddingBottom: 10,
                          marginBottom: 0,
                        }}
                      >
                        <div>
                          <FileImporter
                            practiceLogoURL={logo}
                            imageURL={this.state.generatedImageURIArray&&this.state.generatedImageURIArray[2]||this.state.imageURLArray[3]}
                            index={3}
                            display={true}
                            routeItemsIndex={null}
                            uploadStatus={"success"}
                            onChange={this.uploadBrandImage.bind(this)}
                            filename={this.state.filename}
                            loading={this.state.uploading}
                          />
                        </div>
                        <div
                          style={{
                            width: "55%",
                            minWidth: 350,
                            paddingLeft: 15,
                          }}
                        >
                          <h3
                            style={{
                              marginRight: "5%",
                              marginBottom: 0,
                              whiteSpace: "break-spaces",
                            }}
                          >
                            <input
                              type="text"
                              className="templateInputH1"
                              onChange={this.handleContentFormChange}
                              value={this.state.content.p3Heading1}
                              name={"p3Heading1"}
                            />
                          </h3>
                          <p
                            style={{
                              fontSize: 18,
                              paddingLeft: 0,
                              paddingTop: 10,
                              whiteSpace: "break-spaces",
                              height: 200,
                            }}
                          >
                            <textarea
                              style={{ height: 75 }}
                              className="templateInputP"
                              onChange={this.handleContentFormChange}
                              value={this.state.content.p3Content1}
                              name={"p3Content1"}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 20,
                    flexWrap: "wrap",
                    paddingBottom: 30,
                    marginBottom: 20,
                  }}
                >
                  {this.state.builderError && (
                    <p
                      style={{
                        fontSize: 14,
                        color: "red",
                        textAlign: "center",
                      }}
                    >
                      {this.state.builderError}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </>
        );
        break;
      case "frontPage":
        modalComponent = this.state.restOfFormReady && (
          <div
            className="fadedshort"
            style={{ minHeight: 710, height: "auto", marginTop: 20 }}
          >
            <div style={{ marginBottom: 20 }}>
              <GoogleMyBusinessForm
                  userHasClickedResetOption={this.state.userHasClickedResetOption}
                places={this.state.places}
                selectedBusinessInfo={this.state.selectedBusinessInfo}
                triggerAutoComplete={(data) => {
                  this.triggerAutoComplete(data);
                }}
                getRelevantBusinessInfo={(businessInfo) => {
                  this.getRelevantBusinessInfo(businessInfo);
                }}
              />
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>{this.state.selectedBusinessInfo ?
                <div
                    className="webgunStyleButton"
                    onClick={()=>{
                  this.setState({
                    selectedBusinessInfo: null,
                    mapsCenter:null,
                    businessName:null,
                    userHasClickedResetOption:true
                  })
                }
                }>
                  Choose another business
                </div>
                : (
              <div
                  className="webgunStyleButton"
                onClick={() => {
                  //TODO fill out selectedBusinessInfo with stub that works
                  this.generateContentFromPrefilledData();
                  this.setState({
                    noBusiness: true,
                    businessName: pageTitle,
                    selectedBusinessInfo: {},

                  });
                }}
              >
                I don't have one
              </div>
                )}</div>


            <div style={{ zIndex: 8999, width: "100%" }}>
              {this.state.selectedBusinessInfo || this.state.noBusiness ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: 0,
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
                    <input
                      type="text"
                      className="templateInputH1"
                      onChange={this.handleContentFormChange}
                      placeholder={"The main landing page content..."}
                      value={this.state.content.titleContent}
                      name={"titleContent"}
                    />

                    <br />
                    <div style={{ display: "flex", justifyContent: "center",flexWrap:'wrap'}}>
                      <input
                        type="text"
                        style={{ width: "60%" }}
                        className="templateInputP"
                        onChange={this.handleContentFormChange}
                        placeholder={"Link button text"}
                        value={this.state.content.mainButtonTitle}
                        name={"mainButtonTitle"}
                      />
                      <input
                        type="text"
                        style={{ width: "60%" }}
                        className="templateInputP"
                        onChange={this.handleContentFormChange}
                        value={this.state.content.mainButtonLink}
                        placeholder={"URL the button links to"}
                        name={"mainButtonLink"}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {this.state.selectedBusinessInfo ? (
                <div
                  className="fadedshort"
                  style={{
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    minHeight: 180,
                  }}
                >
                  <div
                    style={{
                      cursor:
                        this.state.generatedImageLoading ||
                        this.state.loadingLogo
                          ? "wait"
                          : "pointer",
                    }}
                  >
                    <div
                      style={{
                        paddingTop: 0,
                        marginBottom: 0,
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <FileImporter
                        isSmall={true}
                        routeItemsIndex={null}
                        practiceLogoURL={logo}
                        imageURL={this.state.logo}
                        index={0}
                        display={true}
                        uploadStatus={"success"}
                        onChange={this.uploadLogoImage.bind(this)}
                        filename={this.state.filename}
                        loading={this.state.uploading || this.state.loadingLogo}
                      />
                    </div>
                    <p
                      style={{
                        color: "#0e1e46",
                        textAlign: "left",
                        paddingLeft: 100,
                      }}
                    >
                      Add your headshot
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        paddingTop: 0,
                        marginBottom: 0,
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <FileImporter
                        routeItemsIndex={null}
                        practiceLogoURL={logo}
                        imageURL={this.state.imageURLArray[0]||this.state.generatedImageURI||null}
                        index={0}
                        display={true}
                        uploadStatus={"success"}
                        onChange={this.uploadBrandImage.bind(this)}
                        filename={this.state.filename}
                        loading={this.state.uploading}
                      />
                    </div>
                    {this.state.imageError && (
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: 11,
                          color: "red",
                        }}
                      >
                        {this.state.imageError}
                      </p>
                    )}
                    <p
                      style={{
                        color: "#0e1e46",
                        textAlign: "left",
                        paddingLeft: 100,
                      }}
                    >
                      Add a banner image
                    </p>
                  </div>
                  {!this.state.generatedImageLoading &&
                    this.state.generatedImageURI && (
                      <div style={{ width: "100vw" }}>
                        {this.state.imageURLArray[0] ? null : (
                          <p
                            style={{
                              textAlign: "center",
                              whiteSpace: "pre-wrap",
                              wordWrap: "unset",
                              width: "99vw",
                              margin: 15,
                            }}
                          >
                            Don't have a banner image? We've AI generated this
                            background image for you to use
                          </p>
                        )}
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: 640,
                              overflow:'auto',
                              maxWidth: this.state.accessibleWidth,
                              marginBottom: 20,
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                textAlign: "center",
                                width: "100%",
                                marginTop: 65,
                                fontWeight: 900,
                                color: "#fff",
                                fontSize: 18,
                              }}
                            >
                              {this.state.content.titleContent}
                            </div>
                            <img
                              style={{
                                position: "absolute",
                                right: 0,
                                bottom: 0,
                              }}
                              src={this.state.logo}
                              width={300}
                              height={300}
                            />
                            <img
                              width={640}
                              height={380}
                              src={
                                this.state.imageURLArray[0] ||
                                this.state.generatedImageURI
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}

                  <div
                    style={{ maxHeight: 400, width: "100%", overflowY: "auto" }}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: this.state.rContent }}
                    ></div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
    }
    let buttonContent = "";
    switch (this.state.editModal) {
      case "frontPage":
        buttonContent = "Next";
        break;
      case "secondPage":
        buttonContent = "Next";
        break;
      case "thirdPage":
        buttonContent = "Save and Show me";
        break;
      case "fourthPage":
        buttonContent = "Next";
        break;
      case "fifthPage":
        buttonContent = "Save and Show me";
        break;
      case "Extra":
        buttonContent = "Save and Show me";
        break;
      case "LinkPage":
        buttonContent = "Save and Show me";
        break;
    }
    return (
      <>
        <div
          style={{
            position: "relative",
            zIndex: 999999,
            display: "flex",
            justifyContent: "center",
            padding: "7%",
          }}
        >
          <div
            className={`templateMaker`}
            style={{
              width: "100%",
              margin: 0,
              minHeight: "90.5vh",
              paddingBottom: 100,
              position: "absolute",
              top: 0,
              padding: "7%",
              backgroundColor: "#ff2019",
              color: "#0e1e46",
            }}
          >
            <div>
              {this.state.editModal === "frontPage" && (
                <> <p
                    className="fadedshort"
                    style={{
                      fontSize: 26,
                      fontWeight: 100,
                      textAlign: "center",
                    }}
                >
                  Welcome, {this.state.firstName}.
                </p>
                  <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <input
                      disabled={cookie.get("wasPurchased")}
                      className="templateInputP"
                      style={{ width: 430 }}
                      type="text"
                      placeholder={
                        "Hi, What shall we call you? (Your first name)"
                      }
                      value={this.state.firstName}
                      onBlur={() => {
                        this.setState({ serviceTypeReady: true });
                      }}
                      onChange={(e) =>
                        this.setState({ firstName: e.target.value })
                      }
                    />
                  </div>
                  {this.state.serviceTypeReady && (
                    <div
                      className="fadedshort"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <input
                        disabled={cookie.get("wasPurchased")}
                        className="templateInputP"
                        style={{ width: 430 }}
                        type="text"
                        placeholder={
                          "What role do you have? (eg. Personal Trainer)"
                        }
                        value={this.state.serviceType}
                        onBlur={() => {
                          this.setState({ businessNameReady: true });
                        }}
                        onChange={(e) =>
                          this.setState({ serviceType: e.target.value })
                        }
                      />
                    </div>
                  )}
                  {this.state.businessNameReady && (
                    <div
                      className="fadedshort"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <input
                        disabled={cookie.get("wasPurchased")}
                        className="templateInputP"
                        style={{ width: 430 }}
                        type="text"
                        placeholder={"Give your new website a heading."}
                        value={this.state.pageTitle}
                        onBlur={() => {
                          this.setState({ domainNameReady: true });
                        }}
                        onChange={(e) =>
                          this.setState({ pageTitle: e.target.value })
                        }
                      />
                    </div>
                  )}

                  {(this.state.firstName &&
                    this.state.serviceType &&
                    this.state.domainNameReady) && (
                      <>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >

                        </div>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <input
                            onBlur={() => {
                              this.setState({ restOfFormReady: true });
                            }}
                            disabled={true}
                            className="templateInputP"
                            style={{ width: 430 }}
                            type="text"
                            placeholder={`Your chosen domain ie. ${
                              this.state.pageTitle &&
                              this.state.pageTitle.replace(/\s/g, "")
                            }`}
                            value={this.state.code}
                            onChange={(e) =>
                              this.setState({ code: e.target.value })
                            }
                          />
                          <span
                            style={{
                              paddingTop: 15,
                              fontSize: 22,
                              fontWeight: 600,
                              color: "#fff",
                            }}
                          >
                            .cashies.io
                          </span>
                        </div>
                      </>
                    )}
                </>
              )}
              {modalComponent}
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              {!this.state.selectedBusinessInfo &&
              this.state.editModal === "frontPage" ? null : (
                  <>
                    {this.state.editModal==="frontPage"&&<div
                        onClick={async()=>{
                          await this.editSecondSection()

                        }}
                        className="webgunStyleButton">
                      Preview </div>}
                    <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: 20,
                    cursor:
                      !this.state.imageURLArray[0] &&
                      this.state.generatedImageLoading
                        ? "wait"
                        : "pointer",
                  }}
                  onClick={async () => {
                    //todo update edit page function
                    rootStore.pageStore.setEditSection(null)

                    if(this.state.editSection&&this.state.editModal==='frontPage'){
                     return this.setState({ editModal: 'secondPage' })

                    }

                    let nextPage = "";
                    switch (this.state.editModal) {
                      case "frontPage":
                        nextPage = "secondPage";
                        break;
                      case "secondPage":
                        nextPage = "LinkPage";
                        break;
                      case "thirdPage":
                        nextPage = "fourthPage";
                        break;
                      case "fourthPage":
                        nextPage = "Extra";
                        break;
                    }
                    if (this.state.editModal === "frontPage") {
                     await editFrontSection()
                      return this.setState({ editModal: nextPage });

                  }
                    if (
                      this.state.editModal === "secondPage" ||
                      this.state.editModal === "fourthPage" ||
                      this.state.editModal === "Extra" ||
                      this.state.editModal === "LinkPage" ||
                      this.state.editModal === "thirdPage"
                    ) {
                    await  editSecondSection()
                      return this.setState({ editModal: nextPage });}
                  }}
                  className="webgunStyleButton"
                >
                  {buttonContent}
                </div>

                  </>
              )}
              {cookie.get("wasPurchased") && (
                <div
                  onClick={() => {
                    if (this.state.loadState === "success") {
                      return (window.location.href = "/pages");
                    }
                    if (this.state.loadState === "loading") {
                      return;
                    }
                    this.setState({ loadState: "loading" });
                    let content = this.state.content;
                    content.imageURLArray = this.state.imageURLArray;
                    content.routeItems = this.state.routeItems;
                    content.routeItemsDefault = this.state.routeItemsDefault;
                    content.logo = this.state.logo;
                    content.templateType = this.state.templateSelected;
                    console.log(
                      "SET:",
                      cookie.get("wasPurchased"),
                      this.state.plainCode,
                      ":",
                      content
                    );
                    firebase
                      .firestore()
                      .collection("templates")
                      .doc(`t-${cookie.get("wasPurchased")}`)
                      .set({ content: content })
                      .then(() => {
                        this.setState({ loadState: "success" });
                        console.log("Document successfully written!");
                      })
                      .catch((error) => {
                        this.setState({ loadState: null });
                        console.error(
                          "Error writing document: ",
                          error,
                          content,
                          this.state.content
                        );
                      });
                    rootStore.pageStore.createWebsite(
                      cookie.get("wasPurchased"),
                      this.state.content
                    );
                  }}
                  className={`altButton whiteButton magOrange ${
                    this.state.loadState === "loading" && "disabledButton"
                  }`}
                  style={{ marginLeft: 10 }}
                >
                  {this.state.loadState === "success"
                    ? "Preview now"
                    : "Preview now"}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
  buildWebsite(){
    console.log('now i am building!',rootStore.pageStore.user)
    this.generateContentFromPrefilledData().then(async () => {
      if(this.state.imageUpload) {
        await this.uploadLogoImage(null, null, 0, this.state.imageUpload)
      }
      this.editFrontSection().then((res)=>{

        console.log('I should have photos...',res)
        this.editSecondSection()
      })
    })
  }
  render() {
    console.log(
      "firebase:",
      firebase.apps.length,
      this.state.backgroundType,
      this.state.class,
      "/?///"
    );
    const getTheme = (label)=>{
      switch(label){

        case 'Cobalt': return {
         background: '#f8bbd0', text :'#fff', container: '#4264ea'
      }
      case 'Blush': return {
        background: '#ffcdd2', text :'#fff', container: '#f44336'
      }

        case 'Rose': return {
          background: '#c8e6c9', text :'#fff', container: '#009688'
        }
        case'Sunburst': return {
          background: '#ffe0b2', text :'#000', container: '#fbc02d'
        }

        case 'Aqua': return{
          background: '#b3e5fc', text :'#fff', container: '#90a4ae'
        }

        case 'Mocha': return{
          background: '#d7ccc8', text :'#fff', container: '#a1887f'
        }

        case 'Slate': return{
          background: '#cfd8dc', text :'#fff', container: '#607d8b'
        }
        case 'Gunmetal':return{
          background: '#cfd8dc', text :'#fff', container: '#525252'
        }
        case 'Midnight':return{
          background: '#000', text :'#fff', container: '#969696'
        }
        case 'Lilac':return{
          background: '#f8bbd0', text :'#fff', container: '#ba68c8'
        }
        default: return{
          background: '#cfd8dc', text :'#fff', container: '#607d8b'
        }
        }

      }
    const formReady = !this.state.editSection&&(!this.state.formSubmitted&&!this.state.pageOneLoading)
    return (
      <div>
        {false&&<NavBar
          userEmail={rootStore.pageStore.userEmail}
          resetFrontPage={() => {
            this.resetFrontPage();
          }}
          colorSelectorModal={this.state.colorSelectorModal}

          classSelectorActive={this.state.classSelectorActive}
          bgSelectorActive={this.state.bgSelectorActive}
          renderClassSelector={() => {
            this.renderClassSelector();
          }}
          renderBGSelector={() => {
            this.renderBGSelector();
          }}
          switchBackgroundType={() => {
            this.switchBackgroundType();
          }}
          backgroundType={this.state.backgroundType||"bg20"}
          class={this.state.class}
          font={this.state.font}
        />}





        {this.state.editModal &&
        formReady?
            <Widget  style={{ width: '100vw', height:'100vh' }} inlineOnMobile={true} className="tf-form"
                     onReady={()=>{console.log('ready')}} onSubmit={async (e)=>{
              console.log('response',e)

              this.setState({formSubmitted:true,pageOneLoading:true})
              setTimeout(async()=>{
              const res = await GetAllResponses(e.formId,e.responseId)
              const form = res.data.items.find((form)=>{
                return form.response_id === e.responseId
              })
              console.log('form:',form)
              const data = form.answers
              //use data to fill state content
              console.log('response data ',data)
            try {
              if (data) {
                const content = this.state.content
                // content.mainButtonTitle= data.find((field) => field.field.ref === 'mainButtonTitle').text;
                // content.mainButtonLink=data.find((field) => field.field.ref === 'mainButtonLink').text;
                const theme = getTheme(data.find((field) => field.field.ref === 'theme').choice.label)
                content.backgroundType = theme.background
                content.class = theme.container
                content.font = theme.text
                const logo = data.find((field) => field.field.ref === 'imageUpload')?data.find((field) => field.field.ref === 'imageUpload').file_url:null
                console.log('data', data,logo)
                this.setState({
                  themeClass:theme.container,
                  themeFont:theme.text,
                  themeBackground: theme.background,
                  backgroundType:theme.background,
                  firstName: data.find((field) => field.field.ref === 'firstName').text,
                  serviceType: data.find((field) => field.field.ref === 'serviceType').text,
                  businessName: data.find((field) => field.field.ref === 'businessName').text,
                  pageTitle: data.find((field) => field.field.ref === 'businessName').text,
                  code: data.find((field) => field.field.ref === 'code').text,
                  emailAddress: data.find((field) => field.field.ref === 'emailAddress').text,
                  password: data.find((field) => field.field.ref === 'firstName').text + '123@',

                  imageUpload: logo,
                  noBusiness: true,
                  selectedBusinessInfo: {},

                  content
                })
                this.buildWebsite()
              } else {
                console.log('no data', form, data)
              }
            }catch(e){
                console.log('e',e)
            }
              //edit front section
              //edit second section
              //done
              return data
              },1000)
            }}

            id={process.env.REACT_APP_FORM_ID}
                   />
            :this.state.editSection?this.renderEditModal(this.state.editModal,this.editFrontSection,this.editSecondSection):<div style={{textAlign:'center',padding:'20%'}}><h3>Great, we're building your website. Sit back, this will only take a moment.</h3>
        <div style={{display:'flex',justifyContent:'center'}}>
          <div className="bar">
            <div className="in"></div>
          </div>
        </div></div>}
        <div
          style={{
            height: "100%",
            position: "relative",
            opacity:
              this.state.editModal || this.state.colorSelectorModal ? 0.1 : 1,
            paddingBottom: 0,
          }}
        >
          <div>
            <div>
              <div className="myDIV"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatorFunnel;
