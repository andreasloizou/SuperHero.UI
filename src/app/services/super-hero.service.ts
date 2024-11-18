import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  // Code for when we DONT have an API and a Database
  //constructor() { }

  // Code for when we have an API and a Database
  constructor(private http: HttpClient) { }
  
  // Code for when we DONT have an API and a Database
  // public  getSuperHeroes() : SuperHero[] {
    //   let hero = new SuperHero();
    //   hero.id = 1;
    //   hero.name = "Spider Man";
    //   hero.firstName = "Peter";
    //   hero.lastName = "Parker";
    //   hero.place = "New York City";
    //   return [hero];
    // }
    
    // Code for when we have an API and a Database
    private url = "SuperHero";
    
    // Code for when we have an API and a Database
    public  getSuperHeroes() : Observable<SuperHero[]> {
      return this.http.get<SuperHero[]>(
        `${environment.apiUrl}/${this.url}`
        );
    }

  public  updateHero(hero: SuperHero) : Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
      );
  }

  public  createHero(hero: SuperHero) : Observable<SuperHero[]> {
    console.log("Service function createHero called");
    
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
      );
  }

  public  deleteHero(hero: SuperHero) : Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`
      );
  }

}
