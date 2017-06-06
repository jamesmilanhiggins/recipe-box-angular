import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Recipe Box</h1>
      <ul>
        <li *ngFor="let recipe of recipes">
          <h3>{{recipe.title}}</h3>
          <p>Ingredients:<p>
          <ul>
            <li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li>
          </ul>
          <p>{{recipe.directions}}</p>
        </li>
      </ul>
    </div>
  `
})




export class AppComponent {
  recipes: Recipe[] = [
    new Recipe("Chocolate Chip Cookies", "Mix Mix Mix", ["Milk", "Eggs", "Love"]),
    new Recipe("Potato Chip Cookies", "Mix Mix Mix", ["Milk", "Eggs", "Love"])
  ];
}

export class Recipe {
  constructor(public title: string, public directions: string, public ingredients: string[]){}
}
