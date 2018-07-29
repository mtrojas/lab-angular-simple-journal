import { Routes } from '@angular/router';

import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component';


export const routes: Routes = [
  { path: '', component: EntryListComponent },
  { path: 'entry/:id', component: SingleEntryComponent },
  { path: 'new', component: EntryFormComponent },
  { path: '**', redirectTo: '' }
];