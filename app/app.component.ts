import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Recipe Box</h1>
      <ul>
        <li [class]="priorityColor(recipe)" *ngFor="let recipe of recipes">
          <h3>{{recipe.title}}</h3><button (click)="editRecipe(recipe)">Edit Recipe!</button>
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
    new Recipe("Chocolate Chip Cookies", "Mix Mix Mix", ["Milk", "Eggs", "Love"], 3),
    new Recipe("Potato Chip Cookies", "Mix Mix Mix", ["Milk", "Eggs", "Love"], 1),
    new Recipe("Tortilla Chip Cookies", "Mix Mix Mix", ["Milk", "Eggs", "Love"], 2)
  ];
  editRecipe(recipe) {
    alert(`You want to edit ${recipe.title}`);
  }
  priorityColor(recipe) {
    if (recipe.priority === 3){
      return "bg-danger";
    } else if (recipe.priority === 2){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}

export class Recipe {
  constructor(public title: string, public directions: string, public ingredients: string[], public priority: number){}
}
