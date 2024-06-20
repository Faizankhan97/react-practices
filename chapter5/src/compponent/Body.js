import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  // let listOfRestaurant = [
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "74453",
  //       name: "Domino's Pizza",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       city: "21",
  //       area: "Athwa",
  //       totalRatingsString: "1000+ ratings",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       tags: [],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 45,
  //       minDeliveryTime: 45,
  //       maxDeliveryTime: 45,
  //       slaString: "45 MINS",
  //       lastMileTravel: 0,
  //       slugs: {
  //         restaurant: "dominos-pizza-majura-nondh-test_surat",
  //         city: "surat",
  //       },
  //       cityState: "21",
  //       address:
  //         "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
  //       locality: "Bhatar Road",
  //       parentId: 2456,
  //       unserviceable: false,
  //       veg: true,
  //       select: false,
  //       favorite: false,
  //       tradeCampaignHeaders: [],
  //       aggregatedDiscountInfo: {
  //         header: "FREE DELIVERY",
  //         shortDescriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         descriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         subHeader: "",
  //         headerType: 0,
  //         superFreedel: "",
  //       },
  //       aggregatedDiscountInfoV2: {
  //         header: "",
  //         shortDescriptionList: [
  //           {
  //             meta: "Free Delivery",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         descriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         subHeader: "",
  //         headerType: 0,
  //         superFreedel: "",
  //       },
  //       chain: [],
  //       feeDetails: {
  //         fees: [],
  //         totalFees: 0,
  //         message: "",
  //         title: "",
  //         amount: "",
  //         icon: "",
  //       },
  //       availability: {
  //         opened: true,
  //         nextOpenMessage: "",
  //         nextCloseMessage: "",
  //       },
  //       longDistanceEnabled: 0,
  //       rainMode: "NONE",
  //       thirdPartyAddress: false,
  //       thirdPartyVendor: "",
  //       adTrackingID: "",
  //       badges: {
  //         imageBased: [],
  //         textBased: [],
  //         textExtendedBadges: [],
  //       },
  //       lastMileTravelString: "2.1 kms",
  //       hasSurge: false,
  //       sla: {
  //         restaurantId: "74453",
  //         deliveryTime: 45,
  //         minDeliveryTime: 45,
  //         maxDeliveryTime: 45,
  //         lastMileTravel: 0,
  //         lastMileDistance: 0,
  //         serviceability: "SERVICEABLE",
  //         rainMode: "NONE",
  //         longDistance: "NOT_LONG_DISTANCE",
  //         preferentialService: false,
  //         iconType: "EMPTY",
  //       },
  //       promoted: false,
  //       avgRating: "4.0",
  //       totalRatings: 1000,
  //       new: false,
  //     },
  //     subtype: "basic",
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "410476",
  //       name: "The Brooklyn Creamery - Healthy Ice Cream",
  //       uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
  //       city: "21",
  //       area: "althan bhatar",
  //       totalRatingsString: "100+ ratings",
  //       cloudinaryImageId: "ldtibwymvzehvmdwl8la",
  //       cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
  //       tags: [],
  //       costForTwo: 20000,
  //       costForTwoString: "₹200 FOR TWO",
  //       deliveryTime: 31,
  //       minDeliveryTime: 30,
  //       maxDeliveryTime: 40,
  //       slaString: "30-40 MINS",
  //       lastMileTravel: 6.300000190734863,
  //       slugs: {
  //         restaurant:
  //           "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
  //         city: "surat",
  //       },
  //       cityState: "21",
  //       address:
  //         "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
  //       locality: "Adajan FC",
  //       parentId: 236673,
  //       unserviceable: true,
  //       veg: true,
  //       select: false,
  //       favorite: false,
  //       tradeCampaignHeaders: [],
  //       aggregatedDiscountInfo: {
  //         header: "FREE DELIVERY",
  //         shortDescriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         descriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         subHeader: "",
  //         headerType: 0,
  //         superFreedel: "",
  //       },
  //       aggregatedDiscountInfoV2: {
  //         header: "",
  //         shortDescriptionList: [
  //           {
  //             meta: "Free Delivery",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         descriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         subHeader: "",
  //         headerType: 0,
  //         superFreedel: "",
  //       },
  //       chain: [],
  //       feeDetails: {
  //         fees: [],
  //         totalFees: 0,
  //         message: "",
  //         title: "",
  //         amount: "",
  //         icon: "",
  //       },
  //       availability: {
  //         opened: true,
  //         nextOpenMessage: "",
  //         nextCloseMessage: "",
  //       },
  //       longDistanceEnabled: 0,
  //       rainMode: "NONE",
  //       thirdPartyAddress: false,
  //       thirdPartyVendor: "",
  //       adTrackingID: "",
  //       badges: {
  //         imageBased: [],
  //         textBased: [],
  //         textExtendedBadges: [],
  //       },
  //       lastMileTravelString: "6.3 kms",
  //       hasSurge: false,
  //       sla: {
  //         restaurantId: "410476",
  //         deliveryTime: 31,
  //         minDeliveryTime: 30,
  //         maxDeliveryTime: 40,
  //         lastMileTravel: 6.300000190734863,
  //         lastMileDistance: 0,
  //         serviceability: "SERVICEABLE_WITH_BANNER",
  //         rainMode: "NONE",
  //         longDistance: "NOT_LONG_DISTANCE",
  //         preferentialService: false,
  //         iconType: "EMPTY",
  //       },
  //       promoted: false,
  //       avgRating: "4.4",
  //       totalRatings: 100,
  //       new: false,
  //     },
  //     subtype: "basic",
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "81094",
  //       name: "Richie Rich Juices & Shakes",
  //       uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
  //       city: "21",
  //       area: "Athwa",
  //       totalRatingsString: "500+ ratings",
  //       cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
  //       cuisines: ["Ice Cream"],
  //       tags: [],
  //       costForTwo: 25000,
  //       costForTwoString: "₹250 FOR TWO",
  //       deliveryTime: 30,
  //       minDeliveryTime: 30,
  //       maxDeliveryTime: 40,
  //       slaString: "30-40 MINS",
  //       lastMileTravel: 5.599999904632568,
  //       slugs: {
  //         restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
  //         city: "surat",
  //       },
  //       cityState: "21",
  //       address:
  //         "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
  //       locality: "Parle Point",
  //       parentId: 771,
  //       unserviceable: true,
  //       veg: false,
  //       select: false,
  //       favorite: false,
  //       tradeCampaignHeaders: [],
  //       aggregatedDiscountInfo: {
  //         header: "FREE DELIVERY",
  //         shortDescriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         descriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         subHeader: "",
  //         headerType: 0,
  //         superFreedel: "",
  //       },
  //       aggregatedDiscountInfoV2: {
  //         header: "",
  //         shortDescriptionList: [
  //           {
  //             meta: "Free Delivery",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         descriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         subHeader: "",
  //         headerType: 0,
  //         superFreedel: "",
  //       },
  //       chain: [],
  //       feeDetails: {
  //         fees: [],
  //         totalFees: 0,
  //         message: "",
  //         title: "",
  //         amount: "",
  //         icon: "",
  //       },
  //       availability: {
  //         opened: true,
  //         nextOpenMessage: "",
  //         nextCloseMessage: "",
  //       },
  //       longDistanceEnabled: 0,
  //       rainMode: "NONE",
  //       thirdPartyAddress: false,
  //       thirdPartyVendor: "",
  //       adTrackingID: "",
  //       badges: {
  //         imageBased: [],
  //         textBased: [],
  //         textExtendedBadges: [],
  //       },
  //       lastMileTravelString: "5.5 kms",
  //       hasSurge: false,
  //       sla: {
  //         restaurantId: "81094",
  //         deliveryTime: 30,
  //         minDeliveryTime: 30,
  //         maxDeliveryTime: 40,
  //         lastMileTravel: 5.599999904632568,
  //         lastMileDistance: 0,
  //         serviceability: "SERVICEABLE_WITH_BANNER",
  //         rainMode: "NONE",
  //         longDistance: "NOT_LONG_DISTANCE",
  //         preferentialService: false,
  //         iconType: "EMPTY",
  //       },
  //       promoted: false,
  //       avgRating: "3.9",
  //       totalRatings: 500,
  //       new: false,
  //     },
  //     subtype: "basic",
  //   },
  // ];
  return (
    <div className="main restur">
      <div className="container">
        <div>
          <button
            className="filter-btn"
            onClick={() => setListOfRestaurant(listOfRestaurant.filter((res) => res.data.avgRating > 4))}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="row">
          {listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
