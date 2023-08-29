import React from 'react';
import firebase from "firebase/compat";
import {useParams} from "react-router-dom";
import {
    backgroundType,
    businessBlurb,
    businessBlurbShort,
    contactBlurb,
    contactEmail,
    contactPhone,
    contactTitle,
    p3Content1,
    p3Heading1, RouteItems,
    secondaryContent,
    secondaryContent1,
    secondaryContentTitle,
    secondaryHeader,
    secondaryHeading1,
    supportingBlurb, supportingHeading, titleBlurb, titleContent,
    linkTitle,
} from "../content";
import {rootStore} from "../stores/Store";
import {NavBar} from "./MarketingHeroPage";
// import {linkArray} from 'contents.json'


export class LinkPage extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef()
        this.state={
            content:{
                linkTitle:linkTitle,
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
                linkArray:[],

            }

        }
    }
    componentDidMount(){
        firebase.firestore().collection("templates").get().then((data)=>{
            const dataToLoad=data.docs.find((doc)=>doc.id===(rootStore.pageStore.code?`t-${rootStore.pageStore.code}`:'live')).data();
            if(dataToLoad) {
                console.log(dataToLoad,'LOAD');
                this.setState({content: dataToLoad.content})
            }
        })
    }
    render(){
        return <div>
            <div className="bg-cover" style={{ background:this.state.content.imageURLArray?`url(${this.state.content.imageURLArray[0]})`:'',backgroundSize:'cover',color:'#fff',height:'100vh',width:'100vw',paddingTop:100}}>
                <h2 style={{textAlign:'center'}}>{this.state.content.linkTitle}</h2>
                <div style={{display:'flex',justifyContent:'center',zIndex:99}}>
                    <ul>
                        {this.state.content.linkArray&&this.state.content.linkArray.length>0&&this.state.content.linkArray.map((link)=>{
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