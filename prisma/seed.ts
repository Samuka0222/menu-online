const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const products = [
  {
    "id": "ribs-brisket-and-burnt-ends",
    "img": "https://utfs.io/f/dff1cc18-08c0-4f7c-a7ff-2f5ae03d3023-79oedp.6710e994980e485e6441b794717ad6fb.jpg",
    "name": "Joe's KC BBQ",
    "category": "churrasco",
    "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
    "price": 110.99
  },
  {
    "id": "005-kings-carolina-oink-sampler",
    "img": "https://utfs.io/f/886748b1-194f-4633-9f63-af0e682645b2-ikf0y8.1340b5a10cedc238cb2280306dd1d5a5.jpg",
    "name": "Kings BBQ",
    "category": "churrasco",
    "dsc": "Carolina BBQ Oink Sampler",
    "price": 89
  },
  {
    "id": "texas-monthlys-1-bbq-brisket",
    "img": "https://utfs.io/f/ed8a7f6c-5ab2-43ea-9881-0b92601eba06-g4p6z9.1006a061be7acae03992e420fbca995a.jpg",
    "name": "Snow's BBQ",
    "category": "churrasco",
    "dsc": "Texas Monthly's #1 BBQ Brisket",
    "price": 199
  },
  {
    "id": "whole-brisket-texas-bbq-sauce",
    "img": "https://utfs.io/f/d6a19525-d049-4f6f-8cd8-d16b91530cae-gnclrk.7ae90266335e539c67e77fed14b43029.jpg",
    "name": "Franklin Barbecue",
    "category": "churrasco",
    "dsc": "Whole Brisket + Texas Barbecue BBQ Sauce",
    "price": 249
  },
  {
    "id": "whole-texas-smoked-brisket",
    "img": "https://utfs.io/f/742ce844-30ba-4847-b733-b29b36f22d9b-xrxu8e.a5558a25381e271408e197936e7985d8.jpg",
    "name": "Terry Black's Barbecue",
    "category": "churrasco",
    "dsc": "Whole Texas Smoked Brisket",
    "price": 189
  },
  {
    "id": "mini-trinity-bbq-combo-brisket-ribs-and-links",
    "img": "https://utfs.io/f/48f95634-ac1b-4c50-b255-cf1ea04b6582-wfocf6.245582f593bf64b23b57dfca2be18cfd.jpg",
    "name": "Bludso's BBQ",
    "category": "churrasco",
    "dsc": "Mini Trinity BBQ Combo - Brisket, Ribs & Links",
    "price": 139
  },
  {
    "id": "235203-blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo",
    "img": "https://utfs.io/f/3566339c-c626-4b5f-9f31-1124bc621c9c-fjwh0z.a95a3e632ae324f719738a2a5c1dff6e.jpg",
    "name": "Blue Smoke",
    "category": "churrasco",
    "dsc": "Blue Smoke Baby Back Ribs + Backyard Barbecue Chicken Combo",
    "price": 129
  },
  {
    "id": "006-kings-meat-lovers-special",
    "img": "https://utfs.io/f/a399abf3-dbc0-493f-a390-3ca7d72354f7-613djp.36ca670fda4bfa783c2ea9165e068d26.jpg",
    "name": "Kings BBQ",
    "category": "churrasco",
    "dsc": "BBQ Meat Lovers Special for 10",
    "price": 139
  },
  {
    "id": "the-big-ugly-bbq-dinner-for-6",
    "img": "https://utfs.io/f/15af40e0-14d4-4106-8ca5-44b149b39f8d-hw91hk.2dfae7818811adddce85cc1a910881a0.jpg",
    "name": "Ugly Drum",
    "category": "churrasco",
    "dsc": "The Big Ugly BBQ Dinner for 6",
    "price": 229
  },
  {
    "id": "17796-mighty-quinns-bbq-sampler-pack",
    "img": "https://utfs.io/f/389aaeba-f13f-4171-86f1-3765cddb9ecf-s3jqpa.1bfe4a0665edc565756f5241bf25840e.jpg",
    "name": "Mighty Quinn's BBQ",
    "category": "churrasco",
    "dsc": "Mighty Quinn's BBQ Sampler Pack",
    "price": 169
  },
  {
    "id": "post-oak-smoked-half-brisket",
    "img": "https://utfs.io/f/f4cfe37f-8e72-4ae9-a88e-e184be6077e3-mk12a7.6f17178dde7d806670bcc73ff11762b3.jpg",
    "name": "Southside Market & Barbeque",
    "dsc": "Post Oak Smoked USDA Prime Half Brisket",
    "price": 109,
    "category": "churrasco"
  },
  {
    "id": "best-of-texas-bbq-combo-serves-14",
    "img": "https://utfs.io/f/d6a19525-d049-4f6f-8cd8-d16b91530cae-gnclrk.7ae90266335e539c67e77fed14b43029.jpg",
    "name": "Snow's BBQ",
    "category": "churrasco",
    "dsc": "Best of Texas BBQ Combo - Serves 14",
    "price": 269
  },
  {
    "id": "the-gramercy-tavern-burger-4-pack",
    "img": "https://utfs.io/f/22692505-b700-4f4a-94e7-b8b1d5426c93-tw9do0.4.21-72ppi-1x1-47.jpg",
    "name": "Gramercy Tavern",
    "category": "burguers",
    "dsc": "The Gramercy Tavern Burger - 4 Pack",
    "price": 99
  },
  {
    "id": "shake-shack-shackburger-8-pack",
    "img": "https://utfs.io/f/11cd5b53-67fc-477b-9515-0ab79a476f45-2uycfi.973a5e26836ea86d7e86a327becea2b0.jpg",
    "name": "Shake Shack",
    "category": "burguers",
    "dsc": "Shake Shack ShackBurger® - 8 Pack",
    "price": 49
  },
  {
    "id": "gotts-cheeseburger-kit-for-4",
    "img": "https://utfs.io/f/4e265da9-8150-48cc-a253-3aa1201fbe2b-t26jzm.092aa049d00286fa1733d720decc782e.jpg",
    "name": "Gott's Roadside",
    "category": "burguers",
    "dsc": "Gott's Complete Cheeseburger Kit for 4",
    "price": 99
  },
  {
    "id": "le-big-matt-kit-for-6",
    "img": "https://utfs.io/f/7794fd39-0309-4bd1-8426-0cdfb6abc0ca-3cytz7.1ddae6e382bb3218eeb0fd5247de115a.jpg",
    "name": "Emmy Squared",
    "category": "burguers",
    "dsc": "Le Big Matt Burger Kit for 6",
    "price": 99
  },
  {
    "id": "shake-shack-shackburger-16-pack",
    "img": "https://utfs.io/f/63c9a1c9-e970-4767-a3f1-699f2ce20989-oxte0t.316f8b09144db65931ea29e34869287a.jpg",
    "name": "Shake Shack",
    "category": "burguers",
    "dsc": "Shake Shack Shackburger® - 16 Pack",
    "price": 89
  },
  {
    "id": "21-usda-prime-burgers-pack-of-18-8oz-each",
    "img": "https://utfs.io/f/6b1f7afc-08f2-4495-9f28-45bef071bd77-h8avxc.274c67f15aa1c0b210dbf51801706670.jpg",
    "name": "Peter Luger Steak House",
    "category": "burguers",
    "dsc": "USDA Prime Burgers - Pack of 18 (8oz each)",
    "price": 175.95
  },
  {
    "id": "double-stack-burger-kit-for-4",
    "img": "https://utfs.io/f/0cccd499-16b3-499b-974e-aa6a39a07ff5-hk7yrw.4ee9f54b1d6087e9996335f07c13e5cd.jpg",
    "name": "Holeman & Finch",
    "category": "burguers",
    "dsc": "Double Stack Burger Kit for 4",
    "price": 79
  },
  {
    "id": "goldbelly-burger-bash-pack",
    "img": "https://utfs.io/f/7052e112-2b50-4507-a38f-78384f512246-pkjzgv.13a21b66edf7173a59c75c3a6d2f981b.jpg",
    "name": "Pat LaFrieda Meats",
    "category": "burguers",
    "dsc": "Goldbelly \"Burger Bash\" Pack",
    "price": 109
  },
  {
    "id": "burger-au-poivre-kit-4-pack",
    "img": "https://utfs.io/f/62f64bf2-e86b-4c49-8140-5b14e9648d57-8r88iy.3ca0e39b02db753304cd185638dad518.jpg",
    "name": "Raoul's",
    "category": "burguers",
    "dsc": "Burger Au Poivre Kit - 4 Pack",
    "price": 99
  },
  {
    "id": "goldbelly-burger-blend-4-lbs",
    "img": "https://utfs.io/f/7052e112-2b50-4507-a38f-78384f512246-pkjzgv.13a21b66edf7173a59c75c3a6d2f981b.jpg",
    "name": "Flannery Beef",
    "category": "burguers",
    "dsc": "Goldbelly Burger Blend - 4 lbs.",
    "price": 79
  },
  {
    "id": "gotts-complete-cheeseburger-kit-for-8",
    "img": "https://utfs.io/f/cc4d6d80-59f7-425c-bf87-5bddc5df470d-t26jzq.7bdc74104b193427b3fe6eae39e05b5e.jpg",
    "name": "Gott's Roadside",
    "category": "burguers",
    "dsc": "Gott's Complete Cheeseburger Kit for 8",
    "price": 149
  },
  {
    "id": "gramercy-tavern-burger-kielbasa-combo",
    "img": "https://utfs.io/f/032e1bf3-e921-4d65-a6e4-bd2b5c29d22c-tw9do0.4.21-72ppi-1x1-15.jpg",
    "name": "Gramercy Tavern",
    "category": "burguers",
    "dsc": "Gramercy Tavern Burger + Kielbasa Combo",
    "price": 149
  },
  {
    "id": "15259-german-chocolate-killer-brownie-tin-pack",
    "img": "https://utfs.io/f/2b2ceb3d-bb63-42bc-a856-8b60661832a8-w1edzm.5ebc34160f28767a9d94c4da2e04c4b9.jpg",
    "name": "Killer Brownie®",
    "category": "sobremesas",
    "dsc": "German Chocolate Killer Brownie®",
    "price": 39.99
  },
  {
    "id": "jacques-world-famous-chocolate-chip-cookies",
    "img": "https://utfs.io/f/10594438-0caa-4ecd-917e-6ae8353417c8-aiqja7.3b373bdd67cd25084182c21499f675d1.jpg",
    "name": "Jacques Torres Chocolate",
    "category": "sobremesas",
    "dsc": "Jacques' World Famous Chocolate Chip Cookies - 6 Pack",
    "price": 39.95
  },
  {
    "id": "luigis-original-cannoli-pie",
    "img": "https://utfs.io/f/9fca0f4e-986b-4e6b-9c71-8ada22ea4142-3iyfan.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg",
    "name": "The Cannoli Pie Company",
    "category": "sobremesas",
    "dsc": "Original Cannoli Pie",
    "price": 69
  },
  {
    "id": "sea-salted-caramel-swirl-cheesecake",
    "img": "https://utfs.io/f/8be325ad-0776-4a6e-bd5b-db2390e448c0-wew36r.e2825335433fb7a272a5d77649a6849e.jpg",
    "name": "Cotton Blues Cheesecake Company",
    "category": "sobremesas",
    "dsc": "Sea-Salted Caramel Swirl Cheesecake",
    "price": 65
  },
  {
    "id": "brooklyn-blackout-cookie-brownie-combo-pack-2-tins",
    "img": "https://utfs.io/f/fd0d9cc1-4d59-4574-91de-67d878ddde1d-40za65.d8805325baf6b23b4f01d119dc4531a7.jpg",
    "name": "Brooklyn Blackout Company",
    "category": "sobremesas",
    "dsc": "Brooklyn Blackout Cookie + Brownie Combo Pack - 2 Tins",
    "price": 89
  },
  {
    "id": "best-seller-cupcake-dozen",
    "img": "https://utfs.io/f/9720872e-de48-4e0f-a4c7-ef0f04debd3c-w7c76s.f93b21993f6a2da11c975d45b9b0d08f.jpg",
    "name": "Crave Cupcakes",
    "category": "sobremesas",
    "dsc": "Best Seller Cupcake Dozen",
    "price": 89
  },
  {
    "id": "choose-your-own-ice-cream-donuts-6-pack",
    "img": "https://utfs.io/f/4374e575-245b-4f3f-9062-3909032b267d-1y3wlw.24d0b44765a7c54237fcd7ea9d9d8093.jpg",
    "name": "Elegant Desserts",
    "category": "sobremesas",
    "dsc": "Choose Your Own Ice Cream Donuts - 6 Pack",
    "price": 69
  },
  {
    "id": "17481-jewish-dessert-3-pack",
    "img": "https://utfs.io/f/fd27eb63-3689-4287-a531-93ac7a2ea7f2-xi8vbz.7d4b76630f2fe75dcb7bbcf2501b7390.jpg",
    "name": "Ess-a-Bagel",
    "category": "sobremesas",
    "dsc": "Jewish Classics Dessert Pack",
    "price": 89.95
  },
  {
    "id": "dessert-bar-care-package",
    "img": "https://utfs.io/f/fb1afd53-6853-4787-8d1e-43c42b46d261-nbh9v9.324aa28fe98c9dc67b75aac43376902e.jpg",
    "name": "Bread and Roses Bakery",
    "category": "sobremesas",
    "dsc": "Dessert Bar Care Package",
    "price": 65
  },
  {
    "id": "donut-cookies-12-pack",
    "img": "https://utfs.io/f/55a7c77d-33cb-4e64-83da-2d752df5be48-9ixfok.46f42c61c4a79fd2051a99b2f23e890e.jpg",
    "name": "Stan's Donuts",
    "category": "sobremesas",
    "dsc": "Donut Cookies - 12 Pack",
    "price": 49
  },
  {
    "id": "gulab-jamun-ice-cream-cakes-2-pack",
    "img": "https://utfs.io/f/fde5856e-14c4-4233-b6fe-fff3b2062acd-5jg6ox.c45b4d0750ad22d741f84dc1f26d20e7.jpg",
    "name": "Malai Ice Cream",
    "category": "sobremesas",
    "dsc": "Gulab Jamun Ice Cream Cakes - 2 Pack",
    "price": 79
  },
  {
    "id": "jacques-world-famous-chocolate-chip-cookies-12-pack",
    "img": "https://utfs.io/f/3286e959-26cb-48c5-a40b-11ba1ccc834c-6i2rii.2217a14c443602493bba88aa9335319a.jpg",
    "name": "Jacques Torres Chocolate",
    "category": "sobremesas",
    "dsc": "Jacques' World Famous Chocolate Chip Cookies - 12 Pack",
    "price": 69.95
  },
  {
    "id": "hong-kong-boba-tea-kit-for-6",
    "img": "https://utfs.io/f/e7f87c77-e476-489e-add7-7087d11096dd-jeu9k0.63841de36d8e5edfafa13023fc303285.jpg",
    "name": "New Territories",
    "category": "bebidas",
    "dsc": "Hong Kong Boba Tea Kit for 6",
    "price": 59
  },
  {
    "id": "guys-caliente-margaritas-for-12",
    "img": "https://utfs.io/f/96a77541-e5ec-4787-975f-717b61a6e889-ll8eg8.ca8c6bc06b8f1039549385ffcebc749d.jpg",
    "name": "Guy Fieri",
    "category": "bebidas",
    "dsc": "Guy's Caliente Margaritas for 12",
    "price": 69
  },
  {
    "id": "woodford-reserve-mint-julep-syrup",
    "img": "https://utfs.io/f/f866355f-4da4-489d-aa10-87eb93c123de-yras29.ef523ac7cbae5f4aba6b058207f490d2.jpg",
    "name": "Woodford Reserve",
    "category": "bebidas",
    "dsc": "Woodford Reserve Mint Julep Syrup",
    "price": 39
  },
  {
    "id": "new-orleans-hurricane-mix",
    "img": "https://utfs.io/f/e877cb4d-be5a-4bbe-9612-024d8329d6bc-965j3k.4613584fc65cb0787024dd24d2a8f4b3.jpg",
    "name": "Franco's Hurricane Mix",
    "category": "bebidas",
    "dsc": "New Orleans Hurricane Mix",
    "price": 39
  },
  {
    "id": "margarita-mix",
    "img": "https://utfs.io/f/c001dd7c-9e75-46fe-9fcd-0df7b4b5bd4f-p0b4l.bd48a000d589d3147b14790af3c33fcd.jpg",
    "name": "Johnny Sanchez",
    "category": "bebidas",
    "dsc": "Margarita Mix",
    "price": 59
  },
  {
    "id": "woodford-reserve-mint-julep-syrup-2-pack",
    "img": "https://utfs.io/f/9a186d8f-d801-448f-9e5a-6250abf55914-6th85s.0ac76063f151988113cbaabd0eaa829f.jpg",
    "name": "Woodford Reserve",
    "category": "bebidas",
    "dsc": "Woodford Reserve Mint Julep Syrup - 2 Pack",
    "price": 59
  },
  {
    "id": "unicorn-parade-milkshake-kit-for-8",
    "img": "https://utfs.io/f/a9da2fc2-1d2c-4916-8286-3262adc343df-uj7p3y.9052d04c1cf25b29442048bd3e535f21.jpg",
    "name": "New Territories",
    "category": "bebidas",
    "dsc": "Unicorn Parade Milkshake Kit for 8",
    "price": 109
  },
  {
    "id": "chickpea-chiller-kit-for-6",
    "img": "https://utfs.io/f/3bbc59cf-21f8-4f3e-b3ce-cc6ac7124e15-ciswpa.4310765c71ba524b5462ea9330d32446.jpg",
    "name": "The Hummus & Pita Co.",
    "category": "bebidas",
    "dsc": "Chickpea Chiller Kit for 6",
    "price": 89
  },
  {
    "id": "old-honey-barn-mint-julep-mixer-200ml",
    "img": "https://utfs.io/f/d42ab896-64e5-4563-94f0-968c9ed20eb0-xoz8gr.e0b131d6d9b69963706b43fd4334ab74.jpg",
    "name": "Old Honey Barn Mint Julep",
    "category": "bebidas",
    "dsc": "Old Honey Barn Mint Julep Mixer - 200ml Flask",
    "price": 25
  },
  {
    "id": "kentucky-derby-mint-julep-gift-set",
    "img": "https://utfs.io/f/9af26af9-cf72-4bae-8a5c-48344b9fd0cf-n5jlff.79720eda4e9c8e3fcf9ecb5c79827f2c.jpg",
    "name": "Woodford Reserve",
    "category": "bebidas",
    "dsc": "Kentucky Derby Mint Julep Gift Set",
    "price": 59.95
  },
  {
    "id": "002-charleston-bloody-mary-mix-weekender-bold-and-spicy",
    "img": "https://utfs.io/f/2855073e-584f-44a9-b462-f3ae2a299a88-a5n15q.c372868c9937e407a299a22001e210e2.jpg",
    "name": "Charleston Beverage Company",
    "category": "bebidas",
    "dsc": "Weekender | Charleston Bloody Mary Mix Bold & Spicy",
    "price": 39.95
  },
  {
    "id": "nola-cold-brew-concentrate-bag-in-box",
    "img": "https://utfs.io/f/6833d905-03d1-4df8-af3f-404705624a36-xq92p0.3df6fde8bd83f29235565984ae8ed22b.jpg",
    "name": "Grady's Cold Brew",
    "category": "bebidas",
    "dsc": "NOLA Cold Brew Concentrate Bag-in-Box",
    "price": 40
  },
  {
    "id": "2-lou-malnatis-deep-dish-pizzas",
    "img": "https://utfs.io/f/6f7ccc22-44fa-4310-9931-9607f49c12b6-r3271b.bf0fe065d251a9cca3925b269d443a27.jpg",
    "name": "Lou Malnati's Pizza",
    "category": "pizzas",
    "dsc": "2 Lou Malnati's Deep Dish Pizzas",
    "price": 67.99
  },
  {
    "id": "23699-choose-your-own-thin-crust-pizza-4-pack",
    "img": "https://utfs.io/f/0ef638bd-20e2-49b4-8ab0-9b81cebc3cb6-g6cufa.b928a2008eab50c65dc87e59b5952190.jpg",
    "name": "Bartolini's",
    "category": "pizzas",
    "dsc": "Choose Your Own Thin Crust Pizza - 4 Pack",
    "price": 139
  },
  {
    "id": "choose-your-own-new-haven-style-pizza-6-pack",
    "img": "https://utfs.io/f/bdd78f28-d224-4554-a456-3dbb942fa53e-7naagg.ab82828afc6172cdd4017556c15e36dd.jpg",
    "name": "Zuppardi's Apizza",
    "category": "pizzas",
    "dsc": "New Haven-Style Pizza - 6 Pack (Choose Your Own)",
    "price": 79
  },
  {
    "id": "6-lou-malnatis-deep-dish-pizzas",
    "img": "https://utfs.io/f/dfd56d56-d40e-41f1-8f17-16b069b9f9df-3vmr6j.f59993181da5d295668c8a6fb856055e.jpg",
    "name": "Lou Malnati's Pizza",
    "category": "pizzas",
    "dsc": "6 Lou Malnati's Deep Dish Pizzas",
    "price": 116.99
  },
  {
    "id": "wood-fired-pizzas-best-seller-4-pack",
    "img": "https://utfs.io/f/655b8693-7233-4011-a0c0-2640c7e2f367-86qiau.1653bb05922ba153ac178f8365d27f6d.jpg",
    "name": "Pizzeria Bianco",
    "category": "pizzas",
    "dsc": "Wood Fired Pizzas Best Seller - 4 Pack",
    "price": 129
  },
  {
    "id": "236991-choose-your-own-deep-dish-pizza-3-pack",
    "img": "https://utfs.io/f/cb55142d-4248-4e80-b94b-a836d00b550c-p5n3xn.4111791511244a4946bb5c9ad2c17da9.jpg",
    "name": "Bartolini's",
    "category": "pizzas",
    "dsc": "Choose Your Own Deep Dish Pizza - 3 Pack",
    "price": 139
  },
  {
    "id": "choose-your-own-detroit-style-pizza-3-pack",
    "img": "https://utfs.io/f/e82e4085-51f5-4647-bcd3-d1bc5be1d60e-z1uezz.6b6f4909ffd4066d5471e70eac5c3d89.jpg",
    "name": "Emmy Squared",
    "category": "pizzas",
    "dsc": "Detroit-Style Pizza - Choose Your Own 3 Pack",
    "price": 89
  },
  {
    "id": "brooklyn-pizza-choose-your-own-5-pack",
    "img": "https://utfs.io/f/ab2ccd0f-3113-4ef2-bd62-07dac4839205-cahfrs.edc4f476a75207d0af840ce6f225f2b3.jpg",
    "name": "Paesan's Pizza",
    "category": "pizzas",
    "dsc": "Brooklyn Pizza - Choose Your Own 5 Pack",
    "price": 69
  },
  {
    "id": "choose-your-own-chicago-deep-dish-pizza-4-pack",
    "img": "https://utfs.io/f/3de199a6-7b67-4de4-8b40-f30b029d1607-fmof3g.49927daafa8c147fe9bb2a113e56668e.jpg",
    "name": "My Pi Pizza",
    "category": "pizzas",
    "dsc": "Chicago Deep Dish Pizza - 4 Pack",
    "price": 129
  },
  {
    "id": "4-lou-malnatis-deep-dish-pizzas",
    "img": "https://utfs.io/f/9f7c3869-4c2f-466e-9808-09e97868341d-fhch3x.8c79eb7506b5752ab3387d8174246b17.jpg",
    "name": "Lou Malnati's Pizza",
    "category": "pizzas",
    "dsc": "4 Lou Malnati's Deep Dish Pizzas",
    "price": 96.99
  },
  {
    "id": "tonys-custom-pizza-3-pack",
    "img": "https://utfs.io/f/1e213e8f-29ac-420b-abb7-e55add372cf6-c6nfrx.fcf7a43e38593007ef2857fe16d6dd26.jpg",
    "name": "Tony's Pizza Napoletana",
    "category": "pizzas",
    "dsc": "Choose Your Own Pizza - 3 Pack",
    "price": 99
  },
  {
    "id": "plain-thin-crust-pizza-4-pack",
    "img": "https://utfs.io/f/ecf5497d-277f-4b1c-8835-ab11c47bc056-vkmt5e.5540e9d166db2f0853643c6517e4a225.jpg",
    "name": "The Columbia Inn",
    "category": "pizzas",
    "dsc": "Plain Thin Crust Pizza - 4 Pack",
    "price": 79
  },
  {
    "id": "california-reserve-filet-mignon-steaks-gift-box",
    "img": "https://utfs.io/f/53afae38-d0fd-4fee-bf08-2808d7d39141-nq65h6.bf226e317aad85f47897ae7e325f790d.jpg",
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
    "img": "https://utfs.io/f/b8909133-d460-49f4-a6c3-8cbe1a6796d7-panr1z.d367c5ae72dd9f89e170662104bef4fc.jpg",
    "name": "Saltbrick Prime",
    "category": "steaks",
    "dsc": "Chef Matt's Steak Sampler for 10-12",
    "price": 179
  },
  {
    "id": "bone-in-rib-steak",
    "img": "https://utfs.io/f/1669382d-b186-471d-8713-9f17a0eb196c-rcm1bn.b13d9d4233035767605f0de9acdce1ab.jpg",
    "name": "Old Homestead Steakhouse",
    "category": "steaks",
    "dsc": "Bone-in Rib Steak",
    "price": 159
  },
  {
    "id": "american-wagyu-gold-grade-top-sirloins",
    "img": "https://utfs.io/f/ac9c3bbd-28bc-4eaf-a39a-44b4d3b0838d-hv2ozz.040dbeb8f8e615b91fa7e513e3dc089c.jpg",
    "name": "Snake River Farms",
    "category": "steaks",
    "dsc": "American Wagyu Gold Grade Top Sirloins",
    "price": 119
  },
  {
    "id": "2-peter-luger-steak-pack-b",
    "img": "https://utfs.io/f/bdb51479-ba73-4799-9b07-7c39d02fd787-g3eggg.9feb0300e6be2dfecfa314f2006a2183.jpg",
    "name": "Peter Luger Steak House",
    "category": "steaks",
    "dsc": "Peter Luger Porterhouse Steaks",
    "price": 215.95
  },
  {
    "id": "ribeye-prime-steak-gift-box",
    "img": "https://utfs.io/f/d8322caa-6eb5-4abb-8bb4-2048def2772b-kz0ada.e74cb016baabbb2df73861de8150f29c.jpg",
    "name": "Churchill's Steakhouse",
    "category": "steaks",
    "dsc": "Ribeye Prime Steak Gift Box",
    "price": 229
  },
  {
    "id": "dry-aged-usda-prime-black-angus-porterhouse-steak-2-pack",
    "img": "https://utfs.io/f/0e47a2f0-e999-45ba-8092-4f96e4d64fb9-pfjgxa.6ee213799e7d1848763d12edca18e3b1.jpg",
    "name": "Pat LaFrieda Meats",
    "category": "steaks",
    "dsc": "Dry-Aged USDA Prime Black Angus Porterhouse Steak - 2 Pack",
    "price": 96.7
  },
  {
    "id": "california-reserve-ribeye-steak",
    "img": "https://utfs.io/f/b8909133-d460-49f4-a6c3-8cbe1a6796d7-panr1z.d367c5ae72dd9f89e170662104bef4fc.jpg",
    "name": "Flannery Beef",
    "category": "steaks",
    "dsc": "California Reserve Ribeye Steak - 12 oz",
    "price": 32
  },
  {
    "id": "dry-aged-boneless-ribeye-steak-dinner-kit-for-4",
    "img": "https://utfs.io/f/d348f800-0205-4b43-ae0b-5c973b13d60c-evawa7.81c3bdc05fe6bdb2c2214709863120e0.jpg",
    "name": "Chef Francis Mallmann",
    "category": "steaks",
    "dsc": "Dry-Aged Boneless Ribeye Steak Dinner Kit for 4",
    "price": 225
  },
  {
    "id": "california-reserve-filet-mignon-steak",
    "img": "https://utfs.io/f/13cc2e01-fd65-4bfe-b8f0-fae8e478dc55-sladtu.ff15071964ec8141d30c2ba05fb117e0.jpg",
    "name": "Flannery Beef",
    "category": "steaks",
    "dsc": "California Reserve Filet Mignon Steak",
    "price": 22
  },
  {
    "id": "mesquite-smoked-peppered-beef-tenderloin",
    "img": "https://utfs.io/f/bd2e0d20-fdcd-4578-8dbe-c948de217374-d6o7z5.5c314418a1f75c7057eed686e2fad46f.jpg",
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
