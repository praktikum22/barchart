import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BarchartService {
  constructor() {}

  calculataTime(sec: number) {
    const hours = sec / 3600;
    return hours;
  }
}
