import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarsService {

  constructor(private _matservice: MatSnackBar) { }
  openmatsackbar(msg: string, action: string) {
    this._matservice.open(msg, action, {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration:3000

    })
  }
}
