import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from 'src/service/user.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errorMessage: string = "";

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      phoneNumber: [
        "",
        [
          Validators.required,
          Validators.pattern("^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$")
        ]
      ],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.errorMessage = "";
      console.log(this.form.value);
      this.userService.userRegistration(this.form.value);
    } else {
      this.errorMessage = "Form data missing";
    }
  }
}
