import { GeneralService } from './../general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogs: any;
events: any;
color = 'warn';
mode = 'indeterminate';
value = 50;
isLoading: any = true;
  constructor(private genService: GeneralService) {
    this.genService.getBlogs().subscribe(res => {
      this.isLoading = false;
      this.blogs = res;
    })
   }

  ngOnInit() {
  }

}
