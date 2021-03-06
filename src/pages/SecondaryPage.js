import React from 'react';
import house1 from '../images/house1.jpg';
import house2 from '../images/house2.jpg';
import firebase from "firebase/compat";
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
    secondaryContent,
    secondaryContentTitle,
    supportingBlurb,
    supportingHeading,
    titleBlurb,
    titleContent,
    trustedPartnerContent,
    RouteItems,
    secondaryHeader,
    secondaryHeading1,
    secondaryHeading2,
    secondaryContent2,
    secondaryContent1,
    businessBlurbShort,
    contactCTA,
    secondaryPhoto2, secondaryPhoto1, contactBlurb, p3Content1, p3Heading1, backgroundType,bgClass,imageURLArray,tLogo,hasScroll,font,linkArray
} from "../content";
import {scrollActivate} from "./HeroPage";
import {rootStore} from "../stores/Store";
import {NavBar} from "./MarketingHeroPage";



export class SecondaryPage extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef()
        this.state={
            currentMainImage:0,
            mainArray:[house1,house2],
            content:{
                businessBlurb: businessBlurb,
                businessBlurbShort: businessBlurbShort,
                supportingBlurb:supportingBlurb,
                contactBlurb:contactBlurb,
                contactEmail:contactEmail,
                contactPhone:contactPhone,
                contactTitle: contactTitle,
                p3Content1: p3Content1,
                p3Heading1: p3Heading1,
                secondaryContent: secondaryContent,
                secondaryContent1: secondaryContent1,
                secondaryContentTitle:secondaryContentTitle,
                secondaryHeader: secondaryHeader,
                secondaryHeading1: secondaryHeading1,
                supportingHeading: supportingHeading,
                titleBlurb:titleBlurb,
                titleContent:titleContent,
                backgroundType:backgroundType,
                class:bgClass,
                imageURLArray,
                logo:tLogo,
                hasScroll:hasScroll,font:font,
                linkArray:linkArray,

            }
        }
    }
    shiftCurrentImage(){
        setInterval(()=>{
            this.nextImage();
        },5000);
    }
    nextImage(){
        this.setState({
            currentMainImage:this.state.currentMainImage+1
        })
    }
    componentDidMount(){
        scrollActivate();
    }
    render(){
        console.log('firebase:',firebase.apps.length);
        return <div>
            <NavBar content={this.state.content} isMarketing={false} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType||'bg-dark-blue'}/>
            <div style={{height: '100%',position:'relative',backgroundColor:this.state.content.backgroundType}}>
                <div style={{paddingBottom:100,backgroundColor:this.state.content.backgroundType}}>
                    <div className="fadedshort" style={{display:'flex',justifyContent:'center',color:this.state.content.font}}><div style={{width:'40%'}}><h1 style={{textAlign:'center',paddingTop:20,marginBottom:60}}>
                        {this.state.content.secondaryHeader}</h1></div></div>
                    <div className={`fadedshort`} style={{display:'flex',justifyContent:'center',flexWrap:'wrap',padding:20,backgroundColor:this.state.content.class,color:this.state.content.font}}>
                        <div style={{maxWidth:350}}>
                            <img src={this.state.content.imageURLArray&&this.state.content.imageURLArray[2]||secondaryPhoto1} style={{borderRadius:8}} className="img-fluid d-block mx-auto" width="350"/>
                        </div>
                        <div style={{maxWidth:600,margin:20}}><p className="fadedshort" style={{padding:20, whiteSpace:'break-spaces'}}>
                            <h1>{this.state.content.secondaryHeading1}</h1>
                            {this.state.content.secondaryContent1}
                        </p>
                        </div>

                        {/*     <div className="col-12 col-md-5 mainFontColor">
                            <div className="px-4">
                                <div style={{display:'flex',justifyContent:'center'}}><img src={secondaryPhoto2} /></div>

                                <h1 style={{marginTop:20}}>{secondaryHeading2}</h1>

                                <p className="mainFontColor">{secondaryContent2}</p>
                            </div>
                        </div>*/}
                    </div>
                    <div className={`mainFontColor ${this.state.content.hasScroll&&'scroll-element js-scroll slide-left starting'}`} style={{paddingTop:120}}>
                        <h2 style={{textAlign:'center'}}>{this.state.content.contactTitle}</h2>
                        <p style={{textAlign:'center'}}>{this.state.content.businessBlurbShort}</p>
                        <div style={{display:'flex',justifyContent:'center'}}><div onClick={()=>{window.location.href='/pages/contact'}} className="altButton" style={{width:300,marginTop:20,textAlign:'center'}}>
                            {contactCTA}

                        </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    }
}