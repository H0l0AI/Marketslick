import axios from 'axios';
import firebase from "firebase/compat";
import cookie from "js-cookie";
import {rootStore} from './Store';
const {
    v4: uuidv4,
} = require('uuid');
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
    }).catch((e)=>{console.log('e',e)})

}
export function initializeAuthentication(){
    initializeFirebase().then((res)=>{
        console.log('FB, initialized.')
        return firebase.auth().onAuthStateChanged(async (userAuth) => {
            if(userAuth) {
                console.log('on auth state:', userAuth,'...UID',userAuth.uid);
                // todo abstract loading screen from auth initialization
                rootStore.pageStore.setUser(userAuth);
                if (cookie.get('signInType') === 'google') {
                    return firebase.firestore().collection("users").doc(`${userAuth.uid}`).set({email: userAuth.email})
                        .then((r) => {
                            cookie.remove('signInType');
                            console.log("Google Document successfully written!", r);
                        }).catch((e) => {
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


export async function signUpUsingEmail(fields) {
    return firebase.auth().createUserWithEmailAndPassword(fields.email, fields.password).catch((error) => {
       console.log('...',error);
    })
        .then((authResult) => {
            // @ts-ignore
            firebase.firestore().collection("users").doc(`${uuidv4()}`).set({email:fields.email})
                .then((r) => {
                    console.log("Document successfully written!",r);
                }).catch((e) => {
                cookie.remove('userHasLoggedIn');
            });
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
        provider.setCustomParameters({ auth_type: 'https' });
        return firebase.auth().signInWithRedirect(provider);
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
    console.log('gonna BTOA it',unescape(encodeURIComponent(JSON.stringify(content))));
    const body = btoa(unescape(encodeURIComponent(JSON.stringify(content))));
    const createBranchURL = 'https://api.github.com/repos/H0l0AI/Marketslick/git/refs';
    const headers = {
        'Authorization': `token ${process.env.REACT_APP_GITHUB_API}`,
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
                        console.log('LETS FUCKING GO DELETED', commitResponse);
                        return axios({
                            method: 'put', data: {
                                message: "Automation sync", content: body, sha: sha, branch: `${code}`
                            },
                            url: url,
                            headers: headers,
                        }).then((res)=>{console.log('ADDED THE NEW SHIT',res)}).catch((e)=>{console.log('put not work',e)})

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
                console.log('putRes DID HE FIRE IT OFF?', createBranchRes, 'DO I NEED CREATESHA EARLIER');

                return axios({
                    method: 'get', url: url,
                    headers: headers,
                }).then((res) => {
                    console.log('GITHUB RES GET:', res);
                    const sha = res.data.sha;
                    return axios({
                        method: 'put', data: {
                            message: "Automation sync", content: body, sha: sha, branch: `${code}`
                        },
                        url: url,
                        headers: headers,
                    }).then((commitResponse) => {
                        console.log('LETS FUCKING GO', commitResponse);

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
    const PROXY_URL = process.env.REACT_APP_PROXY_URL;
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
        locationData.name = res.data.result.name;
        locationData.location.latitude = res.data.result.geometry.location.lat;
        locationData.location.longitude = res.data.result.geometry.location.lng;
        locationData.address = res.data.result.formatted_address;
        locationData.phoneNumber = res.data.result.formatted_phone_number;
        locationData.types = res.data.result.types;
        locationData.utcOffset = res.data.result.utc_offset;
        locationData.website = res.data.result.website;
        if (countryCode.short_name && area && area.short_name) {
            locationData.countryCode = countryCode.short_name;
            locationData.area = area.long_name;
        } else {
            return;
        }
        firebase.firestore().collection("users").doc(`${rootStore.pageStore.userId}`).set({businessInfo: locationData})
            .then((r) => {

            }).catch((e)=>{});
        return locationData;
        //create business in firebase here
    }catch(e){
        console.log('GMB error');
    }
}

export async function autoCompletePlacesAction(data,key){
    const PROXY_URL = 'https://cryptic-badlands-53121.herokuapp.com/';
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


