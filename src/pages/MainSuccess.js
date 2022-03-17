import React from 'react';
import inside from '../images/inside.png';
import smicon from '../images/sm3.png';
import smiconText from '../images/sm1.jpeg';
import firebase from "firebase/compat";
import M from 'materialize-css';
import {SitePortfolio} from "./SitePortfolio";
import {SiteRange} from "./SiteRange";
import {WebsiteBuilder} from "./WebsiteBuilder";
import hero from '../images/staticWSB.png'
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import coffee from '../images/coffee.png';
import cookie from 'js-cookie';
import {HealthCheck} from "./HealthCheck";



export const NavBar = (props)=>(
    <nav style={{height:'9vh',minHeight:120}} className="navbar navbar-expand-xl myNav">
        <div className="container">
            <a className="navbar-brand" style={{width:'100%',maxWidth:550}}>
                <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',maxHeight:100,overflowY:'hidden',overflowX:'hidden'}}>
                    <img src={smicon} alt="" width="150" />
                    <img style={{zIndex:0,paddingTop:20}} src={smiconText} alt="" width="400" height={90} />
                </div>

            </a>
            {/*<button className="navbar-toggler rounded-4 shadow-sm" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>*/}
            <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
            </div>
        </div>
    </nav>);

export const Footer=()=>(<>
    <div>
    </div></>);
