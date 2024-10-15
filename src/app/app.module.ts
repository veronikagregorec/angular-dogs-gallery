import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DogsListComponent } from './components/dogsList/dogsList.component';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopButtonComponent } from './components/scrollToTopButton/scrollToTopButton.component';
import { DogInfoComponent } from './components/dogInfo/dogInfo.component';
import { EscapeKeyboardButtonComponent } from './components/escapeKeyboardButton/escapeKeyboardButton.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    TitleComponent,
    FooterComponent,
    ScrollToTopButtonComponent,
    DogInfoComponent,
    EscapeKeyboardButtonComponent
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
