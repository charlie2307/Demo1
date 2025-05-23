import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookServiceService } from '../services/book-service.service';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  books: any[] = [];

  constructor(private BookService: BookServiceService,private cardService:CardService) {}


  ngOnInit(): void {
    this.BookService.getBooks().subscribe(
      (data) => {
        this.books = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    const carouselElement = document.getElementById('bookCarousel');

    // if (carouselElement) {
    //   const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement, {
    //     interval: 4000,
    //     ride: 'carousel'
    //   });
    // }
  }

  addToCart(item: any) {
    this.cardService.addToCart(item);
  }

  goToCart() {
    // Use routing to go to cart component
  }
}
