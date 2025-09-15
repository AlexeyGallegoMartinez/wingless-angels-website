export default function InputArea({ label, id, htmlFor, placeholder, type }) {
  return (
    <div className=" flex flex-col space-y-2 text-sm">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        className="border border-[hsl(202,86%,23%)]/15 p-2 rounded-md"
      />
    </div>
  );
}
