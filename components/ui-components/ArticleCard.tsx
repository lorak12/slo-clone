"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Calendar, Eye } from "lucide-react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { useRouter } from "next/navigation";
import { updateArticleViews } from "@/actions/articleActions";

export interface ArticleCardProps {
  key: number;

  id: string;
  title: string;
  slug: string;
  imageSrc?: string;
  imageAlt?: string;
  createdAt: Date;
  views: number;
}

function ArticleCard(props: ArticleCardProps) {
  const router = useRouter();

  const customPolishLocale = {
    ...pl,
    localize: {
      ...pl.localize,
      month: (monthIndex: any) => {
        return pl.localize
          .month(monthIndex)
          .replace(/^\w/, (c) => c.toUpperCase());
      },
    },
  };

  const formattedDate = format(new Date(props.createdAt), "dd MMMM yyyy", {
    locale: customPolishLocale,
  });

  return (
    <div className="flex items-center justify-center">
      <Card className="max-w-[450px] aspect-[4/3] justify-between flex flex-col dark:border-none">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription className="flex justify-between">
            <span className="flex  gap-1 items-center">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex  gap-1 items-center">
              <Eye className="w-4 h-4" /> {props.views}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 ">
          <div className="relative w-full aspect-square object-cover">
            <Image
              src={"https://picsum.photos/1200/1600"}
              alt={"Image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-md"
            />
          </div>
          <p className="line-clamp-4">{props.slug}</p>
        </CardContent>
        <CardFooter>
          <Button
            onClick={async () => {
              await updateArticleViews(props.id, props.views + 1);
              router.push(`/articles/${props.id}`);
            }}
          >
            Czytaj więcej
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ArticleCard;
