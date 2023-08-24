import React from 'react';
import image1 from '../images/house2.jpg';
import image2 from '../images/house3.jpg';
import home_icon from '../images/realtor-icon-4-dark.png';
import p2 from '../images/p2.png';
import coffee from '../images/coffee.png';
import firebase from "firebase/compat";
import cookie from 'js-cookie';
import logo from '../images/sm3.png';


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
    secondaryPhoto1, contactCTA, p3ContentPhoto,backgroundType,bgClass,tLogo,hasScroll,supportingHeading2,igT,mapsCenter,businessName,font
} from "../content";
import {rootStore} from '../stores/Store';
import {toJS} from "mobx";
import builder from "../images/builder.png";
import SimpleMap from "./SimpleMap";
import {NavBar} from "./MarketingHeroPage";

export const scrollActivate = ()=>{
    const scrollElements = document.querySelectorAll(".js-scroll");

    var throttleTimer;

    const throttle = (callback, time) => {
        if (throttleTimer) return;

        throttleTimer = true;
        setTimeout(() => {
            callback();
            throttleTimer = false;
        }, time);
    }

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
                hideScrollElement(el)
            }
        })
    }
    var timer=0;
    var count=0;
    var scroll = 0;

    window.addEventListener("scroll", () => {
        throttle(() => {
            handleScrollAnimation();
        }, 250);
    });


}
export class HeroPage extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef()
        console.log(businessBlurbShort,contactTitle,contactPhone,'????');
        this.state={
            code:'',
            showSaleSuccess:false,
            currentMainImage:0,
            mainArray:[image1,image2],
            content:{
                scrollCTA:scrollCTA||false,
                isFunnel:isFunnel||false,
                mapsCenter:mapsCenter,
                businessName:businessName,
                businessBlurb: businessBlurb,
                businessBlurbShort: businessBlurbShort,
                supportingBlurb:supportingBlurb,
                contactBlurb:contactBlurb,
                contactEmail:contactEmail,
                contactPhone:contactPhone,
                contactTitle: contactTitle,
                p3Content1: p3Content1,
                p3Heading1: p3Heading1,
                mainButtonTitle:mainButtonTitle,
                mainButtonLink:mainButtonLink,
                font:font,



                secondaryContent: secondaryContent,
                secondaryContent1: secondaryContent1,
                secondaryContentTitle:secondaryContentTitle,
                secondaryHeader: secondaryHeader,
                secondaryHeading1: secondaryHeading1,
                supportingHeading: supportingHeading,
                titleBlurb:titleBlurb,
                titleContent:titleContent,
                supportingHeading2,


                backgroundType:backgroundType,
                class:bgClass,
                imageURLArray:imageURLArray,
                routeItems:[],
                routeItemsDefault:RouteItems,
                logo:tLogo,
                hasScroll:hasScroll,
                igT:igT,

            }
        }
    }

    componentDidMount(){
        scrollActivate();
    }
    changeCode(e){
        this.setState({code:e.target.value})
    }
    shiftCurrentImage(){
    }
    nextImage(){
        this.setState({
            currentMainImage:this.state.currentMainImage+1
        })
    }
    handleContentFormChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => {
            const { content } = prevState;
            content[name] = value;
            return { content };
        });
    };

    render(){
        let customerHasPaid = false;
        console.log('test:',firebase.apps.length,toJS(rootStore.pageStore.code),isFunnel,!this.state.isFunnel);
        return <div>
            {!this.state.isFunnel?null:<NavBar content={this.state.content} isMarketing={false} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType||'bg-dark-blue'}/>}
            <div style={{height: '100%',position:'relative',backgroundColor:this.state.content.backgroundType,color:this.state.content.font}}>
                <div>
                    <div>
                        <div style={{position:'absolute',zIndex:8999,width:'100%'}}>
                            <div style={{paddingTop:80,marginBottom:0,display:'flex',justifyContent:'center',width:'100%'}}>
                                <img style={{maxWidth:350}} src={this.state.content.logo||logo} />
                            </div>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <div style={{padding:30,minWidth:300,maxWidth:630,width:'100%',paddingTop:0,paddingLeft:10,paddingRight:0,textAlign:'center'}}>
                                    <h1>{this.state.content.titleContent}</h1>                               <p style={{fontSize:20,marginLeft:0}} className="mb-4">
                                    {this.state.content.titleBlurb}
                                </p>
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <div className="altButtonOuter" onClick={()=>{
                                            firebase.analytics().logEvent('view_contact_btn');
                                            this.contactRef.current.scrollIntoView();
                                        }}>
                                            <div className="altButton" style={{backgroundColor:this.state.content.class,color:this.state.content.font}}>
                                                {this.state.content.scrollCTA||'Get in touch!'}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="myDIV photoCoverBG" style={{minHeight:788,backgroundImage: "url(" + this.state.content.imageURLArray[0] + ")"}}>
                        </div>

                    </div>

                </div>
                <div className="bg-mainColor">
                    <div>
                        <div style={{paddingTop:100,paddingBottom:100,backgroundColor:this.state.content.class,color:this.state.content.font}}>
                            <div style={{display: 'flex', justifyContent: 'center',paddingTop:40,flexWrap:'wrap',paddingBottom:40}}>
                                <div style={{maxWidth:'98vw'}}><div className={`${this.state.content.hasScroll&&'scroll-element js-scroll slide-left starting'}`} ><img style={{height:300,paddingLeft:0,margin:0,width:'44vw',minWidth:350,borderRadius:4}} src={this.state.content.imageURLArray[2]} alt="" width="50%"/></div></div>
                                <div style={{maxWidth:'98vw'}}><div className={`${this.state.content.hasScroll&&'scroll-element js-scroll slide-right starting'}`}  style={{minWidth:300,padding:30}}>

                                    <h3 style={{fontSize:40,paddingLeft:15,marginBottom:0,whiteSpace:'break-spaces',color:this.state.content.font}}>{this.state.content.secondaryContentTitle}</h3>
                                    <p style={{minWidth:300,paddingLeft:0,paddingTop:10,fontSize:23,whiteSpace:'break-spaces',paddingBottom:10,borderBottom:`1px solid ${this.state.content.font}`,color:this.state.content.font}}>{this.state.content.secondaryContent1}</p>
                                </div></div>
                            </div>
                        </div>

                        <div className={`photoCoverBG`} style={{color:this.state.content.font,fontSize:20,paddingBottom:5,backgroundImage: "url(" + this.state.content.imageURLArray[1] + ")"}}>
                            <div className="container">

                                <div style={{paddingTop:60}}>
                                    <div className={`scrollContainer`} style={{borderRadius:12,backgroundColor:this.state.content.backgroundType}}>
                                        <div className={` ${this.state.content.hasScroll&&'scroll-element js-scroll slide-left starting'}`} style={{padding:33,width:'100%'}}>
                                            <div className="px-4">
                                                <p><h2 style={{fontSize:'1.5rem',whiteSpace:'break-spaces'}}>{this.state.content.supportingHeading}</h2></p>
                                            </div>
                                            <br/>
                                            <div>
                                            </div>
                                            <div className="px-4">
                                                <p style={{fontSize:'1.5rem',whiteSpace:'break-spaces'}}>{this.state.content.supportingHeading2}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={this.contactRef} >
                            <div style={{marginTop:40,padding:40,margin:0,paddingBottom:200,backgroundColor:this.state.content.backgroundType,color:this.state.content.font}}>
                                <div className={`${this.state.content.hasScroll&&'scroll-element js-scroll slide-right starting'}`} style={{display:'flex',justifyContent:'center'}}>
                                    <div>
                                        <h2 style={{color:this.state.content.font,fontSize:56,fontWeight:400,textAlign:'center',borderBottom:`1px solid ${this.state.content.font}`,marginBottom:0}}>
                                            <div className="templateCTA" onClick={()=>{
                                                firebase.analytics().logEvent('view_range_btn');
                                                window.location.href=this.state.content.mainButtonLink
                                            }} >
                                                <div className="altButton" style={{backgroundColor:this.state.content.class,color:this.state.content.font}}>
                                                    {this.state.content.mainButtonTitle||'Apply Now'}
                                                </div>
                                            </div>
                                            <br /></h2>
                                        <p style={{color:this.state.content.font,fontSize:20,marginBottom:30,paddingLeft:15,paddingTop:10,width:'60vw',minWidth:300,textAlign:'center',whiteSpace:'break-spaces'}}>
                                            {this.state.content.contactBlurb}
                                            <br />
                                            <br />
                                            {this.state.content.businessBlurb}
                                        </p>
                                        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',color:this.state.content.font}}>
                                            <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">mail</i> </div><div style={{marginLeft:40}}><b></b>{this.state.content.contactEmail}</div></div>
                                            <br />
                                            <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">local_phone</i> </div><div style={{marginLeft:40}}><b></b>{this.state.content.contactPhone}</div></div>
                                            <br />

                                        </div>
                                        <div >
                                            <div style={{display:'flex',justifyContent:'center'}}>{this.state.content.mapsCenter&&<SimpleMap center={this.state.content.mapsCenter} name={this.state.content.businessName} />}</div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>

    }
}