import React from 'react';
import image1 from '../images/house2.jpg';
import image2 from '../images/house3.jpg';
import home_icon from '../images/realtor-icon-4-dark.png';
import logo from '../images/sm3.png';
import web from '../images/bg/11.png';
import p2 from '../images/p2.png';
import coffee from '../images/coffee.png';
import firebase from "firebase/compat";
import cookie from 'js-cookie';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'


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

export const HeroContent =(props)=>(<div style={{backgroundColor:props.content.backgroundType,color:props.content.font}}>
    <div className="container">
        <div className="row align-items-center noXGutter">
            <div className="col-12 col-md-5 offset-md-1">
                <div className="px-4 px-md-0" style={{paddingTop:50,paddingBottom:50}}>
                    <h3 style={{fontSize:36}} className="mb-4">{props.content.titleContent}</h3>
                    <p clas="mb-4">{props.content.titleBlurb}</p>
                    <a onClick={()=>{window.location.href=props.content.mainButtonLink}}
                       className="btn btn-light btn-lg rounded-pill" style={{paddingRight:40,paddingLeft:20}}><div style={{position:'relative'}}><i style={{position:'absolute',top:4,right:-30 }} className={'material-icons large'}>shopping_cart</i></div> {props.content.mainButtonTitle||"Your shop link here"}
                        </a>
                </div>
            </div>
            <div className="col-12 col-md-5">
                <img style={{borderRadius:8,height:'100%',width:'100%'}} src={props.content.imageURLArray?props.content.imageURLArray[0]:logo} className="img-fluid d-block mx-auto"/>
            </div>
        </div>
    </div>
</div>);
export const SecondaryContent =(props)=>(<div className={`py-5`} style={{backgroundColor:props.content.backgroundType,color:props.content.font}}>
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
        <p className="mb-4" style={{textAlign:'center'}}>{props.content.p3Content1}</p>
        <div style={{display:'flex',justifyContent:'center',marginBottom:40}}>
            <img style={{borderRadius:8}} src={props.content.imageURLArray&&props.content.imageURLArray[3]||props.content.p3ContentPhoto} />
        </div>
    </div>
</div>);
export const AuxiliaryContent =(props)=>(<div className={`py-6`} style={{backgroundColor:props.content.backgroundType,color:props.content.font}}>
    <div >
        <div className={`scroll-element js-scroll fade-in-bottom starting`}>
        <h3 style={{fontSize:28}}  className="mb-5 text-center"><span
            className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">{props.content.secondaryContentTitle}</span>
        </h3>
        </div>

        <div className=" text-white" style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
                
            </div>
            <div className="col-12 col-md-5" style={{marginLeft:20}}>
                <div className={`scroll-element js-scroll slide-left starting`}>
                    <div className="bg-dark p-4 rounded-4">
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <img style={{borderRadius:8}} src={props.content.imageURLArray?props.content.imageURLArray[2]:logo} width={300} />
                        </div>

                    </div>
                </div>

            </div>
            <div className="col-12 col-md-5">
                <div className={`scroll-element js-scroll slide-right starting`}>
                    <div className="bg-dark p-4 rounded-4">
                        <p>{props.content.secondaryContent}</p>

                    </div>
                </div>

            </div>
        </div>

    </div>
</div>);
export const AdditionalContent =(props)=> {
    const route = props.content.routeItems[props.index];

    return (<div key={props.index} className={`py-6`} style={{backgroundColor:props.content.backgroundType,color:props.content.font}}>
            <h3 style={{fontSize:28}}  className="mb-5 text-center">
                <div className={`scroll-element js-scroll fade-in-bottom `}>

                <span
                className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">{route.secondaryHeader}</span>
                </div>
            </h3>
            <div className="row row-eq-height text-white">
                <div className="col-12 col-md-5 offset-md-1">
                    <div className={`scroll-element js-scroll ${props.index%2===0?'slide-left':'slide-right'} `}>
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
                    <div className={`scroll-element js-scroll ${props.index%2===0?'slide-right':'slide-left'} `}>
                    <div className="bg-dark p-4 rounded-4 mt-4 mt-md-0">
                        <h4>{route.secondaryHeading1}</h4>
                        <p>{route.secondaryContent1}</p>
                    </div>
                    </div>
            </div>
        </div>
    </div>)
};
export const Footer=(props)=>(<><div className={`py-6`} style={{backgroundColor:props.content.class,color:'#fff'}}>
    <div >
        <div className={`scroll-element js-scroll fade-in-bottom starting`}>
    <div className="container small-width">
        <div className="px-4">

            <div>
                <div style={{marginBottom:20}} className="bg-dark p-4 rounded-4 mt-4 mt-md-0">
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
    <nav style={{backgroundColor:props.content.class}} className={`navbar navbar-expand-xl navbar-dark myNav navTextColor`}>
        <div className="container">
            <a className="navbar-brand">
                <img style={{borderRadius:12}} onClick={()=>{window.location.href='/'}}  src={props.content.logo||logo} alt="" width="100" />
            </a>
            <button className="navbar-toggler rounded-4 shadow-sm" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
                    <li className="nav-item" style={{cursor: 'pointer',marginLeft:5,marginRight:5}} onClick={() => {
                        cookie.remove('templateType');
                        cookie.set('templateType','pm')
                            window.location.href ='/pages';
                    }}><a className="nav-link whiteTextNav my-3 btn btn-dark rounded-pill px-4 nomargins"  aria-current="page">Switch to Services Template</a>
                    </li>
                    <li className="nav-item" style={{cursor: 'pointer',marginLeft:5,marginRight:5}} onClick={() => {
                        firebase.analytics().logEvent('view_nav_livetemplate');
                        window.location.href = '/builder';
                    }}><a className="nav-link whiteTextNav my-3 btn btn-dark rounded-pill px-4 nomargins" aria-current="page">Template Editor</a>
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
                                            <a onClick={()=>{
                                                firebase.analytics().logEvent(dropdownContent.routeTag);
                                                window.location.href=dropdownContent.href
                                            }} style={{textAlign:'center',color:props.content.font}}><img width={18}
                                                                                 src={home_icon}/> {dropdownContent.name} </a>
                                        )}
                                    </div>
                                </div>
                            </li>)
                        }
                        else {
                            return (<li className="nav-item" style={{cursor: 'pointer',color:props.content.font}} onClick={() => {
                                firebase.analytics().logEvent(route.routeTag);
                                window.location.href = route.href;
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
                logo:logo,

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
        const scrollElements = document.querySelectorAll(".js-scroll");

        var throttleTimer;

        const throttle = (callback, time) => {
            if (throttleTimer) return;

            throttleTimer = true;
            setTimeout(() => {
                callback();
                throttleTimer = false;
            }, time);
        }

        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;

            return (
                elementTop <=
                (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };

        const elementOutofView = (el) => {
            const elementTop = el.getBoundingClientRect().top;

            return (
                elementTop > (window.innerHeight || document.documentElement.clientHeight)
            );
        };

        const displayScrollElement = (element) => {
            element.classList.add("scrolled");
        };

        const hideScrollElement = (element) => {
            element.classList.remove("scrolled");
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                } else if (elementOutofView(el)) {
                    hideScrollElement(el)
                }
            })
        }
        var timer=0;
        var count=0;
        var scroll = 0;

        window.addEventListener("scroll", () => {
            throttle(() => {
                handleScrollAnimation();
            }, 250);
        });



        console.log('IPC:',cookie.get('isPotentialCustomer'));
        console.log(rootStore.pageStore.code,'load code');
        this.shiftCurrentImage();
        firebase.firestore().collection("templates").get().then((data)=>{
            const dataToLoad=data.docs.find((doc)=>doc.id===(rootStore.pageStore.code?`t-${rootStore.pageStore.code}`:'live')).data();
            if(dataToLoad) {
                console.log(dataToLoad,'LOAD');
                this.setState({content: dataToLoad.content,mainArray:[dataToLoad.content.imageURLArray?dataToLoad.content.imageURLArray[0]:null]})
            }
        })
        console.log('is loaded template purchased?');
        //is loaded template already purchased?
        firebase.firestore().collection("orders").get().then((data)=> {
            console.log('existing orders:',rootStore.pageStore.code, toJS(data.docs));
            data.docs.forEach((order)=>{
                console.log('orders...',order.id);
                if(order.id.split('-').includes(rootStore.pageStore.code)){
                    console.log('INCLUDES',rootStore.pageStore.code);
                    cookie.set('hasPaid',true);
                }

            })
        });

    }
    loadTemplateWithCode(code){
        if(code) {
            console.log('Code:', code);
            firebase.firestore().collection("templates").get().then((data) => {
                const dataToLoad = data.docs.find((doc) => doc.id === code).data();
                if (dataToLoad) {
                    this.setState({content: dataToLoad.content})
                    let loadCode = code.slice(2)
                    rootStore.pageStore.setCode(loadCode)
                    firebase.firestore().collection("orders").get().then((data) => {
                        const wasPurchased = data.docs.find((doc) => {
                            console.log('DOC:', doc.data().code, '===', loadCode);
                            return doc.data().code === loadCode
                        });
                        console.log(wasPurchased.data(), '...');
                        if (wasPurchased) {
                            cookie.set('wasPurchased', loadCode, wasPurchased.data());
                            this.setState({wasPurchased: true});
                            let foo = window.prompt('Password for this template');
                            if(foo==='admin'||foo===wasPurchased.data().pw){
                                window.confirm('Thank you');
                            }
                            else{
                                window.confirm('try password "admin" next time.')
                            }
                        }
                    });
                }
            })
        }
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
            <NavBar content={this.state.content} isMarketing={true} class={this.state.content.class} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType}/>
                <HeroContent content={this.state.content} />
                    <SecondaryContent content={this.state.content} />
            <AuxiliaryContent content={this.state.content} />

            <div >{this.state.content.routeItems&&this.state.content.routeItems.map((i,ix)=>{
                return(<AdditionalContent content={this.state.content} index={ix}/>)

            })}
            </div>

            <Footer content={this.state.content}/>
            <div className={`mainImageBackground text-white ${this.state.imgSelected&&'selectedPopupOpaque'}`} style={{zIndex:9999}}>
                <div style={{backgroundColor:'#fff'}} >
                    {customerHasPaid ?<>
                            <h2 className = "magOrange" style={{color:'#d9d9d9',textAlign:'center',marginTop:10,marginBottom:20}}>Made some changes and need to order a revision?</h2>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <div onClick={()=>{
                                    firebase.analytics().logEvent('sales_init_mm')
                                    rootStore.pageStore.setIsPotentialCustomer('revision');
                                    //todo revision $5 link stripe.
                                    window.location.href='https://buy.stripe.com/dR617taCTf567cYeUY'}} style={{margin:10}} className="altButton redButton magOrange">Get it now<div style={{position:'relative'}}><div style={{position:'absolute',top:-25,right:0}}><i className="material-icons">keyboard_arrow_right</i></div></div></div>


                            </div> </>
                        :<>
                            <h1 style={{textAlign:'center',paddingTop:80}} className="magOrange">Like the look? </h1>
                            <h2 className="magOrange" style={{color:'#d9d9d9',textAlign:'center',marginTop:10,marginBottom:20}}>Get it online TODAY!</h2>

                            <div style={{paddingBottom:80,overflowY:'auto',display:'flex',justifyContent:'center',paddingTop:40}}>
                                <div style={{display:'inline-flex',flexWrap:'wrap',paddingLeft:100,paddingRight:100,
                                    alignContent:'flex-start',alignItems:'space-around',justifyContent:'space-around',width:'100%'}}>
                                    <div>
                                        <p style={{fontSize:22,color:'#505050'}}>Get online with the WebGun Basic package.</p>
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

                                        </ul>
                                        <br />
                                        <div onClick={()=>{
                                            firebase.analytics().logEvent('sales_init_wg')
                                            rootStore.pageStore.setIsPotentialCustomer(true);
                                            //https://buy.stripe.com/test_fZebLd7dC89o4WA6oq
                                            //https://buy.stripe.com/00gcQb4evf5654Q001
                                            window.location.href='https://buy.stripe.com/00gcQb4evf5654Q001'}} style={{margin:10}} className="altButton redButton magOrange">Get it now<div style={{position:'relative'}}><div style={{position:'absolute',top:-25,right:0}}><i className="material-icons">keyboard_arrow_right</i></div></div></div>

                                    </div>
                                    <div className="myDIV2 pricing29"><img  src={web} className="rounded-4" width="350" height={280}/></div>
                                </div>
                            </div>
                        </>}
                </div>

            </div>
       {/*     <div style={{display:'flex',justifyContent:'flex-end'}}>
                <input className="templateInputP" style={{width:180,color:'#ff2019',border:'1px solid #ff2019'}} value={this.state.code||rootStore.pageStore.code} onChange={(e)=>{this.changeCode(e)}} placeholder={'Enter code'} />
                <div style={{display:'flex',justifyContent:'space-around'}}><div onClick={()=>{
                    this.loadTemplateWithCode(`t-${this.state.code}`)
                }} style={{marginBottom:10,marginLeft:10}} className="altButton whiteButton magOrange">Load template</div>
                    {this.state.wasPurchased&&<div style={{marginBottom:10,marginLeft:20}}  className="altButton whiteButton magOrange" onClick={()=>{window.location.href='/builder'}}>
                        Edit
                    </div>}
                </div>
            </div>*/}
        </div>

    }
}