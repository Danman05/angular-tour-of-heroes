import { Component } from '@angular/core';
import { DbHeroService } from './services/db-hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour Of Heroes';
  heroes: Hero[] = [];
  constructor(private dbHeroService: DbHeroService) { }


}
