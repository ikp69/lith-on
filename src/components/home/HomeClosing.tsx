import { ClosingCTA } from "@/components/system/ClosingCTA";

/**
 * HOME-08 Closing (audit §5). One statement, the single red primary action and
 * the other routes as a row of text links (no cards before the footer).
 * Statement reveals line by line (M2). Light, per design.md §11.
 */
export function HomeClosing() {
  return (
    <ClosingCTA
      variant="statement"
      title={["Size your system", "with our Noida engineers"]}
      lead="Share your diesel run hours or maximum demand. Our application team will recommend a capacity and estimate the payback."
      primary={{ label: "Request technical sizing", href: "/contact?type=assessment" }}
      links={[
        { label: "Compare products", href: "/products", description: "Specifications for each product family" },
        { label: "Become a distributor", href: "/contact?type=distributor", description: "Partner enquiries" },
        { label: "Call +91 70000 13009", href: "tel:+917000013009", description: "Sector 136, Noida" },
      ]}
    />
  );
}
