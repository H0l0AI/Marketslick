import logo from './logo.svg';
import './App.css';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import firebase from "firebase/compat";
import {HeroPage} from "./pages/HeroPage";
import {SecondaryPage} from "./pages/SecondaryPage";
import {ThirdPage} from "./pages/ThirdPage";
import {Contact} from "./pages/Contact";
import cookie from "js-cookie";
import {rootStore} from "./stores/Store";
import {TemplatedRoute} from "./pages/TemplatedRoute";
import {MarketingHeroPage} from "./pages/MarketingHeroPage";
import {LinkPage} from "./pages/LinkPage";
import {templateType} from "./content";


const customHistory = createBrowserHistory();
const TemplatedRouteComponent=<TemplatedRoute index={0} />

@inject('rootStore') @observer class App extends React.Component{
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
            measurementId: "G-8PXLDDQZGL"
        };

// Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        this.state={
            routeItems:[],
            templateType:'pm',
        }

    }

    componentDidMount(){
        console.log(rootStore.pageStore.code,'load code MAIN');
    }
    render() {


        return (
            <Router history={customHistory}>
                <Switch>
                    <Route path="/" exact component={templateType==='pm'?HeroPage:MarketingHeroPage}/>
                    <Route path="/MarketingMagnet" exact component={MarketingHeroPage}/>
                    <Route path="/pages/our-staff" exact component={SecondaryPage}/>
                    <Route path="/pages/project-management" exact component={ThirdPage}/>
                    <Route path="/pages/contact" exact component={Contact}/>
                    <Route path='/pages/links' exact component={LinkPage} />
                    <Route path='/pages/additional0' exact component={()=><div><TemplatedRoute index={0} /></div>}/>
                    <Route path='/pages/additional1' exact component={()=><div><TemplatedRoute index={1} /></div>}/>
                    <Route path='/pages/additional2' exact component={()=><div><TemplatedRoute index={2} /></div>}/>
                    <Route path='/pages/additional3' exact component={()=><div><TemplatedRoute index={3} /></div>}/>
                </Switch>
            </Router>

        );
    }
}

export default App;
