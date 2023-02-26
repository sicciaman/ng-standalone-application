import {Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-profile-picture',
    template: `
        <div class="relative w-24 h-24 rounded-full overflow-hidden ring-8 ring-offset-2 ring-slate-300/50 my-2 mx-2">
            <img class="absolute left-1/2 top-1/2 h-auto w-full -translate-x-1/2 -translate-y-1/2"
                 src="assets/profile-picture.jpg" alt="Caller profile picture">
        </div>
    `
})
export class ProfilePictureComponent {

}
