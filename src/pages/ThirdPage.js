import React from 'react';
import house1 from '../images/house1.jpg';
import house2 from '../images/house2.jpg';
import home_icon from '../images/realtor-icon-4-dark.png';
import logo from '../images/smicon.png';
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
    p3,
    p3Content,
    p3ContentTitle,
    supportingBlurb,
    supportingHeading,
    titleBlurb,
    titleContent,
    trustedPartnerContent,
    RouteItems,
    p3Header,
    p3Heading1,
    p3Heading2,
    p3Content2,
    p3Content1,
    businessBlurbShort,
    contactCTA,
    secondaryContentTitle,
    secondaryContent,
    p3ContentPhoto,
    contactBlurb,
    secondaryContent1,
    secondaryHeader,
    secondaryHeading1,
    backgroundType,bgClass,imageURLArray,tLogo,
} from "../content";
import {NavBar} from "./HeroPage";
import {rootStore} from "../stores/Store";


export class ThirdPage extends React.Component {
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
        console.log(rootStore.pageStore.code,'load code');

    }
    render(){
        console.log('firebase:',firebase.apps.length);
        return <div>
            <NavBar content={this.state.content} isMarketing={false} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType||'bg-dark-blue'}/>
            <div className={`${this.state.content.backgroundType} text-white`} style={{position:'relative'}}>
                <div className={`${this.state.content.backgroundType} text-white`} style={{paddingTop:50}}>
                    <div className={`container secondaryBackgroundColor ${this.state.content.class}`}>
                        <div style={{display: 'flex', justifyContent: 'center',paddingTop:40,flexWrap:'wrap',paddingBottom:40,marginBottom:30}}>
                            <div><img style={{paddingTop:0,paddingRight:20,borderRadius:4}} src={this.state.content.imageURLArray&&this.state.content.imageURLArray[3]||p3ContentPhoto} alt="" width="350"/></div>
                            <div style={{width: '55%',minWidth:350,paddingLeft:15}}>
                                <h3 style={{marginRight:'5%',marginBottom:0,whiteSpace:'break-spaces'}}>{this.state.content.p3Heading1}</h3>
                                <p style={{fontSize:18,paddingLeft:0,paddingTop:10,whiteSpace:'break-spaces'}}>{this.state.content.p3Content1}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mainFontColor" style={{paddingTop:40,paddingBottom:100}}>
                    <h2 style={{textAlign:'center'}}>{this.state.content.contactTitle}</h2>
                    <p style={{textAlign:'center'}}>{this.state.content.businessBlurbShort}</p>
                    <div style={{display:'flex',justifyContent:'center'}}><div onClick={()=>{window.location.href='/pages/contact'}} className="altButton" style={{width:300,marginTop:20,textAlign:'center'}}>
                        {contactCTA}

                    </div>
                    </div>

                </div>
            </div>
        </div>

    }
}