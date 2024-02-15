import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("signUpForm") signUpForm !: NgForm
  title = 'TDForms';
  userInfo = {
    "userDetails": {
      "userName": 'nathan',
      "email": "Nt@gmail.co."
    },
    "secreteQuestion": "favorateBook",
    "answer": "woman",
    "issubscribed": true,
    "contactMode": "Email"
  }
  contactMode = [
    {moc: "email", id: 1},
    {moc: "phone", id: 2}
  ]

  // onSignUp(signUp: NgForm){
  //   if(signUp.valid){
  //     console.log(signUp)
  //     console.log(signUp.value);
  //   }
  // }
  content(eve: NgModel){
    if(eve.hasError('required')){
      return `this feild is required`
    }else if(eve.hasError('pattern')){
      return `incorrect pattern`
    } else if(eve.hasError('minlength')){
      return ` minimum length should be 6`
    }else if(eve.hasError('maxlength')){
      return ` maximum length should be 10`
    }else{
      return
    }
  }


  onSignUp(signForm: NgForm){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value)
    }
  }

  patchValue(){
      this.signUpForm.form.patchValue(this.userInfo)
  }
}
