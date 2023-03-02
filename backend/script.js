let button = document.querySelector(".btn");//Todolist Submit button
let UL = document.querySelector(".myUl");//UL in Todolist html
// Contact Form
let contactForm = document.querySelector(".contact-form");
//ContactForm algo
window.onload = function () {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        emailjs.sendForm("service_q2mq06p", "template_llbtlv9", e.target)
            .then(function () {
                Swal.fire({
                    title: "Horray!, You send a Form, we'll be back toyou ASAP",
                    text: "Successfully sent the Form!",
                    icon: "success",
                    confirmButtonColor: "black",
                    confirmButtonText: "Ok"
                }).then(() => {
                    contactForm.reset();
                });
            }, function (error) {
                Swal.fire({
                    title: "Oops...",
                    text: "Something went Wrong! Please try again later",
                    icon: "error",
                    confirmButtonColor: "black",
                    confirmButtonText: "Ok"
                });
            });
        contactForm.reset();
        //console.error("Hey");
        //alert("Hello World")!
    });
};


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
});

