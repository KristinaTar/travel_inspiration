import coverCzech from "../../public/images/countriesToVisit/coverPhotos/prague_cover.jpg";
import coverMarocco from "../../public/images/countriesToVisit/coverPhotos/marocco_cover.jpg";
import coverAustria from "../../public/images/countriesToVisit/coverPhotos/vienna_cover.jpg";

export const countriesData = [
  {
    country: 'Austria',
    id: 'AU',
    currency: "EUR",
    capital: "Vienna",
    cities: ["Salzburg", "Vienna"],
    slug: "austria",
    coverImg: coverAustria,
  },
  {
    country: 'Czech Republic',
    id: 'CZ',
    currency: "EUR",
    capital: "Prague",
    cities: ["Prague ", "Karlovy Vary "],
    slug: "czech_republic",
    coverImg: coverCzech,
  },
  {
    country: 'Morocco',
    id: 'MA',
    currency: "MAD",
    capital: "Rabat",
    cities: ["Marrakesh ", "Fes", "Casablanca", "Chefchaouen"],
    slug: "morocco",
    coverImg: coverMarocco,
  },

]