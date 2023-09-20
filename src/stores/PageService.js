import axios from 'axios';
import firebase from "firebase/compat";
import cookie from "js-cookie";
import {rootStore} from './Store';
const {
    v4: uuidv4,
} = require('uuid');

export function transformFormData(data){
    //transform the form data into document data required to complete the form and upload the images, think 1 touch website style
    return data
}
export async function getTemplatesWithId(id){
    console.log('with id',id);
    return firebase.firestore().collection("templates").get().then((data)=>{
        console.log('data',data,'id',rootStore.pageStore.userId);
        if(data) {
            const dataToLoad = data.docs.find((doc) => {return doc.data().author === rootStore.pageStore.userId});
            if (dataToLoad) {
                console.log(dataToLoad.data(), 'LOAD with ID', id);
                rootStore.pageStore.setActiveTemplate(dataToLoad.data());
                return dataToLoad.data();
            }
        }
        return transformFormData(data)

    }).catch((e)=>{console.log('e',e)})

}
export function initializeAuthentication(){
    initializeFirebase().then((res)=>{
        return firebase.auth().onAuthStateChanged(async (userAuth) => {
            console.log('auth state changed',userAuth)
            if(userAuth) {
                console.log('on auth state:', userAuth,'...UID',userAuth.uid);
                // todo abstract loading screen from auth initialization
                rootStore.pageStore.setUser(userAuth);
                if (cookie.get('signInType') === 'google') {
                    return firebase.firestore().collection("users").doc(`${userAuth.uid}`).set({email: userAuth.email})
                        .then((r) => {
                            cookie.remove('signInType');
                            console.log("Google Document successfully written for user!", r);
                        }).catch((e) => {
                            cookie.remove('userHasLoggedIn');
                        });

                }
                if(cookie.get('isEmailLogin')){
                    return firebase.firestore().collection("users").doc(`${userAuth.uid}`).set({email: userAuth.email})
                        .then((r) => {
                            cookie.remove('isEmailLogin');
                            console.log("Google Document successfully written for user!", r);
                            //window.location.reload();
                        }).catch((e) => {
                            cookie.remove('isEmailLogin');
                            cookie.remove('userHasLoggedIn');

                        });
                }
            }
        });
    });

}
export function initializeFirebase(){
    return new Promise((resolve) => {
        if (firebase.auth().currentUser) {
            resolve(true);
        } else {
            const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
                unsubscribe();
                if (user) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        }
    }).catch((e) => {
        console.log('init error', e); // throw new error
    });
}

export async function signUpUsingEmailButDontLogin(fields){
    cookie.set('isEmailLogin',true);
    return firebase.auth().createUserWithEmailAndPassword(fields.email, fields.password).catch((error) => {
    }).then((res)=>{
        console.log('ive got result: for user:',res)
        return res

    });
}
export async function loginUsingEmail(fields){
    console.log('login..')
    firebase.auth().signInWithEmailAndPassword(fields.email,fields.password).catch((e)=>{
        console.log(e)
        cookie.set('isEmailLogin',false);
        return window.location.href='/pages'

    })
}
export async function signUpUsingEmail(fields,callback) {
    cookie.set('isEmailLogin',true);
    return firebase.auth().createUserWithEmailAndPassword(fields.email, fields.password).catch((error) => {
        firebase.auth().signInWithEmailAndPassword(fields.email,fields.password).catch((e)=>{
            console.log(e)
            cookie.set('isEmailLogin',false);
            return callback()

        })
       console.log('...',error);
        cookie.set('isEmailLogin',false);

    });
}

export async function signUpUsingSocial(type) {
    cookie.set('signInType','google');
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return firebase.auth().signInWithRedirect(provider);
}

export async function signUpUsingFacebook(type) {
        const provider = new firebase.auth.FacebookAuthProvider();
        provider.setCustomParameters({ auth_type: 'https',  display: 'popup' });
        return firebase.auth().signInWithRedirect(provider)
        // return firebase.auth().signInWithPopup(provider).then((result) => {
        //     // The signed-in user info.
        //     const user = result.user;
        //
        //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //     const credential = FacebookAuthProvider.credentialFromResult(result);
        //     const accessToken = credential.accessToken;
        //     console.log('success',user,accessToken,email,credential)
        //
        //
        //     // IdP data available using getAdditionalUserInfo(result)
        //     // ...
        // })
        // .catch((error) => {
        //     // Handle Errors here.
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // The email of the user's account used.
        //     const email = error.customData.email;
        //     // The AuthCredential type that was used.
        //     const credential = FacebookAuthProvider.credentialFromError(error);
        //     console.log('error',errorCode,errorMessage,email,credential)
        //
        //     // ...
        // })
    }

export async function handleSignOut(noReload) {
    firebase.auth().signOut().then(() => {
        cookie.remove('userHasLoggedIn');
        if (noReload) {
            return true;
        }
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    });
}


