import { Component, OnInit } from '@angular/core';
import { JournalEntries } from '../../services/journal-entries.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})

export class SingleEntryComponent implements OnInit {
  entrie: Object;
  constructor(private route:ActivatedRoute, private jServ: JournalEntries ) {
    route.params
      .mergeMap( a => jServ.get(a.id) )
      .subscribe( entrie => {
        console.log(entrie);
        this.entrie = entrie;
      })
  }

  ngOnInit() {
  }

}
