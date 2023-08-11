import { Component } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../services/message.service';
import { DbHeroService } from '../services/db-hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  constructor(private messageService: MessageService, private dbHeroService: DbHeroService) {

  }
  heroes: Hero[] = [];
  dbHeroes: Hero[] = [];
  selectedHero?: Hero

  initNewHero() {
    this.selectedHero = new Hero();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`[Select] Selected hero id=${hero.id}`);
    this.selectedHero = hero;

  }
  updateHeroList(hero: Hero[]) {
    this.dbHeroes = hero;
  }

  getHeroes() {
    this.dbHeroService
      .getSuperHero()
      .subscribe((result: Hero[]) => (this.dbHeroes = result));
  }

}


