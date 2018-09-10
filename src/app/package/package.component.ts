import { GeneralService } from './../general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
packages: any =[]
  constructor(private genService: GeneralService) {
    this.genService.getPackage().subscribe(res => {
      this.packages = res;
    })
   }

  ngOnInit() {
  }

}
