import { LightningElement, api } from 'lwc';

export default class ChildComponentLWC extends LightningElement {
    //Display value coming from parent component
    @api display; //smallCase
    @api displayGreeting; //camelCase
    @api user; //Object
    @api isUserAvailable = false; // boolean
    
    channelName;

    /*set channel(value){
        let clonedUser = {...value};
        console.log(clonedUser);
        this.channelName = clonedUser.channel.toUpperCase();
    }

    @api
    get channel(){
        return this.channelName;
    }*/

}