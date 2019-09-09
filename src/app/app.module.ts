import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';



const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'synopsis', component: OverviewComponent },
];

export { ROUTES };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
