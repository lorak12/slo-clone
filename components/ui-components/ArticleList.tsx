import React from "react";
import ArticleCard, { ArticleCardProps } from "./ArticleCard";
import { ArticlePagination } from "./Pagination";

function ArticleList(props: {
  articles: Array<{
    id: string;
    title: string;
    slug: string;
    views: number;
    createdAt: Date;
    updatedAt: Date;
    content: string;
  }>;
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 w-full place-content-center">
        {props.articles.map((article, index) => (
          <ArticleCard
            key={index}
            id={article.id}
            title={article.title}
            slug={article.slug}
            createdAt={article.createdAt}
            views={article.views}
          />
        ))}
      </div>
      <ArticlePagination />
    </div>
  );
}

export default ArticleList;
