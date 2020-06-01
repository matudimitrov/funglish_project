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
import { LetterBInfoComponent } from './letter-b-info/letter-b-info.component';
import { LetterAPronComponent } from './letter-a-pron/letter-a-pron.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { LetterATestComponent } from './letter-a-test/letter-a-test.component';
import {MatMenuModule} from '@angular/material/menu';
import { LetterBTestComponent } from './letter-b-test/letter-b-test.component';
import { LetterBPronComponent } from './letter-b-pron/letter-b-pron.component';
import { LetterDPronComponent } from './letter-d-pron/letter-d-pron.component';
import { LetterDTestComponent } from './letter-d-test/letter-d-test.component';
import { LetterDInfoComponent } from './letter-d-info/letter-d-info.component';
import { LetterDComponent } from './letter-d/letter-d.component';
import { LetterEComponent } from './letter-e/letter-e.component';
import { LetterEInfoComponent } from './letter-e-info/letter-e-info.component';
import { LetterETestComponent } from './letter-e-test/letter-e-test.component';
import { LetterEPronComponent } from './letter-e-pron/letter-e-pron.component';
import { FinalTestComponent } from './final-test/final-test.component';
import { TestResultComponent } from './test-result/test-result.component';
import { ConclusionComponent } from './conclusion/conclusion.component';






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
    LetterBInfoComponent,
    LetterAPronComponent,
    LetterATestComponent,
    LetterBTestComponent,
    LetterBPronComponent,
    LetterDPronComponent,
    LetterDTestComponent,
    LetterDInfoComponent,
    LetterDComponent,
    LetterEComponent,
    LetterEInfoComponent,
    LetterETestComponent,
    LetterEPronComponent,
    FinalTestComponent,
    TestResultComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    NgxAudioPlayerModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
