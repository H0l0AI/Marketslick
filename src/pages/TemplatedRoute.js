import React from 'react';
import house1 from '../images/house1.jpg';
import house2 from '../images/house2.jpg';
import firebase from "firebase/compat";
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
    trustedPartnerContent,
    RouteItems,
    secondaryHeader,
    secondaryHeading1,
    secondaryHeading2,
    secondaryContent2,
    secondaryContent1,
    businessBlurbShort,
    routeItems,
    contactCTA,
    secondaryPhoto2, secondaryPhoto1, contactBlurb, p3Content1, p3Heading1, backgroundType,bgClass,imageURLArray,tLogo,hasScroll
} from "../content";
import {NavBar,scrollActivate} from "./HeroPage";
import {rootStore} from "../stores/Store";
import logo from "../images/sm3.png";


export class TemplatedRoute extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef();
        this.state={
            routeIndex:props.index,
            currentMainImage:0,
            mainArray:[house1,house2],
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
                routeItems:routeItems,
                class:bgClass,
                imageURLArray,
                logo:tLogo,
                hasScroll:hasScroll,

            }
        }
    }
    shiftCurrentImage(){
        setInterval(()=>{
            this.nextImage();
        },5000);
    }
    nextImage(){
        this.setState({
            currentMainImage:this.state.currentMainImage+1
        })
    }
    componentDidMount(){

    }
    render(){
        console.log(this.props.index,'...',this.state.content);
        console.log('firebase:',firebase.apps.length);
        if(this.state.content.routeItems&&this.state.content.routeItems[this.props.index]) {
            const route = this.state.content.routeItems[this.props.index];

            return <div>
                <NavBar content={this.state.content} isMarketing={false} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType||'bg-dark-blue'}/>

                <div>
                    <NavBar content={this.state.content}  routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType}/>

                    <div className={`${this.state.content.backgroundType} text-white`} style={{height: '100vh',position:'relative'}}>

                        <div className={`mainColor secondaryBackgroundColor ${this.state.content.class}`}
                             style={{fontSize: 20, paddingBottom: 50}}>
                            <div className="container">

                                <div style={{paddingTop: 60}}>
                                    <h3 style={{textAlign:'center',fontSize:56}}>{route.secondaryHeader}</h3>
                                    <div>
                                        <div className={`supportingColor secondaryBackgroundColor ${this.state.content.class}`}
                                             style={{padding: 33, opacity: 1, width: '100%'}}>
                                            <div className="px-4">
                                                <p><h2 style={{
                                                    fontSize: '1.5rem',
                                                    whiteSpace: 'break-spaces'
                                                }}>{route.supportingHeading}</h2></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`container secondaryBackgroundColor ${this.state.content.class}`}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        paddingTop: 40,
                                        flexWrap: 'wrap',
                                        paddingBottom: 40,
                                        marginBottom: 70
                                    }}>
                                        <div><img style={{margin: 30, width: '30vw', minWidth: 350, borderRadius: 4}}
                                                  src={route.imageURLArray && route.imageURLArray[0] || logo} alt=""
                                                  width="50%"/></div>
                                        <div style={{width: '55%', minWidth: 300}}>

                                            <h3 style={{
                                                paddingLeft: 15,
                                                marginBottom: 0,
                                                whiteSpace: 'break-spaces'
                                            }}>{route.secondaryHeading1}</h3>
                                            <p style={{
                                                fontSize: 18,
                                                paddingLeft: 15,
                                                paddingTop: 10,
                                                whiteSpace: 'break-spaces'
                                            }}>{route.secondaryContent1}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`container secondaryBackgroundColor ${this.state.content.class}`}>
                                    <h2 style={{textAlign:'center'}}>{route.contactBlurb}</h2>
                                    <p style={{textAlign:'center'}}>{route.businessBlurbShort}</p>
                                    <div style={{display:'flex',justifyContent:'center'}}><div onClick={()=>{window.location.href='/contact'}} className="altButton" style={{width:300,marginTop:20,textAlign:'center'}}>
                                        Enquire now

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }else{
            return(<> <NavBar
                    routeItems={this.state.content.routeItemsDefault ? this.state.content.routeItemsDefault.concat(this.state.content.routeItems) : RouteItems}
                    backgroundType={this.state.content.backgroundType}/>
                <div className={`${this.state.content.backgroundType} text-white`} style={{height: '100%',position:'relative'}}>

                <div className={`mainColor secondaryBackgroundColor ${this.state.content.class}`}
                     style={{fontSize: 20, paddingBottom: 50,height:'100vh'}} ></div>
                </div>);
                </>);
        }

    }
}