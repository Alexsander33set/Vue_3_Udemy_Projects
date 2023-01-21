<template>
  <div class="basket">
    <div class="items" v-if="productsSelected.length>0">
      <div class="item" v-for="item in productsSelected" :key="item">
        <div class="remove" @click="removeFromBag(item)">Remover Produto</div>
        <div class="photo"><img :src="item.image" ></div>
        <div class="description">{{item.title}}</div>
        <div class="price">
          <span class="quantity-area">
            <button @click="item.quantity--" :disabled="item.quantity<=1">-</button>
            <span class="quantity">{{item.quantity}}</span>
            <button @click="item.quantity++">+</button>
          </span>
          <span class="amount">R$ {{(item.price * item.quantity).toFixed(2)}}</span>
        </div>
      </div>
      
      <div class="grand-total"> Total do pedido: R${{calcTotal()}}</div>

    </div>
    <h4 v-else>Nenhum item no carrinho <br><br><router-link to="/">Voltar</router-link></h4>
  </div>
</template>

<script>

export default {
  name: 'BasketRoute',
  computed:{
    productsSelected(){return this.$store.state.productsSelected;}
  },
  methods: {
    removeFromBag(product){
      if(confirm('Você tem certeza que deseja remover o item?'))
      {this.$store.dispatch('removeFromBag', product.id)}},
    calcTotal(){
      var total = 0;
      this.productsSelected.forEach(i => {
        total += i.price * i.quantity
      });
      return total.toFixed(2)
    }
  }

 
}

</script>

<style lang="scss">

.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }
  a{color:black;}

}

</style>
