import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-home',
  template: `
    <div style="background: url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" class="jumbotron bg-cover text-white">
      <div class="container py-5 text-center">
        <h1 class="display-4 font-weight-bold">KWM Nachhilfe-Plattform</h1>
        <p class="font-italic mb-0">Willkommen auf der exklusiven Nachhilfe-Plattform von KWM!</p>
        <br>
        <a style= "color: white" routerLink="../offers" class="button-nachgemacht">
          Nachhilfeangebote durchsuchen
        </a>
      </div>
    </div>

    <!-- For Demo Purpose -->
    <div class="container py-5">
      <h2 class="h3 font-weight-bold">Liebe/r Student/in!</h2>
      <div class="row">
        <div class="col-lg-10 mb-4">
          <p class="font-italic text-muted">Du befindest dich gerade auf der KWM-Nachhilfeplattform
          die ich im Zuge der Lehrveranstaltung "Web-Entwicklung: Architekturen und Frameworks
          entwickeln musste. Diese Plattform wurde mit Liebe und viel Mühe erstellt, deswegen hoffe ich, dass
          du ein für dich passendes Nachhilfenangebot finden wirst. Viel Spaß!</p>
        </div>
      </div>
    </div>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
