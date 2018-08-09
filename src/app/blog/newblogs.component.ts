import { GeneralService } from './../general.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newblogs',
  templateUrl: './newblogs.component.html',
  styleUrls: ['./newblogs.component.scss']
})
export class NewblogsComponent implements OnInit {
  blog: any = {};
  constructor(private router: Router, private genService: GeneralService) { }

  ngOnInit() {
  }
  postBlog() {
    this.genService.blogPost(this.blog).subscribe(res => {
      console.log("status", res);
      if (res.id != undefined){
        this.router.navigate(['blogs'])
      }
    })
  }
}
