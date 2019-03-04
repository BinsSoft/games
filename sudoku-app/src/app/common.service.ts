import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class CommonService {
  
  private gameEndSource = new BehaviorSubject(null);
  gameEnd = this.gameEndSource.asObservable();
  constructor() { }

  setGameEnd(status:any) {
    this.gameEndSource.next(status);
  }
}
