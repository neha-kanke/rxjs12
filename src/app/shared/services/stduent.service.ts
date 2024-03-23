import { Injectable } from '@angular/core';
import { Istd } from '../model/stud.interface';
import { Subject } from 'rxjs';
import { SnackbarsService } from './snackbars.service';

@Injectable({
  providedIn: 'root'
})
export class StduentService {
  studentarr: Array<Istd> = [{
    fname: 'neha',
    lname: "kanke",
    contact: 932549584,
    emailid: "hk@gamilc.com",
    id: 1
  }]


  constructor(private _macservices:SnackbarsService) { }
  editssubject$: Subject<Istd> = new Subject<Istd>()
  getalldata(): Array<Istd> {
    return this.studentarr
  }
  getsingledata(std: Istd) {
    return this.studentarr.push(std)
  }
  updatestude(updateobj: Istd) {
    for (let i = 0; i < this.studentarr.length; i++) {
      if (this.studentarr[i].id === updateobj.id) {
        this.studentarr[i] = updateobj
     
        this._macservices.openmatsackbar(` is update data `,'close')
      }
      break;
    }
  }
  removobj(std: Istd) {
    let getindex = this.studentarr.findIndex(ele => ele.id === std.id)
    this.studentarr.splice(getindex, 1)
    this._macservices.openmatsackbar('remove  std data ','close')
  }
}
