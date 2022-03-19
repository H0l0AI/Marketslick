import {
    action, autorun, observable, toJS,
} from 'mobx';
import {persist} from "mobx-persist";
import cookie from 'js-cookie';
import {createWebsite,signUpUsingSocial,signUpUsingEmail,signUpUsingFacebook,handleSignOut,initializeAuthentication,getTemplatesWithId,autoCompletePlacesAction,getRelevantBusinessInfo} from "./PageService";
import {testRytrBlurb,testRytrMain} from './ContentService';
export default class PageStore {

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.createWebsite = createWebsite;
        this.signUpUsingGoogle=signUpUsingSocial;
        this.signOut=handleSignOut;
        this.initializeAuthentication=initializeAuthentication;
        this.getTemplatesWithId=getTemplatesWithId;
        this.autoCompletePlacesAction=autoCompletePlacesAction;
        this.getRelevantBusinessInfo=getRelevantBusinessInfo;
        this.signUpUsingFacebook=signUpUsingFacebook;
        this.testRytrBlurb=testRytrBlurb;
        this.testRytrMain=testRytrMain;
    }

    @observable value = '';
    @observable mainPageContent = '';
    @observable secondaryContent = '';
    @observable autoCompletePlaces = [];
    @persist @observable user = {};
    @persist @observable activeTemplate = {};
    @persist @observable userId = '';
    @persist @observable userEmail = '';
    @persist @observable code = cookie.get('code');
    @action.bound setCode(codeToSet){
        console.log('set:',codeToSet);
        cookie.set('code',codeToSet);
        this.code=codeToSet
    }
    @action.bound setUser(user){
        if(user) {
            console.log(user, '...');
            console.log('....', '...', user.email);
            this.userId = user.uid;
            this.userEmail = user.email;
        }
    }
    @persist @observable isPotentialCustomer = false;
    @action.bound setIsPotentialCustomer(isPotentialCustomer){
        cookie.set('isPotentialCustomer',isPotentialCustomer);
        this.isPotentialCustomer = isPotentialCustomer;
    }
    @action.bound setActiveTemplate(templateContent){
        this.activeTemplate = templateContent;
    }

    @action.bound setMainPageContent(templateContent){
        console.log('.....',templateContent);
        this.mainPageContent = templateContent&&templateContent.text;
    }
    @action.bound setSecondaryContent(templateContent){
        this.secondaryContent = templateContent;
    }
    @action.bound setAutoCompletePlaces(data){
        console.log('PLACES:',data);
            if (data && data.predictions) {
                this.autoCompletePlaces = data.predictions;
            }
            return data;

    }
}