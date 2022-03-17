import React from 'react';
import cookie from 'js-cookie';
import demoProduct from '../images/p1.png'
import demoProduct2 from '../images/p2.png'
import demoProduct3 from '../images/p3.png'
import demoProduct4 from '../images/p4.png'
import firebase from "firebase/compat";

export class SiteRange extends React.Component {
    constructor(props) {
        super(props);
        this.rangeRef = React.createRef();
        this.state={

            activePage:'HOME',
            imgSelected:false,
        }
    }
    toggleActivePage(page){
        return this.setState({activePage:page})
    }
    detectMob() {
        console.log('COMP:',window.innerWidth ,window.innerHeight)

        return ( ( window.innerWidth <= 900 ) && ( window.innerHeight <= 1000 ) );
    }

    renderContent(tier){
        switch(tier){
            case 1: return <div><h3>Get started with the META bundle</h3><br /><ul>
                <li>
                    Logo designed for your business
                </li>
                <li>
                    Business domain name secured, with email address
                </li>
                <li>
                    Facebook and Instagram Page created
                </li>
                <li>
                    Meta Business suite
                </li>
                <li>
                    Access to G-suite, additional users available.
                </li>
                <li>
                    1-hour free sales training included
                </li>
                <li>
                    Free monthly blog + access to 'Social Magnet' educational videos.
                </li>

            </ul>
            from $49 / month </div>;
            case 2: return <div><h3>Get online with the MARKETING MAGNET bundle</h3><br /><ul>
                <li>
                    Option to add on everything within the META Magnet offering at 10% discount <b>and</b>
                </li>
                <li>
                    Ultra fast website creation and delivery
                </li>
                <li>
                    Webhosting with chosen domain* <sub>at cost of securing domain.</sub>
                </li>
                <li>
                    SEO management, Ad-Campaign and Analytics* packages available. <sub>*with META addon</sub>
                </li>
                <li>
                    Go with the self-serve website builder option, where you can do it yourself
                </li>
                <li>
                    OR have one of our in-house designers get in touch for a bespoke design.* <sub>at additional cost</sub>

                </li>
                </ul>
            from $299 (+$59/ month) </div>;
            case 3: return <div><h3>Get online, the exact way you want with the GRAVITY PACKAGE</h3><br /><ul>
                <li>
                    Includes everything within the META Magnet offering <b>and</b>
                </li>
                <li>
                    Bespoke website design and development
                </li>
                <li>
                    Scope for additional hours as a premium client at $89/h
                </li>
                <li>
                   Custom made components and integrations and backend
                </li>
            </ul>
            from $799 (+$149 / month)</div>;
            case 4: return <div><h3>Boost your social media outreach, with our social magnets!</h3><br/>
            <ul>
                <li>Includes everything within <b>Meta Magnet</b> and:</li>
                <li>10 algorithm optimized, SEO enhanced, trending posts PER month</li>
                <li>Available on all relevant platforms</li>
                <li>Channel monitoring</li>
                <li>Monthly reporting</li>
            </ul>
            from $399 p/m</div>
        }
    }

    renderStripeLink(tier){
        cookie.set('emailAddress',this.props.emailAddress)
        switch(tier){
            case 1:cookie.set('isCustomer','meta');return window.location.href='https://buy.stripe.com/4gw15Ne2b2Yrb2E9AI';
            //case 1:cookie.set('isCustomer','meta');return window.location.href='https://buy.stripe.com/test_7sI8zt1Lq2LQa9W002';
            case 2:cookie.set('isCustomer','magnet');return window.location.href='/builder';
            case 3:return this.props.contactUsFunction();
            case 4:cookie.get('isCustomer','social');return window.location.href='https://buy.stripe.com/28o3dVf6fcz1c6I9AJ';
            //case 3:cookie.set('isCustomer','gravity');return window.location.href='https://buy.stripe.com/test_28o5nhahW0DI5TG9AB';
        }
    }


