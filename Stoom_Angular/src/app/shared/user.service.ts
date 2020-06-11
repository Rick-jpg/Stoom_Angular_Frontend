import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:60734/api'

  formModel = this.fb.group({
    Username:['',Validators.required],
    Email: ['',Validators.email],
    Password: ['', [Validators.required, Validators.minLength(8)]]
    });

  LoginModel = this.fb.group({
    Username:[''],
    Password:['']
  });

  register(){
    var body={
      Username: this.formModel.value.Username,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Password
    };

    return this.http.post(this.BaseURI+ '/ApplicationUser/Register',body);
  }
  login(formData)
  {
    return this.http.post(this.BaseURI+ '/ApplicationUser/Login',formData);
  }
}
