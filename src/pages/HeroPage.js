import React from 'react';
import image1 from '../images/house2.jpg';
import image2 from '../images/house3.jpg';
import home_icon from '../images/realtor-icon-4-dark.png';
import p2 from '../images/p2.png';
import coffee from '../images/coffee.png';
import firebase from "firebase/compat";
import cookie from 'js-cookie';


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
    secondaryPhoto1, contactCTA, p3ContentPhoto,backgroundType,bgClass,tLogo
} from "../content";
import {rootStore} from '../stores/Store';
import {toJS} from "mobx";
import builder from "../images/builder.png";
import content from "../contents";



export const NavBar = (props)=>(
    <nav className={`navbar navbar-expand-xl navbar-dark ${props.backgroundType} myNav navTextColor`}>
        <div className="container">
            <a className="navbar-brand">
                <img onClick={()=>{window.location.href='/'}} src={props.content.logo||logo}  alt="" width="100" />
            </a>
            <button className="navbar-toggler rounded-4 shadow-sm" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
                    {props.routeItems.map((route)=>{
                        if(route.dropArray){
                            return(<li className="nav-item" style={{cursor:'pointer'}}>

                                <div className="dropdown nav-link" style={{position:'relative'}}>
                                    <div className="dropbtn" onClick={()=>{
                                        firebase.analytics().logEvent(route.routeTag);

                                        window.location.href=route.href
                                    }}>{route.name}</div>
                                    <div className="dropdown-content" style={{zIndex:999,position:'absolute'}}>
                                        {route.dropArray.map((dropdownContent)=>
                                            <a className="whiteTextNav" onClick={()=>{
                                                firebase.analytics().logEvent(dropdownContent.routeTag);
                                                window.location.href=dropdownContent.href
                                            }} style={{textAlign:'center'}}><img width={18}
                                                                                 src={home_icon}/> {dropdownContent.name} </a>
                                        )}
                                    </div>
                                </div>
                            </li>)
                        }
                        else {
                            return (<li className="nav-item" style={{cursor: 'pointer'}} onClick={() => {
                                firebase.analytics().logEvent(route.routeTag);
                                window.location.href = route.href;
                            }}><a className="nav-link whiteTextNav" aria-current="page">{route.name}</a>
                            </li>);
                        }
                    })})
                </ul>
            </div>
        </div>
    </nav>);

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
                imageURLArray:imageURLArray,
                routeItems:[],
                routeItemsDefault:RouteItems,
                logo:tLogo,

            }
        }
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
        console.log('test:',firebase.apps.length,toJS(rootStore.pageStore.code));
        return <div>
            <NavBar content={this.state.content} isMarketing={false} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType||'bg-dark-blue'}/>
            <div className={`${this.state.content.backgroundType} text-white`} style={{height: '100%',position:'relative'}}>
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
                                            <div className="altButton">
                                                Contact Us
                                            </div>
                                        </div>
                                        <div className="templateCTA" onClick={()=>{
                                            firebase.analytics().logEvent('view_range_btn');
                                            window.location.href=this.state.content.mainButtonLink
                                        }} >
                                            <div className="altButton">
                                                {this.state.content.mainButtonTitle||'Apply Now'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`blurTest secondaryBackgroundColor ${this.state.content.class}`} style={{height:790,minWidth:375,width:'100%',zIndex:900,position:'absolute'}}>

                        </div>
                        <div className="myDIV" style={{minHeight:900}}>
                            <img onClick={()=>{this.nextImage()}}  key={this.state.currentMainImage}  src={this.state.content.imageURLArray[0]} className="fadedshort" style={{width:'100%',height:790,objectFit:'cover'}}/></div>

                    </div>

                </div>





                <div className={`mainColor secondaryBackgroundColor ${this.state.content.class}`} style={{ fontSize: 20,paddingBottom:50}}>
                    <div className="container">

                        <div style={{paddingTop:60}}>
                            <div>
                                <div className={`supportingColor secondaryBackgroundColor ${this.state.content.class}`} style={{padding:33,opacity:1,width:'100%'}}>
                                    <div className="px-4">
                                        <p><h2 style={{fontSize:'1.5rem',whiteSpace:'break-spaces'}}>{this.state.content.supportingHeading}</h2></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>








                <div className="py-6 bg-mainColor">
                    <div className={`${this.state.content.backgroundType} text-white`}>
                        <div style={{borderRadius:12}} className={`container secondaryBackgroundColor ${this.state.content.class}`}>
                            <div style={{display: 'flex', justifyContent: 'center',paddingTop:40,flexWrap:'wrap',paddingBottom:40,marginBottom:70}}>
                                <div><img style={{margin:30,width:'30vw',minWidth:350,borderRadius:4}} src={this.state.content.imageURLArray&&this.state.content.imageURLArray[1]} alt="" width="50%"/></div>
                                <div style={{width: '55%',minWidth:300}}>

                                    <h3 style={{paddingLeft:15,marginBottom:0,whiteSpace:'break-spaces'}}>{this.state.content.secondaryContentTitle}</h3>
                                    <p style={{fontSize:18,paddingLeft:15,paddingTop:10,whiteSpace:'break-spaces'}}>{this.state.content.secondaryContent}</p>
                                </div>
                            </div>
                        </div>
                        <div ref={this.contactRef} style={{marginTop:40}}>
                            <div className={`supportingColor secondaryBackgroundColor ${this.state.content.class}`} style={{marginTop:40,padding:40,margin:0}}>
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <div>
                                        <h2 style={{fontSize:56,fontWeight:400,textAlign:'center',borderBottom:'1px solid #fff',marginBottom:0}}>{this.state.content.contactTitle}<br /></h2>
                                        <p style={{marginBottom:30,paddingLeft:15,paddingTop:10,width:'60vw',minWidth:300,textAlign:'center',whiteSpace:'break-spaces'}}>
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
            </div>
        </div>

    }
}