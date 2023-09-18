import {rootStore} from "../stores/Store";
import React from "react";
import {FacebookButton, GoogleButton} from "./CreatorFunnel";
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router";
import {toJS} from "mobx";

@inject("rootStore")
@observer
class LoginPage extends React.Component {
    constructor() {
        super();
        this.state={
            emailFormFields: {
                email: "",
                password: "",
            },
        }
    }

    componentDidUpdate() {
        console.log('root',toJS(rootStore.pageStore.userId),toJS(rootStore.pageStore.user))
        if(rootStore.pageStore.userId){
            return window.location.href='/builder'
        }
    }

    handleEmailFormChange = (event) => {
        const {name, value} = event.target;
        this.setState((prevState) => {
            const {emailFormFields} = prevState;
            emailFormFields[name] = value;
            return {emailFormFields};
        });
    };
    render() {

        return (
            <>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        minHeight: 120,
                        flexWrap: "wrap",
                        marginTop:200,
                    }}
                >
                    <div>
                        <div style={{position: "relative"}}>
                            <div
                                style={{
                                    position: "absolute",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    paddingTop: 15,
                                    width: 80,
                                    marginLeft: 18,
                                }}
                            >
                                Your email
                            </div>
                        </div>
                        <input
                            style={{
                                width: 250,
                                border: "1px solid #C3C4C9",
                                borderRadius: 4,
                            }}
                            type="text"
                            name="email"
                            id="email"
                            value={this.state.emailFormFields.email}
                            onChange={this.handleEmailFormChange}
                            placeholder=""
                            className="signup-form-short"
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }}
                        />
                    </div>
                    <div>
                        <div style={{position: "relative"}}>
                            <div
                                style={{
                                    position: "absolute",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    paddingTop: 15,
                                    marginLeft: 18,
                                }}
                            >
                                Password
                            </div>
                        </div>
                        <input
                            style={{
                                border: "1px solid #C3C4C9",
                                borderRadius: 4,
                                width: 250,
                            }}
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.emailFormFields.password}
                            onChange={this.handleEmailFormChange}
                            placeholder=""
                            className="signup-form"
                            onKeyPress={async (event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    await rootStore.pageStore.loginUsingEmail(
                                        this.state.emailFormFields
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <br/>
                <div
                    style={{display: "flex", justifyContent: "center"}}
                >
                    <div
                        style={{
                            textAlign:'center',
                            width: 250,
                            height: 50,
                            lineHeight: "44px",
                            cursor: "pointer",
                        }}
                        className="sign-up-button google-sign-up"
                        onClick={() => {
                            rootStore.pageStore.loginUsingEmail(
                                this.state.emailFormFields
                            );
                        }}
                    >
                        Continue
                    </div>
                </div>


                <div>
                    <div
                        class="trustpilot-widget"
                        data-locale="en-US"
                        data-template-id="5419b6a8b0d04a076446a9ad"
                        data-businessunit-id="64efcc40835da6f72d05bf6f"
                        data-style-height="24px"
                        data-style-width="100%"
                        data-theme="light"
                        data-min-review-count="10"
                        data-without-reviews-preferred-string-id="1"
                        data-style-alignment="center"
                    >
                        <a
                            href="https://www.trustpilot.com/review/webgun.ai"
                            target="_blank"
                            rel="noopener"
                        >
                            Trustpilot
                        </a>
                    </div>
                </div>
            </>)
    }
}
export default LoginPage

