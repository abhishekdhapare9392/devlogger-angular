import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: '',
    text: '',
    date: ''
  });

  selectLog = this.logSource.asObservable();

  constructor() { 
    this.logs = [
      { id: '1', text: 'Generated Components', date: new Date('12/26/2022 12:54:23') },
      { id: '2', text: 'Added Bootstrap', date: new Date('12/27/2022 09:35:23') },
      {id: '3', text: 'Added logs components', date: new Date('12/27/2022 12:00:00')},
    ]
  }

  getLogs(): Observable<Log[]> { 
    return of(this.logs);
  }

  setFormLog(log: Log) { 
    this.logSource.next(log);
  }

}
