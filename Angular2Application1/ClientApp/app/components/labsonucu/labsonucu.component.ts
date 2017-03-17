import { Component } from '@angular/core';

@Component({
    selector: 'labsonucu',
    //templateUrl: './labsonucu.component.html'

    template: require('./labsonucu.component.html')
})
export class LabsonucuComponent {
    public currentCount = 0;
    public fullName;
    public incrementCounter() {
        this.currentCount = this.currentCount + 100;
    }
    
   
    //constructor(public title, public firstName, public lastName) {
    //    this.firstName = firstName;
    //    this.lastName = lastName;
    //    this.fullName = title + " " + firstName + lastName;
    //}
    public greeter(fname: string): string {
        return "Hello, " + fname; 
    }

}
