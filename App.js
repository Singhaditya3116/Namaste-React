import React from "react";
import ReactDOM from "react-dom/client";

/*
  Header
   -logo
   -menu list (Home,about,contact us)
  
  Body
   -Search Box
   -Restaurant list
    -Restaurant Card (Image,Name,Rating,Cuisine)
  
  Footer
   -Copyright


*/

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://images.crunchbase.com/c_lpad,f_auto,q_auto:eco,dpr_1/ciweynx3x1xu2ny9corc"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

/*
const McDonald = {
  name: "McDonald's",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
  cuisine: ["American", "Hello"],
  rating: "4.2",
};
*/
const restaurantList = [
  {
    info: {
      id: "31803",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      locality: "Magnet Mall",
      areaName: "Bhandup West",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "31803",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-20 02:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-0c6a46ec-7375-4d95-9cca-d6b87c0f9de0",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-magnet-mall-bhandup-west-mumbai-31803",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "634289",
      name: "Dabba Garam (Homely Meals & More)",
      cloudinaryImageId: "sjjn3eiara6fjo2uxxhk",
      locality: "Uthalsar Zone",
      areaName: "Mulund",
      costForTwo: "₹150 for two",
      cuisines: ["Home Food", "North Indian", "Thai"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "634289",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "67608",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-19 23:30:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-0c6a46ec-7375-4d95-9cca-d6b87c0f9de0",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dabba-garam-homely-meals-and-more-uthalsar-zone-mulund-mumbai-634289",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "578578",
      name: "Bakingo",
      cloudinaryImageId: "wbr8ylnolsfjyg0an8m9",
      locality: "Gamdevi Road",
      areaName: "Bhandup West",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "578578",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "3818",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-20 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-0c6a46ec-7375-4d95-9cca-d6b87c0f9de0",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bakingo-gamdevi-road-bhandup-west-mumbai-578578",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "435821",
      name: "Domino's Pizza",
      cloudinaryImageId: "hlcqaxkgnf0nmusq3xnm",
      locality: "Kurla",
      areaName: "RUNWAL GREENS",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "435821",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-20 00:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-0c6a46ec-7375-4d95-9cca-d6b87c0f9de0",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-kurla-runwal-greens-mumbai-435821",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "605792",
      name: "Thepla house by Tejals Kitchen",
      cloudinaryImageId: "oqjeu8ozf04mm4qb7rnk",
      locality: "Mulund",
      areaName: "Raja Industrial Estate",
      costForTwo: "₹400 for two",
      cuisines: ["Gujarati", "Rajasthani", "Jain"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "605792",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "360774",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-19 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-0c6a46ec-7375-4d95-9cca-d6b87c0f9de0",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/thepla-house-by-tejals-kitchen-mulund-raja-industrial-estate-mumbai-605792",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = (props) => (
  <div className="card">
    <img
      alt="Restaurant photo"
      src={
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        props.restaurant.info.cloudinaryImageId
      }
    />
    <div className="restaurant-name">
      <h4>{props.restaurant.info.name}</h4>
      <h4>{props.restaurant.info.avgRating} stars</h4>
    </div>

    <h4 className="cuisine">{props.restaurant.info.cuisines.join(",")}</h4>
  </div>
);

const Body = () => {
  return (
    <div className="main">
      <RestaurantCard restaurant={restaurantList[0]} />
      <RestaurantCard restaurant={restaurantList[1]} />
      <RestaurantCard restaurant={restaurantList[2]} />
      <RestaurantCard restaurant={restaurantList[3]} />
      <RestaurantCard restaurant={restaurantList[4]} />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h3>Footer</h3>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
