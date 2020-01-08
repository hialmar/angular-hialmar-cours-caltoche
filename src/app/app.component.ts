import { Component } from '@angular/core';
import { Operation } from './operation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  operande1 = 0;
  operande2 = 0;
  resultat = 0;
  memoire = 0;

  operations: Operation[] = [];

  addition() {
    this.resultat = this.operande1 + this.operande2;
    this.ajoutOperation(this.operande1, this.operande2, '+', this.resultat);
  }

  soustraction() {
    this.resultat = this.operande1 - this.operande2;
    this.ajoutOperation(this.operande1, this.operande2, '-', this.resultat);
  }

  multiplication() {
    this.resultat = this.operande1 * this.operande2;
    this.ajoutOperation(this.operande1, this.operande2, '*', this.resultat);
  }

  division() {
    if (this.operande2 != 0) {
      this.resultat = this.operande1 / this.operande2;
      this.ajoutOperation(this.operande1, this.operande2, '/', this.resultat);
    }
  }

  mettreEnMemoire() {
    this.memoire = this.resultat;
  }

  rappelMemoire() {
    this.operande1 = this.memoire;
  }

  private ajoutOperation(operande1: number, operande2: number, operation: string,  resultat: number): void {
    let op = new Operation(operande1, operande2, operation, resultat);
    this.operations.unshift(op);
  }

  loadOperation(op: Operation) {
    this.operande1 = op.operande1;
    this.operande2 = op.operande2;
    this.resultat = op.resultat;
  }

}
