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
    secondaryPhoto1, contactCTA, p3ContentPhoto,backgroundType,imageURLArray,routeItems,bgClass,linkArray,tLogo,font,mapsCenter
} from "../content";
import {rootStore} from '../stores/Store';
import {toJS} from "mobx";
import builder from "../images/builder.png";
import content from "../contents";
import {scrollActivate} from "./HeroPage";
import SimpleMap from "./SimpleMap";

export const HeroContent =(props)=>(<div style={{backgroundColor:props.content.backgroundType,color:props.content.font}}>
    <div className="container">
        <div className="row align-items-center noXGutter">
            <div className="col-12 col-md-5 offset-md-1">
                <div className="px-4 px-md-0" style={{paddingTop:50,paddingBottom:50}}>
                    <h3 style={{fontSize:36}} className="mb-4">{props.content.titleContent}</h3>
                    <p clas="mb-4">{props.content.titleBlurb}</p>
                    <a onClick={()=>{window.location.href=props.content.mainButtonLink}}
                       className="btn btn-light btn-lg rounded-pill" style={{paddingRight:40,paddingLeft:20}}><div style={{position:'relative'}}></div> {props.content.mainButtonTitle||"Your shop link here"}
                    </a>
                </div>
            </div>
            <div className="col-12 col-md-5">
                <img style={{borderRadius:8,height:'100%',width:'100%'}} src={props.content.imageURLArray?props.content.imageURLArray[0]:logo} className="img-fluid d-block mx-auto"/>
            </div>
        </div>
    </div>
</div>);
export const SecondaryContent =(props)=>(<div className='py-5' style={{color:props.content.font,backgroundColor:props.content.class}}>
    <div >
        <div className={`scroll-element js-scroll fade-in-bottom starting`}>
            <div className="row align-items-center noXGutter">
                <div className="col-12 col-md-5 offset-md-1">
                    <img style={{borderRadius:8}} src={props.content.imageURLArray?props.content.imageURLArray[1]:logo} className="img-fluid d-block mx-auto" width="350"/>
                </div>
                <div className="col-12 col-md-5">
                    <div className="px-4">
                        <h3 style={{fontSize:28}} className="mb-4">{props.content.supportingHeading}</h3>
                        <p>{props.content.supportingBlurb}</p>
                    </div>
                </div>
            </div>
        </div>
        <h3 style={{fontSize:28,marginTop:140}}  className="mb-5 text-center"><span
            className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">{props.content.p3Heading1}</span>
        </h3>
        <p className="mb-4" style={{textAlign:'center',paddingLeft:20,paddingRight:20}}>{props.content.p3Content1}</p>
    </div>
</div>);
export const AuxiliaryContent =(props)=>(<div className={`py-6`} style={{backgroundColor:props.content.backgroundType,color:props.content.font}} id="ecosystem">
    <div >
        <div className={`scroll-element js-scroll fade-in-bottom starting`}>
            <h3 style={{fontSize:28}}  className="mb-5 text-center"><span
                className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">{props.content.secondaryContentTitle}</span>
            </h3>
        </div>

        <div className=" text-white" style={{display:'flex',justifyContent:'space-around'}}>
            <div style={{display:'flex',justifyContent:'center'}}>

            </div>
            <div className="col-12 col-md-5">
                <div className={`scroll-element js-scroll slide-left starting`}>
                    <div className="p-4 rounded-4" style={{backgroundColor:props.content.class}}>
                        <h1>{props.content.secondaryHeading1}</h1>
                        {props.content.secondaryContent1}
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <img style={{borderRadius:8}} src={props.content.imageURLArray?props.content.imageURLArray[3]:logo} width={300} />
                        </div>

                    </div>
                </div>

            </div>
            <div className="col-12 col-md-5">
                <div className={`scroll-element js-scroll slide-right starting`}>
                    <div className="p-4 rounded-4" style={{backgroundColor:props.content.class}}>
                        <p>{props.content.secondaryContent}</p>

                    </div>
                </div>

            </div>
        </div>

    </div>
</div>);
export const AdditionalContent =(props)=> {
    const route = props.content.routeItemsAdditional[props.index];
    console.log('ROUTE:',route);

    return (<div key={props.index} className={`py-6`} style={{backgroundColor:props.content.backgroundType,color:props.content.font}} id="ecosystem">
        <h3 style={{fontSize:28}}  className="mb-5 text-center">
            <div className={`scroll-element js-scroll fade-in-bottom `}>

                <span
                    className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">{route.secondaryHeader}</span>
            </div>
        </h3>
        <div className="row row-eq-height text-white">
            <div className="col-12 col-md-5 offset-md-1">
                <div className={`scroll-element js-scroll slide-left`}>
                    <div className="bg-dark p-4 rounded-4">
                        <p>{route.supportingHeading}</p>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img style={{margin: 30, width: '30vw', minWidth: 350, borderRadius: 8}}
                                 src={route.imageURLArray && route.imageURLArray[0] || logo} alt=""
                                 width="50%"/>
                        </div>

                    </div>
                </div>
                <div></div>
            </div>
            <div className="col-12 col-md-5">
                <div className={`scroll-element js-scroll slide-right`}>
                    <div className="bg-dark p-4 rounded-4 mt-4 mt-md-0">
                        <h4>{route.secondaryHeading1}</h4>
                        <p>{route.secondaryContent1}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
};
export const Footer=(props)=>(<><div className={`py-6`} style={{backgroundColor:props.content.class,color:'#fff'}} id="community">
    <div >
        <div className={`scroll-element js-scroll fade-in-bottom starting`}>
            <div className="container small-width">
                <div className="px-4">

                    <div>
                        <div className="p-4 rounded-4 mt-4 mt-md-0" style={{marginBottom:30,backgroundColor:props.content.backgroundType}}>
                            <h4>{props.content.contactTitle}</h4>
                            <p>{props.content.contactBlurb}</p>
                            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                                <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">mail</i> </div><div style={{marginLeft:40}}><b></b>{props.content.contactEmail}</div></div>
                                <br />
                                <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">local_phone</i> </div><div style={{marginLeft:40}}><b></b>{props.content.contactPhone}</div></div>
                                <br />

                            </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'center'}}>{props.content.mapsCenter&&<SimpleMap center={props.content.mapsCenter} name={props.content.businessName} />}</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div></>);
