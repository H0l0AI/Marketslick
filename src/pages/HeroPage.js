import React from 'react';
import image1 from '../images/house2.jpg';
import image2 from '../images/house3.jpg';
import home_icon from '../images/realtor-icon-4-dark.png';
import logo from '../images/sm3.png';
import p2 from '../images/p2.png';
import p1 from '../images/p1.png';
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
import web from "../images/bg/11.png";



export const NavBar = (props)=>(
    <nav className={`navbar navbar-expand-xl navbar-dark myNav navTextColor`} style={{backgroundColor:props.content.backgroundType}}>
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
                    <li className="nav-item" style={{cursor: 'pointer',marginLeft:5,marginRight:5,color:props.content.font}} onClick={() => {
                        window.location.href = props.isMarketing?'/pages':'/marketingDemo';
                    }}><a className="nav-link whiteTextNav my-3 btn btn-dark rounded-pill px-4 nomargins" aria-current="page">Switch to Marketing Template</a>
                    </li>
                    <li className="nav-item" style={{cursor: 'pointer',marginLeft:5,marginRight:5,color:props.content.font}} onClick={() => {
                        firebase.analytics().logEvent('view_nav_livetemplate');
                        window.location.href = '/templateCreator';
                    }}><a className="nav-link whiteTextNav my-3 btn btn-dark rounded-pill px-4 nomargins"  aria-current="page">Template Editor</a>
                    </li>
                    {props.routeItems&&props.routeItems.map((route)=>{
                        if(route.dropArray){
                            return(<li className="nav-item" style={{cursor:'pointer'}}>

                                <div className="dropdown nav-link" style={{position:'relative'}}>
                                    <div className="dropbtn" onClick={()=>{
                                        firebase.analytics().logEvent(route.routeTag);

                                        window.location.href=route.href
                                    }}>{route.name}</div>
                                    <div className="dropdown-content" style={{zIndex:999,position:'absolute',color:props.content.font}}>
                                        {route.dropArray.map((dropdownContent)=>
                                            <a className="" onClick={()=>{
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

export class HeroPage extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef()
        console.log(businessBlurbShort,contactTitle,contactPhone,'????');
        this.state={
            wasPurchased:false,
            code:'',
            showSaleSuccess:false,
            currentMainImage:0,
            mainArray:[image1,image2],
            includeMeta:false,
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
        console.log(rootStore.pageStore.code,'load code');
        this.shiftCurrentImage();
        firebase.firestore().collection("templates").get().then((data)=>{
            const dataToLoad=data.docs.find((doc)=>doc.id===(rootStore.pageStore.code?`t-${rootStore.pageStore.code}`:'live'));
            if(dataToLoad&&dataToLoad.data()) {
                console.log(dataToLoad.data(),'LOAD');
                this.setState({content: dataToLoad.data().content,mainArray:[dataToLoad.data().content.imageURLArray?dataToLoad.data().content.imageURLArray[0]:null]})
                console.log('images:',this.state.imageURLArray);
            }
        })

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
        let customerHasPaid = false;
        console.log('test:',firebase.apps.length,toJS(rootStore.pageStore.code));
        return <div>
            {this.state.showSaleSuccess&&<div style={{overflow:'hidden',maxWidth:'99vw'}}><Confetti recycle={true} numberOfPieces={500}
            />
            </div>}
            <NavBar content={this.state.content} isMarketing={false} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType||'bg-dark-blue'}/>
            <div className={`text-white`} style={{backgroundColor:this.state.content.backgroundType,height: '100%',position:'relative'}}>
                {this.state.showSaleSuccess&&<div style={{display:'flex',justifyContent:'center',padding:5}}>
                    <div style={{width:'80%',top:20,zIndex:9998,backgroundColor:'#fff',position:'absolute',height:700,borderRadius:8,color:'#505050'}}>
                    <div style={{width:'100%',height:60,position:'relative'}}> <div></div><i style={{cursor:'pointer',position:'absolute',right:10,top:10}} onClick={()=>{cookie.set('isPotentialCustomer',false); cookie.set('hasPaid',true);this.setState({showSaleSuccess:false})}} className="material-icons">close</i> </div>
                    <div style={{display:'flex',justifyContent:'center'}}>

                        <div style={{padding:60,textAlign:'center '}}>
                        <h2>
                            Congratulations! You will very soon be the proud owner of a premium website!
                        </h2>
                        <h4>It will take us a few days to get things up and running, but keep in touch! <br /> We will forward your details to you. <br />Order #{this.state.orderNumber}</h4>
                            <img src={coffee} />
                        </div>

                    </div>

                </div></div>}
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
                <div className={`mainColor secondaryBackgroundColor`} style={{backgroundColor:this.state.content.class, fontSize: 20,paddingBottom:50}}>
                    <div className="container">

                        <div style={{paddingTop:60}}>
                            <div>
                                <div className={`supportingColor`} style={{padding:33,opacity:1,width:'100%'}}>
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


            {/*    {this.state.content.routeItems.map((route,ix)=>{
                    return( <div className={`mainColor secondaryBackgroundColor ${this.state.content.class}`} style={{ fontSize: 20,paddingBottom:50}}>
                        <div className="container">

                            <div style={{paddingTop:60}}>
                                <h2>{route.secondaryHeader}</h2>
                                <div>
                                    <div className={`supportingColor secondaryBackgroundColor ${this.state.content.class}`} style={{padding:33,opacity:1,width:'100%'}}>
                                        <div className="px-4">
                                            <p><h2 style={{fontSize:'1.5rem',whiteSpace:'break-spaces'}}>{route.supportingHeading}</h2></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`container secondaryBackgroundColor ${this.state.content.class}`}>
                                <div style={{display: 'flex', justifyContent: 'center',paddingTop:40,flexWrap:'wrap',paddingBottom:40,marginBottom:70}}>
                                    <div><img style={{margin:30,width:'30vw',minWidth:350,borderRadius:4}} src={route.imageURLArray&&route.imageURLArray[0]||logo} alt="" width="50%"/></div>
                                    <div style={{width: '55%',minWidth:300}}>

                                        <h3 style={{paddingLeft:15,marginBottom:0,whiteSpace:'break-spaces'}}>{route.secondaryHeading1}</h3>
                                        <p style={{fontSize:18,paddingLeft:15,paddingTop:10,whiteSpace:'break-spaces'}}>{route.secondaryContent1}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}*/}


                <div className={`mainImageBackground text-white ${this.state.imgSelected&&'selectedPopupOpaque'}`} style={{zIndex:999,paddingTop:0}}>
                    <div style={{backgroundColor:'#fff'}} >
                        {customerHasPaid ?<>
                            <h1 style={{textAlign: 'center', paddingTop: 80}} className="magOrange">Take a picture,
                                it'll last longer!</h1>
                            <h2 className = "magOrange" style={{color:'#d9d9d9',textAlign:'center',marginTop:10,marginBottom:20}}>We are currently processing your order.</h2>
                            <p className = "magOrange" style={{color:'#d9d9d9',textAlign:'center',marginTop:10,marginBottom:20}}>Got questions? Hit up help@webgun.ai reference: {cookie.get('code')} </p>
                            </>
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
                                            window.location.href = 'https://buy.stripe.com/test_fZebLd7dC89o4WA6oq'
                                    }} style={{margin:10}} className="altButton redButton magOrange">Get it now<div style={{position:'relative'}}><div style={{position:'absolute',top:-25,right:0}}><i className="material-icons">keyboard_arrow_right</i></div></div></div>

                                </div>
                                <div className="myDIV2 pricing29"><img  src={web} className="rounded-4" width="350" height={280}/></div>

                            </div>
                        </div>
                        </>}
                    </div>

                </div>

            </div>
     {/*       <div style={{display:'flex',justifyContent:'flex-end'}}>
                <input className="templateInputP" style={{width:180,color:'#ff2019',border:'1px solid #ff2019'}} value={this.state.code} onChange={(e)=>{this.changeCode(e)}} placeholder={'Enter code'} />
                <div style={{display:'flex',justifyContent:'space-around'}}><div onClick={()=>{
                    this.loadTemplateWithCode(`t-${this.state.code}`)
                }} style={{marginBottom:10,marginLeft:10}} className="altButton whiteButton magOrange">Load template</div>
                    {this.state.wasPurchased&&<div style={{marginBottom:10,marginLeft:20}}  className="altButton whiteButton magOrange" onClick={()=>{window.location.href='/templateCreator'}}>
                        Edit
                    </div>}
                </div>
            </div>*/}
        </div>

    }
}