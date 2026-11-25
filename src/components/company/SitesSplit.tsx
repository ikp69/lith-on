import { Button } from "@/components/system/Button";

/**
 * Noida and Foshan, side by side (ABT-05 / CAP-02 shared, audit §6). Facts
 * from LITHON_DATA_VAULT.md §1 and content/capabilities.md.
 * `detail` adds the capabilities-page line about each site's role.
 */
export function SitesSplit({ plantLink = false, detail = false }: { plantLink?: boolean; detail?: boolean }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-media border border-line bg-line md:grid-cols-2">
      <div className="bg-canvas p-6 sm:p-8 lg:p-10">
        <p className="text-small text-ink-3">India · Headquarters and plant</p>
        <h3 className="mt-2 text-heading-2 text-ink">Noida</h3>
        <p className="mt-4 text-body text-ink-2">A 20,000 sq. ft. assembly and testing plant with 250 MWh of annual capacity: 50 MWh of BESS and 200 MWh of battery packs.</p>
        {detail && <p className="mt-3 text-body text-ink-2">Cell grading, module and cabinet assembly, the IceBattery® coating and end-of-line testing all happen here.</p>}
        <address className="mt-6 text-small not-italic text-ink-3">A-162, Arihant Business Centre, 7th Floor, Sector 136, Noida 201304, Uttar Pradesh</address>
        {plantLink && (
          <div className="mt-6">
            <Button href="/capabilities" variant="tertiary">
              Inside the Noida plant
            </Button>
          </div>
        )}
      </div>
      <div className="bg-canvas p-6 sm:p-8 lg:p-10">
        <p className="text-small text-ink-3">China · International hub</p>
        <h3 className="mt-2 text-heading-2 text-ink">Foshan</h3>
        <p className="mt-4 text-body text-ink-2">An international innovation and supply hub.</p>
        {detail && (
          <p className="mt-3 text-body text-ink-2">It works directly with leading global cell manufacturers and handles international logistics for high-grade raw materials.</p>
        )}
        <address className="mt-6 text-small not-italic text-ink-3">C11-6, Foshan Innovation Torchpark, Jihua 2 Road, Chancheng, Foshan</address>
      </div>
    </div>
  );
}
