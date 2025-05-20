export interface Book {
    id: number;
    bookName: string;
    authorId: number;
    isbn?: string;
    genre?: string;
    quantity: number
}