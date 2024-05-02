"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const articleFormSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  content: z.string(),
});

export async function createArticle(
  formData: z.infer<typeof articleFormSchema>
) {
  const validation = articleFormSchema.safeParse({
    title: formData.title,
    slug: formData.slug,
    content: formData.content,
  });

  if (validation.success) {
    await prisma.article.create({
      data: {
        title: formData.title,
        slug: formData.slug,
        content: formData.content,
        views: 0,
      },
    });
    revalidatePath("/dashboard/articles");
  } else {
    return {
      errors: validation.error.issues,
    };
  }
}

export async function getArticles() {
  const articles = await prisma.article.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      content: true,
      views: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return articles;
}

export async function getArticle(articleId: string) {
  const article = await prisma.article.findUnique({
    where: {
      id: articleId,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      content: true,
      views: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return article;
}

export async function deleteArticle(articleId: string) {
  try {
    await prisma.article.delete({
      where: {
        id: articleId,
      },
    });
    revalidatePath("/dashboard/articles");
  } catch (error) {
    return {
      errors: error,
    };
  }
}

export async function updateArticle(
  articleId: string,
  formData: z.infer<typeof articleFormSchema>
) {
  const validation = articleFormSchema.safeParse({
    title: formData.title,
    slug: formData.slug,
    content: formData.content,
  });

  if (validation.success) {
    await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        title: formData.title,
        slug: formData.slug,
        content: formData.content,
      },
    });
    revalidatePath("/dashboard/articles");
  } else {
    return {
      errors: validation.error.issues,
    };
  }
}

export async function updateArticleViews(articleId: string, views: number) {
  try {
    await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        views: views,
      },
    });
    revalidatePath("/dashboard/articles");
  } catch (error) {
    return {
      errors: error,
    };
  }
}