export class MainSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.plansRef = React.createRef()
        this.contactRef = React.createRef()
        this.portfolioRef = React.createRef()
        this.state={
            emailAddress:'',
            showSaleSuccess:(window.location.pathname.length>2&&(cookie.get('isCustomer')==='meta'||cookie.get('isCustomer')==='gravity'||cookie.get('isCustomer')==='social')),
            activePage:'HOME',
            buildSelected:null,
            currentActiveImage0:0,
            currentMainImage:0,
            imageArray:[hero],
            mainArray:[inside],
            activePlan:'TAHI',
        }
    }
    shiftCurrentImage(){
    }
    nextImage(){
        if(this.state.currentMainImage===2){

            return this.setState({
                currentMainImage:0

            })
        }else {
            return this.setState({
                currentMainImage: this.state.currentMainImage + 1

            })
        }
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

        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
        this.shiftCurrentImage();
        if(cookie.get('isCustomer')==='meta'||cookie.get('isCustomer')==='gravity'||cookie.get('isCustomer')==='social'){
            let orderNumber = null;
            firebase.firestore().collection("orders").get().then((data)=>{
                orderNumber = data.docs.length
                console.log('set order:',orderNumber,'to',data);

                firebase.firestore().collection("orders").doc(`${orderNumber}-${cookie.get('isCustomer')}`).set({email:this.state.emailAddress})
                    .then(() => {
                        console.log("Document successfully written!, ORDER:",orderNumber);
                        this.setState({
                            orderNumber:orderNumber,
                        });
                    })


                    .catch((error) => {
                        console.error("Error writing document with ORDER ",orderNumber, error);
                    });
                this.setState({showSaleSuccess:cookie.get('isCustomer')});
            });
        }

    }
    toggleActivePage(page){
        return this.setState({activePage:page})
    }
    changeEmailAddress(e){
        this.setState({emailAddress:e.target.value})
    }
    renderPDFSource(build){
        switch(build){
            case 'tahi': return "https://firebasestorage.googleapis.com/v0/b/dreamwoodhomes-83cc6.appspot.com/o/211026%20Tahi%20_%20final%20set%20(3).pdf?alt=media&token=8e1f99ff-a7e2-46a9-93e4-f19cae1598e9";
            case 'rua': return "https://firebasestorage.googleapis.com/v0/b/dreamwoodhomes-83cc6.appspot.com/o/211027-Rua_final-set.pdf?alt=media&token=df87c19d-c43b-4565-8b92-a1d8a8e1ce05";
            case 'toru': return "https://firebasestorage.googleapis.com/v0/b/dreamwoodhomes-83cc6.appspot.com/o/211206%20Toru%20new.pdf?alt=media&token=5acf1d86-5f55-4eb2-b083-3757acb6f8e6";
        }
    }

    renderStripeLink(tier){
        cookie.set('emailAddress',this.props.emailAddress)
        switch(tier){
            //if meta, offer to make them a website with tool
            //if tool/GP, offer to upsell meta
            case 'meta':return window.location.href='/builder';
            default:cookie.set('isCustomer','meta');return window.location.href='https://buy.stripe.com/6oE29R1fpaqT1s4bIK';
        }
    }

    detectMob() {
        console.log('COMP:',window.innerWidth ,window.innerHeight)

        return ( ( window.innerWidth <= 900 ) && ( window.innerHeight <= 1000 ) );
    }
    render(){
        console.log('firebase:',firebase.apps.length);
        return <div>
            <NavBar portfolioRef={this.portfolioRef} contactRef={this.contactRef} toggleActivePage={this.toggleActivePage.bind(this)}/>
            {this.state.showSaleSuccess&&<div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{width:this.detectMob()?'100%':'80%',marginTop:50,top:100,zIndex:9998,backgroundColor:'#fff',position:'absolute',height:this.detectMob()?800:700,borderRadius:8,color:'#505050'}}>
                    <div style={{width:'100%',height:60,position:'relative'}}> <div></div><i style={{cursor:'pointer',position:'absolute',right:10,top:10}} onClick={()=>{cookie.set('isCustomer',false); cookie.set('hasPaid',true);this.setState({showSaleSuccess:false})}} className="material-icons">close</i> </div>
                    <div style={{display:'flex',justifyContent:'center'}}>

                        <div style={{padding:40,paddingTop:10,textAlign:'center',maxWidth:'100vw'}}>
                            <h2>
                                Congratulations! {this.state.showSaleSuccess==='meta'||this.state.showSaleSuccess==='social'?'You are all set for social media, let us take care of the rest.':'You will very soon be the proud owner of a premium website'}
                            </h2>
                            <p style={{fontWeight:300}}>It will take us a few days to get things up and running, but keep in touch! <br /> We will forward your details to you. ( Order #{this.state.orderNumber} )</p>
                            <img width={this.detectMob()?280:400} src={coffee} />

                            <p>{`Have you thought about ${this.state.showSaleSuccess==='meta'||this.state.showSaleSuccess==='social'?'setting up a premium website':'running social media marketing campaigns'} ? use code ${this.state.showSaleSuccess==='meta'||this.state.showSaleSuccess==='social'?'MAG0858':'META9966'} at checkout for 10% off your subscription!`}</p>
                            {this.state.showSaleSuccess==='meta'?<p>Want it run for you? <b onClick={()=>{
                                cookie.set('isCustomer',false); cookie.set('hasPaid',true);this.setState({showSaleSuccess:false})
                                this.contactRef.current.scrollIntoView();

                            }} style={{textDecoration:'underline',cursor:'pointer'}}>Get in touch</b> to see how we can set you up with our <b>Social Magnets</b></p>:null}
                            <div style={{display:'flex',justifyContent:'center'}}><div className="altButton redButton magOrange" onClick={()=>{
                                this.renderStripeLink(this.state.showSaleSuccess)
                            }}>Get it now</div>
                            </div>
                        </div>

                    </div>

                </div></div>}
            <div className="mainImageBackground text-white" style={{position:'relative'}}>
                <div>
                    <div>
                        <div style={{position:'absolute',zIndex:8999,width:'100%'}}>
                            <div>
                                <div>
                                    <div style={{display:'flex',justifyContent:'center',zIndex:999,flexWrap:'wrap'}}>
                                        <div style={{width:this.detectMob()?0:'100vw',marginLeft:0,marginRight:0,maxHeight:800,overflow:'hidden',position:'relative'}}>
                                            <div><img className="fadedshort" key={this.state.currentMainImage} style={{borderRadius:0,objectFit:'cover'}} src={this.state.imageArray[0]} height={800} width={'100%'} />
                                            </div>
                                        </div>
                                        {this.detectMob()&&<div style={{width:'33vw',minWidth:350,paddingTop:0}}>
                                            <div style={{height:'100%',padding:20,paddingRight:20}}>
                                                <br />
                                                <p className="magOrange" style={{marginBottom:0,padding:10,paddingTop:10,color:'#d9d9d9',fontSize:32,textAlign:'center'}}>
                                                    <span>Want to <b className="boldenTitle">Attract</b> new customers and make your mark <b className="boldenTitle">Online?</b></span> <br />  It's time to connect with <br /><b className="boldenTitle">Sales Magnet!</b><br />
                                                    <br />

                                                </p>                                                <br />
                                                <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}> <div onClick={()=>{this.portfolioRef.current.scrollIntoView()}} style={{margin:10}} className="altButton redButton magOrange">View portfolio <div style={{position:'relative'}}><div style={{position:'absolute',top:-25,right:0}}><i className="material-icons">keyboard_arrow_right</i></div></div></div>
                                                    <div onClick={()=>{this.contactRef.current.scrollIntoView()}} style={{margin:10}} className="altButton redButton magOrange">Contact Us <div style={{position:'relative'}}><div style={{position:'absolute',top:-25,right:0}}><i className="material-icons">keyboard_arrow_right</i></div></div></div>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>
                                    <SiteRange emailAddress={this.state.emailAddress} changeEmailAddress={this.changeEmailAddress.bind(this)} contactUsFunction={()=>{this.contactRef.current.scrollIntoView()}} />


                                    <div className="scrolLContainer">
                                        <div className="scroll-element js-scroll slide-right starting">
                                            <div ref={this.portfolioRef}><SitePortfolio /></div>
                                        </div>
                                    </div>
                                    <div className="scrollContainer">
                                        <div className="scroll-element js-scroll slide-left starting">
                                            <WebsiteBuilder /></div>
                                    </div>


                                    <div className="scrollContainer">
                                        <div className="scroll-element js-scroll slide-right starting">
                                            <HealthCheck contactRef={this.contactRef} /></div>
                                    </div>
                                    <div  className="mainImageBackground2 text-white" style={{display:'flex',justifyContent:'center',paddingBottom:80,paddingTop:80}}>
                                        <div style={{width:'80vw',minWidth:375,backgroundColor:'#fff',padding:20,border:'1px solid #ff2019',borderRadius:12}} ref={this.contactRef}>
                                            <h2 className="magOrange" style={{paddingTop:0,fontSize:56,fontWeight:400,textAlign:'center',borderBottom:'1px solid #ff2019',marginBottom:0,color:'#d9d9d9'}}>Connect with Us<br /></h2>
                                            <div style={{display:'flex',justifyContent:'center'}}>
                                                <img style={{margin:20,cursor:'pointer'}} onClick={()=>{
                                                    window.location.href='https://www.facebook.com/nzsalesmagnet'
                                                }} width={100} src={fb} />
                                                <img style={{margin:20,cursor:'pointer'}} onClick={()=>{
                                                    window.location.href='https://www.instagram.com/salesmagnet/'
                                                }}  width={100} src={ig} />
                                            </div>
                                            <div style={{display:'flex',justifyContent:'center'}}>
                                                <div>
                                                    <div className="magOrange"><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">mail</i> </div><div style={{marginLeft:40}}><b></b>gareth@salesmagnet.co.nz</div></div>
                                                    <br />
                                                    <div className="magOrange"><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">mail</i> </div><div style={{marginLeft:40}}><b></b>alex@salesmagnet.co.nz</div></div>
                                                    <br />
                                                    <div className="magOrange"><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">local_phone</i> </div><div style={{marginLeft:40}}><b></b> 022 048 8415</div></div>
                                                    <br />
                                                </div>
                                            </div>
                                            <p className="magOrange" style={{marginBottom:30,paddingLeft:30,paddingTop:10,color:'#d9d9d9',textAlign:'center'}}>
                                                We are professional consultancy services with access to bespoke engineers of online e-commerce websites and solutions <br />
                                                designed to establish your business online and set up processes for streamlining sales.<br />

                                                Call us right now or enquire below about what we can do for your business, we look forward to hearing from you.
                                            </p>
                                            <iframe width={'100%'} height={900} src={'https://share.hsforms.com/1AOfHCy4VTpaa_ZsE12BZVQcr2g3'} />
                                            <div style={{textAlign:'left',color:'#d9d9d9',paddingLeft:30,display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}><div>

                                            </div>

                                            </div>
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
            <Footer/>
        </div>

    }
}