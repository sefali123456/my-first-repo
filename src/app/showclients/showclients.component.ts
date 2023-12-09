import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-showclients',
  templateUrl: './showclients.component.html',
  styleUrl: './showclients.component.css'
})
export class ShowclientsComponent {

  constructor(private _dialog: MatDialog) {}
    openAddEditEmpForm(){
      this._dialog.open(EmpAddEditComponent);
    
  }

}
