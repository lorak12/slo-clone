import { getArticles } from "@/actions/articleActions";
import Heading from "@/components/Heading";
import ArticleList from "@/components/ui-components/ArticleList";
import CarouselComponent from "@/components/ui-components/CarouselComponent";

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full">
      <section className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold text-center">
          Samorządowe Liceum Ogólnokształcące
        </h1>
        <h2 className="text-3xl font-bold text-center">w Stalowej Woli</h2>
      </section>
      <CarouselComponent />
      <Heading
        title="Najnowsze artykuły"
        description="Przeglądaj to co działo się u nas w ostatnim czasie."
      />
      <ArticleList articles={articles} />
    </div>
  );
}
