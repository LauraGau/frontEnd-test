import { Component, OnInit } from '@angular/core';
import {Disc} from '../../../Models/Disc';

@Component({
  selector: 'app-next-page-btn',
  templateUrl: './next-page-btn.component.html',
  styleUrls: ['./next-page-btn.component.css']
})
export class NextPageBtnComponent implements OnInit {

  private text: string;
  private randomDisc: Disc;
  private DiscArray: Disc[];

  constructor() { }

  ngOnInit() {
    this.text = 'Next page >>';
  }

}
