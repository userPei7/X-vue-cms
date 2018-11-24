<template>
  <div class="goods-container">
     <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
       pageindex:1,//分页的页数
       goodslist:[]//存放商品列表的数组
      };
    },
    created() {
      this.getgoodsList();
    },
    methods: {
      getgoodsList(){
        this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result =>{
         if(result.body.status === 0){
           this.goodslist = result.body.massage;
         }
          });
      },
      getMore() {
        this.pagrindex++;
        this.getgoodsList();
      },
      goDetail(id) {
        console.log(this);
        this.$router.push({name:"goodsinfo",params:{id}});
      }
    }
  };
</script>
