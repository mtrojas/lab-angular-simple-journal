import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  url = 'http://localhost:3000/api/journal-entries/'

  constructor(private http: Http) { }

  getJournalEntries() {
    return this.http.get(this.url)
      .pipe(map((res: Response) => res.json()))
  }

  getOneEntry(id) {
    return this.http.get(this.url + id)
      .pipe(map((res: Response) => res.json()))
  }

  createEntry(entry) {
    return this.http.post(this.url, entry)
      .pipe(map((res: Response) => res.json()))
  }
  
}
