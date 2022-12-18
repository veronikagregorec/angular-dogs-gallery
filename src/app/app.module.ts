import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DogsListComponent } from './components/dogsList/dogsList.component';
import { TitleComponent } from './components/title/title.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scrollToTop/scrollToTop.component';
import { DogInfoComponent } from './components/dogInfo/dogInfo.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    TitleComponent,
    ButtonComponent,
    FooterComponent,
    ScrollToTopComponent,
    DogInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
