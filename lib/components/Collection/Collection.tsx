import React, { PropsWithChildren } from "react";
import { Heading5 } from "../FontFaces";
import { Icon } from "../Icon";

// Add subcomponent
interface AddProps extends PropsWithChildren {
  onClick?: () => void;
}

const Add: React.FC<AddProps> = ({ children, onClick }) => {
  return (
    <button
      className="flex w-full items-center justify-between border-b-sm border-gray-300 pb-4"
      onClick={onClick}
    >
      <Heading5>{children}</Heading5>
      <Icon name="add" size={24} />
    </button>
  );
};

// Main Collection component
interface CollectionProps extends PropsWithChildren {
  className?: string;
}

const Collection: React.FC<CollectionProps> & {
  Add: typeof Add;
} = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

// Attach Add as a subcomponent
Collection.Add = Add;

export { Collection };
export default Collection;
