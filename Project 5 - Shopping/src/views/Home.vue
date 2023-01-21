<template>
  <div class="home">
    <div class="products">

      <div class="product " :class="{ inBag : addValidation(item) }" v-for="(item, index) in products" :key="index">
        <div class="product-image" :style="{backgroundImage: 'url(' + item.image + ')'}"></div>
        <h4>{{item.title}}<br></h4>
        <p class="price">R$ {{item.price.toFixed(2)}}</p>
        <button v-if="!addValidation(item)" @click="addToBag(item)">Adicionar ao carrinho</button> 
        <button v-if="addValidation(item)" @click="removeFromBag(item)" class="remove">Remover do carrinho</button> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  data() {return {}},
  computed:mapState(['products','productsSelected']),
  methods: {
   addToBag(product){product.quantity = 1;this.$store.dispatch('addToBag', product);},
   removeFromBag(product){
      if(confirm('Você tem certeza que deseja remover o item?'))
      {this.$store.dispatch('removeFromBag', product.id)}},
   addValidation(product){return this.productsSelected.find(item => item.id == product.id)}
  }
}
</script>

<style lang="scss">

  .home {

    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;


      .product {
        flex: 0 0 30%;
        box-sizing: border-box;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 16px;
        margin: 8px;
        height: 360px;
        transition:all 0.3s;

        &:hover{
          transform:scale(1.05)
        }

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inBag {
          border: 1px solid #007bff;
        }
        
        .product-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4 {
          margin: 22px auto;
          font-size: 12px;
          max-width: 60%;
          font-weight: normal;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
        }

        button {
          color: #fff;
          background-color: #007bff;
          border: 1px solid #007bff;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &.remove {
            background-color: transparent;
            border: none;
            color: black;
            text-decoration: underline;
          }
        }
      }
    }

  }


</style>
