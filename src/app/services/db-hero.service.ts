import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../hero'
import { environment } from 'src/environments/environment.development'
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class DbHeroService {

  url = "Superhero";
  superheroUrl = `${environment.apiUrl}/${this.url}`
  constructor(private http: HttpClient, private messageService: MessageService) { }

  public getSuperHero(): Observable<Hero[]> {
    this.messageService.add(`[GET] Making request to ${this.superheroUrl}`);
    return this.http.get<Hero[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateSuperHero(hero: Hero): Observable<Hero[]> {
    this.messageService.add(`[PUT] Making request to ${this.superheroUrl}`);
    return this.http.put<Hero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public deleteSuperHero(hero: Hero): Observable<Hero[]> {
    this.messageService.add(`[DELETE] Making request to ${this.superheroUrl}`);
    return this.http.delete<Hero[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`
    );
  }

  public createSuperHero(hero: Hero): Observable<Hero[]> {
    this.messageService.add(`[CREATE] Making request to ${this.superheroUrl}`);
    return this.http.post<Hero[]>(
      `${environment.apiUrl}/${this.url}`, hero
    );
  }
}
