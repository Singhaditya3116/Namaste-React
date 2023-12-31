import "@testing-library/jest-dom";
import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // console.log(body);

  const shimmer = body.getByTestId("shimmer");
  //expect(shimmer).toBeInTheDocument();
  expect(shimmer.children.length).toBe(15);
  // console.log(shimmer);
});

test("Restaurant should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // console.log(body);

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const restaurantList = body.getByTestId("restaurant-list");
  //expect(shimmer).toBeInTheDocument();
  expect(restaurantList.children.length).toBe(9);
});

test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");
  const searchBtn = body.getByTestId("search-btn");
  const restaurantList = body.getByTestId("restaurant-list");

  fireEvent.change(input, {
    target: { value: "food" },
  });

  fireEvent.click(searchBtn);

  expect(restaurantList.children.length).toBe(1);
});
