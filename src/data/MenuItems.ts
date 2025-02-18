interface MenuItem {
  name: string;
  description: string;
  price: number;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface Menu {
  categories: MenuCategory[];
}

export const menu: Menu = {
  categories: [
    {
      name: "Antipasti",
      items: [
        {
          name: "Caprese salad",
          description:
            "Fresh mozzarella, ripe tomatoes, sweet basil, seasoned with salt and olive oil.",
          price: 5,
        },
        {
          name: "Bruschetta",
          description:
            "Grilled bread rubbed with garlic, topped with fresh tomatoes, basil, and olive oil.",
          price: 4.5,
        },
        {
          name: "Carpaccio",
          description:
            "Thinly sliced raw beef served with arugula, parmesan cheese, and olive oil.",
          price: 7.5,
        },
      ],
    },
    {
      name: "Pasta",
      items: [
        {
          name: "Spaghetti Bolognese",
          description: "Spaghetti with rich tomato and meat sauce.",
          price: 8.5,
        },
        {
          name: "Fettuccine Alfredo",
          description: "Fettuccine pasta tossed in a creamy Alfredo sauce.",
          price: 9.5,
        },
        {
          name: "Penne Arrabbiata",
          description:
            "Penne pasta in a spicy tomato sauce with garlic and chili.",
          price: 8,
        },
      ],
    },
    {
      name: "Pizza",
      items: [
        {
          name: "Margherita",
          description:
            "Classic pizza with tomato sauce, fresh mozzarella, and basil.",
          price: 7.5,
        },
        {
          name: "Pepperoni",
          description:
            "Pizza topped with pepperoni slices and mozzarella cheese.",
          price: 8.5,
        },
        {
          name: "Vegetarian",
          description:
            "Pizza loaded with a variety of seasonal vegetables and cheese.",
          price: 8,
        },
      ],
    },
  ],
};
