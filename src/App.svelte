<script>
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAbbo9LFqfgxhV8f2VfRimG4aMHwN7Z6o8",
    authDomain: "sharable-link-catalouge.firebaseapp.com",
    projectId: "sharable-link-catalouge",
    storageBucket: "sharable-link-catalouge.appspot.com",
    messagingSenderId: "256012409269",
    appId: "1:256012409269:web:0cf25cfe65ccb48ffae1fc",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>

<main>
  <h1>Sharable Link Catalog - SLC</h1>

  <div>
    <input type="text" name="searchBar" id="idSearchBar" placeholder="Search" />
  </div>

  <div />
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
