import { render, screen } from "@testing-library/react";
import ArticleCard from "../components/ArticleCard";

describe("ArticleCard Component", () => {
  const props = {
    image: "test-image.jpg",
    title: "Test Title",
    description: "Test Description",
    date: "2023-10-01",
  };

  test("renders ArticleCard component correctly", () => {
    render(<ArticleCard {...props} />);

    // Check if the image is rendered with the correct src and alt attributes
    const imageElement = screen.getByAltText(props.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", props.image);

    // Check if the title is rendered correctly
    const titleElement = screen.getByText(props.title);
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered correctly
    const descriptionElement = screen.getByText(props.description);
    expect(descriptionElement).toBeInTheDocument();

    // Check if the date is rendered correctly
    const dateElement = screen.getByText(props.date);
    expect(dateElement).toBeInTheDocument();
  });

  test("renders a link to the article page", () => {
    render(<ArticleCard {...props} />);

    // Check if the title is wrapped in a link
    const linkElement = screen.getByRole("link", { name: props.title });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/article-page");
  });
});
