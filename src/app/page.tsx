import { businessProfile } from "@/data";
import { Profile } from "./profile";

export default function Home() {
  return <Profile showBusinessProfile={false} profile={businessProfile} />;
}
