import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JournalService } from '../services/journal.service'

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  entry: any = {}

  constructor(
    private journalService: JournalService,
    private router: Router
  ) { }

  createEntry(entry) {
    this.journalService.createEntry(this.entry)
      .subscribe(entry => {
        this.router.navigate([''])
      })
  }

  ngOnInit() {
  }

}
