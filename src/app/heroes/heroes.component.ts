import { Component } from "@angular/core";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html'
})
export class HeroesComponent{
    heroes: string[] = ['Hulk', 'Superman', 'Batman'];
    heroeBorrado: string = '';

    borrarUno(){
        this.heroeBorrado = this.heroes.shift() || '';
    }
}