import { Component, OnInit } from '@angular/core';
import { DataModel } from './data.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  hobbies = ['Videogames', 'Chess', 'Anime', 'Football'];
  model = new DataModel(1, 'Medamir', 'Jlidi', this.hobbies);
  submited = false;
  constructor() {}
  onSubmit() {
    this.submited = true;
  }

  ngOnInit(): void {}
}
