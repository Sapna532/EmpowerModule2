function Component1() {
  const a = "A";
  const b = "B";
  const c = "C";
  const d = "D";
  const e = "E";
  const f = "F";

  return (
    <div>
      <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}

function Component2({ a, b, c, d, e, f }) {
  // Does NOT use any props
  return <Component3 a={a} b={b} c={c} d={d} e={e} f={f} />;
}

function Component3({ a, b, c, d, e, f }) {
  return (
    <div>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <Component4 c={c} d={d} e={e} f={f} />
    </div>
  );
}

function Component4({ c, d, e, f }) {
  return (
    <div>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <Component5 e={e} f={f} />
    </div>
  );
}

function Component5({ e, f }) {
  // Uses f, but still forwards e
  return (
    <div>
      <h4>This is prop f: {f}</h4>
      <Component6 e={e} />
    </div>
  );
}

function Component6({ e }) {
  return <h4>This is prop e: {e}</h4>;
}

export default Component1;
