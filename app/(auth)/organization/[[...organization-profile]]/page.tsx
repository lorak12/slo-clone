import { OrganizationSwitcher } from "@clerk/nextjs";

export default function OrganizationSwitcherPage() {
  return (
    <div>
      <OrganizationSwitcher
        hidePersonal={true}
        afterSelectOrganizationUrl={"/dashboard"}
      />
    </div>
  );
}
