import React from 'react';
import image1 from '../images/house2.jpg';
import image2 from '../images/house3.jpg';
import home_icon from '../images/realtor-icon-4-dark.png';
import logo from '../images/sm3.png';
import p2 from '../images/p2.png';
import coffee from '../images/coffee.png';
import firebase from "firebase/compat";
import cookie from 'js-cookie';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import axios from 'axios';



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
    secondaryPhoto1, contactCTA, p3ContentPhoto,backgroundType
} from "../content";
import {rootStore} from '../stores/Store';
import {toJS} from "mobx";
import builder from "../images/builder.png";
import content from "../contents";
import SimpleMap from "./SimpleMap";


export const SuccessBanner = (props)=><div style={{display:'flex',justifyContent:'center',padding:5}}>
    <div style={{width:'80%',top:150,zIndex:9998,backgroundColor:'#fff',position:'absolute',height:'auto',paddingBottom:50,borderRadius:8,color:'#505050'}}>
        <div style={{width:'100%',height:60,position:'relative'}}> <div></div><i style={{cursor:'pointer',position:'absolute',right:10,top:10}} onClick={()=>{cookie.set('isPotentialCustomer',false); cookie.set('hasPaid',true);props.showSaleSuccess(false)}} className="material-icons">close</i> </div>
        <div style={{display:'flex',justifyContent:'center'}}>

            <div style={{padding:60,paddingTop:0,textAlign:'center '}}>
                <h2>
                    Congratulations! You will very soon be the proud owner of a premium website{cookie.get('includesMeta')&&' with branded social pages '}!
                </h2>
                <h4>It will take us a few days to get things up and running, but keep in touch! <br /> We will forward your details to you. <br />Order #{props.orderNumber} | Website Code {cookie.get('pw')}</h4>
                <img width={400} src={coffee} />
                <br/>
            </div>
        </div>


    </div></div>
export const NavBar = (props)=>(
    <nav className={`navbar navbar-expand-xl navbar-dark myNav navTextColor`} style={{backgroundColor:props.content.backgroundType}}>
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
                    <li className="nav-item" style={{cursor: 'pointer',marginLeft:5,marginRight:5}} onClick={() => {
                        cookie.set('templateType','dm');
                        window.location.href ='/pages';
                    }}><a className="nav-link whiteTextNav my-3 btn btn-dark rounded-pill px-4 nomargins"  aria-current="page">Switch to Marketing Template</a>
                    </li>
                    <li className="nav-item" style={{cursor: 'pointer',marginLeft:5,marginRight:5}} onClick={() => {
                        firebase.analytics().logEvent('view_nav_livetemplate');
                        window.location.href = '/templateCreator';
                    }}><a className="nav-link whiteTextNav my-3 btn btn-dark rounded-pill px-4 nomargins"  aria-current="page">Template Editor</a>
                    </li>

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
                    {props.content.linkArray&&<li className="nav-item" style={{cursor: 'pointer'}} onClick={() => {
                        window.location.href = '/pages/links';
                    }}><a className="nav-link whiteTextNav" aria-current="page">Links</a>
                    </li>}
                </ul>
            </div>
        </div>
    </nav>);

