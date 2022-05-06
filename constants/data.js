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
            

        ]
        
    },
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

const categories = recommendedRecipes

export default {
    recommendedRecipes,
    categories
}