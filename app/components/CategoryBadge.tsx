import type { HookCategory } from "@/app/types/hook";
import { categoryColors } from "@/app/utils/categoryColors";

interface CategoryBadgeProps {
  category: HookCategory;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const colors = categoryColors[category];

  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${colors.bg} ${colors.text}`}
    >
      {category}
    </span>
  );
}
