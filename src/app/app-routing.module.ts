import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetterAComponent } from './letter-a/letter-a.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { WholeAlphabetComponent } from './whole-alphabet/whole-alphabet.component';
import { WholeAlphabetInfoComponent } from './whole-alphabet-info/whole-alphabet-info.component';
import { VowelsComponent } from './vowels/vowels.component';
import { ConsonantsComponent } from './consonants/consonants.component';
import { VowelsInfoComponent } from './vowels-info/vowels-info.component';
import { ConsonantsInfoComponent } from './consonants-info/consonants-info.component';
import { LetterAInfoComponent } from './letter-a-info/letter-a-info.component';
import { LetterBComponent } from './letter-b/letter-b.component';
import { LetterBInfoComponent } from './letter-b-info/letter-b-info.component';
import { LetterAPronComponent } from './letter-a-pron/letter-a-pron.component';
import { LetterATestComponent } from './letter-a-test/letter-a-test.component';
import { LetterBPronComponent } from './letter-b-pron/letter-b-pron.component';
import { LetterBTestComponent } from './letter-b-test/letter-b-test.component';
import { LetterDComponent } from './letter-d/letter-d.component';
import { LetterDInfoComponent } from './letter-d-info/letter-d-info.component';
import { LetterDPronComponent } from './letter-d-pron/letter-d-pron.component';
import { LetterDTestComponent } from './letter-d-test/letter-d-test.component';
import { LetterEComponent } from './letter-e/letter-e.component';
import { LetterEInfoComponent } from './letter-e-info/letter-e-info.component';
import { LetterEPronComponent } from './letter-e-pron/letter-e-pron.component';
import { LetterETestComponent } from './letter-e-test/letter-e-test.component';
import { FinalTestComponent } from './final-test/final-test.component';
import { TestResultComponent } from './test-result/test-result.component';
import { ConclusionComponent } from './conclusion/conclusion.component';


const routes: Routes = [
  { path: '', redirectTo: '/initial-page', pathMatch: 'full'},
  { path: 'initial-page', component: InitialPageComponent},
  { path: 'whole-alphabet', component: WholeAlphabetComponent},
  { path: "whole-alphabet-info", component: WholeAlphabetInfoComponent},
  { path: "vowels", component: VowelsComponent},
  { path: "vowels-info", component: VowelsInfoComponent},
  { path: "consonants", component: ConsonantsComponent},
  { path: "consonants-info", component: ConsonantsInfoComponent},
  { path: 'letter-a', component: LetterAComponent},
  { path: 'letter-a-info', component: LetterAInfoComponent},
  { path: 'letter-a-pron', component: LetterAPronComponent},
  { path: 'letter-a-test', component: LetterATestComponent},
  { path: 'letter-b', component: LetterBComponent},
  { path: 'letter-b-info', component: LetterBInfoComponent},
  { path: 'letter-b-pron', component: LetterBPronComponent},
  { path: 'letter-b-test', component: LetterBTestComponent},
  { path: 'letter-d', component: LetterDComponent},
  { path: 'letter-d-info', component: LetterDInfoComponent},
  { path: 'letter-d-pron', component: LetterDPronComponent},
  { path: 'letter-d-test', component: LetterDTestComponent},
  { path: 'letter-e', component: LetterEComponent},
  { path: 'letter-e-info', component: LetterEInfoComponent},
  { path: 'letter-e-pron', component: LetterEPronComponent},
  { path: 'letter-e-test', component: LetterETestComponent},
  { path: 'final-test', component: FinalTestComponent},
  { path: 'test-result', component: TestResultComponent},
  { path: 'conclusion', component: ConclusionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