export class HeroPageSuccess extends React.Component {
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
                class:'one',
                imageURLArray:[],
                routeItems:[],
                routeItemsDefault:RouteItems,
                mainButtonLink:mainButtonLink,
                mainButtonTitle:'Apply Now',

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
        firebase.firestore().collection("templates").get().then((data)=>{
            const dataToLoad=data.docs.find((doc)=>doc.id===(rootStore.pageStore.code?`t-${rootStore.pageStore.code}`:'live')).data();
            if(dataToLoad) {
                console.log(dataToLoad,'LOAD');
                this.setState({content: dataToLoad.content,mainArray:[dataToLoad.content.imageURLArray?dataToLoad.content.imageURLArray[0]:null]})
            }
        });
        console.log('IPC:',cookie.get('isPotentialCustomer'));
        if(cookie.get('isPotentialCustomer')==='revision'){
            let code = cookie.get('code');
            return rootStore.pageStore.createWebsite(code,this.state.content);
        }
        if(cookie.get('isPotentialCustomer')==='true'){
            let orderNumber = null;
            let code = cookie.get('code');
            console.log('set code:',code);
            firebase.firestore().collection("orders").get().then((data)=>{
                orderNumber = data.docs.length
                console.log('set order:',orderNumber,'to',data);

                firebase.firestore().collection("orders").doc(`${orderNumber}-MM-${code}`).set({code:code,pw:cookie.get('pw')||'admin'})
                    .then(() => {
                        console.log("Document successfully written!, ORDER:",orderNumber);
                        this.setState({
                            orderNumber:orderNumber,
                        });
                        rootStore.pageStore.createWebsite(code,this.state.content);
                    })


                    .catch((error) => {
                        console.error("Error writing document with ORDER ",orderNumber, error);
                    });
            });

            this.setState({
                showSaleSuccess:true,
            })
        }
        console.log(rootStore.pageStore.code,'load code');
        this.shiftCurrentImage();

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
        let customerHasPaid = cookie.get('hasPaid')==='true';
        console.log('test:',firebase.apps.length,toJS(rootStore.pageStore.code));
        return <div>
            {this.state.showSaleSuccess&&<div style={{overflow:'hidden',maxWidth:'99vw'}}><Confetti recycle={true} numberOfPieces={500}
            />
            </div>}
            <NavBar content={this.state.content} isMarketing={false} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType}/>
            <div style={{height: '100%',position:'relative',backgroundColor:this.state.content.backgroundType,color:this.state.content.font}}>
                {this.state.showSaleSuccess&&
                <SuccessBanner showSaleSuccess={()=>{this.setState({showSaleSuccess:false})}} orderNumber={this.state.orderNumber} />
                }
                <div>
                    <div style={{color:this.state.content.font}}>
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
                                                    Contact Us
                                                </div>
                                            </div>
                                            <div className="templateCTA" onClick={()=>{
                                                firebase.analytics().logEvent('view_range_btn');
                                                window.location.href=this.state.content.mainButtonLink
                                            }} >
                                                <div className="altButton" style={{backgroundColor:this.state.content.class,color:this.state.content.font}}>
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
                                <img onClick={()=>{this.nextImage()}}  key={this.state.currentMainImage}  src={this.state.content.imageURLArray&&this.state.content.imageURLArray[0]} className="fadedshort" style={{width:'100%',height:790,objectFit:'cover'}}/></div>

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
                        <div style={{backgroundColor:this.state.content.backgroundType}}>
                            <div className={`container secondaryBackgroundColor`} style={{backgroundColor:this.state.content.class}}>
                                <div style={{display: 'flex', justifyContent: 'center',paddingTop:40,flexWrap:'wrap',paddingBottom:40,marginBottom:70}}>
                                    <div><img style={{margin:30,width:'30vw',minWidth:350,borderRadius:4}} src={this.state.content.imageURLArray&&this.state.content.imageURLArray[1]||logo} alt="" width="50%"/></div>
                                    <div style={{width: '55%',minWidth:300}}>

                                        <h3 style={{paddingLeft:15,marginBottom:0,whiteSpace:'break-spaces'}}>{this.state.content.secondaryContentTitle}</h3>
                                        <p style={{fontSize:18,paddingLeft:15,paddingTop:10,whiteSpace:'break-spaces'}}>{this.state.content.secondaryContent}</p>
                                    </div>
                                </div>
                            </div>
                            <div ref={this.contactRef} style={{marginTop:40}}>
                                <div className={`supportingColor secondaryBackgroundColor`} style={{marginTop:40,padding:40,margin:0,backgroundColor:this.state.content.class}}>
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <div>
                                            <h2 style={{fontSize:56,fontWeight:400,textAlign:'center',borderBottom:'1px solid #fff',marginBottom:0}}>{this.state.content.contactTitle}<br /></h2>
                                            <p style={{marginBottom:30,paddingLeft:15,paddingTop:10,width:'60vw',minWidth:300,textAlign:'center',whiteSpace:'break-spaces'}}>
                                                {this.state.content.contactBlurb}
                                                <br />
                                                <br />
                                            </p>
                                            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                                                <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">mail</i> </div><div style={{marginLeft:40}}><b></b>{this.state.content.contactEmail}</div></div>
                                                <br />
                                                <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">local_phone</i> </div><div style={{marginLeft:40}}><b></b>{this.state.content.contactPhone}</div></div>
                                                <br />

                                            </div>
                                            <div >
                                            </div>
                                            <div style={{display:'flex',justifyContent:'center'}}>{this.state.content.mapsCenter&&<SimpleMap center={this.state.content.mapsCenter} name={this.state.content.businessName} />}</div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>
                </div>


                <div className={`mainImageBackground text-white ${this.state.imgSelected&&'selectedPopupOpaque'}`} style={{zIndex:999,paddingTop:0}}>
                    <div style={{backgroundColor:'#fff'}} >
                        {customerHasPaid ?<>
                            <h2 className = "magOrange" style={{color:'#d9d9d9',textAlign:'center',marginTop:10,marginBottom:20}}>Made some changes and need to order a revision?</h2>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <div onClick={()=>{
                                    firebase.analytics().logEvent('sales_init_mm')
                                    rootStore.pageStore.setIsPotentialCustomer('revision');
                                    //todo revision $5 link stripe.
                                    window.location.href='https://buy.stripe.com/dR617taCTf567cYeUY'}} style={{margin:10}} className="altButton redButton magOrange">Get it now<div style={{position:'relative'}}><div style={{position:'absolute',top:-25,right:0}}><i className="material-icons">keyboard_arrow_right</i></div></div></div>


                            </div> </>:<>
                                <h1 style={{textAlign:'center',paddingTop:80}} className="magOrange">Like the look? </h1>
                                <h2 className="magOrange" style={{color:'#d9d9d9',textAlign:'center',marginTop:10,marginBottom:20}}>Get it online within the week!</h2>

                                <div style={{paddingBottom:80,overflowY:'auto',display:'flex',justifyContent:'center',paddingTop:40}}>
                                    <div style={{display:'inline-flex',flexWrap:'wrap',paddingLeft:100,paddingRight:100,
                                        alignContent:'flex-start',alignItems:'space-around',justifyContent:'space-around',width:'100%'}}>
                                        <div>
                                            <p style={{fontSize:22,color:'#505050'}}>Get online with the Marketing Magnet Pro package.</p>
                                            <ul>
                                                <li>
                                                    <p style={{color:'#505050'}}>• Additional content available*.</p>
                                                </li>
                                                <li>
                                                    <p style={{color:'#505050'}}>• Mobile optimized.</p>
                                                </li>
                                                <li>
                                                    <p style={{color:'#505050'}}>• Choose your own domain.</p>
                                                </li>
                                                <li>
                                                    <p style={{color:'#505050'}}>• Round the clock support.</p>
                                                </li>
                                                <li>
                                                    <p style={{color:'#505050'}}>• 7 day no-payment trial. Cancel any time.*</p>
                                                </li>

                                            </ul>
                                            <br />
                                            <div onClick={()=>{
                                                firebase.analytics().logEvent('sales_init_mm')
                                                rootStore.pageStore.setIsPotentialCustomer(true);
                                                window.location.href='https://buy.stripe.com/test_fZe7vpdu89aedm8bII'}} style={{margin:10}} className="altButton redButton magOrange">Get it now<div style={{position:'relative'}}><div style={{position:'absolute',top:-25,right:0}}><i className="material-icons">keyboard_arrow_right</i></div></div></div>

                                        </div>
                                        <div className="myDIV2 pricing29"><img  src={p2} className="rounded-4" width="350" height={280}/></div>
                                    </div>
                                </div>
                            </>}
                    </div>

                </div>

            </div>
        </div>

    }
}