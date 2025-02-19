import { MaterialSymbol } from "react-material-symbols";
import { Button } from "../Button";

const Participant = () => (
  <div className="flex gap-6 items-center py-4">
    <img
      src="https://picsum.photos/48"
      alt="user"
      className="w-12 h-12 rounded-full"
    />
    <h5 className="text-[24px] flex flex-auto font-medium leading-7 tracking-[0.48px] sentient">
      John Doe
    </h5>
    <h3 className="sentient text-[32px] leading-10 font-bold tracking-[0.64px] text-feedback-success">
      15/25
    </h3>
    <Button
      theme="extra"
      rounded
      className="p-2 flex items-center justify-center"
    >
      <MaterialSymbol
        icon="article_shortcut"
        fill
        size={24}
        className="h-6 w-6"
      />
    </Button>
  </div>
);

const Participants = () => {
  return (
    <section className="shadow-right p-8 border-sm border-black rounded-md space-y-8">
      <h3 className="text-[32px] font-bold leading-8 tracking-[0.64px] sentient">
        Participants
      </h3>
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
