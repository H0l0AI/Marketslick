import React from 'react';
import image1 from '../images/house2.jpg';
import image2 from '../images/house3.jpg';
import home_icon from '../images/realtor-icon-4-dark.png';
import logo from '../images/sm3.png';
import firebase from "firebase/compat";
import cookie from 'js-cookie';


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
    secondaryPhoto1, contactCTA, p3ContentPhoto,backgroundType,imageURLArray,routeItems,bgClass,linkArray,tLogo,font,mapsCenter
} from "../content";
import {rootStore} from '../stores/Store';
import {toJS} from "mobx";
import builder from "../images/builder.png";
import content from "../contents";
import {scrollActivate} from "./HeroPage";
import SimpleMap from "./SimpleMap";
import axios from "axios";
import {Dropdown} from "./dropdown";

export const HeroContent =(props)=>(<div style={{backgroundColor:props.content.backgroundType,color:'#fff'}}>
    <div className="container">
        <div className="align-items-center noXGutter">
            <div>
                <div className="px-4 px-md-0" style={{paddingTop:50,paddingBottom:50}}>
                    <h3 style={{fontSize:36}} className="mb-4">What is the REAL salary of that Seek Job listing?</h3>
                    <h5 style={{fontSize:24}} className="mb-4">Did you know most the time the listed salary for a job is up to 25% lower than the employee is willing to pay for the right applicant? </h5>
                    <h5 style={{fontSize:24}} className="mb-4">Search for a job using the salary ranges and keywords, then click on a listing below to find the Seek page where you can apply.</h5>
                </div>
            </div>
        </div>
    </div>
</div>);
export const SecondaryContent =(props)=>(<div className='py-5' style={{color:props.content.font,backgroundColor:props.content.class}}>
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
        <p className="mb-4" style={{textAlign:'center',paddingLeft:20,paddingRight:20}}>{props.content.p3Content1}</p>
    </div>
</div>);
export const AuxiliaryContent =(props)=>(<div className={`py-6`} style={{backgroundColor:props.content.backgroundType,color:props.content.font}} id="ecosystem">
    <div >
        <div className={`scroll-element js-scroll fade-in-bottom starting`}>
            <h3 style={{fontSize:28}}  className="mb-5 text-center"><span
                className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">{props.content.secondaryContentTitle}</span>
            </h3>
        </div>

        <div className=" text-white" style={{display:'flex',justifyContent:'space-around'}}>
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
    const route = props.content.routeItemsAdditional[props.index];
    console.log('ROUTE:',route);

    return (<div key={props.index} className={`py-6`} style={{backgroundColor:props.content.backgroundType,color:props.content.font}} id="ecosystem">
        <h3 style={{fontSize:28}}  className="mb-5 text-center">
            <div className={`scroll-element js-scroll fade-in-bottom `}>

                <span
                    className="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">{route.secondaryHeader}</span>
            </div>
        </h3>
        <div className="row row-eq-height text-white">
            <div className="col-12 col-md-5 offset-md-1">
                <div className={`scroll-element js-scroll slide-left`}>
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
                <div className={`scroll-element js-scroll slide-right`}>
                    <div className="bg-dark p-4 rounded-4 mt-4 mt-md-0">
                        <h4>{route.secondaryHeading1}</h4>
                        <p>{route.secondaryContent1}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
};
export const Footer=(props)=>(<><div className={`py-6`} style={{backgroundColor:props.content.class,color:'#fff'}} id="community">
    <div >
        <div className={`scroll-element js-scroll fade-in-bottom starting`}>
            <div className="container small-width">
                <div className="px-4">

                    <div>
                        <div className="p-4 rounded-4 mt-4 mt-md-0" style={{marginBottom:30,backgroundColor:props.content.backgroundType}}>
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
export const NavBar = (props)=>(null);



export class MarketingHeroPage extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef()
        this.state={
            keywords:'analyst',
            priceRangeArray:[],
            priceMin:30000,
            priceMax:300000,
            page:1,
            loading:false,
            code:'',
            showSaleSuccess:false,
            currentMainImage:0,
            mainArray:[image1,image2],
            content:{
                mapsCenter:mapsCenter,
                mainButtonLink:mainButtonLink,
                mainButtonTitle:mainButtonTitle,
                font:font,
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
                logo:tLogo,
                class:bgClass,
                routeItems:[],
                routeItemsAdditional:routeItems,
                routeItemsDefault:RouteItems,
                imageURLArray,
                linkArray:linkArray,

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
    getData(page){
        axios.get('https://cryptic-badlands-53121.herokuapp.com/'+`https://jobsearch-api.cloud.seek.com.au/search?&keywords=${this.state.keywords}&salaryRange=${this.state.priceMin}-${this.state.priceMax}&sourcesystem=houston&seekSelectAllPages=true&page=${page}`).then((res)=>{
            console.log('Res',res);
            this.setState({dataToMap:res.data.data,loading:false})
        })
    }
    initializePriceRange(){
        const PRICE_RANGE_INTERVAL = 5000;
        const minPrice = 35000
        const maxPrice = 250000;
        const priceRangeIntervals = (maxPrice - minPrice) / PRICE_RANGE_INTERVAL;
        let priceRangeArr = [{value:'',name:'No selection'}];
        console.log('min max',minPrice,maxPrice,priceRangeIntervals);

        this.setState({priceRangeArray:priceRangeArr})
        for (let i = 0; i < priceRangeIntervals; i++) {
            priceRangeArr.push({
                value: minPrice + (i * PRICE_RANGE_INTERVAL),
                name: minPrice + (i * PRICE_RANGE_INTERVAL)
            })
        }
    }
    componentDidMount(){
        scrollActivate();
        this.setState({loading:true})
        this.getData(this.state.page)
        this.initializePriceRange();

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
    priceFilterMin=(job,priceMin)=>{
        //todo logic for 'k', salary ranges etc
        return true
        let salary = job.salary.replace(/[^0-9]/g, '');
        let salaryParse= parseInt(salary,10);
        if(priceMin===null||priceMin=='') {
            return true;
        }
        else{
            if(salaryParse>priceMin){
                return true;
            }
            else{
                return false;
            }
        }

    }
    priceFilterMax=(job,priceMax)=>{
        return true
        let salary = job.salary.replace(/[^0-9]/g, '');
        let salaryParse= parseInt(salary,10);
        if(priceMax===null||priceMax=='') {
            return true;
        }
        else{
            if(salaryParse<priceMax){
                return true;
            }
            else{
                return false;
            }
        }

    }

    renderJob(dataToMap) {

        if (this.state.loading||!dataToMap) {
            return 'Loading Job data...'
        } else {
            return <>{dataToMap.map((job) => {
                const passesPriceFilterMin = this.priceFilterMin(job, this.state.priceMin)
                const passesPriceFilterMax = this.priceFilterMax(job, this.state.priceMax)
                if (passesPriceFilterMin && passesPriceFilterMax) {
                    return (
                        <tr style={{cursor:'pointer'}} onClick={()=>{window.location.href=`https://www.seek.co.nz/job/${job.id}`}}>
                            <td>
                                {job.title}
                            </td>
                            <td>
                                {job.salary}
                            </td>
                            <td>
                                {job.location}
                            </td>
                            <td>
                                {job.teaser}
                            </td>
                            <td>
                                {job.workType}
                            </td>
                        </tr>
                    )
                }
            })}
                <tr>
                    <div style={{padding:20}}>
                        <div  style={{cursor:'pointer'}} onClick={() => {
                            this.getData(this.state.page + 1)
                            this.setState({page:this.state.page+=1})
                        }} className="btn blue">Next Page</div>
                    </div>
                </tr>
            </>
        }
    }
    render(){
        let customerHasPaid = false;
        return <div>
            <NavBar content={this.state.content} isMarketing={true} class={this.state.content.class} routeItems={this.state.content.routeItemsDefault?this.state.content.routeItemsDefault.concat(this.state.content.routeItems):RouteItems} backgroundType={this.state.content.backgroundType}/>
                <HeroContent content={this.state.content} />
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{marginTop:15}}>
                <input placeholder={'Search...'} value={this.state.keywords} onChange={(e)=>{this.setState({keywords:e.target.value})}} onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        event.stopPropagation();
                        this.getData(1);

                    }
                }} />
                </div>
                <Dropdown setValue={(value)=>{this.setState({priceMin:value}); this.getData(1)}} optionsList={this.state.priceRangeArray} placeholder={'Select minimum salary'} />
                <Dropdown setValue={(value)=>{this.setState({priceMax:value}); this.getData(1)}} optionsList={this.state.priceRangeArray} placeholder={'Select maxmimum salary'} />
            </div>
            <div style={{margin:60}}><table style={{marginLeft:20}}>
                <thead>
                <th>
                    Role
                </th>
                <th>
                    ""Salary""
                </th>
                <th>
                    Location
                </th>
                <th>
                    Description
                </th>
                <th>
                    Type
                </th>
                </thead>
                <tbody>
                {this.renderJob(this.state.dataToMap)}
                </tbody>
            </table>
            </div>
        </div>

    }
}