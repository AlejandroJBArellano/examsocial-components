import { Heading3, Heading6, Smoll } from "../FontFaces";

interface RetentionRateProps {
  completed: number;
  outOfTime: number;
  quit: number;
}

const RetentionRate = ({ completed, outOfTime, quit }: RetentionRateProps) => {
  return (
    <div className="h-full space-y-4 rounded-lg border border-secondary-shadow bg-secondary-tint p-8">
      <Heading3>Retention Rate</Heading3>
      <div className="flex w-full divide-x-sm divide-black border-sm border-black">
        {completed > 0 && (
          <div
            className="bg-feedback-success p-3 text-center"
            style={{
              width: `${completed}%`,
            }}
          >
            <Heading6>{completed}%</Heading6>
          </div>
        )}
        {outOfTime > 0 && (
          <div
            className="bg-feedback-warning p-3 text-center"
            style={{
              width: `${outOfTime}%`,
            }}
          >
            <Heading6>{outOfTime}%</Heading6>
          </div>
        )}
        {quit > 0 && (
          <div
            className="bg-feedback-error p-3 text-center"
            style={{
              width: `${quit}%`,
            }}
          >
            <Heading6 className="text-white">{quit}%</Heading6>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-8 border-sm border-black bg-feedback-success" />
          <Smoll>Completed ({completed}%)</Smoll>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-8 border-sm border-black bg-feedback-warning" />
          <Smoll>Out of Time ({outOfTime}%)</Smoll>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-8 border-sm border-black bg-feedback-error" />
          <Smoll>Quit ({quit}%)</Smoll>
        </div>
      </div>
    </div>
  );
};

export default RetentionRate;
