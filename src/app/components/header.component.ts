import {Component, OnInit} from '@angular/core';
import {EncryptionKeyComponent} from './header/encryption-key.component';
import {MinimizeCallComponent} from './header/minimize-call.component';
import {CallService} from '../services/call.service';
import {CommonModule} from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-header',
    imports: [CommonModule, EncryptionKeyComponent, MinimizeCallComponent],
    template: `
        <div class="grid grid-cols-4 px-4">
            <app-minimize-call/>
            <app-encryption-key *ngIf="(cs.status | async) === 'ACCEPTED'"
                                class="col-span-3 flex justify-start"/>
        </div>
    `
})

export class HeaderComponent implements OnInit {

    constructor(public cs: CallService) {
    }

    ngOnInit() {
    }
}
