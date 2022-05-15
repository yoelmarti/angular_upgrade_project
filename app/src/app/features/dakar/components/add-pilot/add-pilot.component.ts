import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DakarService } from '../../services/dakar.service';

@Component({
  selector: 'app-add-pilot',
  templateUrl: './add-pilot.component.html',
  styleUrls: ['./add-pilot.component.scss']
})
export class AddPilotComponent implements OnInit {

  addPilotForm: FormGroup;

  constructor(
    public dakarService: DakarService,
    public formbuilder: FormBuilder,
    public router: Router
  ) {
    this.addPilotForm = this.formbuilder.group({
      name: [''],
      image: [''],
      description: [''],
      category: [''],
      vehicle: [''],
      brand: [''],
      model: [''],
      preparer: [''],
      vehicleImg: ['']
    })
  }

  ngOnInit(): void {/*Empty*/}

  registerPilot = () =>{
    this.dakarService.postPilot(this.addPilotForm.value).subscribe((res)=>{
      if(res.result){
        this.addPilotForm.reset()
        this.router.navigate(['dakar-pilots'])
      }
    })
  }
}
