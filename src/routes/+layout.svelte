<script lang="ts">
  import '../css/styles.css'


</script>

<main>
  <header>
    <div class="header-item">
      <a href="/"> <h1>Maybe Music</h1> </a>
    </div>
    <div class="header-item">
    <form method="POST" action="/search">
        <input
          name="searchWord"
          type="text"
          placeholder="search"
        />
        <button type="submit">Go</button>
        <div class="header-item">
          <a href="/genre">Top Genre</a>
          <a href="/chart">Top Charts</a>
          
          <!-- <a href="/artist">Artists</a>
          <a href="/album">Albums</a>
          <a href="/track">Tracks</a> -->
          <a href="/">Home</a>
        </div>

    </form>
  </div>


  </header>

<slot />

<footer>
  <div class="footer-item">
    <p>By Kyle Larson</p>

  </div>

</footer>

</main>

<style>

  
  /* * {
    border: 1px solid blue;
  } */

  main {
    width: 65%;
    margin: 0 auto;
    border: 2px solid #000;
  }

  h2 {
    margin: 1rem 0 0 0;
  }

  h4 {
    margin: .5rem 0 0 0;
  }

  p {
    margin: .1rem 0 1rem 0;
  }

  img {
    border-radius: 1rem;
    margin-top: 1.5rem;

  }

  ul {
    margin: .3rem 0 0 0;
  }

  li {

  }

  hr {
    width: 60%;
    margin-left: 0;
  }

  header {
    background-image: url('../img/MaybeMusic_background.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 0;
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .header-item a {
    text-decoration: none;
  }

  form {
    margin: 0 1rem 1rem 0;
    text-align: right;
  }

  form a {
    color: #FFBB00;
    font-weight: 700;
    margin: 0 0 0 .5rem;
    font-family: 'Rubik', sans-serif;
    text-shadow: 1px 1px 1px #444;
  }

  input[type=text] {
    width: 10rem;
    padding: .1rem 1rem;
    border-radius: 1rem;
    margin: 0 0rem 0 1rem;
    border: none;
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;;
    background-color: #e6edff;
  }


  /* ---------------- Section -------------- */

  section {
    margin: 0 0 0 3rem;
  }


  .flex {
    display: flex;
    gap: 1rem;
    padding: 0 1rem 1rem 0;
  }

  .flex div {
    min-width: 20%;
  }

  .flex div:nth-child(1) {
    margin-right: -1.5rem;
  }

  footer {
    background-color: #000;
    text-align: center;
    height: 1.5rem;
    color: white;
    padding:  6rem 0 .5rem 0;
  }

  button {
    background-color: #FFBB00;
    padding: .2rem .7rem;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 700;
  }

  button:hover,
  button:focus {
    background-color: #ffce46;
  }

  @media (max-width: 1100px) {
    main {
      width: 98%;
    }
  
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    input[type=text] {
      margin: 0 .5rem 0 .5rem;
    }
  
    form {
      padding: 0 .5rem 0 .5rem;
    }
  
  }



</style>