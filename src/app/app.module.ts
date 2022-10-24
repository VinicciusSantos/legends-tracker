import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { AppIconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { SearchComponent } from './components/search/search.component';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ButtonComponent,
    AppIconComponent,
    TagComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
