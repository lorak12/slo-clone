"use client";
import { deleteArticle } from "@/actions/articleActions";
import { AlertModal } from "@/components/alert-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import {
  CircleCheck,
  CircleX,
  Clipboard,
  Edit,
  Eye,
  MoreHorizontal,
  Trash,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function CellActions(props: any) {
  const { toast } = useToast();

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      deleteArticle(props.article.id);
      router.refresh();
      toast({
        title: "Artykuł usunięty",
        action: <CircleCheck className="text-green-500" />,
      });
    } catch (error) {
      toast({
        title: "Coś poszło nie tak.",
        description: "Przepraszamy za utrudnienia",
        variant: "destructive",
        action: <CircleX className="text-white" />,
      });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Akcje</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(props.article.id);
              toast({
                title: "Id skopiowane do schowka",
                action: <Clipboard />,
              });
            }}
          >
            Kopiuj ID Artykułu
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => router.push(`/articles/${props.article.id}`)}
          >
            <Eye className="w-4 h-4 mr-2" />
            Wyświetl Artykuł
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push(`/dashboard/articles/edit/${props.article.id}`)
            }
          >
            <Edit className="w-4 h-4 mr-2" />
            Edytuj Artykuł
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="w-4 h-4 mr-2 text-red-500" />
            Usuń Artykuł
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default CellActions;
