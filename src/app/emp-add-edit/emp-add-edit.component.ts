import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.css'
})
export class EmpAddEditComponent {
  empForm: FormGroup;
  shortDesc: string[] =[
    'code discussion',
    'code deployment',
    'standup',
    'prod deployment'

  ];
constructor(private _fb:FormBuilder, private _empservice: EmployeeService,private _dialogRef:DialogRef<EmpAddEditComponent>){
  this.empForm = this._fb.group({
    EnterMeetingTopic:"",
    NumberOfEmployee:"",
    EmailAddress:"",
    ChooseDate:"",
    MeetingTime:"",
    shortDesc:"",
  });
}
onFormSubmit(){
  if(this.empForm.valid){
    //console.log(this.empForm.value);
    this ._empservice.addEmployee(this.empForm.value).subscribe({
      next: (val: any)=>{
        alert('Employee added successfully');
        this._dialogRef.close();
      },
      error:(err:any)=>{
        console.error(err);
      }
     
      
    })
  }
}
}
