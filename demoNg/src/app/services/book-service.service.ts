import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private apiUrl = 'https://localhost:7252/api/IssueBook/';

  constructor(private http:HttpClient) { }

  getAllBooks(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

    // Email  
  sendEmail() {
    return this.http.get(this.apiUrl + 'SendEmailForPendingReturns', {
      responseType: 'text',
    });
  }

}
