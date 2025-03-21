import { LightningElement} from 'lwc';

export default class ParentComponentLWC extends LightningElement {
    greeting = "Greeting from Parent Component"
    userDetails = {
        firstName : "Akshith",
        lastName : "Buddharaju",
        channel: "LWC BootCamp"
    }
}