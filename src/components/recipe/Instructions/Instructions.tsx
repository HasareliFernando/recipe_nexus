interface InstructionsProps {
  steps: string[];
}

const Instructions = ({ steps }: InstructionsProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-orange-500 mb-4">Instructions</h2>
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex gap-3 text-sm text-gray-700 leading-relaxed"
          >
            <span className="shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
