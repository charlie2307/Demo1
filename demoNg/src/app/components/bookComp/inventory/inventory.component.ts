import { Component, Input, OnInit } from '@angular/core';
import { BookServiceService } from '../../../services/book-service.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
  providers: [BookServiceService]
})
export class InventoryComponent implements OnInit {
  Books: any[] = [];

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe({
      next: data => this.Books = data,
      //error: err => console.error(err)
    });

  }
}