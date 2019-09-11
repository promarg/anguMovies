//Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//External Modules

//Config
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Services
import { TmdbApiService } from './services/tmdb-api.service';

//Common Modules

//View Modules
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http'
import { OverviewComponent } from './overview/overview.component';

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
  ],
  providers: [TmdbApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
