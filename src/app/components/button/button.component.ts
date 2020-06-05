import { Component, OnInit } from '@angular/core';
import {Disc} from '../../Models/Disc';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  private text: string;

  constructor() { }

  ngOnInit() {
    this.text = 'Random vinyl';
  }

}
