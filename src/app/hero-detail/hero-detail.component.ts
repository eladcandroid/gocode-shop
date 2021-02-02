import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  @Output() shouted = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onShout() {
    this.shouted.emit(`HI from ${this.hero?.name}`);
  }


}
