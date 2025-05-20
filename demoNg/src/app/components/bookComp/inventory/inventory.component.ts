import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { Book } from '../../../models/book.model';
import { BookServiceService } from '../../../services/book-service.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inventory',
  imports: [RouterModule,RouterOutlet],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
  providers: [BookServiceService]
})
export class InventoryComponent {

  books: Book[]=[];
  isLoading = true;
  error: string|null = null;

  constructor(private bookService:BookServiceService){}

  ngOnInit(): void{
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.isLoading = false;
      },
      error:(err)=>{
        this.error='Failed';
        this.isLoading=false;
        console.error(err);
      }
    })
  }

}
