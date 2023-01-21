<template>
  <div class="about">
    <section class="grid-main">
      <article class="grid-item ">
        <h4>Lorem ipsum dolor sit.</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam excepturi ex eius eveniet deleniti at architecto neque voluptatum alias!</p>
      </article>
      <article class="grid-item grid-col2">
        <h4>Lorem ipsum dolor sit.</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam excepturi ex eius eveniet deleniti at architecto neque voluptatum alias!</p>
      </article>
      <article class="grid-item ">
        <h4>Lorem ipsum dolor sit.</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam excepturi ex eius eveniet deleniti at architecto neque voluptatum alias!</p>
      </article>
      <article class="grid-item">
        <h4>Lorem ipsum dolor sit.</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam excepturi ex eius eveniet deleniti at architecto neque voluptatum alias!</p>
      </article>
      <article class="grid-item ">
        <h4>Lorem ipsum dolor sit.</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam excepturi ex eius eveniet deleniti at architecto neque voluptatum alias!</p>
      </article>
      <article class="grid-item ">
        <h4>Lorem ipsum dolor sit.</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam excepturi ex eius eveniet deleniti at architecto neque voluptatum alias!</p>
      </article>
      <article class="grid-item ">
        <h4>Lorem ipsum dolor sit.</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam excepturi ex eius eveniet deleniti at architecto neque voluptatum alias!</p>
      </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'AboutPage',
  data() {
    return {
      options : {
        method: 'GET',
        url: 'https://montanaflynn-lorem-text-generator.p.rapidapi.com/word',
        params: {count: '10'},
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'montanaflynn-lorem-text-generator.p.rapidapi.com'
        },
      }
    }
  },
  methods: {
   
  },
  created() {
    axios.request(this.options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },
}
</script>

<style lang="scss">
*{margin: 0;padding: 0;box-sizing: border-box;}

article{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  box-shadow: 0 0 3px -1px gray;
  padding: 1rem;
  border-radius: 8px;
  background: linear-gradient(145deg, rgb(53, 208, 102),rgb(53, 208, 102),rgb(29, 168, 73));
  z-index: 110;
}
article p{
  margin-top: 0.75rem;
}

.grid-main{
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  gap: 1.5rem;
}

.grid-col2{
  position: relative;
  grid-row-start: 1;
  grid-row-end: 3;
  z-index: 10;
}
</style>
