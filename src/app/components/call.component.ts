import {Component} from '@angular/core';
import {CallerComponent} from './caller.component';
import {PreCallActionsComponent} from './actions/pre-call-actions.component';
import {CallActionsComponent} from './actions/call-actions.component';
import {HeaderComponent} from './header.component';
import {CallService} from '../services/call.service';
import {CommonModule} from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-call',
    imports: [CommonModule, HeaderComponent, CallerComponent, PreCallActionsComponent, CallActionsComponent],
    providers: [CallService],
    template: `
        <div class="relative h-full overflow-hidden">
            <div class="flex flex-col justify-between items-center py-16 h-full w-full">
                <div class="flex flex-col gap-10 w-full">
                    <app-header/>
                    <app-caller/>
                </div>

                <div class="w-full">
                    <app-pre-call-actions *ngIf="(cs.status | async) === 'INCOMING'"/>
                    <app-call-actions *ngIf="(cs.status | async) === 'ACCEPTED'"/>
                </div>
            </div>
            <div class="absolute left-16 bottom-16 transition-all duration-[2000ms] rounded-full w-8 h-8 bg-purple-600 -z-10"
                 [ngClass]="(cs.status | async) === 'ACCEPTED' ? 'after' : null">
            </div>
        </div>
    `,
    styles: [`
      :host {
        height: 100%;
        width: 100%;
      };
      
      .after {
        width: 200vw;
        height: 200vw;
        border-radius: 0%;
        inset: 0;
        background-color: #0000ff; /* colore di arrivo */
        z-index: -1;
      }
    `]
})
export default class CallComponent {

    constructor(public cs: CallService) {
    }
}
