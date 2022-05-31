import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EnrollmentService } from '../../service/enrollment.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup
  gender: any;

  constructor(private formbuilder: FormBuilder, private enrollmentService: EnrollmentService) {
    this.form = this.createFormGroupWithBuilderAndModel(formbuilder);
  };

  createFormGroupWithBuilderAndModel(formbuilder: FormBuilder){
    return formbuilder.group({
      userName: '',
      password: '',
      phone: '',
      eMail: '',
      gender: this.gender
    });
  }

  radioChangeHandler(event: any){
    this.gender =  event.target.value;
  }

  onSubmit() {
    const results = Object.assign({}, this.form.value);
    this.enrollmentService.enroll(results).subscribe(
      data => console.log("Succes", data),
      error => console.error("Error", error)
    )
    console.log(results);
  }

  allowToEnterOnlyNumbers(event : any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  ngOnInit(): void {
  }

}
