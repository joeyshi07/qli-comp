import "../CSS/style.css";
import { articles } from "./articles.js";

const DOMSelectors = {
  header: document.querySelector("h1"),
  container: document.querySelector(".container"),
};

const placeholder = DOMSelectors.container;

function articleAdd(article) {
  placeholder.insertAdjacentHTML(
    "beforeend",
    `<a href="/article.html?title=${encodeURIComponent(
      article.title
    )}" class="card-link">
      <div class="card">
        <h2 class="card-header">${article.title}</h2>
        <h3 class="card-text">${article.description}</h3>
        <img src="${article.imageLink}" alt="Article image for ${
      article.title
    }" />
        <h3 class="card-artist">By: ${article.author}</h3>
      </div>
    </a>`
  );
}

function showArticles(articlesDisplayed) {
  placeholder.replaceChildren();
  articlesDisplayed.forEach((article) => articleAdd(article));
}

showArticles(articles);
