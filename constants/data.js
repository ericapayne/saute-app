import icons from "./icons"
import images from "./images"


const recommendedRecipes = [
    {
        id: 1,
        name: "Grilled Cheese",
        image: images.grilledCheese,
        duration: "10 mins",
        serving: 1,
        isBookmark: false,
        equipment: "pan, spatula",
        category: "Sandwich",

        instructions: [
            {
                id: 11,
                step: "On a cutting board, butter each piece of bread with butter on one side."
            },{
                id: 22,
                step: "Flip the bread over and spread each piece of bread with mayonnaise."
            },
            {
                id: 33,
                step: "Place the cheese on the buttered side of one piece of bread. Top it with the second piece of bread, mayonnaise side out."
            },
            {
                id: 44,
                step: "Heat a nonstick pan over medium low heat."
            },
            {
                id: 55,
                step: "Place the sandwich on the pan, mayonnaise side down."
            },
            {
                id: 66,
                step: "Using a spatula, flip the sandwich over and continue cooking until golden brown, about 2-3 minutes."
            },
            {
                id: 77,
                step: "Enjoy!"
            }
    ],
        
        ingredients: [
            {
                id: 1,
                icon: icons.bread,
                description: "Sourdough Bread",
                quantity: "2 slices"
            },
            {
                id: 2,
                icon: icons.butter,
                description: "Unsalted Butter",
                quantity: "1 1/2 tbs"
            },
            {
                id: 3,
                icon: icons.mayo,
                description: "Mayonnaise",
                quantity: "1 1/2 tbs"
            },
            {
                id: 4,
                icon: icons.cheese,
                description: "Cheddar Cheese",
                quantity: "3 Slices"
            },
            

        ],
       
        
        
    },
    {
        id: 2,
        name: "Slow Cooker Shredded Chicken Tacos",
        image: images.sCSCTacos,
        duration: "8 hours",
        serving: 11,
        isBookmark: true,
        category: "Family",

        instructions: [],
        
        
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Breast",
                quantity: "3lbs"
            },
            {
                id: 2,
                
                description: "Salsa",
                quantity: "16oz"
            },
            {
                id: 3,
                
                description: "Limes",
                quantity: "2"
            },
            {
                id: 4,
                
                description: "Taco Seasoning",
                quantity: "1pkg"
            },
            {
                id: 5,
                
                description: "Fresh Cilantro",
                quantity: "3 tsp"
            },
            {
                id: 6,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 7,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },
            

        ],
        
        
        
    },
    {
        id: 3,
        name: "One Pot Garlic Parmesan Pasta",
        image: images.gpp,
        duration: "39 mins",
        serving: 4,
        isBookmark: true,
        category: "Pasta",
        instructions: [],
        
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "4"
            },
            {
                id: 2,
                
                description: "Chicken Broth",
                quantity: "2 cups"
            },
            {
                id: 3,
                
                description: "Cup of Milk",
                quantity: "1"
            },
            {
                id: 4,
                
                description: "Grated Parmesan",
                quantity: "1/4 cup"
            },
            {
                id: 5,
                
                description: "Fresh Parsley Chopped",
                quantity: "2 tbs"
            },
            {
                id: 6,
                
                description: "fettuccine",
                quantity: "8oz"
            },
            {
                id: 7,
                icon: icons.butter,
                description: "Unsalted Butter",
                quantity: "2 tbs"
            },
            {
                id: 8,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 9,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },


        ]
        
    },
    // {
    //     id: 4,
    //     name: "Nasi Lemak",
       
    //     duration: "1 hour",
    //     serving: 10,
    //     isBookmark: true,
    //     category: "Local",
        
    //     ingredients: [
    //         {
    //             id: 1,
    //             icon: icons.chilli,
    //             description: "Dried Chilli",
    //             quantity: "30g"
    //         },
    //         {
    //             id: 2,
    //             icon: icons.garlic,
    //             description: "Garlic cloves",
    //             quantity: "3"
    //         },
    //         {
    //             id: 3,
    //             icon: icons.egg,
    //             description: "Egg",
    //             quantity: "10"
    //         },
    //         {
    //             id: 4,
    //             icon: icons.rice,
    //             description: "rice",
    //             quantity: "1kg"
    //         },
    //         {
    //             id: 5,
    //             icon: icons.anchovy,
    //             description: "Dried anchovies",
    //             quantity: "3 cups"
    //         },


    //     ]
        
    // },

]

const favoriteRecipes = [

    {
        id: 2,
        name: "Slow Cooker Shredded Chicken Tacos",
        image: images.sCSCTacos,
        duration: "8 hours",
        serving: 11,
        isBookmark: true,
        category: "Family",

        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Breast",
                quantity: "3lbs"
            },
            {
                id: 2,

                description: "Salsa",
                quantity: "16oz"
            },
            {
                id: 3,

                description: "Limes",
                quantity: "2"
            },
            {
                id: 4,

                description: "Taco Seasoning",
                quantity: "1pkg"
            },
            {
                id: 5,

                description: "Fresh Cilantro",
                quantity: "3 tsp"
            },
            {
                id: 6,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 7,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },


        ]

    },
    {
        id: 3,
        name: "One Pot Garlic Parmesan Pasta",
        image: images.gpp,
        duration: "39 mins",
        serving: 4,
        isBookmark: true,
        category: "Pasta",

        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "4"
            },
            {
                id: 2,

                description: "Chicken Broth",
                quantity: "2 cups"
            },
            {
                id: 3,

                description: "Cup of Milk",
                quantity: "1"
            },
            {
                id: 4,

                description: "Grated Parmesan",
                quantity: "1/4 cup"
            },
            {
                id: 5,

                description: "Fresh Parsley Chopped",
                quantity: "2 tbs"
            },
            {
                id: 6,

                description: "fettuccine",
                quantity: "8oz"
            },
            {
                id: 7,
                icon: icons.butter,
                description: "Unsalted Butter",
                quantity: "2 tbs"
            },
            {
                id: 8,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 9,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },


        ]

    },
    {
        id: 4,
        name: "Nasi Lemak",
        image: images.nasilemak,
        duration: "1 hour",
        serving: 10,
        isBookmark: true,
        category: "Local",

        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ]

    },
    {
        id: 5,
        name: "Korean Chicken Wingz",
        image: images.kfc,
        duration: "1 hour",
        serving: 5,
        isBookmark: true,
        category: "Party Food",

        ingredients: [




        ]

    },
    {
        id: 6,
        name: "Beef Pho",
        image: images.pho,
        duration: "45 hour",
        serving: 2,
        isBookmark: true,
        category: "Specialty",

        ingredients: [




        ]

    },
]

const categories = recommendedRecipes

export default {
    recommendedRecipes, favoriteRecipes,
    categories
}