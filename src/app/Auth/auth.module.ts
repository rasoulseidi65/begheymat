import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import {SharedcomponentModule} from "../SharedComponent/sharedcomponent.module";
import {SharedmoduleModule} from "../SharedModule/sharedmodule.module";
import {MatCardModule} from "@angular/material/card";
import {NgOtpInputModule} from "ng-otp-input";


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedcomponentModule,
    SharedmoduleModule,
    MatCardModule,
    NgOtpInputModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AuthModule { }
