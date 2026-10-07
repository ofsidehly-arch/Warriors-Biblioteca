const searchInput =
    document.getElementById("searchInput");

const books =
    document.querySelectorAll(".book-card");


searchInput.addEventListener("input", function () {

    const search =
        this.value
            .toLowerCase()
            .trim();


    books.forEach(function (book) {

        const title =
            book
                .getAttribute("data-title")
                .toLowerCase();


        if (title.includes(search)) {

            book.style.display = "";

        } else {

            book.style.display = "none";

        }

    });

});
