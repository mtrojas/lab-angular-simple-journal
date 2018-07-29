import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { JournalService } from '../services/journal.service';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entry: any = {}
  id: any

  constructor(
    private journalService: JournalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      this.id = params.id;
    })

    this.journalService.getOneEntry(this.id)
    .subscribe(entry => {
      this.entry = entry
    })
  }
}
