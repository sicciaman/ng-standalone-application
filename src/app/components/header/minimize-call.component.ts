import {Component, OnInit} from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-minimize-call',
    template: `
        <button class="w-8 h-8 rounded-full">
            <img src="assets/msg_call_minimize.png" alt="Minimize call">
        </button>
    `
})

export class MinimizeCallComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
