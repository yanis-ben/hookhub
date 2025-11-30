import type { Hook } from "@/app/types/hook";
import HookCard from "@/app/components/HookCard";

interface HookGridProps {
  hooks: Hook[];
}

export default function HookGrid({ hooks }: HookGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {hooks.map((hook) => (
        <HookCard key={hook.id} hook={hook} />
      ))}
    </div>
  );
}
