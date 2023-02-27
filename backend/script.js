let button = document.querySelector(".btn");
let UL = document.querySelector(".myUl");
// Contact Form
let contactForm = document.querySelector(".contact-form");

window.onload = function () {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        emailjs.sendForm("service_q2mq06p", "template_llbtlv9", e.target)
            .then(function () {
                alert("HORRRRAAAYYYY✨🎇🧨🧨🎎🎍You sent the Form!!!");
            }, function (error) {
                alert(error);
            });
        //console.error("Hey");
        //alert("Hello World")!
    });
}


button.addEventListener("click", () => {
    let extractedText = document.querySelector(".form-control").value;
    if (extractedText == "") {
        alert("Ist nichts drin🎇");
    }
    else {
        // alert(extractedText);
        let TextNote = document.createTextNode(extractedText);
        let listItem = document.createElement("li");
        listItem.appendChild(TextNote);

        listItem.classList.add("noDot");

        UL.appendChild(listItem);
        document.querySelector(".form-control").value = "";
    }
})