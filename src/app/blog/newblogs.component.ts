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
  formData = new FormData();
  image: File = null;
  constructor(private router: Router, private genService: GeneralService) { }

  ngOnInit() {
  }
  postBlog() {
    const form = new FormData();
    form.append("image", this.image);
    form.append("title", this.blog.title);
    form.append("content", this.blog.content);
    form.append("member_id", "1");
    this.genService.blogPost(form).subscribe(res => {
      console.log("status", res);
      if (res.id != undefined){
        this.router.navigate(['blogs'])
      }
    })
  }
  handleFiles(event){
    this.image = <File>event.target.files[0]; 
    // this.blog.image =event.target.files[0];
    console.log("image", this.image);
  }
}
