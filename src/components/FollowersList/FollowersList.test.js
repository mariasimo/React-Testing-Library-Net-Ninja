import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "./FollowersList";

const MockFollowerList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

const mockedResponse = {
  data: {
    results: [
      {
        name: { first: "", last: "" },
        picture: { large: "" },
        login: { username: "" },
      },
      {
        name: { first: "", last: "" },
        picture: { large: "" },
        login: { username: "" },
      },
      {
        name: { first: "", last: "" },
        picture: { large: "" },
        login: { username: "" },
      },
      {
        name: { first: "", last: "" },
        picture: { large: "" },
        login: { username: "" },
      },
      {
        name: { first: "", last: "" },
        picture: { large: "" },
        login: { username: "" },
      },
    ],
  },
};

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => mockedResponse,
  },
}));

describe("FollowerList", () => {
  beforeAll(() => console.log("RUN ONCE"));
  beforeEach(() => console.log("RUN EVERY TIME"));

  it("should render follower item", async () => {
    render(<MockFollowerList />);

    const followerDivEl = await screen.findByTestId("follower-item-0");
    expect(followerDivEl).toBeInTheDocument();
  });
  it("should render multiple follower items", async () => {
    render(<MockFollowerList />);

    const followerDivEl = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivEl).toHaveLength(5);
  });
});
