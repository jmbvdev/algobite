import MenuCardList from "@/app/components/menu/MenuCardList/MenuCardList";
import RestaurantNavBar from "@/app/components/restaurant/RestaurantNavBar/RestaurantNavBar";
import { Item, PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string): Promise<Item[]> => {
  const restaurants = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurants) {
    notFound();
  }
  return restaurants.items;
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantMenu(params.slug);
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar slug={params.slug} />
      <MenuCardList menu={menu} />
    </div>
  );
};

export default RestaurantMenu;
