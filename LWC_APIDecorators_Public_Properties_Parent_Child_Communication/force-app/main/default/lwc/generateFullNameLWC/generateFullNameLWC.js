import { LightningElement } from 'lwc';

export default class GenerateFullNameLWC extends LightningElement {
    firstName= "";
    lastName= "";
    fullName;
    changeHandler(event){
        let {name, value} = event.target;

        if(name === "fname"){
            this.firstName = value;
        }else if(name === "lname"){
            this.lastName = value;
        }
    }

    handleClick(event){
        this.fullName = this.firstName + " " + this.lastName;
    }

}