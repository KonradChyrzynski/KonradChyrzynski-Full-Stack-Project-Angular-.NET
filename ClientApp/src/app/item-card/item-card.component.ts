import { Component, OnInit } from '@angular/core';
import { BearService } from '../service/bear.service';
import { BearIF } from '../BearInterface';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  public bears: BearIF[] = [];
  private pages: number = 0;
  public bearsIndexStart: number = 0;
  public bearsIndexEnd: number = 6;

  constructor(private _Bear: BearService) { 
  }
  
  ngOnInit(): void {
    this._Bear.getConfig().subscribe((response: any) => {
      console.log(`Data: ${response.length}`);
      this.bears = response.slice(this.bearsIndexStart,this.bearsIndexEnd);
    });
    
  }

  addToFavorite(event: any){
    console.log(event.target.getAttribute('data-bear-id'));
  }
 
}
