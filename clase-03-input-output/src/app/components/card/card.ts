import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  public img = input<string>() ;
  public title = input<string>()
  public subtitle= input<string>()
  public link = input<string>();
}
