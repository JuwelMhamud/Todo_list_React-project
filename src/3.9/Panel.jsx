export default function Panel({ title, children, isActive, onActive }) {
  return (
    <section className="panel">
      <h2>{title}</h2>


      {isActive ? (
        <p >{children}</p>
      ) : (
        <button className="border-2" onClick={onActive}>
          {" "}
          Click Here{" "}
        </button>
      )}
    </section>
  );
}
