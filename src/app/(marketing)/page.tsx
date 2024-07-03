import { Icons } from "@/components/icons";

export default async function HomePage() {
  return (
    <div className="flex gap-4">
      <Icons.apple className="h-10 w-10" />
      <Icons.aria className="h-10 w-10" />
      <Icons.logo className="h-10 w-10" />
      <Icons.pnpm className="h-10 w-10" />
      <Icons.radix className="h-10 w-10" />
      <Icons.tailwind className="h-10 w-10" />
      <Icons.spinner className="h-10 w-10" />
      <Icons.react className="h-10 w-10" />
      <Icons.npm className="h-10 w-10" />
    </div>
  );
}
