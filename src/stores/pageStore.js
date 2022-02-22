import {
    action, autorun, observable, toJS,
} from 'mobx';
import {persist} from "mobx-persist";
import cookie from 'js-cookie';

export default class PageStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable value = '';
    @persist @observable code = cookie.get('code');
    @action.bound setCode(codeToSet){
        console.log('set:',codeToSet);
        cookie.set('code',codeToSet);
        this.code=codeToSet
    }
    @persist @observable isPotentialCustomer = false;
    @action.bound setIsPotentialCustomer(isPotentialCustomer){
        cookie.set('isPotentialCustomer',isPotentialCustomer);
        this.isPotentialCustomer = isPotentialCustomer;
    }
}