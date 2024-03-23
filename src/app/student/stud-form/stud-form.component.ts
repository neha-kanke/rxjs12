import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from 'src/app/shared/const/validation';
import { Istd } from 'src/app/shared/model/stud.interface';
import { StduentService } from 'src/app/shared/services/stduent.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-stud-form',
  templateUrl: './stud-form.component.html',
  styleUrls: ['./stud-form.component.scss']
})
export class StudFormComponent implements OnInit {
  stdudentform !: FormGroup
  editobj!: Istd
  iseditmode:boolean=false
  constructor(private _sydservcie: StduentService,
    private _uuidservice: UuidService) { }

  ngOnInit(): void {
    this.createstdform();
    this.editstdform()
    console.log(this.stdudentform);
  }

  createstdform() {
    this.stdudentform = new FormGroup({
      fname: new FormControl(null, [Validators.required,Validators.minLength(5),Validators.maxLength(10),Validators.pattern(CustomRegex.pattern)]),
      lname: new FormControl(null, [Validators.required,Validators.minLength(7),Validators.maxLength(10),Validators.pattern(CustomRegex.pattern)]),
      contact: new FormControl(null, [Validators.required,Validators.pattern(CustomRegex.contactpattern)]),
      emailid: new FormControl(null, [Validators.required,Validators.email])
    })
  }


  get stdf(){
    return this.stdudentform.controls
  }
  onaddstd() {
    console.log(this.stdudentform);
    console.log(this.stdudentform.value);
    
    
    if (this.stdudentform.valid) {
      let stdnewobj = { ...this.stdudentform.value, id: this._uuidservice.uuidv4() }
      console.log(stdnewobj);
      console.log(this.stdudentform.value);
      this._sydservcie.getsingledata(stdnewobj)
      this.stdudentform.reset()
    }
  }
  editstdform() {
    this._sydservcie.editssubject$
      .subscribe(std => {
        this.editobj = std
        this.iseditmode=true
        this.stdudentform.patchValue(std)
      })
  }
  onupdate(){
    let updateobj={...this.stdudentform.value,id:this.editobj.id}
    this._sydservcie.updatestude(updateobj)
    this.stdudentform.reset()
    this.iseditmode=false
  }

}
