import React from "react";
import { Button } from "./ui/button";
import { Editor } from "@tiptap/react";
interface ToolbarButtonProps {
  editor: Editor;
  children: React.ReactNode;
  onClick?: () => void;
  activeProp: string;
}
function ToolbarButton(props: ToolbarButtonProps) {
  return (
    <Button
      onClick={props.onClick}
      variant={props.editor.isActive(props.activeProp) ? "default" : "outline"}
      size="icon"
      type="button"
    >
      {props.children}
    </Button>
  );
}

export default ToolbarButton;
