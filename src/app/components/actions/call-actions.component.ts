import {Component, OnInit} from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-call-actions',
    styles: [`
      :host {
        width: 100%;
      }
    `],
    template: `
        <div class="flex justify-between px-6">

            <button class="flex flex-col justify-center items-center gap-3 text-white text-sm">
                <div class="w-16 h-16 rounded-full bg-purple-400 shadow">
                    <img src="assets/speaker.png" alt="Activate speaker" class="p-4">
                </div>
                <label class="text-white">Speaker</label>
            </button>

            <button class="flex flex-col justify-center items-center gap-3 text-white text-sm">
                <div class="w-16 h-16 rounded-full bg-white shadow">
                    <img src="assets/video-disabled.png" alt="Start Video" class="p-4">
                </div>
                <label class="text-white">Start Video</label>
            </button>
            
            <button class="flex flex-col justify-center items-center gap-3 text-white text-sm">
                <div class="w-16 h-16 rounded-full bg-white shadow">
                    <img src="assets/mic-disabled.png" alt="Unmute" class="p-4">
                </div>
                <label class="text-white">Unmute</label>
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

export class CallActionsComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
