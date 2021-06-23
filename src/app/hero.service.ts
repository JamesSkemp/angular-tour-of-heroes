import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  // By providing at the root level there's a single shared instance.
  // This shared instance is then injected into any class that asks for it.
  providedIn: 'root'
})
export class HeroService {

  // Angular will automatically inject the singleton MessageService.
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    // For now assume id is always correct
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  private heroesUrl = 'api/heroes';

  private log(message: string) {
    this.messageService.add(`HeroServices: ${message}`);
  }
}
