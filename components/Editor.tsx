"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";

const Tiptap = ({
  onChange,
  content,
}: {
  onChange: (values: any) => void;
  content: string;
}) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "my-6 ml-6 list-disc [&>li]:mt-2",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "ml-2 list-decimal",
          },
        },
        blockquote: {
          HTMLAttributes: {
            class: "border-l-2 pl-6 italic",
          },
        },
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      Underline,
    ],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l items-start w-full text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
    content: content,
  });

  return (
    <div className="w-full">
      <Toolbar editor={editor} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;
