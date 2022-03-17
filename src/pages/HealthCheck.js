import React from 'react';
import {NavBar} from "./Main";
import dreamwoodwebsite from '../images/dreamwoodwebsite.png'
import demoProduct from '../images/demoProduct.png'
import onestep from '../images/onestep.png'
import builder from '../images/builder_lap.png'
import firebase from "firebase/compat";

export class HealthCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            activePage:'HOME',
            imgSelected:null,
        }
    }
    toggleActivePage(page){
        return this.setState({activePage:page})
    }
    detectMob() {
        return ( ( window.innerWidth <= 900 ) && ( window.innerHeight <= 1000 ) );
    }
    render(){
        return <div style={{overflowY:'hidden',position:'relative'}}>
            <div className={`mainImageBackground text-white ${this.state.imgSelected&&'selectedPopupOpaque'}`} style={{zIndex:999,paddingTop:0}}>
                <div style={{backgroundColor:'#fff'}} >
                    <h1 style={{textAlign:'center',paddingTop:80,fontWeight:300,color:'#ff2019'}}>FREE Online health check</h1>

                    <div style={{paddingBottom:80,overflowY:'auto',display:'flex',justifyContent:'center',paddingTop:40}}>
                        <div style={{display:'inline-flex',flexWrap:'wrap',paddingLeft:100,paddingRight:100,
                            alignContent:'flex-start',alignItems:'space-around',justifyContent:'space-around',width:'100%'}}>
                            <div><h3 className="magOrange" style={{textAlign:'left',marginTop:10,marginBottom:20,fontWeight:300}}>
                                Let one of our online gurus run a complete diagnostic on your online footprint.
                                <br/>
                                After this, we will contact you with some ways you can improve. The best part is it's FREE!
                            </h3>
                                <div style={{display:'flex',justifyContent:'center',paddingTop:50}}>
                               <ul style={{color:'#ff2019',fontSize:24,fontWeight:700}}>
                                   <li>SEO and Google Indexing</li>
                                   <li>Page responsiveness and performance</li>
                                   <li>Analytics and Reporting inspection</li>
                                   <li>UX/UI Feedback</li>
                                   <li>E Commerce Sales Coaching</li>
                               </ul>
                            </div>
                                <br />
                                <div style={{display:'flex',justifyContent:'center'}}>
                                <div onClick={()=>{
                                    firebase.analytics().logEvent('health_check');
                                    this.props.contactRef.current.scrollIntoView();
                                }} style={{margin:10}} className="altButton redButton magOrange">Contact us now!</div>

                                </div> </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    }
}