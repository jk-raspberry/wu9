import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  richtig = false;
  falsch = false;
  richtig_zwei = false;
  falsch_zwei = false;
  immernoch_falsch_variable = false;
  punktestand = 0;
  frage = 1;
  richtigeantwort() {
    this.richtig = true;
    this.falsch = false;
    this.punktestand = this.punktestand + 1; //richtig
  }
  falscheantwort() {
    this.richtig = false;
    this.falsch = true;
    this.punktestand = this.punktestand - 1; //falsch
  }

  richtig_schliessen() {
    this.richtig = false;
    this.falsch = false;
    this.richtig_zwei = false;
    this.falsch_zwei = false;
    document.getElementById('ant1').style.visibility = 'collapse';
    document.getElementById('ant2').style.visibility = 'collapse';
    document.getElementById('ant3').style.visibility = 'collapse';
    document.getElementById('ant4').style.visibility = 'collapse';
    this.frage = this.frage + 1;
    document.getElementById('ant' + this.frage).style.visibility = 'visible';
    if (this.frage >= 5) {
      //window.alert('test');
      document.getElementById('end').style.visibility = 'collapse';
      document.getElementById('counter').style.visibility = 'collapse';
      document.getElementById('frage').style.visibility = 'collapse';
    }
  }
  falsch_schliessen() {
    this.richtig = false;
    this.falsch = false;
    this.richtig_zwei = false;
    this.falsch_zwei = false;
    document.getElementById('eins').style.visibility = 'visible';
    document.getElementById('zwei').style.visibility = 'collapse';
    document.getElementById('drei').style.visibility = 'collapse';
    document.getElementById('vier').style.visibility = 'collapse';
    document.getElementById('counter').textContent = '1';
  }
  Frageaendern1() {
    document.getElementById('eins').style.visibility = 'visible';
    document.getElementById('zwei').style.visibility = 'collapse';
    document.getElementById('drei').style.visibility = 'collapse';
    document.getElementById('vier').style.visibility = 'collapse';
    document.getElementById('counter').textContent = '1';
  }
  Frageaendern2() {
    document.getElementById('eins').style.visibility = 'collapse';
    document.getElementById('zwei').style.visibility = 'visible';
    document.getElementById('drei').style.visibility = 'collapse';
    document.getElementById('vier').style.visibility = 'collapse';
    document.getElementById('counter').textContent = '2';
  }
  Frageaendern3() {
    document.getElementById('eins').style.visibility = 'collapse';
    document.getElementById('zwei').style.visibility = 'collapse';
    document.getElementById('drei').style.visibility = 'visible';
    document.getElementById('vier').style.visibility = 'collapse';
    document.getElementById('counter').textContent = '3';
  }
  Frageaendern4() {
    document.getElementById('eins').style.visibility = 'collapse';
    document.getElementById('zwei').style.visibility = 'collapse';
    document.getElementById('drei').style.visibility = 'collapse';
    document.getElementById('vier').style.visibility = 'visible';
    document.getElementById('counter').textContent = '4';
  }
  constructor() {}
}
