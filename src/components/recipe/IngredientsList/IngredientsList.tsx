interface IngredientsListProps {
  title: string;
  items: string[];
}

const IngredientsList = ({ title, items }: IngredientsListProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-orange-500 mb-4">Ingredients</h2>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed"
          >
            <span className="text-orange-400 mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
