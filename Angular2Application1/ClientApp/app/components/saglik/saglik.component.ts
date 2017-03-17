import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    template: require('./saglik.component.html')
})
export class SaglikComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount = this.currentCount+100;
    }
}
