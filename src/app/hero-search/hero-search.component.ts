import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  // $ is a convention that it's an Observable (not an array)
  heroes$!: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  search(term: string): void {
    // push a search term into the observable stream
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // Wait 300 ms after keystroke
      debounceTime(300),
      // ignore if the term hasn't changed
      distinctUntilChanged(),
      // switch to new observable when term changes
      // also preserves the search order and cancels/discards all but the last
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

}
