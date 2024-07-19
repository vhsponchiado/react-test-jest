import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListPage from "../pages/list/list";

describe("HomePage", () => {
  it("should render title page", () => {
    const { getByText } = render(<ListPage />);
    expect(getByText("Title Page")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText } = render(<ListPage />);

    const inputElement = getByPlaceholderText("New item");
    const button = getByText("Add to list");

    await userEvent.type(inputElement, "New");
    userEvent.click(button);

    await waitFor(() => {
      expect(getByText('New')).toBeInTheDocument();
    });
  });

  it("should be able to remove item from the list", async () => {
    const { getAllByText, queryByText } = render(<ListPage />);

    const removeButton = getAllByText('Remove Item')[0];

    await userEvent.click(removeButton);

    await waitForElementToBeRemoved(() => queryByText("item1"));

    expect(queryByText("item1")).not.toBeInTheDocument();
  });
});
