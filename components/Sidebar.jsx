export default function Sidebar({ docs }) {
  const roots = docs.filter((doc) => !parent);
  const nonRoots = Object.groupBy(docs.filter((doc) => doc.parent), ({parent}) => parent);

  return (
    <div>Sidebar</div>;
  );
}
