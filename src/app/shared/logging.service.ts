import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(msg ? : string, caller ? : string) : void
  {
    if(msg != undefined)
    {
      if (caller != undefined) console.log('['+caller+']: '+msg);
      else console.log(msg);
    }
    else console.log('[PLACEHOLDER!]');
  }

}
