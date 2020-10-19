const exibeFrase = (quote) => {
    const texto= document.getElementById("texto");
    texto.innerHTML= quote.quoteText;
    const autor= document.getElementById("autor");
    autor.innerHTML= quote.quoteAuthor;
};

const iniciar = async () => {
    const response = await fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random');
    const result = await response.json();
    exibeFrase(result);
};
document.addEventListener('DOMContentLoaded', iniciar);