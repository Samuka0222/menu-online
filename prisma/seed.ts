import { PrismaClient,  } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    "id": "ribs-brisket-and-burnt-ends",
    "img": "https://ibb.co/fNgc9n0",
    "name": "Joe's KC BBQ",
    "category": "churrasco",
    "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
    "price": 110.99
  },
  {
    "id": "005-kings-carolina-oink-sampler",
    "img": "https://ibb.co/7xcstNj",
    "name": "Kings BBQ",
    "category": "churrasco",
    "dsc": "Carolina BBQ Oink Sampler",
    "price": 89
  },
  {
    "id": "texas-monthlys-1-bbq-brisket",
    "img": "https://ibb.co/2ypS668",
    "name": "Snow's BBQ",
    "category": "churrasco",
    "dsc": "Texas Monthly's #1 BBQ Brisket",
    "price": 199
  },
  {
    "id": "whole-brisket-texas-bbq-sauce",
    "img": "https://ibb.co/yn90YtF",
    "name": "Franklin Barbecue",
    "category": "churrasco",
    "dsc": "Whole Brisket + Texas Barbecue BBQ Sauce",
    "price": 249
  },
  {
    "id": "whole-texas-smoked-brisket",
    "img": "https://ibb.co/BzJ6QD1",
    "name": "Terry Black's Barbecue",
    "category": "churrasco",
    "dsc": "Whole Texas Smoked Brisket",
    "price": 189
  },
  {
    "id": "mini-trinity-bbq-combo-brisket-ribs-and-links",
    "img": "https://ibb.co/7K9bntP",
    "name": "Bludso's BBQ",
    "category": "churrasco",
    "dsc": "Mini Trinity BBQ Combo - Brisket, Ribs & Links",
    "price": 139
  },
  {
    "id": "235203-blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo",
    "img": "https://ibb.co/kypzhwV",
    "name": "Blue Smoke",
    "category": "churrasco",
    "dsc": "Blue Smoke Baby Back Ribs + Backyard Barbecue Chicken Combo",
    "price": 129
  },
  {
    "id": "006-kings-meat-lovers-special",
    "img": "https://ibb.co/gj2kTQj",
    "name": "Kings BBQ",
    "category": "churrasco",
    "dsc": "BBQ Meat Lovers Special for 10",
    "price": 139
  },
  {
    "id": "the-big-ugly-bbq-dinner-for-6",
    "img": "https://ibb.co/KXPc06X",
    "name": "Ugly Drum",
    "category": "churrasco",
    "dsc": "The Big Ugly BBQ Dinner for 6",
    "price": 229
  },
  {
    "id": "17796-mighty-quinns-bbq-sampler-pack",
    "img": "https://ibb.co/hmnHWZJ",
    "name": "Mighty Quinn's BBQ",
    "category": "churrasco",
    "dsc": "Mighty Quinn's BBQ Sampler Pack",
    "price": 169
  },
  {
    "id": "post-oak-smoked-half-brisket",
    "img": "https://ibb.co/7YSSD9F",
    "name": "Southside Market & Barbeque",
    "dsc": "Post Oak Smoked USDA Prime Half Brisket",
    "price": 109,
    "category": "churrasco"
  },
  {
    "id": "best-of-texas-bbq-combo-serves-14",
    "img": "https://ibb.co/9sVX3Tc",
    "name": "Snow's BBQ",
    "category": "churrasco",
    "dsc": "Best of Texas BBQ Combo - Serves 14",
    "price": 269
  },
  {
    "id": "the-gramercy-tavern-burger-4-pack",
    "img": "https://ibb.co/CJmDfTG",
    "name": "Gramercy Tavern",
    "category": "burguers",
    "dsc": "The Gramercy Tavern Burger - 4 Pack",
    "price": 99
  },
  {
    "id": "shake-shack-shackburger-8-pack",
    "img": "https://ibb.co/gt2xy6k",
    "name": "Shake Shack",
    "category": "burguers",
    "dsc": "Shake Shack ShackBurger® - 8 Pack",
    "price": 49
  },
  {
    "id": "gotts-cheeseburger-kit-for-4",
    "img": "https://ibb.co/nz5hnCv",
    "name": "Gott's Roadside",
    "category": "burguers",
    "dsc": "Gott's Complete Cheeseburger Kit for 4",
    "price": 99
  },
  {
    "id": "le-big-matt-kit-for-6",
    "img": "https://ibb.co/vjtWvZC",
    "name": "Emmy Squared",
    "category": "burguers",
    "dsc": "Le Big Matt Burger Kit for 6",
    "price": 99
  },
  {
    "id": "shake-shack-shackburger-16-pack",
    "img": "https://ibb.co/gt2xy6k",
    "name": "Shake Shack",
    "category": "burguers",
    "dsc": "Shake Shack Shackburger® - 16 Pack",
    "price": 89
  },
  {
    "id": "21-usda-prime-burgers-pack-of-18-8oz-each",
    "img": "https://ibb.co/BBrhnCK",
    "name": "Peter Luger Steak House",
    "category": "burguers",
    "dsc": "USDA Prime Burgers - Pack of 18 (8oz each)",
    "price": 175.95
  },
  {
    "id": "double-stack-burger-kit-for-4",
    "img": "https://ibb.co/8bnWyxk",
    "name": "Holeman & Finch",
    "category": "burguers",
    "dsc": "Double Stack Burger Kit for 4",
    "price": 79
  },
  {
    "id": "goldbelly-burger-bash-pack",
    "img": "https://ibb.co/ZHpGMTF",
    "name": "Pat LaFrieda Meats",
    "category": "burguers",
    "dsc": "Goldbelly \"Burger Bash\" Pack",
    "price": 109
  },
  {
    "id": "burger-au-poivre-kit-4-pack",
    "img": "https://ibb.co/mbtY2hq",
    "name": "Raoul's",
    "category": "burguers",
    "dsc": "Burger Au Poivre Kit - 4 Pack",
    "price": 99
  },
  {
    "id": "goldbelly-burger-blend-4-lbs",
    "img": "https://ibb.co/yXsH6qj",
    "name": "Flannery Beef",
    "category": "burguers",
    "dsc": "Goldbelly Burger Blend - 4 lbs.",
    "price": 79
  },
  {
    "id": "gotts-complete-cheeseburger-kit-for-8",
    "img": "https://ibb.co/y44jW4v",
    "name": "Gott's Roadside",
    "category": "burguers",
    "dsc": "Gott's Complete Cheeseburger Kit for 8",
    "price": 149
  },
  {
    "id": "gramercy-tavern-burger-kielbasa-combo",
    "img": "https://ibb.co/mNX5RHw",
    "name": "Gramercy Tavern",
    "category": "burguers",
    "dsc": "Gramercy Tavern Burger + Kielbasa Combo",
    "price": 149
  },
  {
    "id": "15259-german-chocolate-killer-brownie-tin-pack",
    "img": "https://ibb.co/9vjWC7q",
    "name": "Killer Brownie®",
    "category": "sobremesas",
    "dsc": "German Chocolate Killer Brownie®",
    "price": 39.99
  },
  {
    "id": "jacques-world-famous-chocolate-chip-cookies",
    "img": "https://ibb.co/JqFXqx8",
    "name": "Jacques Torres Chocolate",
    "category": "sobremesas",
    "dsc": "Jacques' World Famous Chocolate Chip Cookies - 6 Pack",
    "price": 39.95
  },
  {
    "id": "luigis-original-cannoli-pie",
    "img": "https://ibb.co/SRC2LH4",
    "name": "The Cannoli Pie Company",
    "category": "sobremesas",
    "dsc": "Original Cannoli Pie",
    "price": 69
  },
  {
    "id": "sea-salted-caramel-swirl-cheesecake",
    "img": "https://ibb.co/tQWqGNn",
    "name": "Cotton Blues Cheesecake Company",
    "category": "sobremesas",
    "dsc": "Sea-Salted Caramel Swirl Cheesecake",
    "price": 65
  },
  {
    "id": "brooklyn-blackout-cookie-brownie-combo-pack-2-tins",
    "img": "https://ibb.co/tCV5m8d",
    "name": "Brooklyn Blackout Company",
    "category": "sobremesas",
    "dsc": "Brooklyn Blackout Cookie + Brownie Combo Pack - 2 Tins",
    "price": 89
  },
  {
    "id": "best-seller-cupcake-dozen",
    "img": "https://ibb.co/ngB2sVR",
    "name": "Crave Cupcakes",
    "category": "sobremesas",
    "dsc": "Best Seller Cupcake Dozen",
    "price": 89
  },
  {
    "id": "choose-your-own-ice-cream-donuts-6-pack",
    "img": "https://ibb.co/HHgC0m3",
    "name": "Elegant Desserts",
    "category": "sobremesas",
    "dsc": "Choose Your Own Ice Cream Donuts - 6 Pack",
    "price": 69
  },
  {
    "id": "17481-jewish-dessert-3-pack",
    "img": "https://ibb.co/PYDMMkM",
    "name": "Ess-a-Bagel",
    "category": "sobremesas",
    "dsc": "Jewish Classics Dessert Pack",
    "price": 89.95
  },
  {
    "id": "dessert-bar-care-package",
    "img": "https://ibb.co/Rv3kgNg",
    "name": "Bread and Roses Bakery",
    "category": "sobremesas",
    "dsc": "Dessert Bar Care Package",
    "price": 65
  },
  {
    "id": "donut-cookies-12-pack",
    "img": "https://ibb.co/NmX4kgQ",
    "name": "Stan's Donuts",
    "category": "sobremesas",
    "dsc": "Donut Cookies - 12 Pack",
    "price": 49
  },
  {
    "id": "gulab-jamun-ice-cream-cakes-2-pack",
    "img": "https://ibb.co/nRCvzb7",
    "name": "Malai Ice Cream",
    "category": "sobremesas",
    "dsc": "Gulab Jamun Ice Cream Cakes - 2 Pack",
    "price": 79
  },
  {
    "id": "jacques-world-famous-chocolate-chip-cookies-12-pack",
    "img": "https://ibb.co/c8pftNs",
    "name": "Jacques Torres Chocolate",
    "category": "sobremesas",
    "dsc": "Jacques' World Famous Chocolate Chip Cookies - 12 Pack",
    "price": 69.95
  },
  {
    "id": "hong-kong-boba-tea-kit-for-6",
    "img": "https://ibb.co/zmNZQFc",
    "name": "New Territories",
    "category": "bebidas",
    "dsc": "Hong Kong Boba Tea Kit for 6",
    "price": 59
  },
  {
    "id": "guys-caliente-margaritas-for-12",
    "img": "https://ibb.co/h8z7Thd",
    "name": "Guy Fieri",
    "category": "bebidas",
    "dsc": "Guy's Caliente Margaritas for 12",
    "price": 69
  },
  {
    "id": "woodford-reserve-mint-julep-syrup",
    "img": "https://ibb.co/Y37McbQ",
    "name": "Woodford Reserve",
    "category": "bebidas",
    "dsc": "Woodford Reserve Mint Julep Syrup",
    "price": 39
  },
  {
    "id": "new-orleans-hurricane-mix",
    "img": "https://ibb.co/wRPqsv3",
    "name": "Franco's Hurricane Mix",
    "category": "bebidas",
    "dsc": "New Orleans Hurricane Mix",
    "price": 39
  },
  {
    "id": "margarita-mix",
    "img": "https://ibb.co/s3DTtzs",
    "name": "Johnny Sanchez",
    "category": "bebidas",
    "dsc": "Margarita Mix",
    "price": 59
  },
  {
    "id": "woodford-reserve-mint-julep-syrup-2-pack",
    "img": "https://ibb.co/vHgQFfZ",
    "name": "Woodford Reserve",
    "category": "bebidas",
    "dsc": "Woodford Reserve Mint Julep Syrup - 2 Pack",
    "price": 59
  },
  {
    "id": "unicorn-parade-milkshake-kit-for-8",
    "img": "https://ibb.co/YBtsCpr",
    "name": "New Territories",
    "category": "bebidas",
    "dsc": "Unicorn Parade Milkshake Kit for 8",
    "price": 109
  },
  {
    "id": "chickpea-chiller-kit-for-6",
    "img": "https://ibb.co/71ZkG7X",
    "name": "The Hummus & Pita Co.",
    "category": "bebidas",
    "dsc": "Chickpea Chiller Kit for 6",
    "price": 89
  },
  {
    "id": "15194-old-honey-barn-mint-julep-mixer-200ml",
    "img": "https://ibb.co/6gRMqSq",
    "name": "Old Honey Barn Mint Julep",
    "category": "bebidas",
    "dsc": "Old Honey Barn Mint Julep Mixer - 200ml Flask",
    "price": 25
  },
  {
    "id": "kentucky-derby-mint-julep-gift-set",
    "img": "https://ibb.co/61n5ycL",
    "name": "Woodford Reserve",
    "category": "bebidas",
    "dsc": "Kentucky Derby Mint Julep Gift Set",
    "price": 59.95
  },
  {
    "id": "002-charleston-bloody-mary-mix-weekender-bold-and-spicy",
    "img": "https://ibb.co/HCr74dg",
    "name": "Charleston Beverage Company",
    "category": "bebidas",
    "dsc": "Weekender | Charleston Bloody Mary Mix Bold & Spicy",
    "price": 39.95
  },
  {
    "id": "nola-cold-brew-concentrate-bag-in-box",
    "img": "https://ibb.co/ryGnDJF",
    "name": "Grady's Cold Brew",
    "category": "bebidas",
    "dsc": "NOLA Cold Brew Concentrate Bag-in-Box",
    "price": 40
  },
  {
    "id": "2-lou-malnatis-deep-dish-pizzas",
    "img": "https://ibb.co/x69jFVx",
    "name": "Lou Malnati's Pizza",
    "category": "pizzas",
    "dsc": "2 Lou Malnati's Deep Dish Pizzas",
    "price": 67.99
  },
  {
    "id": "23699-choose-your-own-thin-crust-pizza-4-pack",
    "img": "https://ibb.co/CQQ8pmr",
    "name": "Bartolini's",
    "category": "pizzas",
    "dsc": "Choose Your Own Thin Crust Pizza - 4 Pack",
    "price": 139
  },
  {
    "id": "choose-your-own-new-haven-style-pizza-6-pack",
    "img": "https://ibb.co/Fb292vb",
    "name": "Zuppardi's Apizza",
    "category": "pizzas",
    "dsc": "New Haven-Style Pizza - 6 Pack (Choose Your Own)",
    "price": 79
  },
  {
    "id": "6-lou-malnatis-deep-dish-pizzas",
    "img": "https://ibb.co/cvnV5fP",
    "name": "Lou Malnati's Pizza",
    "category": "pizzas",
    "dsc": "6 Lou Malnati's Deep Dish Pizzas",
    "price": 116.99
  },
  {
    "id": "wood-fired-pizzas-best-seller-4-pack",
    "img": "https://ibb.co/G5HgwZw",
    "name": "Pizzeria Bianco",
    "category": "pizzas",
    "dsc": "Wood Fired Pizzas Best Seller - 4 Pack",
    "price": 129
  },
  {
    "id": "236991-choose-your-own-deep-dish-pizza-3-pack",
    "img": "https://ibb.co/JK5nhJX",
    "name": "Bartolini's",
    "category": "pizzas",
    "dsc": "Choose Your Own Deep Dish Pizza - 3 Pack",
    "price": 139
  },
  {
    "id": "choose-your-own-detroit-style-pizza-3-pack",
    "img": "https://ibb.co/kBSRPvc",
    "name": "Emmy Squared",
    "category": "pizzas",
    "dsc": "Detroit-Style Pizza - Choose Your Own 3 Pack",
    "price": 89
  },
  {
    "id": "brooklyn-pizza-choose-your-own-5-pack",
    "img": "https://ibb.co/ydRwvY3",
    "name": "Paesan's Pizza",
    "category": "pizzas",
    "dsc": "Brooklyn Pizza - Choose Your Own 5 Pack",
    "price": 69
  },
  {
    "id": "choose-your-own-chicago-deep-dish-pizza-4-pack",
    "img": "https://ibb.co/Mkf4yXf",
    "name": "My Pi Pizza",
    "category": "pizzas",
    "dsc": "Chicago Deep Dish Pizza - 4 Pack",
    "price": 129
  },
  {
    "id": "4-lou-malnatis-deep-dish-pizzas",
    "img": "https://ibb.co/PxJXbry",
    "name": "Lou Malnati's Pizza",
    "category": "pizzas",
    "dsc": "4 Lou Malnati's Deep Dish Pizzas",
    "price": 96.99
  },
  {
    "id": "tonys-custom-pizza-3-pack",
    "img": "https://ibb.co/PxJXbry",
    "name": "Tony's Pizza Napoletana",
    "category": "pizzas",
    "dsc": "Choose Your Own Pizza - 3 Pack",
    "price": 99
  },
  {
    "id": "plain-thin-crust-pizza-4-pack",
    "img": "https://ibb.co/mNs3t84",
    "name": "The Columbia Inn",
    "category": "pizzas",
    "dsc": "Plain Thin Crust Pizza - 4 Pack",
    "price": 79
  },
  {
    "id": "california-reserve-filet-mignon-steaks-gift-box",
    "img": "https://ibb.co/pxBKmGq",
    "name": "Flannery Beef",
    "category": "steaks",
    "dsc": "California Reserve Filet Mignon Steaks Gift Box",
    "price": 129
  },
  {
    "id": "steaks-and-cakes-date-night-dinner-for-2",
    "img": "https://ibb.co/P1N8njD",
    "name": "Chesapeake Bay Gourmet",
    "category": "steaks",
    "dsc": "Steaks and Cakes Date Night Dinner for 2",
    "price": 129
  },
  {
    "id": "Prime-holiday-steak-sampler-for-10-12",
    "img": "https://ibb.co/NY2yTHH",
    "name": "Saltbrick Prime",
    "category": "steaks",
    "dsc": "Chef Matt's Steak Sampler for 10-12",
    "price": 179
  },
  {
    "id": "bone-in-rib-steak",
    "img": "https://ibb.co/qdHhxCz",
    "name": "Old Homestead Steakhouse",
    "category": "steaks",
    "dsc": "Bone-in Rib Steak",
    "price": 159
  },
  {
    "id": "american-wagyu-gold-grade-top-sirloins",
    "img": "https://ibb.co/0CQwM0k",
    "name": "Snake River Farms",
    "category": "steaks",
    "dsc": "American Wagyu Gold Grade Top Sirloins",
    "price": 119
  },
  {
    "id": "2-peter-luger-steak-pack-b",
    "img": "https://ibb.co/P4mQVfB",
    "name": "Peter Luger Steak House",
    "category": "steaks",
    "dsc": "Peter Luger Porterhouse Steaks",
    "price": 215.95
  },
  {
    "id": "ribeye-prime-steak-gift-box",
    "img": "https://ibb.co/hLxDtS2",
    "name": "Churchill's Steakhouse",
    "category": "steaks",
    "dsc": "Ribeye Prime Steak Gift Box",
    "price": 229
  },
  {
    "id": "dry-aged-usda-prime-black-angus-porterhouse-steak-2-pack",
    "img": "https://ibb.co/884HSNL",
    "name": "Pat LaFrieda Meats",
    "category": "steaks",
    "dsc": "Dry-Aged USDA Prime Black Angus Porterhouse Steak - 2 Pack",
    "price": 96.7
  },
  {
    "id": "california-reserve-ribeye-steak",
    "img": "https://ibb.co/pZhq07R",
    "name": "Flannery Beef",
    "category": "steaks",
    "dsc": "California Reserve Ribeye Steak - 12 oz",
    "price": 32
  },
  {
    "id": "dry-aged-boneless-ribeye-steak-dinner-kit-for-4",
    "img": "https://ibb.co/hgYLJSP",
    "name": "Chef Francis Mallmann",
    "category": "steaks",
    "dsc": "Dry-Aged Boneless Ribeye Steak Dinner Kit for 4",
    "price": 225
  },
  {
    "id": "california-reserve-filet-mignon-steak",
    "img": "https://ibb.co/k67JvFb",
    "name": "Flannery Beef",
    "category": "steaks",
    "dsc": "California Reserve Filet Mignon Steak",
    "price": 22
  },
  {
    "id": "mesquite-smoked-peppered-beef-tenderloin",
    "img": "https://ibb.co/N21bSV4",
    "name": "Perini Ranch Steakhouse",
    "category": "steaks",
    "dsc": "Mesquite Smoked Peppered Beef Tenderloin",
    "price": 165
  }
]

const seed = async () => {
  try {
    for (const item of products) {
      const productInput = {
        name: item.name,
        category: item.category,
        description: item.dsc,
        price: item.price,
        imageUrl: item.img,
      }

      await prisma.product.create({
        data: {
          ...productInput,
          orderId: ''
        }
      });
    }
    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error during seed:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();