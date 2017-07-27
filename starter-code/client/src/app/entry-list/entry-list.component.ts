import { Component, OnInit } from '@angular/core';
import { JournalEntries } from '../../services/journal-entries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {
  entries:Observable<Array<Object>>;
  constructor(private journalEntriesService: JournalEntries) { }

  ngOnInit() {
    this.entries = this.journalEntriesService.getEntries();
  }

}
