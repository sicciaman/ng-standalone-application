import {Component, OnInit} from '@angular/core';
import {CallService} from '../../services/call.service';

@Component({
    standalone: true,
    selector: 'app-pre-call-actions',
    template: `
        <div class="flex justify-between px-12">
            <button class="flex flex-col justify-center items-center gap-3 text-white text-sm" (click)="acceptCall()">
                <div class="w-16 h-16 rounded-full bg-green-500 shadow animate-ring">
                    <img src="assets/phone.png" alt="Accept call" class="p-4 animate-shake">
                </div>
                <label class="text-white">Accept</label>
            </button>

            <button class="flex flex-col justify-center items-center gap-3 text-white text-sm">
                <div class="w-16 h-16 rounded-full bg-red-500 shadow">
                    <img src="assets/end-call.png" alt="Accept call" class="p-4">

                </div>
                <label class="text-white">Decline</label>
            </button>
        </div>
    `
})

export class PreCallActionsComponent implements OnInit {
    constructor(private cs: CallService) {
    }

    ngOnInit() {
    }

    acceptCall(): void {
        this.cs.status.next('ACCEPTED');
    }
}
