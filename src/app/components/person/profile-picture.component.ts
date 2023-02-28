import {Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-profile-picture',
    template: `
        <div class="relative w-24 h-24 rounded-full">
            <div class="absolute inset-0 rounded-full animate-planet"></div>
            <div class="relative w-full h-full rounded-full overflow-hidden animate-pulseSlow">
                <img class="absolute left-1/2 top-1/2 h-auto w-full -translate-x-1/2 -translate-y-1/2"
                     src="assets/profile-picture.jpg" alt="Caller profile picture">
            </div>

        </div>
    `
})
export class ProfilePictureComponent {

}
