import React from 'react';
import firebase from "firebase/compat";
import {useParams} from "react-router-dom";
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
    secondaryPhoto2, secondaryPhoto1, contactBlurb, p3Content1, p3Heading1, backgroundType,bgClass,imageURLArray,tLogo,hasScroll,linkArray
} from "../content";
import {rootStore} from "../stores/Store";
// import {linkArray} from 'contents.json'


export class LinkPage extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef()
        this.state={
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
                linkArray:linkArray,

            }

        }
    }
    componentDidMount(){
    }
    render(){
        return <div>
            <div className={`${this.state.content.backgroundType}`} style={{color:'#fff',height:'100vh',width:'100vw',backgroundColor:'#ff2019',paddingTop:100}}>
                <h2 style={{textAlign:'center'}}>Our other pages</h2>
                <div style={{display:'flex',justifyContent:'center',zIndex:99}}>
                    <ul>
                        {this.state.content.linkArray.length>0&&this.state.content.linkArray.map((link)=>{
                            return(<li style={{cursor:'pointer',fontSize:28,zIndex:999}} onClick={()=>{window.location.href=link.link}}>
                                {link.name}
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>

    }
}