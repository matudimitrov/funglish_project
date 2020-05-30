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
  { path: 'letter-b', component: LetterBComponent},
  { path: 'letter-b-info', component: LetterBInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
