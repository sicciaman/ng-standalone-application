import {Component} from '@angular/core';
import {ProfilePictureComponent} from './person/profile-picture.component';
import {ProfileNameComponent} from './person/profile-name.component';

@Component({
    standalone: true,
    selector: 'app-caller',
    imports: [ProfilePictureComponent, ProfileNameComponent],
    template: `
        <div class="flex flex-col justify-center items-center gap-3">
            <app-profile-picture></app-profile-picture>
            <div class="flex flex-col justify-center items-center gap-1">
                <app-profile-name></app-profile-name>
                <p class="text-white">Call</p>
            </div>
        </div>
    `
})
export class CallerComponent {

}
