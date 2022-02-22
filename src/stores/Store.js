import {
    action, configure, decorate, observable,
} from 'mobx';
import {create} from "mobx-persist";
import PageStore from './pageStore';

configure({ enforceActions: 'never' });

const hydrate = create({storage:localStorage,jsonify:true});

export class RootStore {
    constructor() {
        this.pageStore = new PageStore(this);


        hydrate('page',this.pageStore);
    }
    @observable loading=false;

}

export const rootStore = new RootStore();
