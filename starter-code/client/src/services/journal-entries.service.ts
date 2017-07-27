import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalEntries {

  constructor(private http: Http) { }

  getEntries() {
    return this.http.get('http://localhost:3000/api/journal-entries')
      .map((res) => res.json());
    }
  }
