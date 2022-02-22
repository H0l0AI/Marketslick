import React from 'react';
import image1 from '../images/house2.jpg';
import image2 from '../images/house3.jpg';
import home_icon from '../images/realtor-icon-4-dark.png';
import logo from '../images/sm3.png';
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
    secondaryPhoto1, contactCTA, p3ContentPhoto,backgroundType,imageURLArray,routeItems,bgClass
} from "../content";
import {rootStore} from '../stores/Store';
import {toJS} from "mobx";
import builder from "../images/builder.png";
import content from "../contents";

export const HeroContent =(props)=>(<div className={`py-5 ${props.content.backgroundType||'purpleGradient'} text-white`}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-12 col-md-5 offset-md-1">
                <div className="px-4 px-md-0">
                    <h2 className="mb-4">{props.content.titleContent}</h2>
                    <p clas="mb-4">{props.content.titleBlurb}</p>
                    <a
                       className="btn btn-light btn-lg rounded-pill" style={{width:280,paddingRight:40}}><div style={{position:'relative'}}><i style={{position:'absolute',top:4,right:10 }} className={'material-icons large'}>shopping_cart</i></div> Call To Action
                        </a>
                </div>
            </div>
            <div className="col-12 col-md-5">
                <img src={props.content.imageURLArray[0]} className="img-fluid d-block mx-auto"/>
            </div>
        </div>
    </div>
</div>);
export const SecondaryContent =(props)=>(<div className={`py-5 ${props.content.class||'bg-dark-blue'} text-white`}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-12 col-md-5 offset-md-1">
                <img src={props.content.imageURLArray[1]} className="img-fluid d-block mx-auto" width="350"/>
            </div>
            <div className="col-12 col-md-5">
                <div className="px-4">
                    <h2 className="mb-4">{props.content.supportingHeading}</h2>
                    <p>{props.content.supportingBlurb}</p>
                </div>
            </div>
        </div>
    </div>
</div>);
export const AuxiliaryContent =(props)=>(<div className={`py-6 ${props.content.backgroundType||'purpleGradient'}`} id="ecosystem">
    <div className="container">
        <h2 className="mb-5 text-center"><span
            className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">{props.content.secondaryContentTitle}</span>
        </h2>
        <div className="row row-eq-height text-white">
            <div className="col-12 col-md-5 offset-md-1">
                <div className="bg-dark p-4 rounded-4">
                   <p>{props.content.secondaryContent}</p>
                </div>
            </div>
            <div className="col-12 col-md-5">
                <div className="bg-dark p-4 rounded-4 mt-4 mt-md-0">
                    <h4>{props.content.contactTitle}</h4>
                  <p>{props.content.contactBlurb}</p>
                  <p>{props.content.businessBlurb}</p>
                    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                        <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">mail</i> </div><div style={{marginLeft:40}}><b></b>{props.content.contactEmail}</div></div>
                        <br />
                        <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">local_phone</i> </div><div style={{marginLeft:40}}><b></b>{props.content.contactPhone}</div></div>
                        <br />

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>);
export const Footer=(props)=>(<><div className={`py-6 text-white ${props.content.class||'bg-dark-blue'}`} id="community">
    <div className="container small-width">
        <div className="px-4">
            <h2 className="mb-5 text-center"><span
                className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">{props.content.p3Heading1}</span>
            </h2>
            <p className="mb-4">{props.content.p3Content1}</p>
            <img src={props.content.p3ContentPhoto} />
            <div className="text-center mt-5">
                <a href="https://twitter.com" style={{borderColor:'#fff'}}
                   className={`my-3 btn btn-dark ${props.content.class} rounded-pill btn-lg px-4 mx-2`} target="_blank"><i
                    className="fab fa-twitter"></i> Twitter</a>
                <a href="https://www.instagram.com/" style={{borderColor:'#fff'}}
                   className={`my-3 btn btn-dark ${props.content.class} rounded-pill btn-lg px-4 mx-2`} target="_blank"><i
                    className="fab fa-instagram"></i> Instagram</a>
            </div>
        </div>
    </div>
</div></>);
export const NavBar = (props)=>(
    <nav className={`navbar navbar-expand-xl navbar-dark ${props.class||'bg-dark-blue'} myNav navTextColor`}>
        <div className="container">
            <a className="navbar-brand">
                <img onClick={()=>{window.location.href='/'}}  src={logo} alt="" width="100" />
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
                    })}
                </ul>
            </div>
        </div>
    </nav>);

export class MarketingHeroPage extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef()
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
                routeItems:[],
                routeItemsDefault:RouteItems,
                imageURLArray,

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
    componentDidMount(){

    }
    loadTemplateWithCode(code){
        firebase.firestore().collection("templates").get().then((data)=>{
            const dataToLoad=data.docs.find((doc)=>doc.id===code).data();
            if(dataToLoad) {
                this.setState({content: dataToLoad.content})
            }
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
            <NavBar isMarketing={true} class={this.state.content.class} routeItems={RouteItems} backgroundType={this.state.content.backgroundType}/>
                <HeroContent content={this.state.content} />
                <SecondaryContent content={this.state.content} />
                <AuxiliaryContent content={this.state.content} />
                <Footer content={this.state.content}/>
        </div>

    }
}