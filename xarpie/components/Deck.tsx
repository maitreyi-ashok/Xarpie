export default function Deck({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section className="board" id={id}>
      {children}
    </section>
  );
}
