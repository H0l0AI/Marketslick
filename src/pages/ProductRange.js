import React from "react";
import firebase from "firebase/compat";
import {NavBar} from "./Main";
import tahi from "../images/tahiPlans2.png";
import rua from "../images/ruaPlans2.png";
import toru from "../images/toruPlans2.png";

export class ProductRange extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('firebase:', firebase.apps.length);
        return (<div>
            <NavBar/>
            <div style={{backgroundColor:'#505050',paddingBottom:100}}>
                <div style={{display:'flex',justifyContent:'center'}}><div style={{width:'40%',borderBottom:'1px solid #fff'}}><h1 style={{textAlign:'center',paddingTop:20,color:'#fff'}}>Our Range</h1></div></div>

                <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{display:'inline-flex',flexWrap:'wrap',
                        alignContent:'flex-start',alignItems:'space-around',justifyContent:'space-around'}}>
                        <div style={{position:'relative',margin:20}}>
                            <div className="myDIV2" onClick={()=>{window.location.href='/tahi'}}><img  src={tahi} className=" hoverImageDarkest imageMargins" width="400" height={300}/></div>
                            <div className="imagePlus portfolioImage2 hide"><div onClick={()=>{window.location.href='/tahi'}}>
                                <h2 className="imageHoverFont">Tahi</h2>
                                <h5 className="imageHoverFontSmall">1 Bedroom Dream</h5></div></div>


                        </div> <br/>
                        <div  style={{position:'relative',margin:20}}>
                            <div className="myDIV2" onClick={()=>{window.location.href='/rua'}}>
                                <img  src={rua}  className=" hoverImageDarkest imageMargins" width="400" height={300}/></div>
                            <div className="imagePlus portfolioImage2 hide"><div onClick={()=>{window.location.href='/rua'}}>
                                <h2 className="imageHoverFont">Rua</h2>
                            <h5 className="imageHoverFontSmall">1 Bedroom Dream</h5></div>
                            </div>
                        </div>
                        <br/>
                        <div  style={{position:'relative',margin:20}}>
                            <div className="myDIV2" onClick={()=>{window.location.href='/toru'}}>
                                <img  src={toru} className=" hoverImageDarkest imageMargins" width="400" height={300}/>
                            </div>
                            <div className="imagePlus portfolioImage2 hide">
                                <div onClick={()=>{window.location.href='/toru'}}>
                                <h2 className="imageHoverFont">Toru</h2>
                                <h5 className="imageHoverFontSmall">2 Bedroom Dream</h5></div></div>
                        </div>
                    </div>

                </div>
                <div style={{paddingTop:120,color:'#fff'}}>
                    <h2 style={{textAlign:'center'}}>Not what you had in mind?</h2>
                    <p style={{textAlign:'center'}}>We offer custom plans and fabrication, get in touch to see if we can make your dream happen.</p>
                    <div style={{display:'flex',justifyContent:'center'}}><div onClick={()=>{window.location.href='/contact'}} className="altButton" style={{width:300,marginTop:20,textAlign:'center'}}>
                        Make an enquiry

                    </div>
                    </div>

                </div>
            </div>
        </div>);
    }
}

