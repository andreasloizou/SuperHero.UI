import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SuperHero.UI';

  
  heroes: SuperHero[] = [];   // Code for when we DONT have an API and a Database

  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService){}   // Code for both when we have and DONT have an API and a Database

  // Code for when we have an API and a Database
  ngOnInit() : void {
    this.superHeroService
    .getSuperHeroes()
    .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  // Code for when we DONT have an API and a Database
  // ngOnInit() : void {
  //   this.heroes = this.superHeroService.getSuperHeroes();
  //   console.log(this.heroes);
  // }

  updateHeroList(heroes: SuperHero[]){
    this.heroes = heroes;
  }

  initNewHero(){
    this.heroToEdit = new SuperHero();
  }

  editHero(hero:SuperHero){
    this.heroToEdit = hero;
  }
}
