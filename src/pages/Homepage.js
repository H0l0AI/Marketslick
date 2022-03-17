import React from 'react';
import person from '../images/person.jpeg';
import mail from '../images/mail.png';
import newRoof from '../images/newRoof.png';
import reroof from '../images/reroof.jpeg';
import maintenance from '../images/roofmaintenance.png';

export const NavBar = (props)=>(
    <nav className="navbar navbar-expand-xl navbar-dark bg-white-blue border-bottom border-dark">
        <div className="container">
            <a className="navbar-brand">
                <img src="images/LTR.png" alt="" width="180" />
            </a>
            <button className="navbar-toggler rounded-4 shadow-sm purpleGradient" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
                    <li className="nav-item" style={{cursor:'pointer'}}>
                        <a className="nav-link active grey" aria-current="page" onClick={()=>{props.toggleActivePage('HOME')}}>Home</a>
                    </li>
                    <li className="nav-item" style={{cursor:'pointer'}}>
                        <a className="nav-link grey" aria-current="page" onClick={()=>{props.toggleActivePage('ALG')}}>About Lifetime</a>
                    </li>
                    <li className="nav-item" style={{cursor:'pointer'}}>
                        <a className="nav-link grey" aria-current="page" onClick={()=>{props.toggleActivePage('SERVICES')}}>Lifetime Services</a>
                    </li>
                    <li className="nav-item" style={{cursor:'pointer'}}>
                        <a className="nav-link grey" aria-current="page" onClick={()=>{props.toggleActivePage('PORTFOLIO')}}>Our portfolio</a>
                    </li>
                    <li className="nav-item" style={{cursor:'pointer'}}>
                        <a className="nav-link grey" aria-current="page" onClick={()=>{props.toggleActivePage('CONTACT')}}>Get in touch</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
export const HeroContent =()=>(<div className="py-5 mainImageBackground text-white" style={{height:500}}>
    <div className="container">
        <div className="row align-items-center" style={{height:450}}>
            <div className="col-12 col-md-5 offset-md-1">
                <div className="px-4 px-md-0">
                    <h2>DRAFT - Commerical and Residential Metal Roofing Service - DRAFT</h2>
                    <p class="mb-4">We are in the business of providing you with quality workmanship and roofing
                        solutions</p>
                    <a href="mailto:info@lifetimeroofing.co.nz"
                       className="btn btn-light btn-lg rounded-pill"><img src={mail} className="img-fluid"
                                                                          width="40"/> Email us:
                        info@lifetimeroofing.co.nz</a>
                </div>
            </div>
        </div>
    </div>
    <div className="py-5 text-LTBlue bg-blur" style={{backgroundColor: "#ffffff",color:"#44A0FF"}}>
        <div className="container">
            <div className="row align-items-center" >
                <div className="col-12 col-md-5 offset-md-1">
                    <img src={person} className="img-fluid d-block mx-auto" width="350"/>
                </div>
                <div className="col-12 col-md-5">
                    <div className="px-4">
                        <h2 className="mb-4">WHAT MAKES US DIFFERENT FROM
                            OTHER NEW ZEALAND ROOFING PROVIDERS?</h2>
                        <p>If you want your roof to last, you should come to us at LifeTime roofing. We offer a full
                            range of roofing services including roofing installations, repairs, and maintenance.</p>
                        <p> All these services are designed to ensure your roof lasts as long as possible.</p>
                        <p>We achieve this goal through the quality of our workmanship. </p>
                        <p>This workmanship is delivered by our highly experienced and skilled team who are
                            hard-working, dedicated, and professional.</p>
                        <p>In addition, we only use high-quality roofing products, whether that is EDPM or Butanol
                            rubber membranes for flat roofs, flashings, and more. </p>
                        <p>To discuss your roofing needs, please contact us today.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="py-6 bg-white-blue" id="charity">
        <div className="container">
            <h1 className="mb-5 text-center"><span
                className="mx-auto d-inline-block bg-white border p-4 mb-0 shadow text-dark rounded-3">Product Range <br/>We have everything you need</span>
            </h1>

            <div className="row align-items-center">
                <div className="col-12 col-md-5 offset-md-1">
                    <div className="px-4">
                        <div style={{height: 200,
    marginBottom: 100,
    paddingTop: 100}}>
                            <h2 className="mb-5 text-center"> Roofing Maintenance</h2>
                        </div>
                        <div style={{height: 200,
                            marginBottom: 100,
                            paddingTop: 100}}>
                            <h2 className="mb-5 text-center"> Re-roofing Service</h2>
                        </div>
                        <div style={{height: 200,
                            marginBottom: 100,
                            paddingTop: 100}}>
                            <h2 className="mb-5 text-center"> New roof builds</h2>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <img src={newRoof} className="img-fluid d-block mx-auto rounded-4" width="350"/> <br/>
                    <img src={reroof} className="img-fluid d-block mx-auto rounded-4" width="350"/> <br/>
                    <img src={maintenance} className="img-fluid d-block mx-auto rounded-4" width="350"/>
                </div>
            </div>
        </div>
        <div className="mainImageBackground py-6 text-white position-relative px-4" id="timeline">
            <h1 className="mb-5 text-center"><span
                className="mx-auto d-inline-block bg-white border p-4 mb-0 shadow text-dark rounded-3">How it works</span>
            </h1>
            <div className="container small-width">
                <div className="row text-white-50">
                    <div className="col-8 col-md-6 pb-3">
                        <div className="rounded-3 bg-white text-black-50 py-3 px-4 done">
                            <h4 className="semi-bold">Show us your roof</h4>
                            We will tell you if it is in need of repair
                        </div>
                    </div>
                    <div className="col border-left-dotted">
                        <div className="p-2 d-inline-block bg-light text-dark rounded text-start">
                            Day <strong>One</strong>
                        </div>
                    </div>
                </div>
                <div className="row text-white-50">
                    <div className="col text-end">
                        <div className="p-2 d-inline-block bg-light text-dark rounded text-start">
                            3-5 <strong>Business Days</strong>
                        </div>
                    </div>
                    <div className="col-8 col-md-6 pb-3 border-left-dotted">
                        <div className="rounded-3 bg-white text-black-50 py-3 px-4 done">
                            <h4 className="semi-bold">We get the materials and nuts and bolts</h4>
                            and make sure we have safety equipment and consent ready
                        </div>
                    </div>
                </div>
                <div className="row text-white-50">

                    <div className="col-8 col-md-6 pb-3">
                        <div className="rounded-3 bg-white text-black-50 py-3 px-4 done">
                            <h4 className="semi-bold">Roofing complete</h4>
                            We try to do it in 1 - 3 Days
                        </div>
                    </div>
                    <div className="col border-left-dotted">
                        <div className="p-2 d-inline-block bg-light text-dark rounded text-start">
                            One <strong>week later</strong>
                        </div>
                    </div>
                </div>
                <div className="row text-white-50">
                    <div className="col text-end">
                        <div className="p-2 d-inline-block bg-light text-dark rounded text-start">
                            <strong>Forever</strong>
                        </div>
                    </div>
                    <div className="col-8 col-md-6 pb-3 border-left-dotted">
                        <div className="rounded-3 bg-white text-black-50 py-3 px-4 done">
                            <h4 className="semi-bold">Lifetime guarantee</h4>
                            We ensure the customer is always satisfied with their roof.
                            <br/>
                            Maintenance is part and parcel of a healthy roof!
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>);
export const AboutUs =()=>(
    <div className="py-5 text-LTBlue bg-blur" style={{backgroundColor: "#ffffff", color:"#44A0FF"}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-5 offset-md-1">
                    <img src={person} className="img-fluid d-block mx-auto" width="350"/>
                </div>
                <div className="col-12 col-md-5">
                    <div className="px-4">
                        <h2 className="mb-4">WHAT MAKES US DIFFERENT FROM
                            OTHER NEW ZEALAND ROOFING PROVIDERS?</h2>
                        <p>If you want your roof to last, you should come to us at LifeTime roofing. We offer a full
                            range of roofing services including roofing installations, repairs, and maintenance.</p>
                        <p> All these services are designed to ensure your roof lasts as long as possible.</p>
                        <p>We achieve this goal through the quality of our workmanship. </p>
                        <p>This workmanship is delivered by our highly experienced and skilled team who are
                            hard-working, dedicated, and professional.</p>
                        <p>In addition, we only use high-quality roofing products, whether that is EDPM or Butanol
                            rubber membranes for flat roofs, flashings, and more. </p>
                        <p>To discuss your roofing needs, please contact us today.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

);
export const Services =()=>(  <div className="container">
    <h1 className="mb-5 text-center"><span
        className="mx-auto d-inline-block bg-white border p-4 mb-0 shadow text-dark rounded-3">Product Range <br/>We have everything you need</span>
    </h1>

    <div className="row align-items-center">
        <div className="col-12 col-md-5 offset-md-1">
            <div className="px-4">
                <div style={{height: 200,
                    marginBottom: 100,
                    paddingTop: 100}}>
                    <h2 className="mb-5 text-center"> Roofing Maintenance</h2>
                </div>
                <div style={{height: 200,
                    marginBottom: 100,
                    paddingTop: 100}}>
                    <h2 className="mb-5 text-center"> Re-roofing Service</h2>
                </div>
                <div style={{height: 200,
                    marginBottom: 100,
                    paddingTop: 100}}>
                    <h2 className="mb-5 text-center"> New roof builds</h2>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-5">
            <img src={newRoof} className="img-fluid d-block mx-auto rounded-4" width="350"/> <br/>
            <img src={reroof} className="img-fluid d-block mx-auto rounded-4" width="350"/> <br/>
            <img src={maintenance} className="img-fluid d-block mx-auto rounded-4" width="350"/>
        </div>
    </div>
</div>);
export const Portfolio =()=>(<div>Images here</div>);
export const Contact =()=>(<div></div>);

export const Footer=()=>(<>
    <div className="py-5 bg-white-blue">
        <div className="container text-center">
            <a href="mailto:info@lifetimeroofing.co.nz" className="btn btn-light btn-sm mx-2 my-2">Contact us to get a
                free, no obligation quote!</a>
        </div>
    </div></>);
export const HomePage = () =>(
<div className="App">
    <NavBar />
    <HeroContent />
    <AboutUs />
    <Footer/>
</div>);
export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            activePage:'HOME'
        }
    }
    toggleActivePage(page){
        return this.setState({activePage:page})
    }
    renderActivePage(activePage){
        switch(activePage){
            case 'HOME':
                return <HeroContent />
            case 'ALG':
                return <AboutUs/>;
            case 'SERVICES':
                return <Services />
            case 'PORTFOLIO':
                return <Portfolio />;
            case 'CONTACT':
                return <Contact />;
        }
    }
    render(){
        return <div>
            <NavBar toggleActivePage={this.toggleActivePage.bind(this)}/>
            {this.renderActivePage(this.state.activePage)}
            <Footer/>
        </div>

    }
}