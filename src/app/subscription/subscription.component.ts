import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  subscription = [];
  constructor(private genService: GeneralService) {
    this.genService.getSubscribe().subscribe(res => {
      this.subscription = res;
    })
  }

  ngOnInit() {
  }
  getSub() {

  }

}
