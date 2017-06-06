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
      <hr>
      <div>
        <h3>Edit {{selectedRecipe.title}}</h3>
        <label>Title:</label>
        <input [(ngModel)]="selectedRecipe.title">
        <label>Priority:</label>
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="1"> 1 (Low)
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="2"> 2 (Medium)
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="3"> 3 (High)
      </div>
    </div>
  `
})




export class AppComponent {
  recipes: Recipe[] = [
    new Recipe("Chocolate Chip Cookies", "Mix Mix Mix", ["Milk", "Eggs", "Love"], 3),
    new Recipe("Potato Chip Cookies", "Mix Mix Mix", ["Milk", "Eggs", "Love"], 1),
    new Recipe("Tortilla Chip Cookies", "Mix Mix Mix", ["Milk", "Eggs", "Love"], 2)
  ];
  selectedRecipe: Recipe = this.recipes[0];

  editRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  priorityColor(recipe: Recipe) {
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
