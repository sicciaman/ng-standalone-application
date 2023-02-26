import {Component} from '@angular/core';
import {CallerComponent} from './caller.component';
import {PreCallActionsComponent} from './actions/pre-call-actions.component';
import {CallActionsComponent} from './actions/call-actions.component';
import {HeaderComponent} from './header.component';

@Component({
    standalone: true,
    selector: 'app-call',
    imports: [HeaderComponent, CallerComponent, PreCallActionsComponent, CallActionsComponent],
    template: `
        <div class="flex flex-col justify-between items-center py-16 h-full w-full" xmlns="http://www.w3.org/1999/html">
            <div class="flex flex-col gap-10 w-full">
                <app-header />
                <app-caller/>
            </div>

            <div class="w-full">
                <!--                <app-pre-call-actions />-->
                <app-call-actions/>
            </div>
        </div>
    `,
    styles: [`
      :host {
        height: 100%;
        width: 100%;
      }
    `]
})
export default class CallComponent {
}
