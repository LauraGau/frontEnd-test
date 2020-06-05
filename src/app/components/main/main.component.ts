import {Component, Input, OnInit} from '@angular/core';
import {Disc} from '../../Models/Disc';
import {DiscsService} from '../../services/discs.service';
import {Pagination} from '../../Models/Pagination';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private discs: Disc[];
  clicked: boolean;
  private randomDisc: Disc;
  private urlPrevPage: string[];
  private pages: Pagination;
  private counter: number;

  constructor(private discService: DiscsService) { }

  ngOnInit() {
    this.getDiscs();
    this.clicked = false;
    this.counter = 0;
    this.urlPrevPage = [];
  }

  OnClick() {
    this.clicked = true;
  }

  OnClickList() {
    this.clicked = false;
  }

  getDiscs() {
    this.discService.getDiscs().subscribe(response => {
      this.discs = response.releases;
      this.pages = response.pagination;
    });
  }

  getRandom(discArray): Disc {
    if (discArray) {
      this.randomDisc = discArray[Math.random() * discArray.length | 0];
    }
    return this.randomDisc;
  }

  getNextPage() {
    this.discService.setUrl(this.pages.urls.next);
    this.urlPrevPage.push(this.pages.urls.next);
    this.getDiscs();
  }

  getPrevPage() {
    this.discService.setUrl(this.urlPrevPage[this.counter]);
    this.getDiscs();
  }
}
