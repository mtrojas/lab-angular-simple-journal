import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';

import { JournalService } from './services/journal.service';

import { routes } from './routes';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component'; 

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
