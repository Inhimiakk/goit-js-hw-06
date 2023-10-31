const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.children;
console.log('Number of categories:', categoryItems.length);

Array.from(categoryItems).forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    const categoryElements = item.lastElementChild.children;
    
    console.log('Категорія:', categoryName);
    console.log('Елементи:', categoryElements.length);
});