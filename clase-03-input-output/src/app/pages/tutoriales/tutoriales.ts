import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { ICard } from '../../interfaces/ICard';

@Component({
  selector: 'app-tutoriales',
  imports: [Card],
  templateUrl: './tutoriales.html',
  styleUrl: './tutoriales.css',
})
export class Tutoriales {
    public imagen1: string = 'img/image.png';
    public titulo1: string = 'titulo Tutoriales 1'
    public subtitulo1 : string = 'subtitulo Tutoriales 1';
    public link1: string = '/'
    public imagen2: string = 'img/image.png';
    public titulo2: string = 'titulo Tutoriales 2'
    public subtitulo2 : string = 'subtitulo Tutoriales 2';
    public link2: string = '/'

  public cards: ICard[] = [
    {img: this.imagen1, title: this.titulo1, subtitle: this.subtitulo1, link: this.link1}, 
    {img: this.imagen2, title: this.titulo2, subtitle: this.subtitulo2, link: this.link2}]
}
