import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>

      {/* main cover */}
      <SectionTitle
        subHeading="Don't miss"
        heading="Today's Offer"
      ></SectionTitle>

      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu items */}
      <MenuCategory
        img={dessertImg}
        title="dessert"
        items={desserts}
      ></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory img={pizzaImg} title="pizza" items={pizza}></MenuCategory>

      {/* salads menu items */}
      <MenuCategory img={saladImg} title="salad" items={salads}></MenuCategory>

      {/* soups menu items */}
      <MenuCategory img={soupImg} title="soup" items={soups}></MenuCategory>
    </div>
  );
};

export default Menu;