export function createWebsite(code,content) {
    let url = `https://api.github.com/repos/H0l0AI/Marketslick/contents/src/contents.json`;
    console.log('BTOA',unescape(encodeURIComponent(JSON.stringify(content))));
    const body = btoa(unescape(encodeURIComponent(JSON.stringify(content))));
    const createBranchURL = 'https://api.github.com/repos/H0l0AI/Marketslick/git/refs';
    const headers = {
        'Authorization': `token ${process&&process.env.REACT_APP_DEATHSTAR}${process&&process.env.REACT_APP_JEDI}${process&&process.env.REACT_APP_STORMTROOPER}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/vnd.github.v3+json'
    };
    const getBranchHeadsURL = 'https://api.github.com/repos/H0l0AI/Marketslick/git/refs/heads';
    return axios({
        method: 'get', url: getBranchHeadsURL,
        headers: headers,
    }).then((res) => {
        {
            console.log('GITHUB= res,', res.data, res.data[res.data.length - 1]);
            const headSha = res.data.find((ref) => ref.ref === "refs/heads/main").object.sha;
            const branchExists = res.data.find((reference)=>reference.ref.slice(11)===code);
            if(branchExists) {
                 console.log('THIS BRANCH EXISTS',branchExists,code)
                url=url+`?ref=${code}`

                return axios({
                    method: 'get', url: url,
                    headers: headers,
                }).then((res) => {
                    console.log('GITHUB RES GET:', res,code);
                    const sha = res.data.sha;
                    return axios({
                        method: 'delete', data: {
                            message: "Automation delete", content: body, sha: sha, branch: `${code}`
                        },
                        url: url,
                        headers: headers,
                    }).then((commitResponse) => {
                        console.log('DELETED', commitResponse);
                        return axios({
                            method: 'put', data: {
                                message: "Automation sync", content: body, sha: sha, branch: `${code}`
                            },
                            url: url,
                            headers: headers,
                        }).then((res)=>{console.log('ADDED',res)}).catch((e)=>{console.log('put not work',e)})

                    }).catch((e) => {
                        console.log('axios GET ERROR 4', e);

                    }).catch((e) => {
                        console.log('axs get error 3', e);

                    })
                })
            }
            console.log('HEADSHA', headSha);
            const createBranchBody = {
                "ref": `refs/heads/${code}`,
                "sha": headSha
            };
            return axios({
                method: 'post', data: createBranchBody,
                url: createBranchURL,
                headers: headers,
            }).then((createBranchRes) => {
                console.log('Request', createBranchRes);

                return axios({
                    method: 'get', url: url,
                    headers: headers,
                }).then((res) => {
                    console.log('GITHUB RESULT:', res);
                    const sha = res.data.sha;
                    return axios({
                        method: 'put', data: {
                            message: "Automation sync", content: body, sha: sha, branch: `${code}`
                        },
                        url: url,
                        headers: headers,
                    }).then((commitResponse) => {
                        console.log('GO', commitResponse);

                    }).catch((e) => {
                        console.log('axios GET ERROR 4', e);

                    }).catch((e) => {
                        console.log('axs get error 3', e);

                    })
                }).catch((e) => {
                    console.log('axios GET ERROR 2', e);

                }).catch((e) => {
                    console.log('axs get error 1', e);

                })
            }).catch((e)=>{
                console.log('couldnt create',e);

            });
        }
    });
};
export async function getRelevantBusinessInfo(placeInformation, key) {
    const PROXY_URL = process&&process.env.REACT_APP_PROXY_URL;
    try {
        const locationData = {
            location: {latitude: '', longitude: ''},
            timeZoneId: '',
            address: '',
            name: '',
            area: 'Auckland',
            countryCode: 'NZ',
            phoneNumber: '',
            types: [],
            utcOffset: '',
            website: '',
            rawOffset: '',
            dstOffset: '',
            businessClass: 'management',
            // creator role for practice
            creatorRole: 'practice_admin',
        };
        // todo get geolocation ...address external
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeInformation.place_id)}&key=${encodeURIComponent(key)}`;
        const res = await axios({
            method: 'get',
            url: PROXY_URL + url,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            }

        });
        const countryCode = res.data.result.address_components.find((component) => component.types.includes('country'));
        let area;
        if (countryCode.short_name === 'NZ' || countryCode.short_name !== 'AU') {
            area = res.data.result.address_components.find((component) => component.types.includes('administrative_area_level_1'));
        } else {
            area = res.data.result.address_components.find((component) => component.types.includes('administrative_area_level_2'));
            if (!area) {
                area = res.data.result.address_components.find((component) => component.types.includes('administrative_area_level_1'))
            }
        }
        locationData.name = res.data.result.name||'';
        locationData.location.latitude = res.data.result.geometry.location.lat||0;
        locationData.location.longitude = res.data.result.geometry.location.lng||0;
        locationData.address = res.data.result.formatted_address||'';
        locationData.phoneNumber = res.data.result.formatted_phone_number||'';
        locationData.types = res.data.result.types||[];
        locationData.utcOffset = res.data.result.utc_offset||'';
        locationData.website = res.data.result.website||'';
        if (countryCode.short_name && area && area.short_name) {
            locationData.countryCode = countryCode.short_name;
            locationData.area = area.long_name;
        } else {
            return;
        }
        console.log(locationData,'location data')
        firebase.firestore().collection("users").doc(`${rootStore.pageStore.userId}`).set({businessInfo: locationData})
            .then((r) => {

            }).catch((e)=>{});
        return locationData;
        //create business in firebase here
    }catch(e){
        console.log('GMB error',e);
    }
}
export async function GetAllResponses(form_id,response_id){
    try {

            const PROXY_URL = 'https://cors-anywhere-ac13-cb57dba8a340.herokuapp.com/';
            const url = `https://api.typeform.com/forms/${form_id}/responses`;
            return await axios({
                method: 'get',
                url: PROXY_URL + url,
                headers: {
                    'authorization': `bearer ${process.env.REACT_APP_FORMS_PAT+process.env.REACT_APP_FORMS_PAT2}`,
                }

            });


    }catch(e){
        console.log('error',e)
    }


}
export async function autoCompletePlacesAction(data,key){
    const PROXY_URL = 'https://cors-anywhere-ac13-cb57dba8a340.herokuapp.com/';
    //TODO set this CORS up again...
    console.log('?', PROXY_URL);
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(data)}&key=${encodeURIComponent(key)}`;
    const res = await axios({
        method: 'get',
        url: PROXY_URL + url,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        }

    });
    return rootStore.pageStore.setAutoCompletePlaces(res.data);
}


