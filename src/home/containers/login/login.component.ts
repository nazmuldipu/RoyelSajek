import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage: string = "";

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      phoneNumber: [
        "",
        [
          Validators.required,
          Validators.pattern("^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$")
        ]
      ],
      password: ["", Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.errorMessage = "";
      console.log(this.form.value);
      this.authService
        .authenticate(
          this.form.controls.phoneNumber.value,
          this.form.controls.password.value
        )
        .subscribe(
          data => {
            console.log(data);
            this.authService.saveToken(data, "");
          },
          error => {
            this.errorMessage = "User Id or password error";
          }
        );
    } else {
      this.errorMessage = "Form data missing";
    }
  }
}
