import {Component, OnInit} from '@angular/core';
import {EncryptionKeyComponent} from './header/encryption-key.component';
import {MinimizeCallComponent} from './header/minimize-call.component';

@Component({
    standalone: true,
    selector: 'app-header',
    imports: [EncryptionKeyComponent, MinimizeCallComponent],
    template: `
        <div class="grid grid-cols-4 px-4">
            <app-minimize-call />
            <app-encryption-key class="col-span-3 flex justify-start"/>
        </div>
    `
})

export class HeaderComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
