import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

	@ViewChild('txtProgress', { static: true }) txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

		this.cambioValor.emit(this.progreso);

		this.txtProgress.nativeElement.focus();
  }

  onChanges(newValue: number) {

		// let elementHTML: any = document.getElementsByName("progreso")[0];

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

		// elementHTML.value = this.progreso;
		this.txtProgress.nativeElement = this.progreso;

    this.cambioValor.emit(this.progreso);
  }
}
