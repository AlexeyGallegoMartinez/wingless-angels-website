export default function Highlight({ title, desc }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-primary">{title}</div>
      <div className="text-sm text-muted-foreground">{desc}</div>
    </div>
  );
}
