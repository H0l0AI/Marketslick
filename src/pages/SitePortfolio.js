import React from 'react';
import {NavBar} from "./Main";
import dreamwoodwebsite from '../images/dreamwoodwebsite.png'
import onestep from '../images/1sa.png'
import ES1 from '../images/ES1.png'
import p1 from '../images/p1.png'
import firebase from "firebase/compat";


export class SitePortfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            activePage:'HOME',
            imgSelected:null,
        }
    }
    detectMob() {
        console.log('COMP:',window.innerWidth ,window.innerHeight)

        return ( ( window.innerWidth <= 900 ) && ( window.innerHeight <= 1000 ) );
    }
    toggleActivePage(page){
        return this.setState({activePage:page})
    }
    render(){
        return <div style={{overflowY:'hidden',position:'relative',paddingTop:150}}>

            <div style={{position:'relative',display:'flex',justifyContent:'center'}}>{this.state.imgSelected&&<div style={{borderRadius:12,position:'absolute',top:20,backgroundColor:'#2c2c2c',height:'auto',width:'auto',zIndex:9000}}>
                <div style={{width:'100%',height:30}}>
                    <div onClick={()=>{this.setState({imgSelected:null})}} style={{float:'right',cursor:'pointer',paddingRight:5,paddingTop:0,color:'#fff',fontSize:20,fontWeight:900}}>x</div>
                </div>
                <div style={{padding:10,paddingTop:0, display:'flex',justifyContent:'center'}}><img width={700} height={500} src={this.state.imgSelected} /></div>
                <div style={{width:'97%',margin:30,marginBottom:10,marginLeft:11,marginRight:11,padding:20,border:'1px solid #fff',color:'#fff',marginTop:0}}>
                  & Caption here &
                </div>

            </div>}</div>
            <div className={`mainImageBackground text-white ${this.state.imgSelected&&'selectedPopupOpaque'}`} style={{zIndex:999,paddingTop:0}}>
                <div style={{backgroundColor:'#fff'}} >
                    <h1 style={{fontSize:56,textAlign:'center',color:'#ff2019'}}>Portfolio</h1>
                    <p style={{textAlign:'center',paddingTop:80,fontWeight:300,fontSize:28}} className="magOrange">We are experienced in multiple verticals and industries, we speak your language.</p>
                    <p style={{textAlign:'center',fontWeight:300,fontSize:28}} className="magOrange">Pull customers in and convert sales quickly with well thought out, relevant design.</p>

                    <div style={{paddingBottom:80,overflowY:'auto',display:'flex',justifyContent:'center',paddingTop:40,margin:this.detectMob()?0:'0px 50px'}}>
                        <div style={{display: 'flex',
                            flexWrap: 'nowrap',
                            paddingLeft: this.detectMob()?0:'100px',
                            paddingRight: this.detectMob()?0:'100px',
                            marginTop: 60,
                            justifyContent: 'space-between',
                            maxWidth: '100vw'}}>

                            <div style={{position:'relative',borderRadius:8,margin:25}}>
                                <div className="myDIV2 MMBanner PortBlock" onClick={()=>{
                                    firebase.analytics().logEvent('view_template');
                                    window.location.href='/pages'}}><img  src={p1} className="rounded-4 hoverImage " width="350" height={300}/></div>
                                <h2 className="magOrange" style={{color:'#d9d9d9',textAlign:'center',marginTop:40,marginBottom:20}}>Services Template </h2>

                            </div>
                            <div style={{position:'relative',borderRadius:8,margin:5}}>
                                <div className="myDIV2 GPBanner PortBlock" onClick={()=>{
                                    firebase.analytics().logEvent('view_dwh');

                                    window.location.href='https://www.dreamwoodhomes.co.nz'}}><img  src={dreamwoodwebsite} className="rounded-4 hoverImage " width="350" height={350}/></div>
                                <div className="imagePlus portfolioImage hide"><i style={{fontSize:56}} className="material-icons">search</i></div>
                                <h2 className="magOrange" style={{color:'#d9d9d9',textAlign:'center',marginTop:10,marginBottom:20}}>Building and Trades</h2>


                            </div>
                            <div style={{position:'relative',borderRadius:8,margin:5}}>
                                <div className="myDIV2 MMBanner PortBlock" style={{width:350}} onClick={()=>{
                                    firebase.analytics().logEvent('view_ES');

                                    window.location.href='https://ellissolutions.co.nz'}}><img  src={ES1} className="rounded-4 hoverImage " width="350" height={350}/></div>
                                <div className="imagePlus portfolioImage hide"><i style={{fontSize:56}} className="material-icons">search</i></div>
                                <h2 className="magOrange" style={{color:'#d9d9d9',textAlign:'center',marginTop:10}}>Building and Trades</h2>


                            </div>
                            <div style={{position:'relative',borderRadius:8,margin:5}}>
                                <div className="myDIV2 MMBanner PortBlock" style={{width:350}} onClick={()=>{
                                    firebase.analytics().logEvent('view_1SA');

                                    window.location.href='https://1stepahead.co.nz'}}><img  src={onestep} className="rounded-4 hoverImage " width="350" height={350}/></div>
                                <div className="imagePlus portfolioImage hide"><i style={{fontSize:56}} className="material-icons">search</i></div>
                                <h2 className="magOrange" style={{color:'#d9d9d9',textAlign:'center',marginTop:10}}>Property Management</h2>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    }
}