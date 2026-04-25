import { generateBusinessOverviewMetadata } from "@/lib/metadata/businessOverviewMetadata";
import BusinessOverviewPage from "@/components/pages/business-overview/BusinessOverviewPage";

export { generateBusinessOverviewMetadata as generateMetadata };

export default function Page() {
  return <BusinessOverviewPage />;
}
