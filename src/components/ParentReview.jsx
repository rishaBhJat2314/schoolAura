
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HighlightText from "./Common/HighlightText";

const reviews = [
  {
    name: "Rakesh Sharma",
    location: "Faridabad, Haryana",
    image: "/src/Assets/userImage.jpg",
    review:
      "A parent who has a phobia for math would dread to see her child going through the same A parent who has a phobia for math would dread to see her child going through the same...",
  },
  {
    name: "Varun Kasyap",
    location: "Uttar Pradesh",
    image: "/src/Assets/userImage2.jpeg",
    review:
      "School Aura Teachers make sure one understands the concept by giving everyday observations...",
  },
  {
    name: "Vishal Kumar",
    location: "Delhi",
    image: "/src/Assets/userImage3.jpeg",
    review:
      "My daughter used to despise math, but now she can confidently take math tests...",
  },
  {
    name: "Ravi Kaushal",
    location: "Indore, Madhya Pradesh",
    image: "/src/Assets/userImage4.jpeg",
    review:
      "Excellent teacher with a fantastic teaching method; if I had had this teacher in school...",
  },
  {
    name: "Amit Verma",
    location: "Bangalore, Karnataka",
    image: "/src/Assets/userImage4.jpeg",
    review:
      "I am so happy with the way my child is learning. The interactive platform makes learning fun...",
  },
  {
    name: "Sita Nair",
    location: "Mumbai, Maharashtra",
    image: "/src/Assets/userImage3.jpeg",
    review:
      "My son struggled with science before, but now he enjoys studying it. Thanks, School Aura...",
  },
  {
    name: "Rahul Mehta",
    location: "Kolkata, West Bengal",
    image: "/src/Assets/userImage2.jpeg",
    review:
      "The teachers here are very helpful, and the content is structured in a way that helps students The teachers here are very helpful, and the content is structured in a way that helps students...",
  },
  {
    name: "Neha Singh",
    location: "Chandigarh",
    image: "/src/Assets/userImage.jpg",
    review:
      "A great platform for learning with amazing teachers. Highly recommended!",
  },
];

const ParentsReview = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      waitForAnimate: false,
      pauseOnHover: false,
    };

  return (
    <section className="py-20 px-20 mb-24 bg-gray-100">
      <div className="flex gap-x-2 mx-auto justify-center w-full items-center py-4">
        <HighlightText
          first={"WHAT "}
          second={""}
        />
        <HighlightText
          first={""}
          second={"PARENT SAYS"}
        />
      </div>

      <div className="mt-6 px-6">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const ReviewCard = ({ review }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mx-3">
    <div className="flex items-center gap-3 mb-3">
      <img
        src={review.image}
        alt={review.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-bold text-gray-900">{review.name}</h3>
        <p className="text-orange-500 text-sm">{review.location}</p>
      </div>
    </div>
    <p className="text-gray-700">{review.review}</p>
  </div>
);

export default ParentsReview;