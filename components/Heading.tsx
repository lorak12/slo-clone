interface HeadingProps {
  title: string;
  description: string;
}
function Heading(props: HeadingProps) {
  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-3xl font-bold ">{props.title}</h2>
      <p className="text-muted-foreground">{props.description}</p>
    </div>
  );
}

export default Heading;
