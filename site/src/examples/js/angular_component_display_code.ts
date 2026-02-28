import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import IntlTelInput from "intl-tel-input/angular";
import "intl-tel-input/styles";

@Component({
  selector: "#app",
  template: `
    <form [formGroup]="fg" (ngSubmit)="handleSubmit()">
      <intl-tel-input
        #telInput
        formControlName="phone"
        name="phone"
        initialCountry="us"
        [loadUtils]="loadUtils"
      />
      <button type="submit">Validate</button>
      <div class="notice">
        <!-- Logic to determine the notice based on the validation result -->
      </div>
    </form>
  `,
  standalone: true,
  imports: [IntlTelInput, ReactiveFormsModule],
})
export class AppComponent implements OnInit {
  @ViewChild("telInput") telInput!: IntlTelInput;

  loadUtils = () => import("intl-tel-input/utils");

  fg: FormGroup = new FormGroup({
    phone: new FormControl<string>("", [Validators.required]),
  });

  isSubmitted = false;

  get phone() {
    return this.fg.get("phone");
  }

  ngOnInit(): void {
    this.phone?.valueChanges.subscribe(() => {
      this.isSubmitted = false;
    });
  }

  handleSubmit(): void {
    this.phone?.markAsTouched();
    if (this.fg.valid) {
      this.isSubmitted = true;
    }
  }
}
