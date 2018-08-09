import { GeneralService } from './../general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any;
  color = 'warm';
  mode = 'indeterminate';
  value = 50;
  isLoading: any = true;
  constructor(private genService: GeneralService) {
    this.genService.getEvents().subscribe(res => {
      console.log(res);
      this.isLoading = false;
      this.events = res;
    })
  }

  ngOnInit() {
  }

}
