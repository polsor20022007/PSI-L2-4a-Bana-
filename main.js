document.addEventListener("DOMContentLoaded", function () {

    const dateParagraph = document.createElement("p");
    const today = new Date();

    dateParagraph.textContent =
        "Data wygenerowania CV: " +
        today.toLocaleDateString("pl-PL");

    dateParagraph.style.fontSize = "12px";
    dateParagraph.style.color = "#666";
    dateParagraph.style.marginTop = "20px";

    document.body.appendChild(dateParagraph);


    const printButton = document.createElement("button");
    printButton.textContent = "Drukuj CV";
    printButton.style.marginTop = "20px";
    printButton.style.padding = "10px 15px";
    printButton.style.fontSize = "14px";
    printButton.style.cursor = "pointer";

    printButton.addEventListener("click", function () {
        window.print();
    });

    document.body.insertBefore(printButton, document.body.firstChild);


    const sections = document.querySelectorAll("h2");

    sections.forEach(section => {
        section.addEventListener("mouseenter", function () {
            section.style.color = "#0056a3";
        });

        section.addEventListener("mouseleave", function () {
            section.style.color = "";
        });
    });


    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.8s";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

});
