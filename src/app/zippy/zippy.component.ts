import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  expanded : boolean;
  @Input('title') title: string;
  constructor() { }

  ngOnInit() {
  }

}
