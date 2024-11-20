import React from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.11,
              ease: "linear",
              stiffness: false,
            }}
            viewport={{ once: true }}
          >
            {card.imageUrl ? (
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <Skeleton className="h-48 w-[300px]" />
            )}
            <div className="p-4">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
