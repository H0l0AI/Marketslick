import logo from "./logo.svg";
import "./App.css";
import "./SM.css";
import qs from "qs";
import React from "react";
import { inject, observer } from "mobx-react";
import { Router, Route, Switch, useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import firebase from "firebase/compat";
import HeroPage from "./pages/HeroPage";
import { SecondaryPage } from "./pages/SecondaryPage";
import { ThirdPage } from "./pages/ThirdPage";
import { Contact } from "./pages/Contact";
import cookie from "js-cookie";
import { rootStore } from "./stores/Store";
import { TemplatedRoute } from "./pages/TemplatedRoute";
import { MarketingHeroPage } from "./pages/MarketingHeroPage";
import { LinkPage } from "./pages/LinkPage";
import TemplateCreator from "./pages/TemplateCreator";
import { MarketingHeroPageSuccess } from "./pages/MarketingHeroPageSuccess";
import { HeroPageSuccess } from "./pages/HeroPageSuccess";
import { LinkPageInside } from "./pages/LinkPageInside";
import CreatorFunnel from "./pages/CreatorFunnel";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import FDNavbar from "../src/FitDirect/components/NavBar";
import FDFooter from "../src/FitDirect/components/Footer";
import FDHomePage from "../src/FitDirect/pages/HomePage";
import FDBrowse from "../src/FitDirect/pages/Browse";

const customHistory = createBrowserHistory();
const TemplatedRouteComponent = <TemplatedRoute index={0} />;

@inject("rootStore")
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyD7nd9OVHIgNPJsXzdTik4xGmMshRrzwCA",
      authDomain: "salesmagnet-927f3.firebaseapp.com",
      projectId: "salesmagnet-927f3",
      storageBucket: "salesmagnet-927f3.appspot.com",
      messagingSenderId: "1097891059053",
      appId: "1:1097891059053:web:3673712cf36c09aac3b664",
      measurementId: "G-8PXLDDQZGL",
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings({ ignoreUndefinedProperties: true });

    this.state = {
      routeItems: [],
    };
    this.props.rootStore.pageStore.initializeAuthentication();
  }

  componentDidMount() {
    const query = qs.parse(window.location.search.replace("?", ""));
    console.log(cookie.get("referrer"), "REF:");
    if (query.referral !== undefined) {
      console.log(
        "QUERY:",
        query.referral,
        query.referral.length,
        typeof query.referral
      );
      cookie.set("referrer", query.referral);
    }
    firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        if (result.credential) {
          let credential = result.credential;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          let token = credential.accessToken;
          // ...
        }
        // The signed-in user info.
        let user = result.user;
        // IdP data available in result.additionalUserInfo.profile.
        // ...
        console.log("cred", result);
      })
      .catch((error) => {
        console.log("fb err", error);
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
      });
    console.log(rootStore.pageStore.code, "load code MAIN");

    /*      firebase.firestore().collection("templates").get().then((data)=>{
            const dataToLoad=data.docs.find((doc)=>doc.id===(rootStore.pageStore.code?`t-${rootStore.pageStore.code}`:'live')).data();
            if(dataToLoad) {
                const routeItems = dataToLoad.content.routeItemsDefault.concat(dataToLoad.content.routeItems);
                console.log(dataToLoad,'LOAD MAIN',routeItems);

                this.setState({routeItems:routeItems})
            }
        })*/
  }
  render() {
    return (
      <Router history={customHistory}>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/marketingDemo" exact component={MarketingHeroPage} />
          <Route path="/builder" exact component={CreatorFunnel} />
          <Route
            path="/pages"
            exact
            component={
              cookie.get("templateType") === "dm" ? MarketingHeroPage : HeroPage
            }
          />
          <Route
            path="/basic-success"
            exact
            component={
              cookie.get("templateType") === "dm"
                ? MarketingHeroPageSuccess
                : HeroPageSuccess
            }
          />
          <Route path="/l/:hostLinkPage" component={LinkPage} />
          <Route
            path="/r/:redirectTarget"
            component={(props) => {
              let { redirectTarget } = useParams();
              window.location.href = `https://${redirectTarget}.cashies.io`;
            }}
          />
          <Route path="/MarketingMagnet" exact component={MarketingHeroPage} />
          <Route path="/pages/our-staff" exact component={SecondaryPage} />
          <Route path="/pages/project-management" exact component={ThirdPage} />
          <Route path="/pages/contact" exact component={Contact} />
          <Route path="/pages/links" exact component={LinkPageInside} />
          <Route
            path="/pages/additional0"
            exact
            component={() => (
              <div>
                <TemplatedRoute index={0} />
              </div>
            )}
          />
          <Route
            path="/pages/additional1"
            exact
            component={() => (
              <div>
                <TemplatedRoute index={1} />
              </div>
            )}
          />
          <Route
            path="/pages/additional2"
            exact
            component={() => (
              <div>
                <TemplatedRoute index={2} />
              </div>
            )}
          />
          <Route
            path="/pages/additional3"
            exact
            component={() => (
              <div>
                <TemplatedRoute index={3} />
              </div>
            )}
          />

          {/* FitDirect Routes */}
          {/* <Route
            path="../src/FitDirect/components/NavBar"
            exact
            component={FDNavbar}
          />
          <Route
            path="../src/FitDirect/components/Footer"
            exact
            component={FDFooter}
          /> */}
          <Route
            path="../src/FitDirect/pages/HomePage"
            exact
            component={FDHomePage}
          />
          <Route
            path="../src/FitDirect/pages/Browse"
            exact
            component={FDBrowse}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
