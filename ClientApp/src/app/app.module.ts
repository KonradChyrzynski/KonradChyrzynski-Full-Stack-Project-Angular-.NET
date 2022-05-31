//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//COMPONENTS ARE LOCATED HERE
import { AppComponent } from './app.component';
import { PageSwapperComponent } from './page-swapper/page-swapper.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { FavoriteItemsComponent } from './favorite-items/favorite-items.component';
import { SignInComponent } from './user-admission/sign-in/sign-in.component';
import { UserAdmissionComponent } from './user-admission/user-admission.component';
import { LoginComponent } from './user-admission/login/login.component';
// Services
import { BearService } from './service/bear.service';
import { SendEmailComponent } from './send-email/send-email.component';

const routes: Routes = [
  { path: 'items', component: ItemCardComponent },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'favorite-items', component: FavoriteItemsComponent },
  { path: 'signin', component: UserAdmissionComponent },
  { path: 'login', component: UserAdmissionComponent },
  { path: 'send-email', component: SendEmailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCardComponent,
    PageSwapperComponent,
    FavoriteItemsComponent,
    SignInComponent,
    UserAdmissionComponent,
    LoginComponent,
    SendEmailComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
