import type { Meta, StoryObj } from "@storybook/react";
import SocialPost from "./SocialPost";

const meta: Meta<typeof SocialPost> = {
  title: "Components/SocialPost",
  component: SocialPost,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "SocialPost is a component that displays different types of social posts, such as exam creation, a review, or an exam saved to favorites.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SocialPost>;

// Historia: Examen Creado
export const ExamCreated: Story = {
  args: {
    type: "examCreated",
  },
  render: (args) => (
    <SocialPost {...args}>
      <SocialPost.Header
        username="edgarjaymez"
        timestamp="8h"
        mainAction="Created a new exam"
      />
      <SocialPost.ExamCard
        title="Machine Learning"
        description="This quiz aims to assess students' understanding of key mathematical concepts and their ability to appl..."
        image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </SocialPost>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Este tipo de post muestra cuando un usuario ha creado un nuevo examen. Incluye un encabezado con el nombre de usuario, la acción realizada y la marca de tiempo, seguido de una tarjeta de examen con título, descripción e imagen.",
      },
    },
  },
};

// Historia: Reseña
export const Review: Story = {
  args: {
    type: "review",
  },
  render: (args) => (
    <SocialPost {...args}>
      <SocialPost.Header
        username="edgarjaymez"
        timestamp="2d"
        mainAction="Left a"
        secondaryAction="review"
        showStars={true}
      />
      <SocialPost.Review
        content="Lorem ipsum dolor sit amet consectetur. Suscipit vel tempus vitae arcu hendrerit eget tortor pharetra. Magna orci sodales accumsan int..."
        exam={{
          title: "Machine Learning",
          image:
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
    </SocialPost>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Este tipo de post muestra cuando un usuario ha dejado una reseña en un examen. Incluye un encabezado con el nombre de usuario, la acción realizada, estrellas de calificación y la marca de tiempo, seguido del contenido de la reseña y una referencia al examen reseñado.",
      },
    },
  },
};

// Historia: Guardado en Favoritos
export const FavoriteSaved: Story = {
  args: {
    type: "favoriteSaved",
  },
  render: (args) => (
    <SocialPost {...args}>
      <SocialPost.Header username="edgarjaymez" timestamp="2d" />
      <SocialPost.FavoriteSaved
        collectionName="Favorites"
        title="Machine Learning"
        image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </SocialPost>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Este tipo de post muestra cuando un usuario ha guardado un examen en su colección de favoritos. Incluye un encabezado con el nombre de usuario y la marca de tiempo, seguido de información sobre la colección donde se guardó el examen y una referencia al examen guardado.",
      },
    },
  },
};
