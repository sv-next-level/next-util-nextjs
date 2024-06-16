import { Button } from "@/components/ui/button";
import { Accounts } from "@/components/accounts";
import { Apps } from "@/components/apps";
import { Settings } from "@/components/settings";
import { Themes } from "@/components/themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute right-[16px] top-[14px] flex w-auto justify-between gap-2">
        <Themes />
        <Settings />
        <Apps />
        <Accounts />
      </div>

      <Button className="w-full">ghghj</Button>
    </main>
  );
}
