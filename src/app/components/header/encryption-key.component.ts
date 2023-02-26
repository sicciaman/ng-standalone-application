import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-encryption-key',
    imports: [CommonModule],
    template: `
        <div class="flex flex-col items-center gap-2">
            <div class="flex gap-1 text-xl">
                <span *ngFor="let key of keys">{{ key }}</span>
            </div>
            <div class="px-3 py-1 rounded-md text-white bg-black/10">
                Encryption key of this call
            </div>
        </div>
    `
})

export class EncryptionKeyComponent implements OnInit {
    keys = ['🐙', '🏖', '🌼', '🚀'];

    constructor() {
    }

    ngOnInit() {
    }
}
