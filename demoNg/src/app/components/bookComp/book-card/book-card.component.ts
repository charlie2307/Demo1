import { Component, Input } from '@angular/core';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() book: Book | undefined;
}
