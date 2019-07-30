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
}
