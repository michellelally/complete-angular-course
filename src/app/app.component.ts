import { Component } from '@angular/core';
import { FavouriteChangeEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavourite: true
  }

  onFavouriteChange(eventArgs: FavouriteChangeEventArgs) {
    console.log("Favourite Changed: ", eventArgs);
  }
}
