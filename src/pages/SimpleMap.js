import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div  style={{borderRadius:'12px',padding:10,backgroundColor:'#6fab6a',height:100,width:100,color:'#fff',textAlign:'center',opacity:0.5,paddingTop:25}}>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 15
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: 500, width: 500}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyAyXY_5tj4r1mNmczCugAsl0LsBDo5uhR4' }}
                    defaultCenter={this.props.center}
                    defaultZoom={18}
                >
                    <AnyReactComponent
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                        text={this.props.name}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;