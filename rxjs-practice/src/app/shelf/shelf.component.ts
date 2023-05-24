import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, OnInit, ViewChildren } from '@angular/core';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit,AfterViewInit,AfterContentInit {

  @ContentChildren(BookComponent) contentChildren!:BookComponent[];
  @ViewChildren(BookComponent) viewChildren!:BookComponent[];
  
  constructor() { }
  ngAfterContentInit(): void {
    console.log("ngcontentInit")
    console.log(this.contentChildren);
    console.log(this.viewChildren);
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    console.log(this.contentChildren);
    console.log(this.viewChildren);
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    console.log(this.contentChildren);
    console.log(this.viewChildren);
  }

}
