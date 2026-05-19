// src/components/ImagesGallery.jsx

import Affogato from '../images folder/Affogato.jpg'
import Cappuccino from '../images folder/Cappuccino.jpg'
import classicStrawberry from '../images folder/ClassicStrawberry.jpg'
import Cortado from '../images folder/Cortado.jpg'
import Frappuccino from '../images folder/Frappuccino.jpg'
import latte3SteamedMilk from '../images folder/Latte3SteamedMilk.jpg'
import latte2SteamMilk from '../images folder/Latte2SteamMilk.jpg'
import FlatWhite from '../images folder/FlatWhite.jpg'
import Macchiato from '../images folder/Macchiato.jpg'
import Mocha from '../images folder/Mocha.jpg'
import maltedMilkshake from '../images folder/MaltedMilkshake.jpg'

//  Exported as a Key-Value Object for instant rendering lookups in your CoffeeList
export const COFFEE_IMAGES = {
  "Affogato": Affogato,
  "Cappuccino": Cappuccino,
  "Classic Strawberry": classicStrawberry,
  "Cortado": Cortado,
  "Frappuccino": Frappuccino,
  "Latte (3 Steamed Milk)": latte3SteamedMilk,
  "Latte (2 Steam Milk)": latte2SteamMilk,
  "Flat White": FlatWhite,
  "Macchiato": Macchiato,
  "Mocha": Mocha,
  "Malted Milkshake": maltedMilkshake,
  "Standard Brew": Mocha // Fallback asset
};

// Generates the clean array of strings needed for your admin select dropdown options
export const COFFEE_OPTIONS = Object.keys(COFFEE_IMAGES).filter(key => key !== "Standard Brew");