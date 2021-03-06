import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  observable: Observable<string>;

  nomes: string[];
  // nomesFiltro: string[];
  // buscar(valor: string) {
  //   this.nomesFiltro = this.nomes.filter(nome =>
  //     nome.toLowerCase().includes(valor.toLowerCase())
  //   );
  // }

  // pessoas: any = [
  //   { id: 1, nome: "joao", salario: 5000 },
  //   { id: 2, nome: "maria", salario: 1000 },
  //   { id: 3, nome: "josé", salario: 2000 },
  //   { id: 4, nome: "pedro", salario: 3000 },
  //   { id: 5, nome: "felipe", salario: 10000 },
  //   { id: 6, nome: "carlos", salario: 800 }
  // ];

  // getValorTotal(): Number {
  //   return this.pessoas.reduce((soma, pessoa) => soma + pessoa.salario, 0);
  // }

  // buscarId(id) {
  //   return this.pessoas.find(pessoa => pessoa.id == id);
  // }

  // aumentarSalario(percentual) {
  //   this.pessoas.map(
  //     pessoa => (pessoa.salario += (pessoa.salario * percentual) / 100)
  //   );
  // }

  // verificaSalario(valor: number) {
  //   return this.pessoas.every(pessoa => pessoa.salario > valor);
  // }

  // buscaCampos(criterio: string) {
  //   return this.pessoas.filter(pessoa =>
  //     Object.keys(pessoa).some(chave =>
  //       pessoa[chave].toString.includes(criterio)
  //     )
  //   );
  // }

  ngOnInit() {
    const observable = new Observable(subscriber => {
      setInterval(() => {
        subscriber.next(this.makeid(5));
      }, 10000);
    });

    let lista: Array<string> = [];
    this.observable.subscribe({
      next(x) {
        lista.push(x);
      },
      error(err) {
        alert("ocorreu um erro" + err);
      }
    });
    this.nomes = lista;
  }
  enviar(valor: string) {
    this.nomes.push(valor);
  }
  makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVXZYWK0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
