interface ChipSelectProps {
  options: readonly string[];
  selected: string[];
  onToggle: (option: string) => void;
  legendId: string;
}

/** Chips seleccionables (multi-select) para "¿Qué quieres mejorar?" (brief sección MODAL, paso 2). */
export function ChipSelect({ options, selected, onToggle, legendId }: ChipSelectProps) {
  return (
    <div role="group" aria-labelledby={legendId} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onToggle(option)}
            className={`rounded-[var(--radius-pill)] border px-4 py-2 font-body text-sm font-medium transition-colors duration-150 ${
              isSelected
                ? "border-orange-500 bg-orange-500 text-navy-900"
                : "border-border-light bg-white text-navy-900 hover:border-blue-600/50"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
