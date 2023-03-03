import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CallerComponent} from './caller.component';
import {PreCallActionsComponent} from './actions/pre-call-actions.component';
import {CallActionsComponent} from './actions/call-actions.component';
import {HeaderComponent} from './header.component';
import {CallService} from '../services/call.service';

@Component({
    standalone: true,
    selector: 'app-call',
    imports: [CommonModule, HeaderComponent, CallerComponent, PreCallActionsComponent, CallActionsComponent],
    providers: [CallService],
    template: `
        <div class="relative h-full sm:rounded-3xl overflow-hidden">
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
            <div class="absolute left-16 bottom-16 transition-all duration-1000 rounded-full h-[5%] aspect-square 
            bg-gradient-to-t from-green-200 via-green-300 to-blue-500 -z-10 opacity-0"
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
        transform: scale(calc(100 / 5) * 2);
        opacity: 100%;
      };
    `]
})
export default class CallComponent {

    constructor(public cs: CallService) {
    }
}
