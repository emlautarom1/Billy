import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BillyService } from '../billy.service';
import { Participant } from '../model/participant';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
})
export class SummaryComponent implements OnInit {
  summary$!: Observable<Map<Participant, number>>;

  constructor(private billy: BillyService) { }

  ngOnInit() {
    this.summary$ = this.billy.getSummary();
  }

}