    render(){
        return <div style={{overflowY:'hidden'}}>
            <div ref={this.rangeRef} style={{position:'relative',display:'flex',justifyContent:'center'}}>{this.state.imgSelected&&<div key={this.state.tier} className="fadedshort bg-light-red" style={{borderRadius:12,position:'absolute',top:20,backgroundColor:'#ff2019',height:'auto',width:'auto',zIndex:9000}}>
                <div style={{width:'100%',height:60}}>
                    <div onClick={()=>{this.setState({imgSelected:null})}} style={{float:'right',cursor:'pointer',paddingRight:5,paddingTop:5,color:'#fff',fontSize:14,fontWeight:900}}><i className="material-icons">close</i></div>
                </div>
                <div style={{padding:30,paddingTop:0, display:'flex',justifyContent:'center',flexWrap:'wrap'}}><img style={{borderRadius:8}} width={280} height={250} src={this.state.imgSelected} />

                    <br />
                    <div style={{color:'#fff',padding:20}}>{this.renderContent(this.state.tier)}

                        <div style={{display:'block'}}>
                            <div> {this.state.purchaseReady?<input className="fadedshort" style={{width:250,marginTop:10,marginBottom:5,padding:8,borderRadius:8,border:'1px solid #ff2019',color:'#ff2019'}} value={this.props.emailAddress} placeholder={'Your email address...'} onChange={this.props.changeEmailAddress} />:null}</div>
                            <div> <p style={{color:'#fff',padding:0}}>{this.state.purchaseReady?'':'Feeling the pull?'}</p><br />
                           <div style={{display:'flex',justifyContent:'center',marginTop:15}}>
                        <div className="altButton redButton magOrange fadedshort" onClick={()=>{if(this.state.purchaseReady&&this.props.emailAddress){
                            this.renderStripeLink(this.state.tier)}else{
                            this.setState({purchaseReady:true})
                        }
                        }} style={{cursor:'pointer',width:250,marginTop:10,textAlign:'center'}}>{this.state.purchaseReady?'Get it now':'Sign up to continue'}</div>
                           </div>
                           </div>
                        </div>


                </div>
                </div>

            </div>}</div>
            <div className={`mainImageBackground text-white ${this.state.imgSelected&&'selectedPopupOpaque'}`}>
                <div className="scroll-element js-scroll slide-left starting">
                <h1 style={{textAlign:'center',paddingTop:120,fontSize:56}}>Get ONLINE the way you want, No hidden fees.</h1>
                <div style={{display:'flex',justifyContent:'center'}}>
                <p style={{textAlign:'center',paddingTop:20,fontSize:28,width:'75vw',minWidth:350,fontWeight:300}}>From social media set up and campaigns, to creating best-in-class digital products <br/> we can get your business online in the way you want, fast.</p>
                </div>
                </div>
                <div >
                    <div style={{margin:this.detectMob()?0:'0px 50px',height:this.detectMob()?730:'87vh',minHeight:730,overflowY:'auto',display:'flex',justifyContent:'center',paddingBottom:this.detectMob()?80:60,paddingTop:40}}>
                        <div style={{display:'flex',flexWrap:'noWrap',paddingLeft:this.detectMob()?0:100,paddingRight:this.detectMob()?0:100,marginTop:60,
                            justifyContent:'space-between',maxWidth:'100vw'}}>
                            <div className={`${this.detectMob()?'productCardMob':'productCard'}`} style={{minWidth:350,position:'relative', width:'30%',padding:'60px 30px', backgroundColor:'#fff',borderRadius:8,marginTop:10}}>
                                <div style={{textAlign:'center',marginTop:20}}><h2 className="magOrange" style={{fontSize:26,color:'#d9d9d9'}}>Meta Magnet</h2></div>

                                <div className="myDIV3" onClick={()=>{
                                    firebase.analytics().logEvent('view_offer_meta');

                                    this.rangeRef.current.scrollIntoView()
                                    this.setState({imgSelected:demoProduct,tier:1})}}><img style={{borderRadius:8}}  src={demoProduct} className=" hoverImage" width="280" height={250}/></div>
                                <div style={{textAlign:'center',marginTop:20}}><h3 className="magOrange" style={{fontSize:22,color:'#d9d9d9'}}>Activate Social Media </h3>
                                    <p className="magOrange" style={{marginBottom:2}}>Get your business online fast with social media outreach</p>

                                    <p className="magOrange">from $99 +$49/month</p>
                                    <p onClick={()=>{
                                        firebase.analytics().logEvent('view_offer_meta');
                                        this.rangeRef.current.scrollIntoView()
                                        this.setState({imgSelected:demoProduct,tier:1})}} style={{textDecoration:'underline', textDecorationColor:'#a4a4a4', cursor:'pointer'}} className="magOrange">More info</p>
                                </div>


                            </div>

                            <div className={`${this.detectMob()?'productCardMob':'productCard'}`} style={{position:'relative', width:'30%',minWidth:350,padding:'60px 30px', backgroundColor:'#fff',borderRadius:8,marginTop:10}}>
                                <div style={{textAlign:'center',marginTop:20}}><h2 className="magOrange" style={{fontSize:26,color:'#d9d9d9'}}>Marketing Magnet</h2></div>
                                <div className="myDIV3" onClick={()=>{
                                    firebase.analytics().logEvent('view_offer_magnet');

                                    this.rangeRef.current.scrollIntoView()
                                    this.setState({imgSelected:demoProduct2,tier:2})}}><img style={{borderRadius:8}}  src={demoProduct2} className="hoverImage" width="280" height={250}/></div>
                                <div style={{textAlign:'center',marginTop:20}}><h3 className="magOrange" style={{fontSize:22,color:'#d9d9d9'}}>On Demand, Instant Websites</h3>
                                    <p className="magOrange">from $299 +$59/month</p>
                                    <p onClick={()=>{
                                        firebase.analytics().logEvent('view_offer_magnet');

                                        this.rangeRef.current.scrollIntoView()
                                        this.setState({imgSelected:demoProduct2,tier:2})}} style={{textDecoration:'underline', textDecorationColor:'#a4a4a4', cursor:'pointer'}} className="magOrange">More info</p>

                                </div>


                            </div>

                            <div className={`${this.detectMob()?'productCardMob':'productCard'}`} style={{minWidth:350,position:'relative', width:'30%',padding:'60px 30px', backgroundColor:'#fff',borderRadius:8,marginTop:10}}>
                                <div style={{textAlign:'center',marginTop:20}}><h2 className="magOrange" style={{fontSize:26,color:'#d9d9d9'}}>Social Magnet</h2></div>

                                <div className="myDIV3" onClick={()=>{
                                    firebase.analytics().logEvent('view_offer_meta');

                                    this.rangeRef.current.scrollIntoView()
                                    this.setState({imgSelected:demoProduct4,tier:4})}}><img style={{borderRadius:8}}  src={demoProduct4} className=" hoverImage" width="280" height={250}/></div>
                                <div style={{textAlign:'center',marginTop:20}}><h3 className="magOrange" style={{fontSize:22,color:'#d9d9d9'}}>"Done for you" Social media content</h3>

                                    <p className="magOrange">from $399/month</p>
                                    <p onClick={()=>{
                                        firebase.analytics().logEvent('view_offer_social');
                                        this.rangeRef.current.scrollIntoView()
                                        this.setState({imgSelected:demoProduct4,tier:4})}} style={{textDecoration:'underline', textDecorationColor:'#a4a4a4', cursor:'pointer'}} className="magOrange">More info</p>
                                </div>


                            </div>

                            <div className={`${this.detectMob()?'productCardMob':'productCard'}`} style={{marginRight:100,position:'relative', width:'30%',minWidth:350,padding:'60px 30px', backgroundColor:'#fff',borderRadius:8,marginTop:10}}>
                                <div style={{textAlign:'center',marginTop:20}}><h2 className="magOrange" style={{fontSize:26,color:'#d9d9d9'}}>Gravity Package</h2></div>
                                <div className="myDIV3 pricingsoldout" style={{width:280,marginLeft:5}} onClick={()=>{
                                    firebase.analytics().logEvent('view_offer_gravity');

                                    this.rangeRef.current.scrollIntoView()
                                    this.setState({imgSelected:demoProduct3,tier:3})}}><img style={{borderRadius:8}}   src={demoProduct3} className="hoverImage" width="280" height={250}/></div>
                                <div style={{textAlign:'center',marginTop:20}}><h3 className="magOrange" style={{fontSize:22,color:'#d9d9d9'}}>Full scale Websites</h3>

                                    <p className="magOrange">from $799 +$149/month</p>
                                    <p onClick={()=>{
                                        firebase.analytics().logEvent('view_offer_gravity');

                                        this.rangeRef.current.scrollIntoView()
                                        this.setState({imgSelected:demoProduct3,tier:3})}} style={{textDecoration:'underline', textDecorationColor:'#a4a4a4', cursor:'pointer'}} className="magOrange">More info</p>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    }
}