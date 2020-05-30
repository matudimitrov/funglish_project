import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LetterAComponent } from './letter-a/letter-a.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { WholeAlphabetComponent } from './whole-alphabet/whole-alphabet.component';
import {MatIconModule} from '@angular/material/icon';
import { WholeAlphabetInfoComponent } from './whole-alphabet-info/whole-alphabet-info.component';
import { VowelsComponent } from './vowels/vowels.component';
import { ConsonantsComponent } from './consonants/consonants.component';
import { ConsonantsInfoComponent } from './consonants-info/consonants-info.component';
import { VowelsInfoComponent } from './vowels-info/vowels-info.component';
import { LetterAInfoComponent } from './letter-a-info/letter-a-info.component';
import { LetterBComponent } from './letter-b/letter-b.component';
import { LetterBInfoComponent } from './letter-b-info/letter-b-info.component'





@NgModule({
  declarations: [
    AppComponent,
    LetterAComponent,
    InitialPageComponent,
    WholeAlphabetComponent,
    WholeAlphabetInfoComponent,
    VowelsComponent,
    ConsonantsComponent,
    ConsonantsInfoComponent,
    VowelsInfoComponent,
    LetterAInfoComponent,
    LetterBComponent,
    LetterBInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
