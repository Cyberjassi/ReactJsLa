export default function Section({ title, children, ...props }) {
  return (
    // ...props automatic came for parent compnents which is not mention in argument
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
