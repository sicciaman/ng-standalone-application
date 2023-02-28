import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class CallService {
    status = new BehaviorSubject<string>('INCOMING');

}
