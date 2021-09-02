import { FanMockupService } from './../../services/fan-mockup.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFan } from 'src/app/models/ifan';

@Component({
  selector: 'app-fan-details',
  templateUrl: './fan-details.component.html',
  styleUrls: ['./fan-details.component.scss']
})
export class FanDetailsComponent implements OnInit, OnDestroy {

  public id? : number;
  public fan? : IFan; 

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _service : FanMockupService
    ) { }

  ngOnInit(): void {
    console.log('Bienvenu');    
    this.id  = this._activatedRoute.snapshot.params['fanid'];
    if(this.id) this.fan = this._service.Get(this.id);
  }

  ngOnDestroy():void{
    console.log('Adieu!');
    
  }

}
