<script lang="ts">
  let with_r = true;
  let rn: number, ra: number, rb: number;
  let sqn: number, trn: number, rcn: number;
  let gn: number, ga: number, un1: number, un2: number, gr: number;

  let sa: number, sb: number, sn: number;
  let gsn: number, gsa: number, gsr: number, g_un1: number, g_un2: number;

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
  function geo_n(a: number, n: number, r: number) {
    return a * r ** (n - 1);
  }

  function s(a: number, b: number, n_: number) {
    return n_ * ((a + n(a, b, n_)) / 2);
  }
  function geo_s(a: number, n: number, r: number) {
    return (a * (r ** n - 1)) / (r > 1 ? r - 1 : 1 - r);
  }

  console.log(s(1, 1, 3));
</script>

<main>
  <h1>Mathx</h1>
  <div id="toc">
    <h2>Table of Contents</h2>
    <ol class="alpha">
      <li>
        <a href="#nth-finder">n-th finder</a>
        <ol class="roman">
          <li><a href="#reg-nth-finder">Regular n-th finder</a></li>
          <li><a href="#sqr-nth-finder">Square n-th finder</a></li>
          <li><a href="#rct-nth-finder">Rectangle n-th finder</a></li>
          <li><a href="#tri-nth-finder">Triangle n-th finder</a></li>
          <li><a href="#geo-nth-finder">Geometry n-th finder</a></li>
        </ol>
      </li>
      <li>
        <a href="#s-finder">sum finder</a>
        <ol class="roman">
          <li><a href="#reg-s-finder">Regular sum finder</a></li>
          <li><a href="#geo-s-finder">Geometry sum finder</a></li>
        </ol>
      </li>
      <li>
        <a href="#tdq">Too detailed question</a>
        <ol class="roman">
          <li><a href="#tdq-tali">Perkara tali</a></li>
        </ol>
      </li>
    </ol>
  </div>
  <input type="checkbox" name="with-r" bind:checked={with_r} />
  <label for="with-r">with r</label>
  <hr />
  <h1 id="nth-finder">n-th finder</h1>
  <div id="reg-nth-finder">
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
    <p>{typeof trn === "undefined" ? "result goes here" : triangle_n(trn)}</p>
    <h3>n</h3>
    <input type="number" bind:value={trn} />
  </div>
  <div id="geo-nth-finder">
    <h2>Geometry n-th finder</h2>
    {#if with_r}
      <p>
        {typeof ga === "undefined" ||
        typeof gn === "undefined" ||
        typeof gr === "undefined"
          ? "result goes here"
          : geo_n(ga, gn, gr)}
      </p>
      <h3>a</h3>
      <input type="number" bind:value={ga} />
      <h3>n</h3>
      <input type="number" bind:value={gn} />
      <h3>r</h3>
      <input type="number" bind:value={gr} />
    {:else}
      <p>
        {typeof ga === "undefined" ||
        typeof gn === "undefined" ||
        typeof un1 === "undefined" ||
        typeof un2 === "undefined"
          ? "result goes here"
          : geo_n(ga, gn, un1 / un2)}
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
  <h1 id="s-finder">sum finder</h1>
  <div id="reg-s-finder">
    <h2>Regular sum finder</h2>
    <p>
      {typeof sa === "undefined" ||
      typeof sb === "undefined" ||
      typeof sn === "undefined"
        ? "result goes here"
        : s(sa, sb, sn)}
    </p>
    <h3>a</h3>
    <input type="number" bind:value={sa} />
    <h3>b</h3>
    <input type="number" bind:value={sb} />
    <h3>n</h3>
    <input type="number" bind:value={sn} />
  </div>
  <div id="geo-s-finder">
    <h2>Geometry sum finder</h2>
    {#if with_r}
      <p>
        {typeof gsa === "undefined" ||
        typeof gsn === "undefined" ||
        typeof gsr === "undefined"
          ? "result goes here"
          : geo_s(gsa, gsn, gsr)}
      </p>
      <h3>a</h3>
      <input type="number" bind:value={gsa} />
      <h3>n</h3>
      <input type="number" bind:value={gsn} />
      <h3>r</h3>
      <input type="number" bind:value={gsr} />
    {:else}
      <p>
        {typeof gsa === "undefined" ||
        typeof gsn === "undefined" ||
        typeof g_un1 === "undefined" ||
        typeof g_un2 === "undefined"
          ? "result goes here"
          : geo_s(gsa, gsn, g_un1 / g_un2)}
      </p>
      <h3>a</h3>
      <input type="number" bind:value={gsa} />
      <h3>n</h3>
      <input type="number" bind:value={gsn} />
      <h3>Un 1</h3>
      <input type="number" bind:value={g_un1} />
      <h3>Un 2</h3>
      <input type="number" bind:value={g_un2} />
    {/if}
  </div>
  <hr />
  <h1 id="tdq">Too detailed question</h1>
  <div id="tdq-tali">
    <p>
      Sebuah tali dibagi menjadi <input type="number" class="mini" /> bagian
      sehingga bagian-bagian tersebut membentuk deret geometri. Jika panjang
      tali terpendek adalah <input type="number" class="mini" /> dan yang
      terpanjang adalah <input type="number" class="mini" />, tentukan panjang
      tali semula
    </p>
  </div>
</main>
