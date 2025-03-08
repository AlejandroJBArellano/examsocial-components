import type { Meta, StoryObj } from "@storybook/react";
import MainContainer from "./MainContainer";

const meta: Meta<typeof MainContainer> = {
  title: "Components/MainContainer",
  component: MainContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "MainContainer is a component that displays main information with 'read more/less' functionality for long texts. It includes actions such as favorites, save to collection, and buttons.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainContainer>;

// Texto largo para demostrar la funcionalidad de "read more"
const longText = `Welcome to the Svelte 5 Quiz! This quiz is designed to test your knowledge and understanding of Svelte 5, a powerful and innovative component framework for building user interfaces. The quiz consists of 10 multiple-choice questions that cover various aspects of Svelte 5, including reactivity, component creation, lifecycle functions, form handling, and project setup.

Each question is carefully crafted to not only test your knowledge of Svelte 5 but also to compare it with other popular frameworks such as React, Vue.js, and Angular. This will help you understand the unique features and advantages of Svelte 5 in the broader context of modern web development.`;

// Historia por defecto
export const Default: Story = {
  render: () => (
    <MainContainer>
      <MainContainer.Description>
        Welcome to the Svelte 5 Quiz! This quiz is designed to test your
        knowledge and understanding of Svelte
      </MainContainer.Description>
      <MainContainer.Footer>
        <MainContainer.Actions>
          <MainContainer.Action
            type="favorite"
            onClick={() => console.log("Favorite clicked")}
          />
          <MainContainer.Action
            type="bookmark"
            onClick={() => console.log("Bookmark clicked")}
          />
        </MainContainer.Actions>
        <MainContainer.Button onClick={() => console.log("Start exam clicked")}>
          Start exam
        </MainContainer.Button>
      </MainContainer.Footer>
    </MainContainer>
  ),
};

// Historia con texto largo para demostrar "read more"
export const WithLongText: Story = {
  render: () => (
    <MainContainer>
      <MainContainer.Description>{longText}</MainContainer.Description>
      <MainContainer.Footer>
        <MainContainer.Actions>
          <MainContainer.Action
            type="favorite"
            onClick={() => console.log("Favorite clicked")}
          />
          <MainContainer.Action
            type="bookmark"
            onClick={() => console.log("Bookmark clicked")}
          />
        </MainContainer.Actions>
        <MainContainer.Button onClick={() => console.log("Start exam clicked")}>
          Start exam
        </MainContainer.Button>
      </MainContainer.Footer>
    </MainContainer>
  ),
};

// Historia con tamaño XL
export const XLSize: Story = {
  render: () => (
    <MainContainer size="xl">
      <MainContainer.Description>{longText}</MainContainer.Description>
      <MainContainer.Footer>
        <MainContainer.Actions>
          <MainContainer.Action
            type="favorite"
            onClick={() => console.log("Favorite clicked")}
            tooltipText="Add to favorites"
          />
          <MainContainer.Action
            type="bookmark"
            onClick={() => console.log("Bookmark clicked")}
            tooltipText="Add to collection"
          />
        </MainContainer.Actions>
        <MainContainer.Button onClick={() => console.log("Start exam clicked")}>
          Start exam
        </MainContainer.Button>
      </MainContainer.Footer>
    </MainContainer>
  ),
};

// Historia con un elemento favorito
export const WithFavorite: Story = {
  render: () => (
    <MainContainer>
      <MainContainer.Description>
        Welcome to the Svelte 5 Quiz! This quiz is designed to test your
        knowledge and understanding of Svelte 5.
      </MainContainer.Description>
      <MainContainer.Footer>
        <MainContainer.Actions>
          <MainContainer.Action
            type="favorite"
            isFavorite={true}
            onClick={() => console.log("Favorite clicked")}
          />
          <MainContainer.Action
            type="bookmark"
            onClick={() => console.log("Bookmark clicked")}
          />
        </MainContainer.Actions>
        <MainContainer.Button onClick={() => console.log("Start exam clicked")}>
          Start exam
        </MainContainer.Button>
      </MainContainer.Footer>
    </MainContainer>
  ),
};

// Historia con un elemento guardado
export const WithSaved: Story = {
  render: () => (
    <MainContainer>
      <MainContainer.Description>
        Welcome to the Svelte 5 Quiz! This quiz is designed to test your
        knowledge and understanding of Svelte 5.
      </MainContainer.Description>
      <MainContainer.Footer>
        <MainContainer.Actions>
          <MainContainer.Action
            type="favorite"
            onClick={() => console.log("Favorite clicked")}
          />
          <MainContainer.Action
            type="bookmark"
            isSaved={true}
            onClick={() => console.log("Bookmark clicked")}
          />
        </MainContainer.Actions>
        <MainContainer.Button onClick={() => console.log("Start exam clicked")}>
          Start exam
        </MainContainer.Button>
      </MainContainer.Footer>
    </MainContainer>
  ),
};

// Historia sin acciones
export const WithoutActions: Story = {
  render: () => (
    <MainContainer>
      <MainContainer.Description>
        Welcome to the Svelte 5 Quiz! This quiz is designed to test your
        knowledge and understanding of Svelte 5.
      </MainContainer.Description>
      <MainContainer.Footer>
        <div></div> {/* Espacio vacío donde irían las acciones */}
        <MainContainer.Button onClick={() => console.log("Start exam clicked")}>
          Start exam
        </MainContainer.Button>
      </MainContainer.Footer>
    </MainContainer>
  ),
};

// Historia con diferentes configuraciones
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-2 font-bold">Default Size</h3>
        <MainContainer>
          <MainContainer.Description>{longText}</MainContainer.Description>
          <MainContainer.Footer>
            <MainContainer.Actions>
              <MainContainer.Action
                type="favorite"
                onClick={() => console.log("Favorite clicked")}
              />
              <MainContainer.Action
                type="bookmark"
                onClick={() => console.log("Bookmark clicked")}
              />
            </MainContainer.Actions>
            <MainContainer.Button
              onClick={() => console.log("Start exam clicked")}
            >
              Start exam
            </MainContainer.Button>
          </MainContainer.Footer>
        </MainContainer>
      </div>

      <div>
        <h3 className="mb-2 font-bold">XL Size</h3>
        <MainContainer size="xl">
          <MainContainer.Description>{longText}</MainContainer.Description>
          <MainContainer.Footer>
            <MainContainer.Actions>
              <MainContainer.Action
                type="favorite"
                onClick={() => console.log("Favorite clicked")}
                tooltipText="Add to favorites"
              />
              <MainContainer.Action
                type="bookmark"
                onClick={() => console.log("Bookmark clicked")}
                tooltipText="Add to collection"
              />
            </MainContainer.Actions>
            <MainContainer.Button
              onClick={() => console.log("Start exam clicked")}
            >
              Start exam
            </MainContainer.Button>
          </MainContainer.Footer>
        </MainContainer>
      </div>

      <div>
        <h3 className="mb-2 font-bold">With Active States</h3>
        <MainContainer>
          <MainContainer.Description>
            Welcome to the Svelte 5 Quiz! This quiz is designed to test your
            knowledge and understanding of Svelte 5.
          </MainContainer.Description>
          <MainContainer.Footer>
            <MainContainer.Actions>
              <MainContainer.Action
                type="favorite"
                isFavorite={true}
                onClick={() => console.log("Favorite clicked")}
              />
              <MainContainer.Action
                type="bookmark"
                isSaved={true}
                onClick={() => console.log("Bookmark clicked")}
              />
            </MainContainer.Actions>
            <MainContainer.Button
              onClick={() => console.log("Start exam clicked")}
            >
              Start exam
            </MainContainer.Button>
          </MainContainer.Footer>
        </MainContainer>
      </div>
    </div>
  ),
};
