// console.log("video script added")

// 1 - Fetch , load and show Categories on html

// Create loadCategories

const loadCategories = () =>
{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
}

// create DisplayCategories
const displayCategories = (categories) =>
{

    const categoryContainer = document.getElementById('categories')
  
    categories.forEach((item) =>
   {
     
    // create a button

    const button = document.createElement('button')
    button.classList = 'btn btn-error';
    button.innerText = item.category;
     

    // add button to category container
    categoryContainer.append(button)

   } 
    
    )
    
   
}

loadCategories();