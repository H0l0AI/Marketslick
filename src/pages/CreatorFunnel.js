import React from 'react';
import image1 from '../images/realtor-010.jpeg';
import image2 from '../images/realtor-010.png';
import home_icon from '../images/realtor-icon-4-dark.png';
import logo from '../images/sm3.png';
import firebase from "firebase/compat";
import {rootStore} from '../stores/Store';
import builder from '../images/builder.png'
import mm1 from '../images/mm1.png'
import property from '../images/property.png'
import {SwatchesPicker} from "react-color";
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
    titleContent,autoCompletePlaces,
    RouteItems,
    contactBlurb,
    secondaryHeader,
    secondaryPhoto1,
    secondaryHeading1,
    secondaryContent1,
    businessBlurbShort,
    contactCTA,
    p3ContentPhoto, p3Heading1, p3Content1
} from "../content";
import {FileImporter} from "./FileImporter";
import GoogleMyBusinessForm from "./GoogleMyBusinessForm";
import cookie from "js-cookie";
import p2 from "../images/p2.png";
import {useHistory} from "react-router";
import {inject, observer} from "mobx-react";
import {toJS} from "mobx";
import SimpleMap from "./SimpleMap";
import {Swatches} from "react-color/lib/components/swatches/Swatches";
export const FacebookButton=(props)=>{
    const history = useHistory();

    function handleClick() {
        props.signUpHandler('facebook');
        // history.push('/sso/google');
    }

    return (
        <div style={{width:320,padding:12,cursor:'not-allowed'}}
             className="sign-up-button google-sign-up"
             onClick={handleClick}
        >
            <img className="social-sign-up-icon" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" alt="Sign up with Facebook" />
            <span className="social-sign-up-text">Facebook (unavailable)</span>
        </div>
    );

}
export const GoogleButton = (props) => {
    const history = useHistory();

    function handleClick() {
        props.signUpHandler('google');
        // history.push('/sso/google');
    }

    return (
        <div style={{width:300,padding:12,cursor:'pointer'}}
            className="sign-up-button google-sign-up"
            onClick={handleClick}
        >
            <img className="social-sign-up-icon" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Sign up with Google" />
            <span className="social-sign-up-text">Google</span>
        </div>
    );
};
function signUpUsingSocial(){
    return rootStore.pageStore.signUpUsingGoogle();
}
function signUpUsingFacebook(){
    return rootStore.pageStore.signUpUsingFacebook();

}
export const NavBar = (props)=>(
    <nav className={`navbar navbar-expand-xl navbar-dark myNav navTextColor gunNav`} style={{height:60}}>
        <div className="container">


            <button className="navbar-toggler rounded-4 shadow-sm" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                {props.userEmail?
                <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a style={{cursor:'pointer'}} onClick={()=>{if(props.userEmail){return props.resetFrontPage()}{return null}}} className="nav-link" aria-current="page">Color Scheme</a>
                    </li>
                    <li className="nav-item" style={{cursor: 'pointer'}} onClick={() => {
                        window.location.href = '/';
                    }}><a className="nav-link" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item" style={{cursor: 'pointer'}} onClick={() => {
                        rootStore.pageStore.signOut();
                    }}>
                        <a className="nav-link" aria-current="page"> {props.userEmail? <>Sign Out</>:      <GoogleButton signUpHandler={signUpUsingSocial.bind(this)} />}</a>
                    </li>
                </ul>:null}
            </div>
        </div>
    </nav>);

