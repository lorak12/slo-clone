import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { getArticles } from "@/actions/articleActions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function Page() {
  const articles = await getArticles();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button asChild>
          <Link href="/dashboard/articles/add-article">Dodaj artykuł</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={articles} />
    </div>
  );
}

export default Page;
