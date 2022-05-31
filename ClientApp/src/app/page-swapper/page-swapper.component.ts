import { Component, OnInit } from '@angular/core';
import { BearService } from '../service/bear.service';

@Component({
  selector: 'app-page-swapper',
  templateUrl: './page-swapper.component.html',
  styleUrls: ['./page-swapper.component.scss']
})
export class PageSwapperComponent implements OnInit {
  public pages: number = 0;

  constructor(private _Bear: BearService) {  }
  
  

  ngOnInit(): void {
    this._Bear.getConfig().subscribe((response: any) =>{
      console.log(response.length / 6)
      this.pages = response.length % 2 != 0 ? Math.floor(response.length / 6 ): response.length - 1;
      console.log(this.pages)
    })
  }

}
