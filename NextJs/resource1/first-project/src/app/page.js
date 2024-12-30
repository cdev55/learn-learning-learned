"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log({ router });
  const handleNavigateToProfile = async () => {
    router.push("profile");
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to Nextjs universe.</h1>
      <Link href={"products/4/4/4/4"}>Go to product page.</Link>
      <h2 onClick={handleNavigateToProfile}>
        Another way to go to Profile page.
      </h2>
    </div>
  );
}
