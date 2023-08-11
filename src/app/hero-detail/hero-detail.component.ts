import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';
import { DbHeroService } from '../services/db-hero.service';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  @Input() hero?: Hero;
  @Output() heroesUpdated = new EventEmitter<Hero[]>();
  constructor(private dbHeroService: DbHeroService) { }

  updateHero(hero: Hero) {
    this.dbHeroService
      .updateSuperHero(hero)
      .subscribe((heroes: Hero[]) => this.heroesUpdated.emit(heroes));
  }
  deleteHero(hero: Hero) {
    this.dbHeroService
      .deleteSuperHero(hero)
      .subscribe((heroes: Hero[]) => this.heroesUpdated.emit(heroes));
  }
  createHero(hero: Hero) {
    this.dbHeroService
      .createSuperHero(hero)
      .subscribe((heroes: Hero[]) => this.heroesUpdated.emit(heroes));

  }
}

