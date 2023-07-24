import { difficulty } from "./index.js"

export function randerGameBoard() {
    console.log("Загружаю страницу с игрой")
    const main = document.querySelector('.difficulty')
    main.innerHTML = `<h2>Выбран уровень сложности ${difficulty}</h2>`
};