import Heading from "@/components/Heading";
import RecruitmentCard from "@/components/ui-components/RecruitmentCard";
import { Button } from "@/components/ui/button";

interface RecruitmentProfile {
  title: string;
  description: string;
  imageUrl: string;
  links: {
    href: string;
  }[];
}

const recruitmentData: RecruitmentProfile[] = [
  {
    title: "1A Humanistyczny",
    description: "Profil Humanistyczny",
    imageUrl: "https://picsum.photos/1200/1200",
    links: [{ href: "#" }],
  },
  {
    title: "1B Biologiczny",
    description: "Profil Biologiczny",
    imageUrl: "https://picsum.photos/1200/1200",
    links: [{ href: "#" }],
  },
  {
    title: "1C Fizyczny",
    description: "Profil Fizyczny",
    imageUrl: "https://picsum.photos/1200/1200",
    links: [{ href: "#" }],
  },
  {
    title: "1D Informatyczny",
    description: "Profil Informatyczny",
    imageUrl: "https://picsum.photos/1200/1200",
    links: [{ href: "#" }],
  },
  {
    title: "1E Lingwistyczny",
    description: "Profil Lingwistyczny",
    imageUrl: "https://picsum.photos/1200/1200",
    links: [{ href: "#" }],
  },
  {
    title: "1F Społeczno-Ekonomiczny",
    description: "Profil Społeczno-Ekonomiczny",
    imageUrl: "https://picsum.photos/1200/1200",
    links: [{ href: "#" }],
  },
  {
    title: "1G Artystyczny",
    description: "Profil Artystyczny",
    imageUrl: "https://picsum.photos/1200/1200",
    links: [{ href: "#" }],
  },
  {
    title: "1H Techniczny",
    description: "Profil Techniczny",
    imageUrl: "https://picsum.photos/1200/1200",
    links: [{ href: "#" }],
  },
  {
    title: "1I Medyczny",
    description: "Profil Medyczny",
    imageUrl: "https://picsum.photos/1200/1200",
    links: [{ href: "#" }],
  },
];

function Page() {
  return (
    <div className="flex flex-col start justify-center gap-10 w-full">
      <Heading
        title="Rekrutacja 2024/2025"
        description="Oferta edukacyjna SLO."
      />
      <div className="flex items-center gap-4">
        <Button>Regulamin rekrutacji</Button>
        <Button>Nabór elektroniczny</Button>
      </div>
      <div className="grid grid-cols-3 gap-8 p-8 border rounded-lg">
        {recruitmentData.map((profile) => (
          <RecruitmentCard
            key={profile.title}
            title={profile.title}
            description={profile.description}
            imageUrl={profile.imageUrl}
            links={profile.links}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
