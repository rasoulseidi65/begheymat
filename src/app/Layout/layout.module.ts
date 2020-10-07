import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { IndexComponent } from './index/index.component';
import {SliderComponent} from './slider/slider.component';
import {NewProductsComponent} from './new-products/new-products.component';
import {AllProductsComponent} from './all-products/all-products.component';
import {CommentsUserComponent} from './comments-user/comments-user.component';

import {SharedmoduleModule} from "../SharedModule/sharedmodule.module";
import {RippleModule} from "primeng/ripple";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {SharedcomponentModule} from "../SharedComponent/sharedcomponent.module";
import { CartComponent } from './cart/cart.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";




@NgModule({
  declarations: [IndexComponent,
    SliderComponent,
    NewProductsComponent,
    AllProductsComponent,
    CommentsUserComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedmoduleModule,
    SharedcomponentModule,
    ReactiveFormsModule,
    RippleModule,
    CarouselModule,
    FormsModule,

    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatCardModule,
    MatTableModule,


  ],
  exports:[IndexComponent,
    SliderComponent,
    NewProductsComponent,
    AllProductsComponent,
    CommentsUserComponent,
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class LayoutModule { }
