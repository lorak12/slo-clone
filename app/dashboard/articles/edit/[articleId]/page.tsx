import { getArticle } from "@/actions/articleActions";
import { ArticleUpdateForm } from "./ArticleUpdateForm";

async function Page({ params }: { params: { articleId: string } }) {
  const article = await getArticle(params.articleId);

  return (
    <div>
      <ArticleUpdateForm initialData={article ?? {}} params={params} />
    </div>
  );
}

export default Page;
