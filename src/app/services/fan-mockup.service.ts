import { Fan } from './../models/fan';
import { Injectable } from '@angular/core';
import { IFan } from '../models/ifan';

@Injectable({
  providedIn: 'root'
})
export class FanMockupService {

  private _fans : IFan[] = [];

  public get Fans(): IFan[] { return this._fans ; }

  constructor() {
    this._fans.push(
      new Fan(1,'Samuel', 'Legrain', new Date(1987,9,27), 'Loki', 'Walking Dead', 'Game of throne'),
      new Fan(2,'Marc', 'Paquet', new Date(2000,10,27), 'La petite maison dans la prairie', 'Lasie', 'La croisière s\'amuse')
    );
  }

  public Get(id : number) : IFan{
    let filteredFanList = this.Fans.filter(f=> f.id == id);
    if(filteredFanList.length <= 0) throw new Error(`Le fan avec l'identifiant ${id} n'existe pas`);
    return filteredFanList[0];
  }
}
