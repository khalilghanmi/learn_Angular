import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompoComponent } from './test-compo/test-compo.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestCompoComponent,
    FirstComponent,
    CardComponent,
    AjoutComponent,
    ListComponent,
    NevbarComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
