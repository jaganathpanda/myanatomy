import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snakBar:MatSnackBar) { }

  success(msg){
    this.success['panelClass']=['notification','success'];
   this.snakBar.open(msg,'',this.config);
  }

  config:MatSnackBarConfig={
  duration:3000,
  horizontalPosition:'right',
  verticalPosition:'top'
  }
}
