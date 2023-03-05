import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, Routes} from '@angular/router';
import AppComponent from './app/app.component';
import {LayoutComponent} from './app/layout.component';
import {provideAnimations} from '@angular/platform-browser/animations';

const routes: Routes = [
    {path: '', redirectTo: 'call', pathMatch: 'full'},
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: 'call', loadComponent: () => import('./app/components/call.component')}
        ]
    }
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes), provideAnimations()]
}).then(() => console.debug('Application started...'));
