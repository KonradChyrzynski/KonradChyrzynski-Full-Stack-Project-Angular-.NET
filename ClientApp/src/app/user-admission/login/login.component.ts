import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule} from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form : FormGroup

  constructor(private formbuilder: FormBuilder, private loginService: LoginService) {
    this.form = this.createFormGroupWithBuilderAndModel(formbuilder);
  };

  createFormGroupWithBuilderAndModel(formbuilder: FormBuilder){
    return formbuilder.group({
      LoginUserName: '',
      LoginPassword: '',
    });
  }


  ngOnInit(): void {
  }

  onSubmit() {
    const results = Object.assign({}, this.form.value);
    this.loginService.login(results).subscribe(
      data => console.log("Succes", data),
      error => console.error("Error", error)
    )
    console.log(results);
  }

}
