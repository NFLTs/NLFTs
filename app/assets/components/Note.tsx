export default function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-blue-500 bg-blue-50 p-4 my-4">
      {children}
    </div>
  );
}
