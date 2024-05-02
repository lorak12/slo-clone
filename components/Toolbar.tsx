"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  Heading,
  Heading1,
  Heading3,
  Heading4,
} from "lucide-react";
import ToolbarButton from "./ToolbarButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border "
    >
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
        <ToolbarButton
          onClick={() => {
            editor.chain().focus().toggleBold().run();
          }}
          editor={editor}
          activeProp="bold"
        >
          <Bold className="w-5 h-5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            editor.chain().focus().toggleItalic().run();
          }}
          editor={editor}
          activeProp="italic"
        >
          <Italic className="w-5 h-5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            editor.chain().focus().toggleUnderline().run();
          }}
          editor={editor}
          activeProp="underline"
        >
          <Underline className="w-5 h-5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            editor.chain().focus().toggleStrike().run();
          }}
          editor={editor}
          activeProp="strike"
        >
          <Strikethrough className="w-5 h-5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            editor.chain().focus().toggleBulletList().run();
          }}
          editor={editor}
          activeProp="bulletList"
        >
          <List className="w-5 h-5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            editor.chain().focus().toggleOrderedList().run();
          }}
          editor={editor}
          activeProp="orderedList"
        >
          <ListOrdered className="w-5 h-5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            editor.chain().focus().toggleBlockquote().run();
          }}
          editor={editor}
          activeProp="blockQuote"
        >
          <Quote className="w-4 h-4" />
        </ToolbarButton>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" type="button">
              <Heading className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Nagłówki</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                onClick={() => {
                  editor.chain().focus().toggleHeading({ level: 1 }).run();
                }}
                variant="ghost"
                className="gap-2"
              >
                <Heading1 className="w-5 h-5" />
                Tytuł
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={() => {
                  editor.chain().focus().toggleHeading({ level: 2 }).run();
                }}
                variant="ghost"
                className="gap-2"
              >
                <Heading2 className="w-5 h-5" />
                Nagłówek
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={() => {
                  editor.chain().focus().toggleHeading({ level: 3 }).run();
                }}
                variant="ghost"
                className="gap-2"
              >
                <Heading3 className="w-5 h-5" />
                Podtytuł
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={() => {
                  editor.chain().focus().toggleHeading({ level: 4 }).run();
                }}
                variant="ghost"
                className="gap-2"
              >
                <Heading4 className="w-5 h-5" />
                Nagłówek
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Toolbar;
