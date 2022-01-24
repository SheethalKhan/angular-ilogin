import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataService {
private data=new BehaviorSubject<any>([]);
  constructor() { }
sendData(data){
  this.data.next(data);
}
getData():Observable<any>{
return this.data.asObservable();
}
}