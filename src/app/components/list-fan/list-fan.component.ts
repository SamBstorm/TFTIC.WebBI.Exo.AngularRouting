import { FanMockupService } from './../../services/fan-mockup.service';
import { IFan } from './../../models/ifan';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-fan',
  templateUrl: './list-fan.component.html',
  styleUrls: ['./list-fan.component.scss']
})
export class ListFanComponent implements OnInit {

  public fans : IFan[] = []

  constructor(private _service : FanMockupService) { }

  ngOnInit(): void {
    for (const fan of this._service.Fans) {
      this.fans.push(fan);
    }
  }

}
