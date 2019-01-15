import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  showTodayDate() {
    const ndate = new Date();
    return ndate;
 }


}
