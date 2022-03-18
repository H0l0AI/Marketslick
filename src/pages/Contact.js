import React from 'react';

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
    backgroundType,tLogo,hasScroll,font,linkArray
} from "../content";
import {NavBar} from "./MarketingHeroPage";
import {rootStore} from "../stores/Store";


export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef()
        this.state={
            currentMainImage:0,
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
                logo:tLogo,
                font:font,
                linkArray:linkArray,

            }
        }
    }
    componentDidMount(){
        console.log(rootStore.pageStore.code,'load code');
    }
    render(){
        console.log('firebase:',firebase.apps.length);
        return <div>
            <NavBar content={this.state.content} isMarketing={false} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType||'bg-dark-blue'}/>
            <div className={`fadedshort`} style={{height: '100vh',position:'relative',backgroundColor:this.state.content.backgroundType,color:this.state.content.font}}>
                <div ref={this.contactRef} style={{paddingTop:0}}>
                    <div style={{marginTop:40,padding:40,margin:0,backgroundColor:this.state.content.class}}>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <div>
                                <h2 style={{fontSize:56,fontWeight:400,textAlign:'center',borderBottom:'1px solid #fff',marginBottom:0}}>{this.state.content.contactTitle}<br /></h2>
                                <p style={{marginBottom:30,paddingLeft:15,paddingTop:10,minWidth:350,whiteSpace:'break-spaces',textAlign:'center'}}>
                                    {this.state.content.contactBlurb}
                                    <br />
                                    <br />
                                    {this.state.content.businessBlurb}
                                </p>
                                <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                                    <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">mail</i> </div><div style={{marginLeft:40}}><b></b>{this.state.content.contactEmail}</div></div>
                                    <br />
                                    <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">local_phone</i> </div><div style={{marginLeft:40}}><b></b>{this.state.content.contactPhone}</div></div>
                                    <br />

                                </div>
                                <div >
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    }
}