import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {TopMenuComponent} from "./top-menu/top-menu.component";
import {SharedmoduleModule} from "../SharedModule/sharedmodule.module";



@NgModule({
  // providers: [FooterComponent],
  declarations: [
    FooterComponent,TopMenuComponent
  ],
  imports: [
    CommonModule,
    SharedmoduleModule
  ],
  exports: [
    FooterComponent,TopMenuComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedcomponentModule { }
