export class Operation {
  constructor(public operande1: number, public operande2: number, private operation: string, public resultat: number) {}

  toString(): string {
    return ''+this.operande1+' '+this.operation+' '+
          this.operande2+' = '+this.resultat;
  }
}