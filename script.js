let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  const book = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("isRead").checked
  );
  myLibrary.push(book);
}

const displayBooks = () => {
  document.querySelector(".main-container").innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let container = document.createElement("div");
    container.classList.add(`book`);
    container.classList.add(`container${i}`);
    document.querySelector(".main-container").appendChild(container);

    let data = document.createElement("p");
    data.innerHTML = i;
    data.style.display = "none";
    document.querySelector(`.container${i}`).appendChild(data);

    let title = document.createElement("p");
    title.innerHTML = `Title: ${myLibrary[i].title}`;
    document.querySelector(`.container${i}`).appendChild(title);

    let author = document.createElement("p");
    author.innerHTML = `Author: ${myLibrary[i].author}`;
    document.querySelector(`.container${i}`).appendChild(author);

    let pages = document.createElement("p");
    pages.innerHTML = `Pages: ${myLibrary[i].pages}`;
    document.querySelector(`.container${i}`).appendChild(pages);

    let isRead = document.createElement("p");
    if (myLibrary[i].isRead) {
      isRead.innerHTML = `It is read`;
    } else {
      isRead.innerHTML = `Not read yet`;
    }
    document.querySelector(`.container${i}`).appendChild(isRead);

    let button = document.createElement("button");
    button.innerHTML = `Read the book ?`;
    button.classList.add("read-button");
    document.querySelector(`.container${i}`).appendChild(button);
    button.addEventListener("click", () => {
      if (myLibrary[i].isRead) {
        isRead.innerHTML = `Not read yet`;
        myLibrary[i].isRead = false;
      } else {
        isRead.innerHTML = `It is read`;
        myLibrary[i].isRead = true;
      }
    });

    let remove = document.createElement("button");
    remove.innerHTML = `Remove`;
    remove.classList.add("remove");
    document.querySelector(`.container${i}`).appendChild(remove);
    remove.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      displayBooks();
    });
  }
  document.querySelector("form").reset();
};

const bookButton = document.querySelector(".add");
bookButton.addEventListener("click", () => {
  addBookToLibrary();
  displayBooks();
});
