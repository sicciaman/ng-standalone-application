import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-layout',
    imports: [RouterModule],
    template: `
        <div class="flex justify-center items-center h-screen w-full bg-gradient-to-t from-purple-500 to-pink-500">
            <div class="flex justify-center items-center w-full sm:w-[390px] h-screen sm:h-[80%] sm:rounded-3xl backdrop-blur-lg bg-white/30 ">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class LayoutComponent {

}
