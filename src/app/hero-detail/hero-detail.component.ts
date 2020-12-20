import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Component, OnInit, Input } from '@angular/core';
@Input() hero: Hero;

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
