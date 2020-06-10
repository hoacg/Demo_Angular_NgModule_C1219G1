import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { UserListComponent } from './user-list/user-list.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },

  {
    path: 'product-add',
    component: ProductAddComponent
  },

  {
    path: 'product-update',
    component: ProductUpdateComponent
  },

  {
    path: 'orders',
    component: OrderListComponent
  },

  {
    path: 'users',
    component: UserListComponent
  }
]

@NgModule({
  declarations: [ProductListComponent, OrderListComponent, ProductAddComponent, ProductUpdateComponent, UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
