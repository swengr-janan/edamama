import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { CartComponent } from './components/cart/cart.component';
import { FiltersComponent } from './components/cart/filters/filters.component';
import { ProductListComponent } from './components/cart/product-list/product-list.component';
import { CartMainComponent } from './components/cart/cart-main/cart-main.component';
import { CartItemComponent } from './components/cart/cart-main/cart-item/cart-item.component';
import { ProductItemComponent } from './components/cart/product-list/product-item/product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CartComponent,
    FiltersComponent,
    ProductListComponent,
    CartMainComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
