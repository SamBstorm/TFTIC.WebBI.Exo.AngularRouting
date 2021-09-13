import { Router } from '@angular/router';
import { Fan } from './../../models/fan';
import { FanMockupService } from './../../services/fan-mockup.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fan-create',
  templateUrl: './fan-create.component.html',
  styleUrls: ['./fan-create.component.scss']
})
export class FanCreateComponent implements OnInit {

  public createForm! : FormGroup;

  public get createFormSeriesArray() : FormArray{
    return this.createForm.controls['series'] as FormArray;
  } 

  constructor(private _formBuilder : FormBuilder, private _service : FanMockupService, private _router : Router) { }

  ngOnInit(): void {
    this.createForm = this._formBuilder.group({
      firstname : [null,Validators.required],
      lastname : [null,Validators.required],
      birthdate : [null,Validators.required],
      series : this._formBuilder.array([])
    });
  }

  public submitFan(){
    if(this.createForm.valid){
      let fan = new Fan(
        0,
        this.createForm.value['firstname'],
        this.createForm.value['lastname'],
        this.createForm.value['birthdate'],
        ...this.createFormSeriesArray.value
        );
      this._router.navigateByUrl('details/'+this._service.Insert(fan));
    }
  }

  public addSerieInput(){
    this.createFormSeriesArray.push(this._formBuilder.control(null, Validators.required));
  }
}
