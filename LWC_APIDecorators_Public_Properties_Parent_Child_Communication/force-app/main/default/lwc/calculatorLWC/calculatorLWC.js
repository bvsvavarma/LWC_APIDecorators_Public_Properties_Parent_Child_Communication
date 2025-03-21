import { LightningElement } from 'lwc';

export default class CalculatorLWC extends LightningElement {
    num1 = "";
    num2 = "";
    result;


    changeHandler(event){
        let {name, value} = event.target;
        if(name === "number1"){
            this.num1 = value;
        } else if(name === "number2"){
            this.num2 = value;
        }
    }
    clickHandler(event){
        //If you want write logic based on label then we can use event.target.label 
        let {name, value} = event.target;
        if(name === "Addition"){
            this.result = parseInt(this.num1) + parseInt(this.num2);
        }else if(name === "Subtraction"){
            this.result = parseInt(this.num1) - parseInt(this.num2);
        }else if(name === "Multiplication"){
            this.result = parseInt(this.num1) * parseInt(this.num2);
        }else if(name === "Division"){
            this.result = parseInt(this.num1) / parseInt(this.num2);
        }else if(name === "Reset"){
            this.num1 = "";
            this.num2 = "";
        }
    }
}
