import { profiles } from "@/data";
import { Profile } from "../profile";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(profiles).map((name) => ({ name }));
}

export default function ProfilePage({ params }: { params: { name: string } }) {
  const profile = profiles[params.name];

  if (!profile) {
    notFound();
  }

  return <Profile profile={profile} />;
}
