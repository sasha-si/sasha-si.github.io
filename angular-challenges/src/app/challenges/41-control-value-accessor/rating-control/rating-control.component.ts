import { Component } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-rating-control',
  templateUrl: 'rating-control.component.html',
  styleUrls: ['rating-control.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RatingControlComponent,
    multi: true
  }],
})
export class RatingControlComponent implements ControlValueAccessor {
  value: number | null = null;

  private _onChange = (value: number) => {};
  private _onTouched = () => {};//unused due to particularity of the control of the form


  setRating(index: number): void {
    this.writeValue(index + 1);
    this._onChange(index + 1);
  }

  isStarActive(index: number, value: number | null): boolean {
    return value ? index < value : false;
  }

  //ControlValueAccessor methods
  writeValue(index: number): void {
    this.value = index;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
}
