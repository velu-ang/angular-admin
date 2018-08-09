import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users: any= [];
color = 'warm';
  mode = 'indeterminate';
  value = 50;
  isLoading: any = true;
  constructor(public genService: GeneralService) {
      this.genService.getUsers().subscribe(res => {
        this.isLoading = false;
        this.users = res;
      })
   }

  ngOnInit() {
  }

}
