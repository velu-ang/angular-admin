import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin: any = {};
  constructor(private genService: GeneralService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log("admin", this.admin)
    this.genService.login(this.admin).subscribe(res => {
      if (res.status == 200) {
        localStorage.setItem("admin", res.data.id)
        console.log("loggin ")
        setInterval(() => {
          console.log("loggin ")
          window.location.reload()
        }, 10000)

      }
    })
  }
}