@inject('rootStore') @observer  class CreatorFunnel extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef()
        this.state={
            emailFormFields:{
                email:'',
                password:'',
            },
            rContent:'<p></p>',
            rText:'',
            linkArray:[],
            loadState:null,
            colorSelectorModal:true,
            editModal:null,
            logo:null,
            routeItemsDefault:RouteItems,
            routeItems:[],
            places:[],
            plainCode:0,
            imageURLArray:[],
            bgSelectorActive:false,
            classSelectorActive:false,
            currentMainImage:0,
            mainArray:[image1,image2],
            classArray:[ 'gbg1','gbg2','gbg3','gbg4','gbg5','gbg6','gbg7',
                'gbg8','gbg9',
                'gbg10','gbg11',
                'gbg12',
                'gbg13',
                'gbg14',
                'gbg15',
                'gbg16',
                'gbg17',
                'gbg18',
                'gbg19',
                'gbg20',
                'gbg21',
                'gbg22',
                'bg37',
                'bg38',
                'bg39',
                'bg40',
                'bg41',
                'bg42',
                'bg43',
                'bg44','one','two','three','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen'],
            class: {hex:"#3f51b5"},
            classIndex:0,
            backgroundArray:['one','two','three','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','mockImageBackground',
                'gbg1','gbg2','gbg3','gbg4','gbg5','gbg6','gbg7',
                'gbg8','gbg9',
                'gbg10','gbg11',
                'gbg12',
                'gbg13',
                'gbg14',
                'gbg15',
                'gbg16',
                'gbg17',
                'gbg18',
                'gbg19',
                'gbg20',
                'gbg21',
                'gbg22',
            'bg37',
            'bg38',
            'bg39',
            'bg40',
            'bg41',
            'bg42',
            'bg43',
            'bg44',
            ],
            backgroundType: {hex:'#4264ea'},
            font: {hex:'#fff'},
        backgroundIndex:0,
            content:{
                titleContent:titleContent,
                titleBlurb:titleBlurb,
                supportingHeading:supportingHeading,
                secondaryContentTitle:secondaryContentTitle,
                secondaryContent:secondaryContent,
                contactTitle:contactTitle,
                contactBlurb:contactBlurb,
                contactPhone:contactPhone,
                contactEmail:contactEmail,
                secondaryHeader:secondaryHeader,
                secondaryHeading1:secondaryHeading1,
                secondaryContent1:secondaryContent1,
                businessBlurb:businessBlurb,
                businessBlurbShort:businessBlurbShort,
                p3Heading1:p3Heading1,
                p3Content1:p3Content1,
                backgroundType:'mockImageBackground',
                class:'one',
                routeItems:[],
                mainButtonLink:'http://REDIRECT_LINK',
                preferredDomain:'http://example-business.co.nz'

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
    async componentDidMount(){
        const userSubmittedTemplated = await rootStore.pageStore.getTemplatesWithId(rootStore.pageStore.userId);
        console.log('from user',toJS(rootStore.pageStore.activeTemplate));
        console.log('EXISTING',cookie.get('code'),cookie.get('wasPurchased'));
        console.log('test test test ',userSubmittedTemplated);

        let code=cookie.get('code');
        if(code&&cookie.get('wasPurchased')){
            firebase.firestore().collection("templates").get().then((data)=>{
                const dataToLoad=data.docs.find((doc)=>doc.id===(rootStore.pageStore.code?`t-${rootStore.pageStore.code}`:'live'));
                if(dataToLoad&&dataToLoad.data()) {
                    console.log(dataToLoad.data(),'LOAD');
                    this.setState({code:rootStore.pageStore.code||code,content: dataToLoad.data().content,mainArray:[dataToLoad.data().content.imageURLArray?dataToLoad.data().content.imageURLArray[0]:null]})
                    return console.log('images:',this.state.imageURLArray);
                }
            })
        }
        else{
            if(userSubmittedTemplated){
                console.log('USER SUBMITTED:',userSubmittedTemplated);
                this.setState({code:rootStore.pageStore.code||code,userContinued:true,editModal:'frontPage',colorSelectorModal:false,content: userSubmittedTemplated.content,mainArray:[userSubmittedTemplated.content.imageURLArray?userSubmittedTemplated.content.imageURLArray[0]:null]})

            }
            code = Math.floor(Math.random()*10000);
            cookie.set('pw',code);
            return this.setState({plainCode:code});
        }


    }
    switchBackgroundType(){
        let index = this.state.backgroundIndex;
        if(index<this.state.backgroundArray.length-1){
            index=this.state.backgroundIndex+1;
        }else{
            index = 0;
        }
        let content = this.state.content;
        content['backgroundType']=this.state.backgroundArray[index];
        this.setState({backgroundIndex:index,backgroundType:this.state.backgroundArray[index],content:content});
    }
    handleContentFormChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => {
            const { content } = prevState;
            content[name] = value;
            return { content };
        });
    };
    handleAdditionalFormChange =(event,index) =>{
        const { name, value } = event.target;
        const routeItems = this.state.routeItems;
        routeItems[index][`${name}`] = value;
        console.log(this.state.routeItems[index],this.state.routeItems[index][`${name}`],value);
        this.setState({routeItems:routeItems})
    }
    renderBGSelector(shouldRender){
        this.setState({bgSelectorActive:!this.state.bgSelectorActive,classSelectorActive:false,fontSelectorActive:false})
    }
    renderClassSelector(shouldRender){
        this.setState({classSelectorActive:!this.state.classSelectorActive,bgSelectorActive:false,fontSelectorActive:false})
    }
    renderFontSelector(shouldRender){
        this.setState({classSelectorActive:false,bgSelectorActive:false,fontSelectorActive:true})
    }

    uploadBrandImage = async (e,fileInput,index)=>{
        let file;
        try {
            if(!fileInput) {
                this.setState({filename: e.target.files[0].name, uploading: true});
                const files = Array.from(e.target.files)
                file = files[0];
            }
            else{
                this.setState({filename: fileInput.name, uploading: true});
                file = fileInput
            }
            const formData = new FormData();
            let storageRef = firebase.storage().ref();
            // @ts-ignore
            let practiceImageRef = storageRef.child(`images/${this.state.code}/${index}`);
            // @ts-ignore
            let uploadTask = practiceImageRef.put(file);
            // @ts-ignore
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                (error) => {
                    console.log('ERROR writefile',error);
                    let imageUrlArray=this.state.imageURLArray;
                    imageUrlArray[index] = null;
                    this.setState({imageURLArray:imageUrlArray,filename:null,uploading:false})

                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    // @ts-ignore
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        let imageUrlArray=this.state.imageURLArray;
                        imageUrlArray[index] = downloadURL;
                        this.setState({uploading: false, imageURLArray: imageUrlArray});
                        // @ts-ignore

                    });
                }
            );
        }catch(e){
            console.log('ERROR catchblock',e);
            let imageUrlArray=this.state.imageURLArray;
            imageUrlArray[index] = null;
            this.setState({imageURLArray:imageUrlArray,filename:null,uploading:false})
        }
    };
    uploadLogoImage = async (e,fileInput,index)=>{
        let file;
        try {
            if(!fileInput) {
                this.setState({filename: e.target.files[0].name, uploading: true});
                const files = Array.from(e.target.files)
                file = files[0];
            }
            else{
                this.setState({filename: fileInput.name, uploading: true});
                file = fileInput
            }
            const formData = new FormData();
            let storageRef = firebase.storage().ref();
            // @ts-ignore
            let practiceImageRef = storageRef.child(`images/${this.state.code}/logo`);
            // @ts-ignore
            let uploadTask = practiceImageRef.put(file);
            // @ts-ignore
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                (error) => {
                    console.log('ERROR writefile',error);
                    let logo=this.state.logo;
                    logo= null;
                    this.setState({logo:logo,filename:null,uploading:false})

                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    // @ts-ignore
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        let logo=this.state.logo;
                        logo = downloadURL;
                        this.setState({uploading: false, logo: logo});
                        // @ts-ignore

                    });
                }
            );
        }catch(e){
            console.log('ERROR catchblock',e);
            let logo=this.state.logo;
            logo = null;
            this.setState({logo:logo,filename:null,uploading:false})
        }
    };

    uploadBrandImageAdditional = async (e,fileInput,index,routeItemsIndex)=>{
        console.log('TEST',index,routeItemsIndex);
        let file;
        try {
            if(!fileInput) {
                this.setState({filename: e.target.files[0].name, uploading: true});
                const files = Array.from(e.target.files)
                file = files[0];
            }
            else{
                this.setState({filename: fileInput.name, uploading: true});
                file = fileInput
            }
            const formData = new FormData();
            let storageRef = firebase.storage().ref();
            // @ts-ignore
            let practiceImageRef = storageRef.child(`images/${this.state.code}/${routeItemsIndex}-${index}`);
            // @ts-ignore
            let uploadTask = practiceImageRef.put(file);
            // @ts-ignore
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                (error) => {
                    console.log('ERROR writefile',error);
                    let imageUrlArray=this.state.routeItems[routeItemsIndex].imageURLArray;
                    imageUrlArray[index] = null;
                    const routeItems=this.state.routeItems;
                    routeItems[routeItemsIndex].imageURLArray = imageUrlArray;
                    this.setState({uploading: false, routeItems: routeItems});

                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    // @ts-ignore
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        let imageUrlArray=this.state.routeItems[routeItemsIndex].imageURLArray;
                        imageUrlArray[index] = downloadURL;
                        const routeItems=this.state.routeItems;
                        routeItems[routeItemsIndex].imageURLArray = imageUrlArray;
                        this.setState({uploading: false, routeItems: routeItems});
                        // @ts-ignore

                    });
                }
            );
        }catch(e){
            console.log('ERROR catchblock',e);
            let imageUrlArray=this.state.routeItems[routeItemsIndex].imageURLArray;
            imageUrlArray[index] = null;
            const routeItems=this.state.routeItems;
            routeItems[routeItemsIndex].imageURLArray = imageUrlArray;
            this.setState({uploading: false, routeItems: routeItems});
        }
    };
    handleChangeComplete(color){
        this.setState({backgroundType:color})
    }
    handleChangeCompleteClass(color){
        this.setState({class:color})
    }
    handleChangeCompleteFont(color){
        this.setState({font:color})
    }
     BGSelector = ()=>{
        return(
            <div style={{margin:40,marginBottom:0,borderRadius:12,width:400,backgroundColor:'#fff',display:'flex',justifyContent:'center',flexWrap:'wrap',alignContent:'center'}}>
                <SwatchesPicker
                    color={ this.state.backgroundType }
                    onChangeComplete={ this.handleChangeComplete.bind(this) }
                />

            </div>
        )
    }
     ClassSelector = ()=>{
        return(
            <div style={{margin:40,marginBottom:0,borderRadius:12,width:400,backgroundColor:'#fff',display:'flex',justifyContent:'center',flexWrap:'wrap',alignContent:'center'}}>
                <SwatchesPicker
                    color={ this.state.class }
                    onChangeComplete={ this.handleChangeCompleteClass.bind(this) }
                />


            </div>
        )
    }
     FontSelector = ()=>{
        return(
            <div style={{margin:40,marginBottom:0,borderRadius:12,width:400,backgroundColor:'#fff',display:'flex',justifyContent:'center',flexWrap:'wrap',alignContent:'center'}}>
                <SwatchesPicker
                    color={ this.state.font }
                    onChangeComplete={ this.handleChangeCompleteFont.bind(this) }
                />


            </div>
        )
    }
     fontSelector = ()=>{
        return(
            <div style={{margin:40,marginBottom:0,borderRadius:12,width:400,backgroundColor:'#fff',display:'flex',justifyContent:'center',flexWrap:'wrap',alignContent:'center'}}>
                <SwatchesPicker
                    color={ this.state.font }
                    onChangeComplete={ this.handleChangeCompleteFont.bind(this) }
                />


            </div>
        )
    }
    changeRouteNameInput(e){
        this.setState({routeNameInput:e.target.value});

    }

    handleEmailFormChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => {
            const { emailFormFields } = prevState;
            emailFormFields[name] = value;
            return { emailFormFields };
        });
    };

    handleAddRoute(name){
        this.state.routeItems.push({
            name:name,
            type:'standard',
            href:`/pages/additional${this.state.routeItems?this.state.routeItems.length:0}`,
            routeTag:`view_additional${this.state.routeItems?this.state.routeItems.length:0}_nav`,
            secondaryHeader:name,
            imageURLArray:[]});
        let content=this.state.content;

        this.setState({content:content,routeNameInput:''})

    }
    resetFrontPage(){
         return this.setState({editModal:null,colorSelectorModal:true});
    }
    changeLinkName(e){
         return this.setState({addLinkName:e.target.value})

    }
    changeLinkHref(e){
         return this.setState({addLinkHref:e.target.value})

    }
    addLink(name,href){
         let newArray=this.state.linkArray||[];
         newArray.push({name:name,link:href});
         return this.setState({linkArray:newArray});

    }

    triggerAutoComplete(data){
        const key = process.env.REACT_APP_MAPS_KEY;
        rootStore.pageStore.autoCompletePlacesAction(data, key).then((res)=>{
            console.log('...FACES',res,key);
            this.setState({places:res&&res.predictions,businessName:data})

        });

    }

    getRelevantBusinessInfo(placeInformation){
    this.setState({loading:true});
    const key = process.env.REACT_APP_MAPS_KEY;
    rootStore.pageStore.getRelevantBusinessInfo(placeInformation,key).then((info)=>{
        console.log('...INFO',info);
        if(info) {
            let content = this.state.content;
            content.contactPhone = info.phoneNumber || '';
            content.contactAddress = info.address || '';
            content.contactTypes = info.types || [];
            content.location = info.location || {};
            content.businessName = info.name;
            content.titleBlurb = 'Hang on, we are coming up with a smooth tagline...'
            let mapsCenter = {
                lat: 59.95,
                lng: 30.33
            };
            if (info.location) {
                mapsCenter = {lat: info.location.latitude, lng: info.location.longitude}
                content.mapsCenter=mapsCenter;
            }
            rootStore.pageStore.testRytrBlurb(info.name,info.types.join(' ')).then((res)=>{
                console.log('res,',res);
                let rytrBlurb = res.replace(/<[^>]*>?/gm, '');
                let content=this.state.content;
                content.titleBlurb=rytrBlurb;
                this.setState({rContent:'',content:content,loading:false});
            });
            this.setState({
                selectedBusinessInfo: info,
                content: content,
                mapsCenter,
                businessName: info.name,
            })
        }
        else{
            this.setState({selectedBusinessInfo:null})
        }

    });
    }
    renderEditModal(modalType){
         let modalComponent=null;
         switch(modalType){
             case 'LinkPage':modalComponent=<div>
                 <h3 style={{textAlign:'center'}}>Create a page that serves as your social media entry point!</h3>
                 <p style={{textAlign:'center'}}>Your link tree will be easily accessible, both on your website and at webgun.ai/{this.state.code||cookie.get('code')}</p>
                 <div style={{display:'flex',justifyContent:'center',margin:100,maxHeight:500,overflowY:'auto'}}>
                     <input type="text" className="templateInputP" style={{width:300,color:'#0e1e46',border:'1px solid #0e1e46'}} value={this.state.addLinkName} onChange={(e)=>{this.changeLinkName(e)}} placeholder={'Enter name for your link, ie. Facebook'} />
                     <input type="text" className="templateInputP" style={{width:300,color:'#0e1e46',border:'1px solid #0e1e46'}} value={this.state.addLinkHref} onChange={(e)=>{this.changeLinkHref(e)}} placeholder={'Enter URL for your link, ie. https://www.mywebsite.com'} />
                     <div style={{display:'flex',justifyContent:'space-around'}}><div onClick={()=>{
                         this.addLink(this.state.addLinkName,this.state.addLinkHref)
                     }} style={{marginBottom:10,marginLeft:10,width:200}} className="altButton whiteButton magOrange">Add link</div>

                         <br />

                 </div>
             </div>
                 <div style={{display:'flex',justifyContent:'center',marginBottom:200}}><ul>{this.state.linkArray&&this.state.linkArray.map((link)=><li>
                     <b>{link.name}</b> : {link.link}


                 </li>)}</ul>
                 </div>
             </div>; break;
             case 'Extra':modalComponent=<><h3 style={{textAlign:'center',fontWeight:300}}>Create up to 4 extra pages.</h3>
                 <div style={{maxHeight:550,overflowY:'auto'}}>
                     {this.state.routeItems.map((route,ix)=>{
                         return(<>
                             <div style={{height: '100%',position:'relative',margin:20}}>
                                 <div style={{paddingBottom:0}}>
                                     <div className="mainFontColor" style={{display:'flex',justifyContent:'center'}}><div style={{width:'40%'}}>
                                         <div style={{textAlign:'center',paddingTop:10,marginBottom:0}}>
                                             <input type="text" className="templateInputH1" onChange={(e)=>{this.handleAdditionalFormChange(e,ix)}} value={this.state.routeItems[ix].secondaryHeader} name={'secondaryHeader'} placeholder={'New Page Title'} />
                                         </div>
                                     </div></div>
                                     <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',padding:20}}>
                                         <div style={{maxWidth:350,paddingTop:0}}>
                                             {console.log(this.state.routeItems[ix])}
                                             <FileImporter practiceLogoURL={logo} imageURL={this.state.routeItems[ix].imageURLArray[0]} index={0} routeItemsIndex={ix} display={true}
                                                           uploadStatus={'success'} onChange={this.uploadBrandImageAdditional.bind(this)} filename={this.state.filename} loading={this.state.uploading} />

                                         </div>
                                         <div style={{maxWidth:600,margin:20}}><p className="mainFontColor" style={{padding:0, whiteSpace:'break-spaces'}}>
                                             <div>                                        <input type="text" className="templateInputH1" onChange={(e)=>{this.handleAdditionalFormChange(e,ix)}} value={this.state.routeItems[ix].secondaryHeading1} name={'secondaryHeading1'} placeholder={'New page heading'} />
                                             </div>
                                             <textarea style={{height:120}} className="templateInputPTextArea" onChange={(e)=>{this.handleAdditionalFormChange(e,ix)}} value={this.state.routeItems[ix].secondaryContent1} name={'secondaryContent1'} placeholder={'New page content'}  />

                                         </p>
                                         </div>

                                     </div>
                                     <div className="mainFontColor" style={{paddingTop:0}}>
                                         <p style={{textAlign:'center'}}>
                                             <input type="text" style={{width:'50%'}} className="templateInputP" onChange={(e)=>{this.handleAdditionalFormChange(e,ix)}} value={this.state.routeItems[ix].businessBlurbShort} name={'businessBlurbShort'} placeholder={'Supporting content'} />
                                         </p>

                                     </div>
                                 </div>

                             </div>
                             <div style={{paddingTop:50}}>
                                 <div>
                                     <div style={{display: 'flex', justifyContent: 'center',paddingTop:40,flexWrap:'wrap',paddingBottom:40,marginBottom:30}}>
                                         <div>

                                             <FileImporter practiceLogoURL={logo} imageURL={this.state.routeItems[ix].imageURLArray[1]} index={1} routeItemsIndex={ix} display={true}
                                                           uploadStatus={'success'} onChange={this.uploadBrandImageAdditional.bind(this)} filename={this.state.filename} loading={this.state.uploading} />

                                         </div>
                                         <div style={{width: '55%',minWidth:350,paddingLeft:15,marginTop:80}}>
                                             <div style={{marginRight:'5%',marginBottom:0,whiteSpace:'break-spaces'}}>
                                                 <input placeholder={'content heading'} type="text" className="templateInputH1" onChange={(e)=>{this.handleAdditionalFormChange(e,ix)}} value={this.state.routeItems[ix].p3Heading1} name={'p3Heading1'} />
                                             </div>
                                             <p style={{fontSize:18,paddingLeft:0,paddingTop:10,whiteSpace:'break-spaces'}}>
                                                 <textarea placeholder={'content body'} style={{height:300}} className="templateInputP" onChange={(e)=>{this.handleAdditionalFormChange(e,ix)}} value={this.state.routeItems[ix].p3Content1} name={'p3Content1'} />                                            </p>
                                         </div>
                                     </div>
                                 </div>

                             </div>

                         </>)

                     })}
                 </div>
                 <div style={{paddingTop:30,display:'inline-flex',flexWrap:'wrap',paddingLeft:100,paddingRight:100,
                     alignContent:'flex-start',alignItems:'space-around',justifyContent:'center',width:'100%'}}>
                         <input type="text" className="templateInputP" style={{width:300,marginBottom:30}} value={this.state.routeNameInput} onChange={(e)=>{this.changeRouteNameInput(e)}} placeholder={'Enter a name for the new page'} />
                         <div style={{marginTop:0,marginBottom:20,width:180}} onClick={()=>{
                             if(this.state.routeItems.length<3&&this.state.routeNameInput) {
                                 this.handleAddRoute(this.state.routeNameInput)
                             }
                         }}  className={`altButton whiteButton magOrange ${this.state.routeItems.length<3?'':'NABUTTON'}`}>Add Route</div>
                 </div>
             </>;break;
             case 'fifthPage' : modalComponent = <>
                 <h3 style={{textAlign:'center',fontWeight:300}}>Additional Page</h3>
                 <div style={{position:'relative',marginTop:0,marginBottom:0}}>
                     <div  style={{paddingTop:10}}>
                         <div >
                             <div style={{display: 'flex', justifyContent: 'center',paddingTop:40,flexWrap:'wrap',paddingBottom:10,marginBottom:0}}>
                                 <div>

                                     <FileImporter practiceLogoURL={logo} imageURL={this.state.imageURLArray[3]} index={3} display={true} routeItemsIndex={null}
                                                   uploadStatus={'success'} onChange={this.uploadBrandImage.bind(this)} filename={this.state.filename} loading={this.state.uploading} />

                                 </div>
                                 <div style={{width: '55%',minWidth:350,paddingLeft:15}}>
                                     <h3 style={{marginRight:'5%',marginBottom:0,whiteSpace:'break-spaces'}}>
                                         <input type="text" className="templateInputH1" onChange={this.handleContentFormChange} value={this.state.content.p3Heading1} name={'p3Heading1'} />
                                     </h3>
                                     <p style={{fontSize:18,paddingLeft:0,paddingTop:10,whiteSpace:'break-spaces',height:200}}>
                                         <textarea style={{height:75}} className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.p3Content1} name={'p3Content1'} />
                                     </p>
                                 </div>
                             </div>
                         </div>

                     </div>
                 </div>

             </>;break;
             case 'fourthPage': modalComponent = <>
                 <h3 style={{textAlign:'center',fontWeight:300,padding:40}}>Contact Page</h3>
                 <div style={{marginTop:0}}>
                     <div style={{marginTop:20,padding:20,margin:0}}>
                         <div style={{display:'flex',justifyContent:'center'}}>
                             <div style={{width:500}}>
                                 <input style={{height:40}} type="text" className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.contactTitle} name={'contactTitle'} />
                                 <p style={{marginBottom:10,paddingLeft:15,paddingTop:10,height:120,minWidth:300,textAlign:'center',whiteSpace:'break-spaces'}}>
                                     <textarea style={{height:85}} className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.contactBlurb} name={'contactBlurb'} />

                                 </p>
                                 <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                                     <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:20,left:0,color:'#0e1e46'}} className="material-icons">mail</i> </div><div style={{marginLeft:40}}><b></b>                                    <input type="text" className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.contactEmail} name={'contactEmail'} />
                                     </div></div>
                                     <br />
                                     <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:20,left:10,color:'#0e1e46'}} className="material-icons">local_phone</i> </div><div style={{marginLeft:40}}><b></b>                                    <input type="text" className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.contactPhone} name={'contactPhone'} />
                                     </div></div>
                                     <br />

                                 </div>
                                 {this.state.mapsCenter&&<SimpleMap center={this.state.mapsCenter} name={this.state.businessName} />}
                                 <div >
                                 </div>
                             </div>

                         </div>

                     </div>

                 </div>
             </>;break;
             case 'thirdPage': modalComponent = <div style={{height:600}}><h3 style={{textAlign:'center',fontWeight:300}}>About Page</h3>


                         <FileImporter routeItemsIndex={null}practiceLogoURL={logo} imageURL={this.state.imageURLArray[2]} index={2} display={true}
                                       uploadStatus={'success'} onChange={this.uploadBrandImage.bind(this)} filename={this.state.filename} loading={this.state.uploading} />

                     <div className="mainFontColor" style={{display:'flex',justifyContent:'center',height:100}}><div style={{width:'40%'}}>
                             <input type="text" className="templateInputH1" onChange={this.handleContentFormChange} value={this.state.content.secondaryHeader} name={'secondaryHeader'} />
                     <div style={{flexWrap:'wrap'}}>
                         <div style={{maxWidth:600,margin:20}}><p className="mainFontColor" style={{padding:20, whiteSpace:'break-spaces'}}>
                             <div>                                        <input type="text" className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.secondaryHeading1} name={'secondaryHeading1'} />
                             </div>
                             <textarea type="text" style={{height:120}} className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.secondaryContent1} name={'secondaryContent1'} />

                         </p>
                         </div>

                     </div>
                 </div>

             </div></div>; break;
             case 'secondPage':modalComponent = <> <h3 style={{textAlign:'center',fontWeight:300}}>Front Page Content</h3> <div style={{ fontSize: 20,paddingBottom:0}}>

                 <div >
                     <div style={{display: 'flex', justifyContent: 'center',paddingTop:40,flexWrap:'wrap',paddingBottom:10,marginBottom:0}}>
                         <div>

                             <FileImporter practiceLogoURL={logo} imageURL={this.state.imageURLArray[1]} index={1} display={true} routeItemsIndex={null}
                                           uploadStatus={'success'} onChange={this.uploadBrandImage.bind(this)} filename={this.state.filename} loading={this.state.uploading} />

                         </div>
                         <div style={{width: '55%',minWidth:350,paddingLeft:15}}>
                             <p style={{fontSize:18,paddingLeft:0,paddingTop:10,whiteSpace:'break-spaces',height:200}}>
                                 <textarea style={{height:155}} className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.supportingHeading} name={'supportingHeading'} />
                             </p>
                         </div>
                     </div>
                 </div>

                 <div className="container" style={{minWidth:350}}>
                     <div style={{display:'flex',justifyContent:'center'}}>
                     <div style={{paddingTop:0,display:'block',justifyContent:'center',width:'80%'}}>
                         <input type="text" className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.secondaryContentTitle} name={'secondaryContentTitle'} />
                         <textarea style={{height:110}} className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.secondaryContent} name={'secondaryContent'} />
                     </div>
                     </div>
                     <div style={{position:'relative',marginTop:0,marginBottom:0}}>
                         <div  style={{paddingTop:10}}>
                             <div >
                                 <div style={{display: 'flex', justifyContent: 'center',paddingTop:40,flexWrap:'wrap',paddingBottom:10,marginBottom:0}}>
                                     <div>

                                         <FileImporter practiceLogoURL={logo} imageURL={this.state.imageURLArray[3]} index={3} display={true} routeItemsIndex={null}
                                                       uploadStatus={'success'} onChange={this.uploadBrandImage.bind(this)} filename={this.state.filename} loading={this.state.uploading} />

                                     </div>
                                     <div style={{width: '55%',minWidth:350,paddingLeft:15}}>
                                         <h3 style={{marginRight:'5%',marginBottom:0,whiteSpace:'break-spaces'}}>
                                             <input type="text" className="templateInputH1" onChange={this.handleContentFormChange} value={this.state.content.p3Heading1} name={'p3Heading1'} />
                                         </h3>
                                         <p style={{fontSize:18,paddingLeft:0,paddingTop:10,whiteSpace:'break-spaces',height:200}}>
                                             <textarea style={{height:75}} className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.p3Content1} name={'p3Content1'} />
                                         </p>
                                     </div>
                                 </div>
                             </div>

                         </div>
                     </div>
                 </div>
             </div>
                 <div>
                     <div>
                         <div style={{display: 'flex', justifyContent: 'center',paddingTop:20,flexWrap:'wrap',paddingBottom:30,marginBottom:20}}>

                         </div>
                     </div>
                 </div>
             </>; break;
             case 'frontPage':modalComponent = <div style={{minHeight:710,height:'auto',marginTop:20}}>

                 <p style={{fontSize:26,marginTop:40,fontWeight:300,textAlign:'center'}}>{this.state.selectedBusinessInfo?'':''}</p>
                 <div style={{marginBottom:20}}><GoogleMyBusinessForm places={this.state.places} selectedBusinessInfo={this.state.selectedBusinessInfo}
                                                                      triggerAutoComplete={(data)=>{this.triggerAutoComplete(data)}}
                                                                      getRelevantBusinessInfo={(businessInfo)=>{this.getRelevantBusinessInfo(businessInfo)}}/>
                 </div>
                 <div style={{zIndex:8999,width:'100%'}}>
                     <div style={{height:'auto',display:'flex',justifyContent:'center',flexWrap:'wrap',minHeight:180}}>
                     <div>
                         <div style={{paddingTop:0,marginBottom:0,display:'flex',justifyContent:'flex-start'}}>
                             <FileImporter isSmall={true} routeItemsIndex={null} practiceLogoURL={logo} imageURL={this.state.logo} index={0} display={true}
                                           uploadStatus={'success'} onChange={this.uploadLogoImage.bind(this)} filename={this.state.filename} loading={this.state.uploading} />

                         </div>
                         <p style={{color:'#0e1e46',textAlign:'left',paddingLeft:100}}>Add a branding logo</p>
                     </div>

                     <div>

                        <div style={{paddingTop:0,marginBottom:0,display:'flex',justifyContent:'flex-start'}}>
                            <FileImporter routeItemsIndex={null} practiceLogoURL={logo} imageURL={this.state.imageURLArray[0]} index={0} display={true}
                                       uploadStatus={'success'} onChange={this.uploadBrandImage.bind(this)} filename={this.state.filename} loading={this.state.uploading} />

                     </div>
                         <p style={{color:'#0e1e46',textAlign:'left',paddingLeft:100}}>Add a banner image</p>
                     </div>
                     </div>
                     <div style={{display:'flex',justifyContent:'center',paddingBottom:0}}>
                         <div style={{padding:30,minWidth:300,maxWidth:630,width:'100%',paddingTop:0,paddingLeft:10,paddingRight:0,textAlign:'center'}}>
                             <input type="text" className="templateInputH1" onChange={this.handleContentFormChange} value={this.state.content.titleContent} name={'titleContent'} />
                             <p style={{fontSize:20,marginLeft:0}} className="mb-4">
                                 <input type="text" className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.titleBlurb} name={'titleBlurb'} />
                             </p>
                             <br />
                             <div style={{display:'flex',justifyContent:'center'}}>
                             <input type="text" style={{width:'20%'}} className="templateInputP" onChange={this.handleContentFormChange} placeholder={"Call to Action 1"} value={this.state.content.mainButtonTitle} name={'mainButtonTitle'} />
                             <input type="text" style={{width:'60%'}} className="templateInputP" onChange={this.handleContentFormChange} value={this.state.content.mainButtonLink} name={'mainButtonLink'} />
                             </div>

                         </div>
                     </div>
                     <div style={{maxHeight:400,width:'100%',overflowY:'auto'}}>
                         <div dangerouslySetInnerHTML={{ __html: this.state.rContent }}></div>
                     </div>
                 </div>
             </div>
         }
        let buttonContent = '';
        switch(this.state.editModal){
            case 'frontPage': buttonContent = 'Next';break;
            case 'secondPage': buttonContent = 'Next';break;
            case 'thirdPage': buttonContent='Next';break;
            case 'fourthPage': buttonContent='Next';break;
            case 'fifthPage': buttonContent='Save and Show me';break;
            case 'Extra':buttonContent='Save and Show me'; break;
            case 'LinkPage':buttonContent='Save and Show me'; break;
        }
         return(<>
             <div style={{position:'relative',zIndex:999999,display:'flex',justifyContent:'center',padding:'7%'}}>
                 <div className={`templateMaker`} style={{width:'100%',margin:0,minHeight:'90.5vh',paddingBottom:100,position:'absolute',top:0,padding:'7%',backgroundColor:'#ff2019',color:'#0e1e46'}}>
                    {/* <div style={{position:'relative',zIndex:9999}}>
                         <div style={{display:'flex',flexDirection:'column',position:'absolute',border:'1px solid #fff',padding:10,borderRadius:0,borderLeft:'none',left:-20}}>
                             <div onClick={()=>{
                                 this.setState({editModal:'frontPage'})
                             }} className={`${this.state.editModal==='frontPage'?'navEditActive':''} navEdit`}>Setup</div>
                             <div onClick={()=>{
                                 this.setState({editModal:'secondPage'})
                             }} className={`${this.state.editModal==='secondPage'?'navEditActive':''} navEdit`}>Front Page</div>
                             <div onClick={()=>{
                                 this.setState({editModal:'fourthPage'})
                             }} className={`${this.state.editModal==='fourthPage'?'navEditActive':''} navEdit`}>Contact </div>
                             <div onClick={()=>{
                                 this.setState({editModal:'LinkPage'})
                             }} className={`${this.state.editModal==='LinkPage'?'navEditActive':''} navEdit`}>Links </div>
                             <div onClick={()=>{
                                 this.setState({editModal:'Extra'})
                             }} className={`${this.state.editModal==='Extra'?'navEditActive':''} navEdit`}>Routes </div>
                         </div>

                     </div>*/}
                     <div>
                         {this.state.editModal==='frontPage'&&<>

                         <div style={{display:'flex',justifyContent:'center'}}>
                             <p style={{fontSize:26,fontWeight:100,textAlign:'center'}}>{cookie.get('code')?'Your':'First, choose a'} domain name</p>

                         </div>
                         <div style={{display:'flex',justifyContent:'center'}}>
                             <input disabled={cookie.get('code')} className="templateInputP" style={{width:430}} type="text" placeholder={'Your chosen domain'} value={this.state.code||cookie.get('code')} onChange={(e)=>this.setState({code:e.target.value})} /><span style={{paddingTop:15,fontSize:22,fontWeight:600,color:'#0e1e46'}}>.co.nz</span>
                         </div></>}
                     {modalComponent}
                     </div>

                 <div style={{display:'flex',justifyContent:'center'}}>
                     <div style={{display:'flex',justifyContent:'center',marginLeft:20}} onClick={()=>{
                     let nextPage = '';
                     switch(this.state.editModal){
                         case 'frontPage': nextPage = 'secondPage';break;
                         case 'secondPage': nextPage = 'fourthPage';break;
                         case 'thirdPage': nextPage='fourthPage';break;
                         case 'fourthPage': nextPage='Extra';break;
                     }
                     if(this.state.editModal ==='frontPage'){
                         let content = this.state.content;
                         content.supportingHeading="Hold on tight, we are writing your supporting heading..."
                         content.secondaryContent="Just a moment, we are writing about you..."
                         this.setState({content:content})
                         //about us = secondaryContent;
                         rootStore.pageStore.testRytrMain(this.state.businessName,this.state.content.titleContent,this.state.content.titleBlurb).then((res)=>{
                             console.log('res,',res);
                             let content=this.state.content;
                             content.supportingHeading=res.replace(/<[^>]*>?/gm, '');
                             this.setState({rContent:'',content:content,loading:false},()=>{
                                 rootStore.pageStore.testRytrAbout(this.state.businessName,content.supportingHeading,this.state.content.titleBlurb).then((res2)=>{
                                     console.log('res2,',res2);
                                     let rytrBlurb = res2.replace(/<[^>]*>?/gm, '');
                                     let content=this.state.content;
                                     content.secondaryContent=rytrBlurb;
                                     this.setState({rContent:'',content:content,loading:false});
                                 });
                             });
                         });
                     }
                     if(this.state.editModal==='fifthPage'||this.state.editModal==='Extra'||this.state.editModal==='LinkPage'){
                         let splitCode = this.state.code||cookie.get('code')||this.state.plainCode.toString();
                         splitCode= splitCode.replace(/\s+/g, '-').toLowerCase();
                         firebase.analytics().logEvent('template_init_mm',{code:splitCode});
                         rootStore.pageStore.setCode(splitCode||this.state.plainCode);
                         firebase.firestore().collection("templates").get().then((data)=>{
                             console.log('data:',data.docs[0].data());
                         });
                         let content=this.state.content;
                         content.imageURLArray=this.state.imageURLArray;
                         content.routeItems=this.state.routeItems;
                         content.routeItemsDefault=this.state.routeItemsDefault;
                         content.logo=this.state.logo;
                         content.templateType=this.state.templateSelected||'dm';
                         content.linkArray=this.state.linkArray;
                         content.businessInfo=this.state.selectedBusinessInfo||{name:''};
                         content.backgroundType=this.state.backgroundType.hex;
                         content.class=this.state.class.hex;
                         content.font=this.state.font.hex;
                         cookie.set('templateType',this.state.templateSelected)
                         console.log('SET:',splitCode,this.state.plainCode,':',content);
                         if(rootStore.pageStore.userId){
                             firebase.firestore().collection("users").doc(`${rootStore.pageStore.userId}`).set({templateCode:`t-${splitCode||this.state.plainCode}`})
                                 .then(() => {
                                     console.log("Document successfully written for",rootStore.pageStore.userId,`t-${splitCode||this.state.plainCode}`);
                                 }).catch((e)=>{console.log('doc failed on ',e)})
                         }
                         firebase.firestore().collection("templates").doc(`t-${splitCode||this.state.plainCode}`).set({content:content,author:rootStore.pageStore.userId||'Guest'})
                             .then(() => {
                                 console.log("Document successfully written!");
                                 window.location.href='/pages'
                                 if(this.state.linkArray) {
                                     firebase.firestore().collection('links').doc(splitCode).set({links: this.state.linkArray}).then(() => {
                                         console.log('Wrote link array', this.state.linkArray, splitCode)
                                     });
                                 }
                             })
                             .catch((error) => {
                                 console.error("Error writing document: ", error,content,this.state.content);
                             });
                         console.log('something may have happened');

                     }
                         this.setState({editModal:nextPage})}
                     } className="altButton whiteButton magOrange">{buttonContent}</div>
                     {cookie.get('wasPurchased')&&<div onClick={()=>{
                         if(this.state.loadState==='success'){
                             return window.location.href='/pages'
                         }
                         if(this.state.loadState==='loading'){
                             return
                         }
                         this.setState({loadState:'loading'})
                         let content=this.state.content;
                         content.imageURLArray=this.state.imageURLArray;
                         content.routeItems=this.state.routeItems;
                         content.routeItemsDefault=this.state.routeItemsDefault;
                         content.logo=this.state.logo;
                         content.templateType=this.state.templateSelected;
                         console.log('SET:',cookie.get('wasPurchased'),this.state.plainCode,':',content);
                         firebase.firestore().collection("templates").doc(`t-${cookie.get('wasPurchased')}`).set({content:content})
                             .then(() => {
                                 this.setState({loadState:'success'})
                                 console.log("Document successfully written!");
                             })
                             .catch((error) => {
                                 this.setState({loadState:null});
                                 console.error("Error writing document: ", error,content,this.state.content);
                             });
                         rootStore.pageStore.createWebsite(cookie.get('wasPurchased'),this.state.content);
                     }} className={`altButton whiteButton magOrange ${this.state.loadState==='loading'&&'disabledButton'}`} style={{marginLeft:10}}>{this.state.loadState==='success'?'Preview now':'Preview now'}</div>}
                 </div>
                 </div>
             </div>
         </>)

    }
    render(){
        console.log('firebase:',firebase.apps.length,this.state.backgroundType,this.state.class,'/?///');
        return <div>
            <NavBar userEmail={rootStore.pageStore.userEmail} resetFrontPage={()=>{this.resetFrontPage()}} classSelectorActive={this.state.classSelectorActive} bgSelectorActive={this.state.bgSelectorActive} renderClassSelector={()=>{this.renderClassSelector()}} renderBGSelector={()=>{this.renderBGSelector()}} switchBackgroundType={()=>{this.switchBackgroundType()}} backgroundType={'bg20'}/>

            <div style={{position:'absolute',zIndex:9999,right:40,top:120}}>
                {this.state.bgSelectorActive&&this.BGSelector()}
                {this.state.classSelectorActive&&this.ClassSelector()}
                {this.state.fontSelectorActive&&this.FontSelector()}
            </div>
            {this.state.colorSelectorModal&&<div style={{position:'relative',zIndex:9998,display:'flex',justifyContent:'center'}}><div className={'templateMaker'} style={{width:'100%',margin:0,height:1200,position:'absolute',top:0,padding:'7%',backgroundColor:'#ff2019',color:'#0e1e46'}}>
                {this.state.continueModal?<div className="fadedshort">
                    <p style={{textAlign:'center',fontWeight:300,fontSize:24}}>Select your background and primary color theme by clicking on the element you want to change.</p>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <div>
                            <div onClick={()=>{this.renderBGSelector(true)}} style={{cursor:'pointer',margin:30,padding:20,backgroundColor:this.state.backgroundType.hex}}>
                                <div style={{width:250,height:200,display:'flex',justifyContent:'center',borderRadius:4}}>
                                    <div onClick={(e)=>{e.stopPropagation();this.renderClassSelector(true)}} style={{cursor:'pointer',width:200,height:100,padding:25,marginTop:40,borderRadius:4,backgroundColor:this.state.class.hex}}>
                                        <p onClick={(e)=>{e.stopPropagation();this.renderFontSelector(true)}} style={{fontSize:22,color:this.state.font.hex,fontWeight:700,cursor:'pointer'}}>Example text</p>

                                    </div>

                                </div>

                            </div>
                            <p style={{textAlign:'center'}}>Ready to move on?</p>
                            <div style={{display:'flex',justifyContent:'center',marginTop:10}}>
                                <div onClick={()=>{this.setState({colorSelectorModal:false,editModal:'frontPage'})}} className="altButton whiteButton magOrange">Let's go!</div>
                            </div>
                        </div>
                    </div>

                </div>:<><p style={{textAlign:'center',fontSize:36}}>Become more established with a website, build one with us in minutes.</p>
                <p style={{fontSize:22,textAlign:'center'}}>Let our intelligent website builder design and create a valuable customer/client touch point, bespoke to your needs.<br/>
                    Just select a template to get started.

                </p>
                <div style={{textAlign:'center',marginTop:40,marginBottom:50,fontWeight:300}}>
                    {rootStore.pageStore.userEmail? <p></p>:
                        <>
                            <div style={{display:'flex',justifyContent:'center',minHeight:120,flexWrap:'wrap'}}>
                                <div>
                            <div style={{position:'relative'}}>
                                <div style={{position:'absolute',fontSize:12,fontWeight:700,paddingTop:15,width:80, marginLeft:18}}>Your email</div>
                            </div>
                            <input
                                style={{ width: 250 ,border:'1px solid #C3C4C9',borderRadius:4}}
                                type="text"
                                name="email"
                                id="email"
                                value={this.state.emailFormFields.email}
                                onChange={this.handleEmailFormChange}
                                placeholder=""
                                className="signup-form-short"
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        event.preventDefault();
                                        event.stopPropagation();
                                    }
                                }}
                            />
                                </div>
                                <div>

                                <div style={{position:'relative'}}>
                                    <div style={{position:'absolute',fontSize:12,fontWeight:700,paddingTop:15,marginLeft:18}}>Password</div>
                                </div>
                                <input
                                    style={{ border:'1px solid #C3C4C9',borderRadius:4,width:250}}
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={this.state.emailFormFields.password}
                                    onChange={this.handleEmailFormChange}
                                    placeholder=""
                                    className="signup-form"
                                    onKeyPress={(event) => {
                                        if (event.key === 'Enter') {
                                            event.preventDefault();
                                            event.stopPropagation();
                                            rootStore.pageStore.signUpUsingEmail(this.state.emailFormFields);

                                        }
                                    }}
                                />
                                </div>
                        </div>
                            <br />
                            <div style={{display:'flex',justifyContent:'center'}}>
                            <div style={{width:250,height:50,lineHeight:'44px',cursor:'pointer'}} className="sign-up-button google-sign-up" onClick={()=>{
                                rootStore.pageStore.signUpUsingEmail(this.state.emailFormFields);
                            }}>
                                Continue
                            </div>
                            </div>
                            <div className="separator" style={{marginLeft:100,marginRight:100}}>
                                <span className="separator-text" style={{backgroundColor:'#f5f4fa'}}>Or sign up with</span>
                            </div>
                        <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                            <div style={{margin:10}}>
                            <GoogleButton signUpHandler={signUpUsingSocial.bind(this)} />
                            </div>
                            <div style={{margin:10}}>
                            <FacebookButton signUpHandler={()=>{}} />
                            </div>

                        </div></>}
                </div>
                    {rootStore.pageStore.userEmail?<div className="fadedshort" style={{display:'flex',justifyContent:'space-evenly',marginTop:40,flexWrap:'wrap'}}>
                        <div style={{position:'relative',cursor:'pointer',marginTop:40}} onClick={()=>{this.setState({templateSelected:'dm',continueModal:true})}}><div style={{top:-36,position:'absolute'}}>
                            <p style={{fontSize:24,marginBottom:10}}>Digital Marketing</p>
                        </div><img className="templateClass" style={{borderRadius:4,opacity:0.7,marginTop:15,maxWidth:400}} width={'100%'} src={mm1} /></div>
                        <div style={{position:'relative',cursor:'pointer',marginTop:40}}  onClick={()=>{this.setState({templateSelected:'pm',continueModal:true})}}><div style={{top:-36,position:'absolute'}}>
                            <p style={{fontSize:24,marginBottom:10}}>Trades and Services</p>
                        </div><img className="templateClass" style={{borderRadius:4,opacity:0.7,marginTop:15,maxWidth:400}} width={'100%'} src={property} /></div>

                    </div>:null}
               <div style={{display:'flex',justifyContent:'center',marginTop:30}}></div></>}

            </div></div>}
            {this.state.editModal&&this.renderEditModal(this.state.editModal)}
            <div style={{height: '100%',position:'relative',opacity:this.state.editModal||this.state.colorSelectorModal?0.1:1,paddingBottom:100}}>
                <div>
                    <div>
                        <div className="myDIV">
                        </div>

                    </div>

                </div>
            </div>
        </div>

    }
}

export default CreatorFunnel;