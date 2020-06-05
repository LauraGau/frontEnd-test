import {Component, Input, OnInit} from '@angular/core';
import {Disc} from '../../Models/Disc';
import {DiscsService} from '../../services/discs.service';


@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.css']
})
export class DiscComponent implements OnInit {
  @Input() disc: Disc;
  @Input() randomDisc: Disc;


  constructor() {}

  ngOnInit() {
 }

}
