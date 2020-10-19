const exibeFrase= (quote)=> {
    const texto= document.getElementById("texto");
    texto.innerHTML= quote.quoteText;
    const autor= document.getElementById("autor");
    autor.innerHTML= quote.quoteAuthor;
};

const urlFraseAleatoria= ()=> {
    const urlFrase= 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
    return urlFrase;
};

const iniciar = async ()=> {
    const url= urlFraseAleatoria();
    const response = await fetch(url);
    const result = await response.json();
    exibeFrase(result);
};
document.addEventListener('DOMContentLoaded', iniciar);