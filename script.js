
const recipes = [
    { name: "Chicken Salad", category: "Light Meals", ingredients: ["Chicken", "Lettuce", "Tomatoes"], steps: "Mix ingredients and serve.", image: "chicken_salad.jp/" },
    { name: "Spaghetti Bolognese", category: "Dinner Plans", ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce"], steps: "Cook spaghetti and mix with sauce.", image: "spaghetti.jpg" },
    { name: "Strawberry Cheesecake", category: "Desserts", ingredients: ["Strawberries", "Cream Cheese", "Graham Crackers"], steps: "Blend and chill before serving.", image: "cheesecake.jpg" },
    { name: "Vegetable Stir-fry", category: "Light Meals", ingredients: ["Broccoli", "Carrots", "Soy Sauce"], steps: "Stir-fry veggies in soy sauce.", image: "stir_fry.jpg" },
    { name: "Grilled Steak", category: "Dinner Plans", ingredients: ["Steak", "Salt", "Pepper"], steps: "Grill steak to desired doneness.", image: "steak.jpg" },
    { name: "Chocolate Cake", category: "Desserts", ingredients: ["Cocoa Powder", "Flour", "Sugar"], steps: "Bake at 350°F for 30 minutes.", image: "chocolate_cake.jpg" },
    { name: "Greek Salad", category: "Light Meals", ingredients: ["Feta Cheese", "Cucumber", "Olives"], steps: "Mix ingredients with olive oil.", image: "greek_salad.jpg" },
    { name: "BBQ Ribs", category: "Dinner Plans", ingredients: ["Ribs", "BBQ Sauce", "Garlic"], steps: "Marinate and grill for 2 hours.", image: "bbq_ribs.jpg" },
    { name: "Tiramisu", category: "Desserts", ingredients: ["Mascarpone", "Espresso", "Ladyfingers"], steps: "Layer ingredients and chill.", image: "tiramisu.jpg" },
    { name: "Caesar Salad", category: "Light Meals", ingredients: ["Lettuce", "Parmesan", "Croutons"], steps: "Toss with dressing and serve.", image: "caesar_salad.jpg" },
    { name: "Lasagna", category: "Dinner Plans", ingredients: ["Pasta Sheets", "Ricotta", "Tomato Sauce"], steps: "Layer ingredients and bake.", image: "lasagna.jpg" },
    { name: "Blueberry Muffins", category: "Desserts", ingredients: ["Blueberries", "Flour", "Eggs"], steps: "Mix and bake at 375°F.", image: "blueberry_muffins.jpg" },
    { name: "Avocado Toast", category: "Light Meals", ingredients: ["Bread", "Avocado", "Salt"], steps: "Mash avocado and spread on toast.", image: "avocado_toast.jpg" },
    { name: "Grilled Chicken", category: "Dinner Plans", ingredients: ["Chicken Breast", "Lemon", "Garlic"], steps: "Grill for 10 minutes per side.", image: "grilled_chicken.jpg" },
    { name: "Pumpkin Pie", category: "Desserts", ingredients: ["Pumpkin Puree", "Pie Crust", "Cinnamon"], steps: "Bake at 350°F for 45 minutes.", image: "pumpkin_pie.jpg" },
    { name: "Club Sandwich", category: "Light Meals", ingredients: ["Bread", "Turkey", "Bacon"], steps: "Layer ingredients and serve.", image: "club_sandwich.jpg" },
    { name: "Beef Stroganoff", category: "Dinner Plans", ingredients: ["Beef", "Mushrooms", "Sour Cream"], steps: "Cook with sauce and serve.", image: "beef_stroganoff.jpg" },
    { name: "Apple Pie", category: "Desserts", ingredients: ["Apples", "Pie Crust", "Sugar"], steps: "Bake at 375°F for 50 minutes.", image: "apple_pie.jpg" },
    { name: "Minestrone Soup", category: "Light Meals", ingredients: ["Beans", "Tomatoes", "Pasta"], steps: "Simmer for 30 minutes.", image: "minestrone_soup.jpg" },
    { name: "Chicken Alfredo", category: "Dinner Plans", ingredients: ["Chicken", "Fettuccine", "Cream"], steps: "Cook pasta and mix with sauce.", image: "chicken_alfredo.jpg" },
    { name: "Brownies", category: "Desserts", ingredients: ["Chocolate", "Flour", "Sugar"], steps: "Bake at 350°F for 25 minutes.", image: "brownies.jpg" },
    { name: "Caprese Salad", category: "Light Meals", ingredients: ["Tomato", "Mozzarella", "Basil"], steps: "Layer and drizzle with balsamic.", image: "caprese_salad.jpg" },
    { name: "Meatloaf", category: "Dinner Plans", ingredients: ["Ground Beef", "Eggs", "Breadcrumbs"], steps: "Bake at 375°F for 1 hour.", image: "meatloaf.jpg" },
    { name: "Lemon Bars", category: "Desserts", ingredients: ["Lemon", "Sugar", "Butter"], steps: "Bake and chill before serving.", image: "lemon_bars.jpg" },
    { name: "Shrimp Tacos", category: "Light Meals", ingredients: ["Shrimp", "Tortillas", "Cabbage"], steps: "Grill shrimp and serve in tortillas.", image: "shrimp_tacos.jpg" },
    { name: "Shepherd’s Pie", category: "Dinner Plans", ingredients: ["Ground Lamb", "Potatoes", "Carrots"], steps: "Bake at 375°F for 40 minutes.", image: "shepherds_pie.jpg" },
    { name: "Oreo Cheesecake", category: "Desserts", ingredients: ["Oreos", "Cream Cheese", "Sugar"], steps: "Mix, chill, and serve.", image: "oreo_cheesecake.jpg" },
    { name: "Cobb Salad", category: "Light Meals", ingredients: ["Lettuce", "Bacon", "Avocado"], steps: "Toss with dressing.", image: "cobb_salad.jpg" },
    { name: "Salmon Fillet", category: "Dinner Plans", ingredients: ["Salmon", "Dill", "Lemon"], steps: "Bake at 400°F for 15 minutes.", image: "salmon_fillet.jpg" },
    { name: "Carrot Cake", category: "Desserts", ingredients: ["Carrots", "Cinnamon", "Flour"], steps: "Bake at 350°F for 40 minutes.", image: "carrot_cake.jpg" },
    { name: "Gazpacho", category: "Light Meals", ingredients: ["Tomatoes", "Cucumber", "Peppers"], steps: "Blend and chill before serving.", image: "gazpacho.jpg" },
    { name: "Chicken Curry", category: "Dinner Plans", ingredients: ["Chicken", "Curry Powder", "Coconut Milk"], steps: "Simmer until chicken is cooked.", image: "chicken_curry.jpg" },
    { name: "Banana Bread", category: "Desserts", ingredients: ["Bananas", "Flour", "Sugar"], steps: "Bake at 350°F for 1 hour.", image: "banana_bread.jpg" },
    { name: "Salmon Fillet", category: "Dinner Plans", ingredients: ["Salmon", "Dill", "Lemon"], steps: "Bake at 400°F for 15 minutes.", image: "salmon_fillet.jpg" },
    { name: "Carrot Cake", category: "Desserts", ingredients: ["Carrots", "Cinnamon", "Flour"], steps: "Bake at 350°F for 40 minutes.", image: "carrot_cake.jpg" },
    { name: "Gazpacho", category: "Light Meals", ingredients: ["Tomatoes", "Cucumber", "Peppers"], steps: "Blend and chill before serving.", image: "gazpacho.jpg" },
    { name: "Chicken Curry", category: "Dinner Plans", ingredients: ["Chicken", "Curry Powder", "Coconut Milk"], steps: "Simmer until chicken is cooked.", image: "chicken_curry.jpg" },
    { name: "Airfryer Chicken Wings", category: "Dinner Plans", ingredients: ["Chicken Wings", "Garlic Powder", "Paprika"], steps: "Cook in airfryer at 380°F for 25 minutes.", image: "airfryer_chicken_wings.jpg" },
    { name: "Vegan Buddha Bowl", category: "Light Meals", ingredients: ["Quinoa", "Chickpeas", "Avocado"], steps: "Mix ingredients and serve with tahini dressing.", image: "buddha_bowl.jpg" },
    { name: "Gluten-Free Pancakes", category: "Desserts", ingredients: ["Almond Flour", "Eggs", "Banana"], steps: "Cook on a griddle until golden brown.", image: "gluten_free_pancakes.jpg" },
    { name: "Keto Avocado Salad", category: "Light Meals", ingredients: ["Avocado", "Spinach", "Olive Oil"], steps: "Mix ingredients and serve fresh.", image: "keto_avocado_salad.jpg" },
    { name: "Dairy-Free Smoothie", category: "Light Meals", ingredients: ["Banana", "Almond Milk", "Chia Seeds"], steps: "Blend until smooth.", image: "dairy_free_smoothie.jpg" },
    { name: "Spicy Tofu Stir-Fry", category: "Dinner Plans", ingredients: ["Tofu", "Soy Sauce", "Chili Flakes"], steps: "Stir-fry tofu and vegetables until crispy.", image: "spicy_tofu_stirfry.jpg" },
    { name: "Airfryer French Fries", category: "Light Meals", ingredients: ["Potatoes", "Olive Oil", "Salt"], steps: "Cook in airfryer at 400°F for 20 minutes.", image: "airfryer_fries.jpg" },
    { name: "Keto Garlic Butter Steak", category: "Dinner Plans", ingredients: ["Steak", "Garlic Butter", "Rosemary"], steps: "Grill steak to preferred doneness.", image: "keto_garlic_steak.jpg" },
    { name: "Sugar-Free Brownies", category: "Desserts", ingredients: ["Cocoa Powder", "Almond Flour", "Erythritol"], steps: "Bake at 350°F for 25 minutes.", image: "sugar_free_brownies.jpg" },
    { name: "Kid-Friendly Mac & Cheese", category: "Dinner Plans", ingredients: ["Pasta", "Cheese", "Milk"], steps: "Cook pasta and mix with cheese sauce.", image: "kid_friendly_mac_cheese.jpg" },
    { name: "Meal Prep Grilled Chicken", category: "Dinner Plans", ingredients: ["Chicken Breast", "Garlic", "Olive Oil"], steps: "Grill chicken and portion for meals.", image: "meal_prep_chicken.jpg" },
    { name: "One-Pot Lentil Soup", category: "Dinner Plans", ingredients: ["Lentils", "Carrots", "Onions"], steps: "Simmer ingredients until lentils are soft.", image: "one_pot_lentil_soup.jpg" },
    { name: "Comfort Food Meatloaf", category: "Dinner Plans", ingredients: ["Ground Beef", "Breadcrumbs", "Ketchup"], steps: "Bake at 375°F for 50 minutes.", image: "comfort_food_meatloaf.jpg" },
    { name: "Airfryer Mozzarella Sticks", category: "Light Meals", ingredients: ["Mozzarella", "Breadcrumbs", "Egg"], steps: "Cook in airfryer at 390°F for 10 minutes.", image: "airfryer_mozzarella_sticks.jpg" },
    { name: "Paleo Banana Bread", category: "Desserts", ingredients: ["Banana", "Coconut Flour", "Honey"], steps: "Bake at 350°F for 45 minutes.", image: "paleo_banana_bread.jpg" },
    { name: "Spicy Buffalo Cauliflower", category: "Light Meals", ingredients: ["Cauliflower", "Buffalo Sauce", "Garlic Powder"], steps: "Roast at 400°F for 25 minutes.", image: "spicy_buffalo_cauliflower.jpg" },
    { name: "Low-Carb Shrimp Stir-Fry", category: "Dinner Plans", ingredients: ["Shrimp", "Zucchini", "Garlic"], steps: "Stir-fry shrimp and vegetables until cooked.", image: "low_carb_shrimp_stirfry.jpg" },
    { name: "Airfryer Salmon", category: "Dinner Plans", ingredients: ["Salmon", "Lemon", "Dill"], steps: "Cook in airfryer at 380°F for 12 minutes.", image: "airfryer_salmon.jpg" },
    { name: "Family-Friendly Spaghetti Bolognese", category: "Dinner Plans", ingredients: ["Ground Beef", "Tomato Sauce", "Pasta"], steps: "Cook pasta and mix with sauce.", image: "family_friendly_spaghetti.jpg" },
    { name: "No-Cook Avocado Toast", category: "Light Meals", ingredients: ["Bread", "Avocado", "Salt"], steps: "Spread avocado on toast and season.", image: "no_cook_avocado_toast.jpg" },
    { name: "Airfryer Falafel", category: "Light Meals", ingredients: ["Chickpeas", "Garlic", "Parsley"], steps: "Cook in airfryer at 370°F for 15 minutes.", image: "airfryer_falafel.jpg" },
    { name: "Comfort Food Chicken Pot Pie", category: "Dinner Plans", ingredients: ["Chicken", "Carrots", "Pie Crust"], steps: "Bake at 375°F for 40 minutes.", image: "comfort_food_pot_pie.jpg" },
    { name: "Airfryer Sweet Potato Fries", category: "Light Meals", ingredients: ["Sweet Potatoes", "Olive Oil", "Salt"], steps: "Cook in airfryer at 400°F for 15 minutes.", image: "airfryer_sweet_potato_fries.jpg" },
];


let selectedFilters = [];

function toggleFilter(filter) {
    const index = selectedFilters.indexOf(filter);
    if (index === -1) {
        selectedFilters.push(filter);
    } else {
        selectedFilters.splice(index, 1);
    }
    updateFilterDisplay();
    filterRecipes();
}

function updateFilterDisplay() {
    const selectedFiltersContainer = document.getElementById("selected-filters");
    selectedFiltersContainer.innerHTML = "";

    selectedFilters.forEach(filter => {
        const filterTag = document.createElement("span");
        filterTag.classList.add("badge", "bg-primary", "m-1");
        filterTag.innerHTML = `${filter} <span class="text-white" onclick="removeFilter('${filter}')">&times;</span>`;
        selectedFiltersContainer.appendChild(filterTag);
    });
}

function removeFilter(filter) {
    selectedFilters = selectedFilters.filter(f => f !== filter);
    updateFilterDisplay();
    filterRecipes();
}

function filterRecipes() {
    let filteredRecipes = recipes;

    if (selectedFilters.length > 0) {
        filteredRecipes = recipes.filter(recipe =>
            selectedFilters.every(filter =>
                recipe.ingredients.includes(filter) || (Array.isArray(recipe.category) ? recipe.category.includes(filter) : recipe.category === filter)
            )
        );
    }

    displayRecipes(filteredRecipes);
}

function filterCategory(category) {
    document.querySelectorAll(".category-btn").forEach(button => button.classList.remove("active-category"));

    const activeButton = document.querySelector(`.category-btn[data-category="${category}"]`);
    if (activeButton) activeButton.classList.add("active-category");

    displayRecipes(recipes.filter(recipe => 
        Array.isArray(recipe.category) ? recipe.category.includes(category) : recipe.category === category
    ));
}

function displayRecipes(filteredRecipes = recipes) {
    const container = document.getElementById("recipe-cards");
    container.innerHTML = filteredRecipes.length
        ? filteredRecipes.map(recipe => `
            <div class="col-md-4 mb-4">
                <div class="card" onclick="showRecipe('${recipe.name}')">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.name}</h5>
                    </div>
                </div>
            </div>`).join("")
        : "<p>No recipes found for the selected filters.</p>";
}

function searchRecipes() {
    const query = document.getElementById("search").value.toLowerCase();
    displayRecipes(recipes.filter(recipe => recipe.name.toLowerCase().includes(query)));
}

function showRecipe(name) {
    const recipe = recipes.find(r => r.name === name);
    if (recipe) {
        alert(`${recipe.name}\n\nIngredients: ${recipe.ingredients.join(", ")}\n\nSteps: ${recipe.steps}`);
    } else {
        alert("Recipe not found.");
    }
}

document.addEventListener("DOMContentLoaded", () => displayRecipes());
