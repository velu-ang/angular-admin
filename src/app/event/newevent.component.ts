import { GeneralService } from './../general.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.scss']
})
export class NeweventComponent implements OnInit {
  event: any = {};

  constructor(private router: Router, private genService: GeneralService) { }

  ngOnInit() {
  }
  openFile(){
    document.getElementById("openBut").click();
  }
  postEvent(){
    console.log("blog", this.event);
    this.genService.eventPost(this.event).subscribe(res => {
      console.log("status", res);
      if (res.id != undefined){
        this.router.navigate(['events'])
      }

    })
  }
}
