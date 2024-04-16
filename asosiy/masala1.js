class Booklist{
    constructor(books, favoriteBook){
        this.books = books
        this.favoriteBook = favoriteBook
    }

    addBook(title, author){
        this.books.push({title: title, muallif: author})
    }

    get fBook (){
        return `Favorite BOOK: ${this.favoriteBook}\n`
    }
    set fBook(datt){
        this.favoriteBook = datt
    }

    getBooksList(){
        for(let i = 0; i < this.books.length; i++){
            console.log(this.books[i].title, "      muallif: ", this.books[i].muallif)
        }
    }
}


let booklist = new Booklist([], "")

booklist.addBook("Harry Potter", "Joan Rouling")
booklist.addBook("Animal farm", "George Onwell")
booklist.addBook("The Kite Runner", "Khaled Hosseini")
booklist.addBook("Pride and Prejudice", "Jane Austen")
booklist.addBook("The Book Thief", " Markus Zusak")
booklist.addBook("1984", "George Orwell")

booklist.fBook = "Harry Potter"

console.log(booklist.fBook)

booklist.getBooksList()