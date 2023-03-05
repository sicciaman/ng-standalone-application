import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {animate, style, transition, trigger} from '@angular/animations';
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
    animations: [
        trigger('insertActions', [
            transition(':enter', [
                style({
                    opacity: 0,
                    width: '80%',
                    transform: 'translateY(-100%)'
                }),
                animate('200ms', style({
                    opacity: 1,
                    width: '100%',
                    transform: 'translateY(0)'
                }))
            ])
        ])
    ],
    template: `
        <div class="relative h-full sm:rounded-3xl overflow-hidden">
            <div class="flex flex-col justify-between items-center py-16 h-full w-full">
                <div class="flex flex-col gap-10 w-full">
                    <app-header/>
                    <app-caller/>
                </div>

                <div class="flex justify-center w-full">
                    <app-pre-call-actions *ngIf="(cs.status | async) === 'INCOMING'"/>
                    <app-call-actions @insertActions *ngIf="(cs.status | async) === 'ACCEPTED'" class="block"/>
                </div>
            </div>
            <div class="absolute left-16 bottom-16 transition-all duration-1000 rounded-full h-[5%] aspect-square 
            bg-gradient-to-t from-green-200 via-green-300 to-blue-500 -z-10 opacity-0"
                 [ngClass]="(cs.status | async) === 'ACCEPTED' ? 'expanded-bg' : null">
            </div>
        </div>
    `,
    styles: [`
      :host {
        height: 100%;
        width: 100%;
      }

      .expanded-bg {
        transform: scale(calc(100 / 5) * 2);
        opacity: 100%;
      }

      //.actions-entry {
      //  transform: translateY(2.5rem);
      //  opacity: 100%;
      //}
    `]
})
export default class CallComponent {

    constructor(public cs: CallService) {
    }
}
