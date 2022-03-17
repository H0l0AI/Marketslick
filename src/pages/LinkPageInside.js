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
    supportingBlurb, supportingHeading, titleBlurb, titleContent
} from "../content";
import {rootStore} from "../stores/Store";
import {NavBar} from "./MarketingHeroPage";
// import {linkArray} from 'contents.json'


export class LinkPageInside extends React.Component {
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
                font:'#fff',
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
            <NavBar content={this.state.content} isMarketing={true} class={this.state.content.class} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType}/>
            <div style={{backgroundColor:this.state.content.backgroundType,color:this.state.content.font,height:'100vh',width:'100vw',paddingTop:100}}>
                <h2 style={{textAlign:'center'}}>Our other pages</h2>
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