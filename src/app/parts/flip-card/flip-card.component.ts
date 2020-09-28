import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {
  @Input() imageName: String = 'AHV Logo.png';
  @Input() title: String = 'Project';
  @Input() description: String = '';

  imagePath: String = '';

  constructor() { }

  ngOnInit(): void {
    this.imagePath = "../../../assets/images/" + this.imageName;
  }
}
