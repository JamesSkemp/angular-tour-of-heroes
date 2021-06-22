import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
