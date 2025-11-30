import type { Hook } from "@/app/types/hook";
import PageHeader from "@/app/components/PageHeader";
import HookGrid from "@/app/components/HookGrid";
import hooks from "@/app/data/hooks.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader />
        <HookGrid hooks={hooks as Hook[]} />
      </main>
    </div>
  );
}
