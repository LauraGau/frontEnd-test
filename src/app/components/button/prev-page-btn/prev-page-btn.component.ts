import { Component, OnInit } from '@angular/core';
import {Disc} from '../../../Models/Disc';

@Component({
  selector: 'app-prev-page-btn',
  templateUrl: './prev-page-btn.component.html',
  styleUrls: ['./prev-page-btn.component.css']
})
export class PrevPageBtnComponent implements OnInit {

  private text: string;
  private randomDisc: Disc;
  private DiscArray: Disc[];

  constructor() { }

  ngOnInit() {
    this.text = ' << Prev page';
  }

}
