import React from "react";

interface Card {
  imageUrl: string;
  title: string;
  description: string;
}

interface HomeProps {
  cards: Card[];
}

export const Home: React.FC<HomeProps> = ({ cards }) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
