import { Button } from "../Button";
import { Heading3, Heading5 } from "../FontFaces";

const Participant = () => (
  <div className="flex items-center gap-6 py-4">
    <img
      src="https://picsum.photos/48"
      alt="user"
      className="h-12 w-12 rounded-full"
    />
    <Heading5>John Doe</Heading5>
    <Heading3 className="text-feedback-success">15/25</Heading3>
    <Button
      theme="extra"
      rounded
      className="flex items-center justify-center p-2"
    >
      {/* <ArticleShortcut className="h-6 w-6" /> */}
    </Button>
  </div>
);

const Participants = () => {
  return (
    <section className="space-y-8 rounded-md border-sm border-black p-8 shadow-right">
      <Heading3>Participants</Heading3>
      <div className="divide-y-sm divide-black">
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
      </div>
    </section>
  );
};

export default Participants;
