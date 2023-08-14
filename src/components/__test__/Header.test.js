import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // console.log(header);
  //Need to check if logo is loaded.
  const logo = header.getAllByTestId("logo");
  // console.log(logo[0]);
});

test("Cart should have 0 items on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // console.log(header);
  //Need to check if logo is loaded.
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0 items");
});
