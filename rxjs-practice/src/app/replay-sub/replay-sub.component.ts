import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-replay-sub',
  templateUrl: './replay-sub.component.html',
  styleUrls: ['./replay-sub.component.css'],
})
export class ReplaySubComponent implements OnInit {

  use1List = ['Angular1', 'Angular2'];
  user2List: string[] = [];
  user3List: string[] = [];

  subscription2!: any;
  subscription3!: any;

  onAddVideo(video: any) {
    this.utilityService.videoEmit.next(video);
    console.log(video);
  }

  //When i call this method video emit
  user2Subs() {
    if (this.subscription2) {
      this.subscription2.unsubscribe();
      this.subscription2=null
      this.user2List=[];
    } else {
      this.subscription2 = this.utilityService.videoEmit.subscribe((res) => {
        console.log(res);
        this.user2List.push(res);
      });
    }
  }
  user3Subs() {}
  constructor(public utilityService: UtilityService) {
  }

  ngOnInit() {
   
    this.utilityService.videoEmit.subscribe((res) => {

      this.use1List.push(res);
    });
  }
}
