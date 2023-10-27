const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

CreatMurkup(ingredients);

function CreatMurkup(arr) {
  const nodesArr = arr.map(item => {
    const liEl = document.createElement("li");
    liEl.textContent = item;
    liEl.dataset.class = "item";
    
    return liEl
  });

  list.append(...nodesArr);
}
