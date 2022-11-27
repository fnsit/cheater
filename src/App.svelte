<script lang="ts">
  let with_r = true;
  let rn: number, ra: number, rb: number;
  let sqn: number, tn: number, rcn: number;
  let gn: number, ga: number, un1: number, un2: number, gr: number;

  function n(a: number, b: number, n: number) {
    return a + (n - 1) * b;
  }
  function square_n(n: number) {
    return n * n;
  }
  function rect_n(n: number) {
    return n * (n + 1);
  }
  function triangle_n(n: number) {
    return rect_n(n) / 2;
  }
  function geo_n_with_r(a: number, n: number, r: number) {
    return a * r ** (n - 1);
  }

  function s(a: number, b: number, n_: number) {
    return n_ * ((a + n(a, b, n_)) / 2);
  }

  console.log(s(1, 1, 3));
</script>

<main>
  <h1>Mathx</h1>
  <div id="toc">
    <h2>Table of Contents</h2>
    <ol>
      <p>n-th finder</p>
      <li><a href="#reg-nth-finder">Regular n-th finder</a></li>
      <li><a href="#sqr-nth-finder">Square n-th finder</a></li>
      <li><a href="#rct-nth-finder">Rectangle n-th finder</a></li>
      <li><a href="#tri-nth-finder">Triangle n-th finder</a></li>
      <li><a href="#geo-nth-finder">Geometry n-th finder</a></li>
    </ol>
  </div>
  <hr />
  <div id="reg-nth-finder">
    <h1>n-th finder</h1>
    <h2>Regular n-th finder</h2>
    <p>
      {typeof ra === "undefined" ||
      typeof rb === "undefined" ||
      typeof rn === "undefined"
        ? "result goes here"
        : n(ra, rb, rn)}
    </p>
    <h3>a</h3>
    <input type="number" bind:value={ra} />
    <h3>b</h3>
    <input type="number" bind:value={rb} />
    <h3>n</h3>
    <input type="number" bind:value={rn} />
  </div>
  <div id="sqr-nth-finder">
    <h2>Square n-th finder</h2>
    <p>{typeof sqn === "undefined" ? "result goes here" : square_n(sqn)}</p>
    <h3>n</h3>
    <input type="number" bind:value={sqn} />
  </div>
  <div id="rct-nth-finder">
    <h2>Rectangle n-th finder</h2>
    <p>{typeof rcn === "undefined" ? "result goes here" : rect_n(rcn)}</p>
    <h3>n</h3>
    <input type="number" bind:value={rcn} />
  </div>
  <div id="tri-nth-finder">
    <h2>Triangle n-th finder</h2>
    <p>{typeof tn === "undefined" ? "result goes here" : triangle_n(tn)}</p>
    <h3>n</h3>
    <input type="number" bind:value={tn} />
  </div>
  <div id="geo-nth-finder">
    <h2>Geometry n-th finder</h2>
    <input type="checkbox" name="with-r" bind:checked={with_r} />
    <label for="with-r">with r</label>
    {#if with_r}
      <p>
        "{typeof ga === "undefined" ||
        typeof gn === "undefined" ||
        typeof gr === "undefined"
          ? "result goes here"
          : geo_n_with_r(ga, gn, gr)}
      </p>
      <h3>a</h3>
      <input type="number" bind:value={ga} />
      <h3>n</h3>
      <input type="number" bind:value={gn} />
      <h3>r</h3>
      <input type="number" bind:value={gr} />
    {:else}
      <p>
        "{typeof ga === "undefined" ||
        typeof gn === "undefined" ||
        typeof un1 === "undefined" ||
        typeof un2 === "undefined"
          ? "result goes here"
          : geo_n_with_r(ga, gn, un1 / un2)}
      </p>
      <h3>a</h3>
      <input type="number" bind:value={ga} />
      <h3>n</h3>
      <input type="number" bind:value={gn} />
      <h3>Un 1</h3>
      <input type="number" bind:value={un1} />
      <h3>Un 2</h3>
      <input type="number" bind:value={un2} />
    {/if}
  </div>
  <hr />
</main>
