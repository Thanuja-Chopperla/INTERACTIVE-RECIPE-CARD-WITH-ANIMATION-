const recipes = {
  chocolateCake: {
    image: "chocolate-cake.jpg",
    prepTime: "45 minutes",
    servings: "8 people",
    ingredients: [
      "1 cup sugar",
      "1/2 cup cocoa powder",
      "1 1/2 cups flour",
      "2 eggs",
      "1/2 cup butter"
    ],
    steps: [
      "Preheat oven to 350°F (180°C).",
      "Mix dry ingredients.",
      "Add eggs and butter.",
      "Pour into a pan and bake for 30 mins.",
      "Let it cool and serve!"
    ]
  },
  pasta: {
    image: "pasta.jpg",
    prepTime: "30 minutes",
    servings: "2 people",
    ingredients: [
      "200g pasta",
      "1/2 cup cream",
      "1 cup veggies",
      "Salt and pepper",
      "Olive oil"
    ],
    steps: [
      "Boil pasta with salt.",
      "Sauté vegetables in oil.",
      "Add cream and mix.",
      "Add boiled pasta and toss.",
      "Serve hot with cheese."
    ]
  },
  sandwich: {
    image: "sandwich.jpg",
    prepTime: "15 minutes",
    servings: "1 person",
    ingredients: [
      "2 slices bread",
      "Butter",
      "Cheese",
      "Tomato slices",
      "Salt and pepper"
    ],
    steps: [
      "Butter the bread slices.",
      "Add tomato and cheese.",
      "Sprinkle salt and pepper.",
      "Grill for 5 minutes.",
      "Cut and serve warm."
    ]
  },
  iceCream: {
    image: "icecream.jpg",
    prepTime: "4 hours (with freezing)",
    servings: "6 scoops",
    ingredients: [
      "2 cups milk",
      "1 cup cream",
      "1/2 cup sugar",
      "Vanilla extract"
    ],
    steps: [
      "Mix milk, cream, sugar, and vanilla.",
      "Whisk until smooth.",
      "Freeze for 2 hours, stir, freeze again.",
      "Scoop and serve chilled."
    ]
  },
  manchurian: {
    image: "manchurian.jpg",
    prepTime: "45 minutes",
    servings: "3 people",
    ingredients: [
      "1 cup grated cabbage & carrot",
      "2 tbsp corn flour",
      "Soy sauce, vinegar",
      "Ginger garlic paste",
      "Chilli sauce, spring onion"
    ],
    steps: [
      "Mix veggies & flour, make balls.",
      "Deep fry until golden.",
      "Prepare sauce with garlic & sauces.",
      "Add balls, mix well, garnish."
    ]
  },
  salad: {
    image: "salad.jpg",
    prepTime: "10 minutes",
    servings: "2 bowls",
    ingredients: [
      "Lettuce",
      "Tomato",
      "Cucumber",
      "Olive oil",
      "Salt, pepper"
    ],
    steps: [
      "Chop veggies.",
      "Toss with oil, salt, pepper.",
      "Serve chilled."
    ]
  },
  cupcake: {
    image: "cupcake.jpg",
    prepTime: "25 minutes",
    servings: "6 cupcakes",
    ingredients: [
      "1 cup flour",
      "1/2 cup sugar",
      "1/2 cup milk",
      "1 egg",
      "Strawberry essence"
    ],
    steps: [
      "Mix all ingredients.",
      "Pour into molds.",
      "Bake at 180°C for 15 mins.",
      "Cool and frost with cream."
    ]
  },
  pizza: {
    image: "pizza.jpg",
    prepTime: "1 hour",
    servings: "2 people",
    ingredients: [
      "Pizza base",
      "Cheese",
      "Tomato sauce",
      "Capsicum, onions",
      "Oregano, chilli flakes"
    ],
    steps: [
      "Spread sauce on base.",
      "Add veggies and cheese.",
      "Bake at 220°C for 10 mins.",
      "Serve hot with seasoning."
    ]
  }
};

let currentStep = 0;
let currentRecipeKey = "chocolateCake";

function loadRecipe() {
  currentRecipeKey = document.getElementById("recipeSelect").value;
  const recipe = recipes[currentRecipeKey];

  // Animate image
  const imageEl = document.getElementById("recipeImage");
  imageEl.src = recipe.image;
  imageEl.classList.remove("fade-in");
  void imageEl.offsetWidth;
  imageEl.classList.add("fade-in");

  // Animate text
  const prepTime = document.getElementById("prepTime");
  const servings = document.getElementById("servings");
  [prepTime, servings].forEach(el => {
    el.classList.remove("fade-in");
    void el.offsetWidth;
    el.classList.add("fade-in");
  });

  prepTime.textContent = recipe.prepTime;
  servings.textContent = recipe.servings;

  const ingredientsList = document.getElementById("ingredients");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientsList.appendChild(li);
  });

  const stepsList = document.getElementById("steps");
  stepsList.innerHTML = "";
  recipe.steps.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    stepsList.appendChild(li);
  });

  document.getElementById("current-step").textContent = "";
  currentStep = 0;
}

function toggleSection(id) {
  document.getElementById(id).classList.toggle("hidden");
}

function startCooking() {
  currentStep = 0;
  document.getElementById("current-step").textContent = recipes[currentRecipeKey].steps[currentStep];
}

function nextStep() {
  const steps = recipes[currentRecipeKey].steps;
  if (currentStep < steps.length - 1) {
    currentStep++;
    document.getElementById("current-step").textContent = steps[currentStep];
  } else {
    document.getElementById("current-step").textContent = "✅ You're done!";
  }
}

window.onload = loadRecipe;