<script type="js">
  // @ts-nocheck

  import LeafletMap from "../components/LeafletMap.svelte";
  import { csvParse } from "d3-dsv";
  import { onMount } from "svelte";
  export let data = [];

  onMount(async () => {
    let docs = await import.meta.glob("../../public/data.csv", { as: "raw" });
    let docs_keys = Object.keys(docs);
    let csv = csvParse(await docs[docs_keys[0]]());
    data = csv;
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="AjuStats" />
</svelte:head>

<div class="container">
  <LeafletMap {data} />
</div>
