import {rootStore} from './Store';

// Imports
const axios = require("axios");


// API key
const API_KEY = process&&process.env.REACT_APP_RYTR_KEY;

// Step 1 - Identify language ID (use language list API endpoint)
const languageIdEnglish = "607adac76f8fe5000c1e636d";

// Step 2 - Identify tone ID (use tone list API endpoint)
const toneIdConvincing = "60572a639bdd4272b8fe358b";

// Step 3 - Identify use case ID (use use-case list API endpoint)
const useCaseMagicCommandId = "60ed7113732a5b000cf99e8e";
const useCaseJobDescriptionId = "60586b31cdebbb000c21058d";
const useCaseDescriptionId="605838118c0a4a000c69c969"

const useCaseProductId="605832f78c0a4a000c69c960";
const useCaseTagline="605838118c0a4a000c69c968";

const useCaseLandingPageId = "605835258c0a4a000c69c962";
const useCaseProfileId = "60633095de064b000c8f5cc8";
const useCaseBioId = "60633095de064b000c8f5cc8";
const useCaseBlogId = "60584cf2c2cdaa000c2a7954";
const PROXY_URL = process&&process.env.REACT_APP_PROXY_URL;
//topic
//keywords


// use-case
async function caseById() {

    try {
        return axios({
            method: "get",
            url: PROXY_URL+`https://api.rytr.me/v1/use-cases`,
            headers: {
                Authentication: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
        }).then((res)=>{console.log('CASE LIST',res); return res});
    } catch (error) {
        console.log(error);
    }

    return null;
}
// use-case detail
async function caseDetailById(useCaseId) {

    try {
        axios({
            method: "get",
            url: PROXY_URL+`https://api.rytr.me/v1/usage`,
            headers: {
                Authentication: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
        }).then((res)=>{console.log('CURRENT USAGE',res);
        let unitTotal=0;
        res.data.data.map((instance)=>{
            unitTotal+=instance.units;

        })
            console.log(unitTotal,(unitTotal/10000)*0.75,'Total....');
        return res});
        return axios({
            method: "get",
            url: PROXY_URL+`https://api.rytr.me/v1/use-cases/${useCaseId}`,
            headers: {
                Authentication: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
        }).then((res)=>{console.log('CASE DETAIL',res); return res});
    } catch (error) {
        console.log(error);
    }

    return null;
}

async function getBusinessReviews (locationId){
        try {
            return axios({
                method: "post",
                url: PROXY_URL + `https://mybusiness.googleapis.com/v4/accounts/010A61-9DF40E-734340/locations/${locationId}/reviews`,
            }).then((res)=>{
                console.log('GMB REVIEWS:',res)
            })
        }
        catch(e){
        console.log('GMB',e)
        }
}
// ryte
async function ryte({ useCaseId, inputContexts }) {
    try {
        return axios({
            method: "post",
            url: PROXY_URL+"https://api.rytr.me/v1/ryte",
            headers: {
                Authentication: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
            data: {
                languageId: languageIdEnglish,
                toneId: toneIdConvincing,
                useCaseId,
                inputContexts,
                variations: 1,
                userId: "USER1",
                format: "html",
            },
        }).then((res)=>{console.log('final res',res);
        if(res.data){
            rootStore.pageStore.setMainPageContent(res.data.data[0]);
            const text = res.data.data[0].replace(/<\/?[^>]+(>|$)/g, "");

            return {text:text,rawHtml:res.data.data[0]}
        }
        else{
            return 'Sorry we arent able to come up with anything right now';
        }

        }).catch((e)=>{
            console.log('final error',e);
            return 'Sorry we werent able to come up with anything';
        });
    } catch (error) {
        console.log(error);
    }
}
/*0: {label: 'Website name', placeholder: 'Rytr', keyLabel: 'WEBSITE_NAME_LABEL', inputType: 'text', inputMaximumCharacters: 25, …}
1: {label: 'About website', placeholder: 'AI writer that generates content instantly', keyLabel: 'ABOUT_WEBSITE_LABEL', inputType: 'text', inputMaximumCharacters: 75, …}
2: {label: 'Features', placeholder: '- Uses language AI and copywriting formulas to gen…ast, affordable, and works well on mobile devices', keyLabel: 'FEATURES_LABEL', inputType: 'textarea', inputMaximumCharacters: 300, …}
*/
export async function testRytrLanding(userName,serviceType,businessTags){
    const usecaseList = await caseById();
    //useCaseLandingPageId
    //"605835258c0a4a000c69c962"
    //TAGLINE
    //"DESCRIPTION_LABEL"
    //let btags = `${businessName} is a `+businessTags;
    let btags = `Write a short intro about ${userName} who is a ${serviceType}`;

    const useCaseTag = await caseDetailById(
        useCaseMagicCommandId
    );
    console.log('blurb',useCaseTag);

    let inputContexts = {
        [useCaseTag.data.data.contextInputs[0].keyLabel]: btags,
    };
    console.log('inut',inputContexts);

    let output = await ryte({
        useCaseId: useCaseTag.data.data._id,
        inputContexts,
    });

    console.log("Output blurb CONTENT:",output);
    return output;
};

export async function testRytrBlurb(userName,serviceType,businessTags){
    const usecaseList = await caseById();
    //useCaseTagline
    //"605838118c0a4a000c69c968"
    //TAGLINE
    //"DESCRIPTION_LABEL"
    //let btags = `${businessName} is a `+businessTags;
    let btags = `${userName} is a ${serviceType}`;

    const useCaseTag = await caseDetailById(
        useCaseTagline
    );
    console.log('blurb',useCaseTag);

    let inputContexts = {
        [useCaseTag.data.data.contextInputs[0].keyLabel]: btags,
    };
    console.log('inut',inputContexts);

    let output = await ryte({
        useCaseId: useCaseTag.data.data._id,
        inputContexts,
    });

    console.log("Output blurb CONTENT:",output);
    return output;
};
export async function testRytrMain(firstName,serviceType,businessName,businessBlurb,businessFeatures){
    const usecaseList = await caseById();
    const useCaseProduct = await caseDetailById(
        useCaseLandingPageId
    );
    console.log('desc',useCaseProduct);

    let inputContexts = {
        [useCaseProduct.data.data.contextInputs[0].keyLabel]: firstName,
        [useCaseProduct.data.data.contextInputs[0].keyLabel]: serviceType,
        [useCaseProduct.data.data.contextInputs[0].outputMaximumCharacters]: 160
    };
    console.log('inut',inputContexts);

    let output = await ryte({
        useCaseId: useCaseProduct.data.data._id,
        inputContexts,
    });

    console.log("Output PAGE CONTENT:",output);
    return output;
};
export async function testRytrAbout(firstName,serviceType,businessName,businessFeatures,businessBlurb){
    //topic
    //keywords
    const usecaseList = await caseById();
    //useCaseProfile
    //   //"ABOUT_YOU_LABEL"
    //     //"60633095de064b000c8f5cc9"
    let sectionTopic = `My name is ${firstName}. I'm a ${serviceType} at ${businessName} featuring ${businessFeatures}, let me help you`
    let sectionKeywords = `About me, Experience`
    const useCaseBio = await caseDetailById(
        useCaseBioId
    );
    console.log('landing',useCaseBio);

    let inputContexts = {
        [useCaseBio.data.data.contextInputs[0].keyLabel]: sectionTopic,
        [useCaseBio.data.data.contextInputs[0].keyLabel]: sectionKeywords,
        [useCaseBio.data.data.contextInputs[0].outputMaximumCharacters]: 160
    };
    console.log('inut',inputContexts);

    let output = await ryte({
        useCaseId: useCaseBio.data.data._id,
        inputContexts,
    });

    console.log("Output PAGE CONTENT:",output);
    return output;
};