import { render, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import MenuItemCard from "../MenuItemCard";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("Cart should update on click of Add Button", () => {
  const restaurantMenu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
        <MenuItemCard />
      </Provider>
    </StaticRouter>
  );

  const menuList = restaurantMenu.getByTestId("menu-list");
  const cart = restaurantMenu.getAllByTestId("cart");
  const addBtns = restaurantMenu.getAllByTestId("add-btn");

  fireEvent.click(addBtns[0]);

  expect(cart.innerHTML).toBe("Cart - 1 items");
});
