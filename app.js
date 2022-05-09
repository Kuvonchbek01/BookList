// const API_key = 'afbade79ea33afc7dfeabadb851b75d1'

// const API_url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=afbade79ea33afc7dfeabadb851b75d1'

// fetch(API_url).then((data) => {
//     return data.json()
// }).then((newData) => {
//     showWeather(newData)
// })

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

//UI class
class UI {
  static displayBooks() {
    const StoredBooks = []

    const books = StoredBooks

    books.forEach((book) => {
        UI.addBookToList(book)
    });
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td><a href='#' ><i class='fas fa-trash'></i></a></td>
        `;

    list.appendChild(row);
  }

  static clear() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#year").value = "";
  }

  static alert(text, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(text));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  static delete(el) {
    if (el.classList.contains("fa-trash")) {
      el.parentElement.parentElement.parentElement.remove();
    }
  }
}

// class Store {
//   static getBooks() {
//     let books;
//     if (localStorage.getItem("books") === null) {
//       books = [];
//     } else {
//       books = JSON.parse(localStorage.getItem(books));
//     }

//     return books;
//   }

//   static addBook(book) {
//     const books = Store.getBooks();

//     books.push(book);

//     localStorage.setItem("books", JSON.stringify(books));
//   }

//   static removeBook(year) {
//     const books = Store.getBooks();

//     books.forEach((book, index) => {
//       if (book.year === year) {
//         books.splice(index, 1);
//       }
//     });

//     localStorage.setItem("books", JSON.stringify(books));
//   }
// }

// Event display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event add book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const year = document.querySelector("#year").value;

  if (title === "" || author === "" || year === "") {
    UI.alert("Please fill in all fields", "danger");
    UI.clear();
  } else {
    const book = new Book(title, author, year);

    UI.addBookToList(book);

    //store
    // Store.addBook(book)

    UI.alert("Book Added!", "success");

    UI.clear();
  }
});

//removing a book

document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.delete(e.target);
  UI.alert("Book Removed!", "primary");
});
