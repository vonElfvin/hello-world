import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isActive = false;
  post = {
    isFavorite: false,
  }

  onFavoriteClicked(isFavorite){
    console.log("Favorite klickad på för bövelen", isFavorite);
  }
}
