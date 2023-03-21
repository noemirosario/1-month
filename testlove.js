// Definimos las respuestas correctas
const correctAnswers = ["b", "a", "b"];

const form = document.getElementById("loveTest");
const submitButton = document.querySelector("input[type='submit']");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitamos que el formulario se envíe por defecto
  const formData = new FormData(event.target); // Obtenemos los datos del formulario
  const userAnswers = Array.from(formData.values()); 

    const numCorrectAnswers  = userAnswers.reduce(function(acc, answer, index) {
    if (answer === correctAnswers[index]) {
    return acc + 1;
    } else {
    return acc;
    }
    }, 0);

    // Comprobamos si todas las respuestas son correctas
    if (numCorrectAnswers === correctAnswers.length) {

    window.location.href = "card.html";
    }
    });


    