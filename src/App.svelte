<script>
import { readable } from "svelte/store";
import { read_doc } from "./db.js";
import { onMount } from 'svelte';

let item;
let url;
onMount(async () => {
    item = await read_doc("SLC", "link1");
    url = item.url;
    console.log(item.url);
    
});

</script>

<main>
  <h1>Sharable Link Catalog - SLC</h1>

  <div>
    <input type="text" name="searchBar" id="idSearchBar" placeholder="Search" />
  </div>
  <div>
    <textarea name="ciao" id="" cols="30" rows="10">
    {item}
    </textarea>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
