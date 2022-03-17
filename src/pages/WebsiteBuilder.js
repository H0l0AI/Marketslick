import React from 'react';
import {NavBar} from "./Main";
import dreamwoodwebsite from '../images/dreamwoodwebsite.png'
import demoProduct from '../images/demoProduct.png'
import onestep from '../images/onestep.png'
import builder from '../images/builder_lap.png'
import firebase from "firebase/compat";

export class WebsiteBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            activePage:'HOME',
            imgSelected:null,
        }
    }
    toggleActivePage(page){
        return this.setState({activePage:page})
    }
    detectMob() {
        return ( ( window.innerWidth <= 900 ) && ( window.innerHeight <= 1000 ) );
    }
    render(){
        return <div style={{overflowY:'hidden',position:'relative'}}>
            <div className={`mainImageBackground text-white ${this.state.imgSelected&&'selectedPopupOpaque'}`} style={{zIndex:999,paddingTop:0}}>
                <div style={{backgroundColor:'#fff'}} >
                    <h1 style={{textAlign:'center',paddingTop:80,fontWeight:300,color:'#ff2019'}}>Build a website, make it yours.</h1>

                    <div style={{paddingBottom:80,overflowY:'auto',display:'flex',justifyContent:'center',paddingTop:40}}>
                        <div style={{display:'inline-flex',flexWrap:'wrap',paddingLeft:100,paddingRight:100,
                            alignContent:'flex-start',alignItems:'space-around',justifyContent:'space-around',width:'100%'}}>
                            <div><h3 className="magOrange" style={{textAlign:'left',marginTop:10,marginBottom:20,fontWeight:300}}>Get online instantly with our Marketing Magnet builder.</h3>
                            <p style={{color:'#505050'}}>Try our website builder to see what we can do for you!</p>
                                <br />
                                <div onClick={()=>{
                                    firebase.analytics().logEvent('view_template_creator');
                                    if(this.detectMob()) {
                                        return alert('Sorry, not available on mobile browsers.')
                                    }else{
                                        window.location.href = '/builder'
                                    }}} style={{margin:10}} className="altButton redButton magOrange">Try it {this.detectMob()?'on desktop!':'now!'} <div style={{position:'relative'}}><div style={{position:'absolute',top:-25,right:0}}><i className="material-icons">keyboard_arrow_right</i></div>
                                    </div></div>
                                <br />
                                <p style={{color:'#505050',marginBottom:0,marginTop:30}}>Not sure how to build a website and would rather have one of our specialists run you through it?</p>
                                <br />
                                <div onClick={()=>{
                                    window.location.href = 'https://meetings.hubspot.com/gareth110'
                                }} style={{margin:10}} className="altButton redButton magOrange">Book now!<div style={{position:'relative'}}><div style={{position:'absolute',top:-25,right:0}}><i className="material-icons">keyboard_arrow_right</i></div></div></div>



                            </div>
                            <div className="myDIV2" onClick={()=>{if(this.detectMob()){}else{window.location.href='/builder'}}}><img  src={builder} className="rounded-4 hoverImage " width="500" height={500}/></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    }
}