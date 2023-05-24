import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Subject, from, interval, of } from 'rxjs';
import { buffer, filter, map, take, takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit {
  title='operator works';
  oper='rxjs';
  today= Date();
  user={
    id:1,name:'sachin'
  }
  switch$: Subject<any> = new Subject();

  filterdItmes: number[] = [];
  constructor() {}
  capString(item:string){
    return item.toUpperCase();
  }

  ngOnInit(): void {
    //   const source$=interval(1000);       //for take operator
    //     source$.pipe(take(5)).subscribe(count=>{
    //       console.log(count);
    //     })

    // const source$=of(1,2,3,4,5,6,7,8,9);      //takeWhile operator
    // source$.pipe(takeWhile(value=>value<=5)).subscribe(value=>{
    //   console.log(value);
    // })

    // const source$=interval(1000);
    // source$.pipe(buffer(this.switch$)   //buffer operator
    // ,map(value=>{
    //   return value.reduce((val,sum)=>val+sum, 0)
    //  })
    //  )
    //  .subscribe(value=>{
    //   console.log(value);
    // })
    // }

    // clickMe():void{
    //   this.switch$.next();

    //     const source$=of(1,2,3); // map operator
    //     source$.pipe(map(val=>{
    // return val*10;
    //     })
    //     ).subscribe(val=>{
    //       console.log(val)
    //     })

    // const users = [
    //   // map operator
    //   { id: 1, fristname: 'sachin', lastname: 'kush' },
    //   { id: 1, fristname: 'raj', lastname: 'sahni' },
    //   { id: 1, fristname: 'akash', lastname: 'kumar' },
    // ];
    // const source$ = from(users);
    // source$.subscribe((value) => {
    //   console.log(value);
    // });

      const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

      source$
        .pipe(
          filter((value) => {
            return value % 2 == 0;
          })
        )
        .subscribe((res: any) => {
          this.filterdItmes.push(res);
          console.log(res);
        });
  }
  isHighlighted: boolean = false;
  isError: boolean = false;
  fontSize: number = 12;
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  toggleError() {
    this.isError = !this.isError;
  }
  increaseFontSize() {
    this.fontSize += 2;
  }
}
