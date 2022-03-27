import {inject, observer} from "mobx-react";
import React from "react";
import {rootStore} from '../stores/Store';
import _ from 'lodash';

@inject('rootStore') @observer  class GoogleMyBusinessForm extends React.Component {

    constructor(props) {
        super(props);
        this.contactRef = React.createRef()
        this._debouncedSearch = _.debounce(
            () => this.props.triggerAutoComplete(this.state.userInfoFormFields.address),
            1000,
        );
        this.state = {
            userHasClickedOption:false,
            userInfoFormFields: { businessName: '', address: '',numAccountants:'',numClients:'', placeInformation: {}},
        }
    }
    handleUserInfoFormChange = (event) => {
        const { name, value } = event.target;
        if (name === 'address') {
            this._debouncedSearch();
            this.setState({ userHasClickedOption: false });
        }
        this.setState((prevState) => {
            const { userInfoFormFields } = prevState;
            userInfoFormFields[name] = value;
            return { userInfoFormFields };
        });
    };
    selectPlace(business) {
        this.setState((prevState) => {
            let { userInfoFormFields, userHasClickedOption } = prevState;
            console.log('PLACE INFO:',business);
            userInfoFormFields.placeInformation = business;
            userInfoFormFields.address = business.description;
            userHasClickedOption = true;
            return { userInfoFormFields, userHasClickedOption };
        });
        this.props.getRelevantBusinessInfo(business)
    }

    renderAutoCompletePredictions(places) {
        const placesStore=rootStore.pageStore.autoCompletePlaces;
        console.log('...dot:',places,placesStore);
        if(places) {
            return places.map((business) => (
                <div className="placeOption" onClick={() => {
                    this.selectPlace(business);
                }}>
                    <p>{business.description && business.description.replace(/(.{130})..+/, "$1...")}</p>
                </div>
            ));
        }
    }
    renderTypes(types){
        return(<div style={{display:'flex',justifyContent:'space-evenly'}}>
            { types.map((type)=>{
                return(<div style={{fontSize:12,fontWeight:700,color:'#4260ea',backgroundColor:'#fff',borderRadius:12,padding:5,margin:5}}>{type}</div>)

            })}
        </div>)


    }
    render(){
        return(<div style={{display:'flex',justifyContent:'center'}}>
                <div style={{zIndex:999,width:'40%',minWidth:370,maxHeight:230,backgroundColor:'transparent',borderRadius:12,overflowY:'auto',overflowX:'hidden'}}>
                    {(!this.state.userHasClickedOption&&!this.props.selectedBusinessInfo.types) ?<div>
                        <input
                            style={{ width: '100%' }}
                            type="text"
                            name="address"
                            value={this.state.userInfoFormFields.address}
                            placeholder="Enter your business name to start generating content"
                            className="templateInputH1"
                            onChange={this.handleUserInfoFormChange}
                        />
                        <div
                        className="scrollbar"
                        style={{
                            maxHeight: 300,
                        }}
                    >
                            {this.renderAutoCompletePredictions(this.props.places)}</div></div> : <div>
                        {this.props.selectedBusinessInfo?<div className="fadedshort">


                        <h3 style={{padding:10}}>{this.props.selectedBusinessInfo.name}</h3><br />
                            <div style={{maxWidth:'100%',overflowX:'auto'}}>{this.props.selectedBusinessInfo.types&&this.renderTypes(this.props.selectedBusinessInfo.types)}</div>
                            <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">local_phone</i> </div><div style={{marginLeft:40}}><b></b>{this.props.selectedBusinessInfo.phoneNumber}</div></div>
                            <div style={{padding:10}}><div style={{position:'relative'}}><i style={{position:'absolute',top:0,left:0}} className="material-icons">map</i> </div><div style={{marginLeft:40}}><b></b>{this.props.selectedBusinessInfo.address}</div></div>
                        </div>:null}
            </div>}
                </div>
            </div>
        )
    }
}
export default GoogleMyBusinessForm;
