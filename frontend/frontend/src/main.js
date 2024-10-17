import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

const fullText =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore minus odit a quas distinctio sapiente cum! Saepe officiis commodi omnis id, placeat dolor quaerat reprehenderit veniam dolorum tempora deserunt accusamus.";
const shortText = fullText.substring(0, 20) + "...";

const ingredientsElement = document.getElementById("card-ingredients");
const mehrElement = document.getElementById("card-mehr");

ingredientsElement.textContent = shortText;

mehrElement.addEventListener("click", function () {
  if (ingredientsElement.textContent === shortText) {
    ingredientsElement.textContent = fullText;
    mehrElement.textContent = "Weniger...";
  } else {
    ingredientsElement.textContent = shortText;
    mehrElement.textContent = "Mehr...";
  }
});
