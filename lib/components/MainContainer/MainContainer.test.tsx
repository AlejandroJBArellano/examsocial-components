import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import MainContainer from "./MainContainer";

describe("MainContainer", () => {
  const longText = "This is a very long text that should be truncated. ".repeat(
    10,
  );

  test("renders the component correctly", () => {
    render(
      <MainContainer>
        <MainContainer.Description>Test description</MainContainer.Description>
        <MainContainer.Footer>
          <MainContainer.Actions>
            <MainContainer.Action type="favorite" />
          </MainContainer.Actions>
          <MainContainer.Button>Test Button</MainContainer.Button>
        </MainContainer.Footer>
      </MainContainer>,
    );

    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
    expect(screen.getByTestId("favorite-button")).toBeInTheDocument();
  });

  test("truncates long text and shows 'Read more' button", () => {
    render(
      <MainContainer>
        <MainContainer.Description>{longText}</MainContainer.Description>
      </MainContainer>,
    );

    expect(screen.getByText(/This is a very long text/)).toBeInTheDocument();
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });

  test("expands text when 'Read more' is clicked", () => {
    render(
      <MainContainer>
        <MainContainer.Description>{longText}</MainContainer.Description>
      </MainContainer>,
    );

    const readMoreButton = screen.getByText("Read more");
    fireEvent.click(readMoreButton);

    expect(screen.getByText("Read less")).toBeInTheDocument();
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  test("collapses text when 'Read less' is clicked", () => {
    render(
      <MainContainer>
        <MainContainer.Description>{longText}</MainContainer.Description>
      </MainContainer>,
    );

    // Primero expandimos
    const readMoreButton = screen.getByText("Read more");
    fireEvent.click(readMoreButton);

    // Luego colapsamos
    const readLessButton = screen.getByText("Read less");
    fireEvent.click(readLessButton);

    expect(screen.getByText("Read more")).toBeInTheDocument();
    expect(screen.queryByText(longText)).not.toBeInTheDocument();
  });

  test("renders with xl size correctly", () => {
    render(
      <MainContainer size="xl">
        <MainContainer.Description>Test description</MainContainer.Description>
        <MainContainer.Footer>
          <MainContainer.Actions>
            <MainContainer.Action type="favorite" />
          </MainContainer.Actions>
          <MainContainer.Button>Test Button</MainContainer.Button>
        </MainContainer.Footer>
      </MainContainer>,
    );

    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  test("action buttons trigger callbacks when clicked", () => {
    const handleFavoriteClick = vi.fn();

    render(
      <MainContainer>
        <MainContainer.Footer>
          <MainContainer.Actions>
            <MainContainer.Action
              type="favorite"
              onClick={handleFavoriteClick}
            />
          </MainContainer.Actions>
        </MainContainer.Footer>
      </MainContainer>,
    );

    const favoriteButton = screen.getByTestId("favorite-button");
    fireEvent.click(favoriteButton);

    expect(handleFavoriteClick).toHaveBeenCalled();
  });

  test("main button triggers callback when clicked", () => {
    const handleButtonClick = vi.fn();

    render(
      <MainContainer>
        <MainContainer.Footer>
          <MainContainer.Button onClick={handleButtonClick}>
            Test Button
          </MainContainer.Button>
        </MainContainer.Footer>
      </MainContainer>,
    );

    const button = screen.getByText("Test Button");
    fireEvent.click(button);

    expect(handleButtonClick).toHaveBeenCalled();
  });
});
