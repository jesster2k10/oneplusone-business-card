import { profiles } from "@/data";
import { Profile } from "../profile";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(profiles).map((name) => ({ name }));
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProfilePage({ params }: any) {
  const profile = profiles[params.name];

  if (!profile) {
    notFound();
  }

  return <Profile profile={profile} />;
}
