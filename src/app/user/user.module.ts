import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderListComponent } from './order-list/order-list.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },

      {
        path: 'cart',
        component: CartComponent
      },

      {
        path: 'checkout',
        component: CheckoutComponent
      },

      {
        path: 'order-list',
        component: OrderListComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ProductListComponent, CartComponent, CheckoutComponent, OrderListComponent, HeaderComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
