import { Component, OnInit } from '@angular/core';
import { Istd } from 'src/app/shared/model/stud.interface';
import { StduentService } from 'src/app/shared/services/stduent.service';

@Component({
  selector: 'app-stud-table',
  templateUrl: './stud-table.component.html',
  styleUrls: ['./stud-table.component.scss']
})
export class StudTableComponent implements OnInit {
stdarr:Array<Istd>=[]
  constructor(private _stdservices:StduentService) { }

  ngOnInit(): void {
    this.stdarr=this._stdservices.getalldata()
  }

  onedit(std:Istd){
    this._stdservices.editssubject$.next(std)

  }
  onremovebtn(std:Istd){
    this._stdservices.removobj(std)


  }

}
