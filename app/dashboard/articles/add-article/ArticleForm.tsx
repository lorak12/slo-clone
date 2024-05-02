"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createArticle } from "@/actions/articleActions";
import { useToast } from "@/components/ui/use-toast";
import { CircleX, PartyPopper } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import Editor from "@/components/Editor";

const articleFormSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Tytuł musi mieć przynajmniej 2 znaki!" }),
  slug: z
    .string()
    .min(2, { message: "Krótki opis musi mieć przynajmniej 2 znaki!" }),
  content: z.string(),
});

export function ArticleForm() {
  const { toast } = useToast();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof articleFormSchema>>({
    resolver: zodResolver(articleFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "<p>Tutaj wpisz treść artykułu.</p>",
    },
  });

  async function onSubmit(values: z.infer<typeof articleFormSchema>) {
    try {
      setIsLoading(true);
      await createArticle(values);
      toast({
        title: "Sukces.",
        description: "Artykuł został pomyślnie dodany na stronę.",
        action: <PartyPopper />,
      });
      setIsLoading(false);
      router.push("/dashboard/articles");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast({
        title: "Coś poszło nie tak.",
        description: "Artykuł nie został dodany.",
        action: <CircleX className="text-red-500" />,
      });
    }
  }

  return (
    <>
      {!isLoading ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tytuł</FormLabel>
                  <FormControl>
                    <Input placeholder="Artykuł..." {...field} />
                  </FormControl>
                  <FormDescription>Podaj tytuł tego artykułu.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Krótki opis</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Krótki opis..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Opis ten będzie wyświetlany pod artykułem.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Treść artykułu</FormLabel>
                  <FormControl>
                    <Editor onChange={field.onChange} content={field.value} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      ) : (
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )}
    </>
  );
}