export const NavBar = (props)=>(
    <nav className={`navbar navbar-expand-xl navbar-dark myNav `} style={{color:props.content.font,backgroundColor:props.content.backgroundType}}>
        <div className="container">
            <a className="navbar-brand">
                <img onClick={()=>{window.location.href='/'}}  src={props.content.logo||logo} alt="" width="100" />
            </a>
            <button className="navbar-toggler rounded-4 shadow-sm" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
                    {props.routeItems.map((route,ix)=>{
                        if(route.dropArray){
                            return(<li className="nav-item" style={{cursor:'pointer'}}>

                                <div className="dropdown nav-link" style={{position:'relative'}}>
                                    <div className="dropbtn" onClick={()=>{
                                        firebase.analytics().logEvent(route.routeTag);

                                        window.location.href=route.href
                                    }}>{route.name}</div>
                                    <div className="dropdown-content" style={{zIndex:999,position:'absolute'}}>
                                        {route.dropArray.map((dropdownContent)=>
                                            <a onClick={()=>{
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
                            return (<li className="nav-item" style={{cursor: 'pointer',color:props.content.font}} onClick={() => {
                                firebase.analytics().logEvent(route.routeTag);
                                if(ix===0){
                                    return window.location.href = '/';

                                }else {
                                    window.location.href = route.href;
                                }
                            }}><a className="nav-link" aria-current="page">{route.name}</a>
                            </li>);
                        }
                    })}
                    {props.content.linkArray&&<li className="nav-item" style={{cursor: 'pointer',color:props.content.font}} onClick={() => {
                        window.location.href = '/pages/links';
                    }}><a className="nav-link" aria-current="page">Links</a>
                    </li>}
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
                mapsCenter:mapsCenter,
                mainButtonLink:mainButtonLink,
                mainButtonTitle:mainButtonTitle,
                font:font,
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
                class:bgClass,
                routeItems:[],
                routeItemsAdditional:routeItems,
                routeItemsDefault:RouteItems,
                imageURLArray,
                linkArray:linkArray,

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
        scrollActivate();
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
        console.log('route items:',this.state.content.routeItemsAdditional);
        return <div>
            <NavBar content={this.state.content} isMarketing={true} class={this.state.content.class} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType}/>
                <HeroContent content={this.state.content} />
                <SecondaryContent content={this.state.content} />
                <AuxiliaryContent content={this.state.content} />
            {this.state.content.routeItemsAdditional&&this.state.content.routeItemsAdditional.map((i,ix)=>{
                return(<AdditionalContent content={this.state.content} index={ix}/>)

            })}
                <Footer content={this.state.content}/>
        </div>

    }
}