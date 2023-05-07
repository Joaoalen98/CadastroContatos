import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.scss']
})
export class FormContatoComponent {
  @Input() form!: FormGroup;
  @Output() enviado = new EventEmitter<SubmitEvent>();
  @Input() titulo: string = "";

  enviaForm(e: SubmitEvent) {
    this.enviado.emit(e);
  }
}
