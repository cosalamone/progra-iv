import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgClass } from "../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, NgClass, RouterLink]
})

/*
El componente app formado por el apphtml, app cs y ts
app es uina expceion. e sun componente global. todo se renderiza dentro de app. los compoentes pueden ser paginas o componentes

*/
export class App {
  protected readonly title = signal('clase-02-ruteo-componentes');
}
