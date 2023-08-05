import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.particlenews.com/image.php?type=thumbnail_580x000&url=08AwN5_0nk6FMmc00'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.particlenews.com/image.php?type=thumbnail_580x000&url=08AwN5_0nk6FMmc00')
  ]

  constructor(){

  }
  ngOnInit(){
    
  }

}
