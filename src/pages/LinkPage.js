import React from 'react';
import firebase from "firebase/compat";
import {useParams} from "react-router-dom";


export class LinkPage extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef()
        const classArray =[ 'gbg1','gbg2','gbg3','gbg4','gbg5','gbg6','gbg7',
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
            'bg44','one','two','three','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen'];
        this.state={
            randomClass:classArray[Math.floor(Math.random()*classArray.length)],
            links:[],
            linkName:'',

        }
    }
    componentDidMount(){
        let {hostLinkPage} = this.props.match.params;
        console.log('HLP:',hostLinkPage,this.props.match.params);
        this.setState({loading:true})
        firebase.firestore().collection("links").get().then((data)=>{
            const dataToLoad=data.docs.find((doc)=>doc.id===hostLinkPage);
            if(dataToLoad&&dataToLoad.data()) {
                console.log(dataToLoad.data().links,'get it');
                this.setState({links: dataToLoad.data().links,loading:false,linkName:hostLinkPage})
            }
        })

    }
    render(){
        return <div>
            <div className={`${this.state.randomClass}`} style={{color:'#fff',height:'100vh',width:'100vw',backgroundColor:'#ff2019',paddingTop:100}}>
                <h2 style={{textAlign:'center'}}>{this.state.linkName?`${this.state.linkName}'s links`:'404.'}</h2>
                <div style={{display:'flex',justifyContent:'center',zIndex:99}}>
                <ul>
                    {this.state.links.length>0&&this.state.links.map((link)=>{
                        return(<li style={{cursor:'pointer',fontSize:28,zIndex:999}} onClick={()=>{window.location.href=link.link}}>
                           {link.name}
                        </li>)
                    })}
                </ul>
                </div>
            </div>
        </div>

    }
}