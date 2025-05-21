import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'details';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  get buttonClasses(): { [key: string]: boolean } {
    return {
      [`lib-button--${this.variant}`]: true,
      [`lib-button--${this.size}`]: true,
    };
  }

}
