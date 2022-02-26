import React from 'react';
import firebase from "firebase/compat";
import {NavBar} from "./HeroPage";
import i1 from '../images/274022224_503717854488438_7894146046717457700_n.jpg'
import i2 from '../images/274128837_366081201774026_3289639714308408396_n.jpg'
import i3 from '../images/274151325_1059978951244226_70130211996730035_n.jpg'
import i5 from '../images/274163518_649071569744534_4158045332234267125_n.jpg'
import i6 from '../images/274205823_373199751308103_6818779253943518982_n.jpg'
import i7 from '../images/274252632_277152564498733_2720196763002319364_n.jpg'
import i8 from '../images/274262137_677648466695292_2280261769959470371_n.jpg'
import i9 from '../images/274282265_436681828209952_6256034973024642595_n.jpg'
import i10 from '../images/274295414_5192352200827730_5622816711248813753_n.jpg'
import i11 from '../images/274316453_370579604885697_1519620923206115888_n.jpg'
import i12 from '../images/274487379_951530185735273_7045973747244849019_n.jpg'
import i13 from '../images/274522159_483748549942738_1765706477025994385_n.jpg'
import i14 from '../images/274559151_991157941815715_8575293117707684266_n.jpg'


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
    imageURLArray,
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
    secondaryPhoto1, contactCTA, p3ContentPhoto,backgroundType,bgClass,tLogo,hasScroll
} from "../content";




export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            activePage:'HOME',
            imgSelected:null,
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
                mainButtonTitle:mainButtonTitle,
                mainButtonLink:mainButtonLink,



                secondaryContent: secondaryContent,
                secondaryContent1: secondaryContent1,
                secondaryContentTitle:secondaryContentTitle,
                secondaryHeader: secondaryHeader,
                secondaryHeading1: secondaryHeading1,
                supportingHeading: supportingHeading,
                titleBlurb:titleBlurb,
                titleContent:titleContent,
                logo:tLogo,


                backgroundType:backgroundType,
                class:bgClass,
                imageURLArray:imageURLArray,
                routeItems:[],
                routeItemsDefault:RouteItems,
                logo:tLogo,
                hasScroll:hasScroll,

            }
        }
    }

    toggleActivePage(page){
        return this.setState({activePage:page})
    }
    render(){
        const images=[
        i1,
        i2,
        i3,
        i5
        , i6
        , i7
        , i8
        , i9
        , i10
        , i11
        , i12
        , i13
        , i14
        ];
        return <div>
            <NavBar content={this.state.content} isMarketing={false} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType||'bg-dark-blue'}/>
            <div style={{position:'relative',display:'flex',justifyContent:'center'}}>{this.state.imgSelected!==null&&<div style={{borderRadius:12,position:'absolute',top:10,backgroundColor:'#2c2c2c',height:'auto',width:'auto',zIndex:9000}}>
                <div style={{position:'absolute',right:10,top:'47%'}}>
                    <i onClick={()=>{this.setState({imgSelected:this.state.imgSelected+=1})}} style={{visibility:this.state.imgSelected<images.length-1?'visible':'hidden'}} className="imageNextButton large material-icons">keyboard_arrow_right</i>
                </div>
                <div style={{position:'absolute',left:10,top:'47%'}}>
                    <i onClick={()=>{this.setState({imgSelected:this.state.imgSelected-=1})}} style={{visibility:this.state.imgSelected>0?'visible':'hidden'}} className="imageNextButton large material-icons">keyboard_arrow_left</i>
                </div>
                <div style={{position:'absolute',width:'100%',display:'flex',justifyContent:'center',top:'80%'}}>
                    <div style={{  color:'#fff',
                        backgroundColor: '#7b7b7b',borderRadius:12,fontSize:36,opacity:0.75}}>
                        {this.state.imgSelected} / {images.length}
                    </div>

                </div>
                <div style={{width:'100%',height:30}}>
                    <div onClick={()=>{this.setState({imgSelected:null})}} style={{float:'right',cursor:'pointer',paddingRight:5,paddingTop:5,color:'#fff',fontSize:20,fontWeight:900}}><i className="material-icons">close</i></div>
                </div>
                <div style={{padding:30,paddingTop:0, display:'flex',justifyContent:'center',width:'98vw',height:'90vh'}}>
                    <img style={{objectFit:'scale-down',width:'100%'}}  src={images[this.state.imgSelected]}/></div>
            </div>}</div>
            <div className={`${this.state.content.backgroundType} text-white ${this.state.imgSelected&&'selectedPopupOpaque'}`} style={{height:'87.9vh'}}>
                <div>
                    <div style={{height:'80vh',overflowY:'auto',display:'flex',justifyContent:'center'}}>
                        <div style={{display:'inline-flex',flexWrap:'wrap',placeContent:'space-around',alignContent:'space-between'}}>
                                {images.map((image,ix)=>{
                                    return(<div  style={{position:'relative'}}>
                                        <div className="myDIV2" onClick={()=>{
                                            firebase.analytics().logEvent(`view_image_gallery`);

                                            this.setState({imgSelected:ix})}}>
                                            <img  style={{marginTop:20,marginBottom:20,objectFit:'cover',padding:5,maxWidth:'45vw',maxHeight:'60vh'}} src={image} className="rounded-4 hoverImage"/></div>
                                    </div>);
                                    }
                                )}
                        </div>

                    </div>
                </div>

            </div>
        </div>

    }
}