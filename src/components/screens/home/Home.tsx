import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { cardsData as initialCardsData } from "@/components/screens/home";

interface Card {
  imageUrl: string;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      setLoading(true);
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setCards(initialCardsData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="h-48 w-[300px]" />
            ))
          : cards.map((card, index) => (
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
                  <p className="text-sm text-gray-600 mt-2">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default Home;
