const arrOfQuote = [
    "There are two things a person should never be angry at, what they can help, and what they cannot.",
    "Courage is the first of human qualities because it is the quality which guarantees the others.",
    "Quality is not an act, it is a habit.",
    "Only the educated are free.",
    "Control thy passions lest they take vengence on thee.",
    "No man should bring children into the world who is unwilling to persevere to the end in their nature and education.",
    "Love is composed of a single soul inhabiting two bodies.",
    "People are like dirt. They can either nourish you and help you grow as a person or they can stunt your growth and make you wilt and die.",
    "Rhetoric is the art of ruling the minds of men.",
    "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
    "Of all the varieties of virtues, liberalism is the most beloved.",
    "Friendship is a single soul dwelling in two bodies.",
    "Nothing in the affairs of men is worthy of great anxiety.",
];

const body = document.body;

// h1
const h1 = document.createElement("h1");
h1.innerText = "Quote of the Day";
body.append(h1);
h1.style.color = "peru";

// div container
const div = document.createElement("div");
body.append(div);

// button
const button = document.createElement("button");
button.innerText = "⟳ Random Quote";
body.append(button)

// div styling
div.style.borer = "1px red solid";
div.style.background = "papayawhip";
div.style.width = "90%";
div.style.padding = "5%";
div.style.height = "25px";
div.style.borderRadius = "5px";
div.style.marginBottom = "15px";

// button styling
const butElement = body.querySelector("button");
butElement.innerText = "⟳ Random Quote";
butElement.style.color = "green";
butElement.style.backgroundColor = "lightgrey";
butElement.style.borderStyle = "none";
butElement.style.height = "30px";
butElement.style.width = "200px";
butElement.style.borderRadius = "5px";

function getQuote() {
    const rand = Math.floor(Math.random() * arrOfQuote.length);
    div.innerText = arrOfQuote[rand];
}
getQuote();

butElement.addEventListener("click", getQuote);
