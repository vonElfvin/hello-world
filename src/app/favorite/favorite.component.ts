import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isSelected : boolean;
  @Output() changed = new EventEmitter();

  ngOnInit() {
  }


  onFavoriteClicked(){
    this.isSelected = !this.isSelected;
    this.changed.emit(this.isSelected);
  }
}
