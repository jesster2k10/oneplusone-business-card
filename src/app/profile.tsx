import { Logomark } from "@/branding/logomark";
import { Profile as ProfileType, businessProfile } from "@/data";
import Globe from "@/globe";
import clsx from "clsx";
import { MdMail, MdPhone } from "react-icons/md";

export interface ProfileProps {
  profile: ProfileType;
  showBusinessProfile?: boolean;
}

type ButtonLinkProps = {
  title: string;
  Icon?: React.ComponentType;
  href?: string;
  onClick?: () => void;
};

const ButtonLink = ({ href, onClick, title, Icon }: ButtonLinkProps) => {
  const Tag = href ? "a" : "button";
  const tagProps = href ? { href } : { onClick };

  return (
    <Tag
      {...tagProps}
      className={clsx(
        "bg-brand-600 text-white font-bold text-center uppercase text-sm flex items-center justify-between p-2",
        "cursor-pointer hover:opacity-75 transition-all ease-in-out"
      )}
    >
      {Icon ? <Icon /> : null}
      {title}
      {Icon ? <span /> : null}
    </Tag>
  );
};

export function Profile({ profile, showBusinessProfile = true }: ProfileProps) {
  return (
    <div className="py-16 max-w-xs mx-auto">
      <Logomark className="w-64 mx-auto" />
      <p className="leading-none text-center text-sm mt-2">
        Live in Creative Mode. It&apos;s that simple
      </p>
      <div className="text-center my-6 space-y-0">
        <h1 className="text-xl font-bold">{profile.title}</h1>
        <h2 className="font-medium">{profile.subtitle}</h2>
      </div>
      <Globe width={200} texture="globe" className="mx-auto w-[200px]" />
      <h3 className="mt-8 mb-2 text-xs uppercase font-bold">
        Contact Information
      </h3>
      <div className="flex flex-col items-start mb-8 mx-auto">
        <a href={`mailto:${profile.email}`} className="flex items-center">
          <MdMail /> &nbsp; {profile.email}
        </a>
        <a href={`tel:${profile.phone}`} className="flex items-center">
          <MdPhone />
          &nbsp;
          {profile.phone}
        </a>
      </div>
      {showBusinessProfile ? (
        <>
          <h3 className="mt-8 mb-2 text-xs uppercase font-bold">
            Business Profile
          </h3>
          <div className="space-y-2 max-w-xs mx-auto flex flex-col">
            {businessProfile.links.map((link) => (
              <ButtonLink
                key={link.title}
                title={link.title}
                href={link.href}
                Icon={link.icon}
                onClick={link.onClick}
              />
            ))}
          </div>
        </>
      ) : null}
      {profile.links.length > 0 ? (
        <>
          <h3 className="mt-8 mb-2 text-xs uppercase font-bold">
            Personal Profile
          </h3>
          <div className="max-w-xs mx-auto flex flex-col space-y-2">
            {profile.links.map((link) => (
              <ButtonLink
                key={link.title}
                href={link.href}
                onClick={link.onClick}
                Icon={link.icon}
                title={link.title}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
