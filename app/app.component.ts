import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Recipe Box</h1>
      <ul>
        <li *ngFor="let recipe of recipes">
          <h3 [class]="priorityColor(recipe)">{{recipe.title}}</h3><button (click)="editRecipe(recipe)">Edit Recipe!</button>
          <p>Ingredients:<p>
          <ul>
            <li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li>
          </ul>
          <p>{{recipe.directions}}</p>
        </li>
      </ul>
      <hr>
      <div *ngIf="selectedRecipe">
        <h3>Edit {{selectedRecipe.title}}</h3>
        <label>Title:</label>
        <input [(ngModel)]="selectedRecipe.title"><br>
        <label>Priority:</label>
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="1"> 1 (Low)
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="2"> 2 (Medium)
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="3"> 3 (High)<br>
        <button (click)="finishedEditing()">Done</button>
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
  selectedRecipe = null;

  editRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  finishedEditing(){
    this.selectedRecipe = null;
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
