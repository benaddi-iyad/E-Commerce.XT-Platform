"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    text: "Absolutely fantastic! The quality exceeded my expectations and the service was top-notch.",
  },
  {
    name: "Emily Brown",
    rating: 4,
    text: "Good experience overall. The product was as described, though delivery took a bit longer than expected.",
  },
  {
    name: "Michael Smith",
    rating: 3,
    text: "The product is decent but not as premium as I had hoped. Still a reasonable purchase for the price.",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Love it! The craftsmanship is excellent, and the customer support was very helpful throughout the process.",
  },
  {
    name: "Anna Green",
    rating: 4,
    text: "Nice product! It looks great and works as expected, but there's room for improvement in the packaging.",
  },
  {
    name: "James White",
    rating: 5,
    text: "Outstanding experience! I’m thoroughly impressed by both the product and the fast delivery time.",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
              <p className="font-semibold text-sm">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
