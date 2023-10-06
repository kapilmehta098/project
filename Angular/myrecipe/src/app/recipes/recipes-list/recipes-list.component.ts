import { Component } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
  recipes: recipe[] = [
    new recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://c.ndtvimg.com/2019-04/tgoepg6_summer-2019-vegetarian-recipes_625x300_10_April_19.jpg'
    ),
  ];
  constructor() {}
}
