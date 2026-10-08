import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { downloadRedirectUrl } from "../../lib/store-links";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Download ILTIZAAM",
  description: "Get the ILTIZAAM app on iOS or Android.",
};

export default async function DownloadPage() {
  const headerList = await headers();
  const userAgent = headerList.get("user-agent");
  redirect(downloadRedirectUrl(userAgent));
}
