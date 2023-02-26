import {Component, OnInit} from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-profile-name',
    template: `
        <h2 class="text-2xl font-medium text-white">Alberto Secci</h2>
    `
})

export class ProfileNameComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
