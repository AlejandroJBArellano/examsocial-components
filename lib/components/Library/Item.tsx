import { PropsWithChildren } from "react";
import { Heading4, Paragraph } from "../FontFaces";
import { Icon } from "../Icon";

const LibraryItem = ({
  title,
  children,
  ...props
}: PropsWithChildren<
  { title: string } & React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
>) => {
  return (
    <a className="mb-2 cursor-pointer space-y-1" {...props}>
      <div className="flex justify-between">
        <Heading4>{title}</Heading4>
        <Icon name="arrow_forward" size={24} />
      </div>
      <Paragraph>{children}</Paragraph>
    </a>
  );
};

export default LibraryItem;
