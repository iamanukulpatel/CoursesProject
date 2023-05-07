import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  //receiving data from parent component.

  @Input() all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedRadioButtonValue: string = 'All';

  //sending data to parent component.

  @Output() filterRadioButtonSelectorChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectorChanged.emit(this.selectedRadioButtonValue);
  }
}
