import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nomes: string[] = ["joao", "maria", "josé", "pedro", "felipe", "carlos"];
  nomesFiltro: string[];
  buscar(valor: string) {
    this.nomesFiltro = this.nomes.filter(nome =>
      nome.toLowerCase().includes(valor.toLowerCase())
    );
  }

  pessoas: any = [
    { id: 1, nome: "joao", salario: 5000 },
    { id: 2, nome: "maria", salario: 1000 },
    { id: 3, nome: "josé", salario: 2000 },
    { id: 4, nome: "pedro", salario: 3000 },
    { id: 5, nome: "felipe", salario: 10000 },
    { id: 6, nome: "carlos", salario: 800 }
  ];

  getValorTotal(): Number {
    return this.pessoas.reduce((soma, pessoa) => soma + pessoa.salario, 0);
  }

  buscarId(id) {
    return this.pessoas.find(pessoa => pessoa.id == id);
  }
}
