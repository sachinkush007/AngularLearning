import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  userName = new BehaviorSubject('Sachin');
  // userName = new Subject<string>();
  private dataSubject = new ReplaySubject<any>(1);
  public data$ = this.dataSubject.asObservable();
  
   public videoEmit =new ReplaySubject<string>(3);
   
   public video$= this.videoEmit.asObservable();
  // private data: any[] = [];
isUserIsLoggedIn(){
  return  false;
}
  constructor(private http:HttpClient) {}
  getData(): Observable<any> {
    const url = 'https://myapi.com/data';
    return this.http.get<any>(url).pipe(
      tap((data) => this.dataSubject.next(data)),
      catchError((error) => {
        console.error(error);
        return of(null);
      })
    );
  }
}
