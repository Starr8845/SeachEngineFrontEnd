<template>
    <div>
    <header class="header-two sticky-header">
        <div class="header-navigation">
            <div class="container-fluid d-flex align-items-center justify-content-between container-1470">
                <div class="header-left">
                    <div class="site-logo">
                        <a href=""><img src="../assets/logo-2.png" alt="Markpro"></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
   
    <section class="banner two">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="banner-content text-center">
                        <h1 class="head">
                            The Modern Search Engine by CS7316 Project
                        </h1>
                        <p class="text">
                            Welcome to the modern search engine by CS7316 project, by 邓佳乐, 胡腾, 刘纯宇, 张泽熙
                        </p>
                        <form>
                            <div class="form-group">
                                <div class="input-group" style="left:35%;">  
                                    <label>Rank Search<input type="radio" v-model="SearchType" value="rank"/></label>
                                    <label>Boolen Search<input type="radio" v-model="SearchType" value="boolen"/></label>
                                </div>
                              <div class="input-group">
                                <input type="text" placeholder="input query" v-model="query"  class="form-control" >
                                <!-- <label>Rank Search<input type="radio" v-model="SearchType" value="rank"/></label>
                                <label>Boolen Search<input type="radio" v-model="SearchType" value="boolen"/></label> -->

                              <span class="input-group-btn">
                                <button type="submit" class="btn btn-secondary" v-on:click="submit">Search</button>
                              </span>
                              </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src="../assets/laptop2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--====== Banner End ======-->


    <!--====== Footer Area START ======--> 
    <footer class="footer-area two">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="footer-box two">
                        <h4 class="lasthead">Quick Search</h4>
                        <div class="footer-list">
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="footer-box three">
                        <h4 class="lasthead">Multi-News Summarization</h4>
                        <div class="footer-list">
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="footer-box none">
                        <h4 class="lasthead">Machine QA</h4>
                        <div class="footer-list">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--====== Footer Area END ======-->


    <!--====== Back to top start ======-->
    <div class="back-to-top">
        <a href="#0"> <i class="fas fa-arrow-up"></i> </a>
    </div>
    <!--====== Back to top start ======-->

    
</div>
</template>

<script>
export default {
  name: 'searchEngine',
  data () {
    return {
      query: '',
      SearchType:'rank'

    }
  },
  methods: {
  	
  	submit: function(){
        this.$emit('childChange', {query:this.query, "SearchType":this.SearchType})
  		// location.reload()
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#searchEngine{
    left: 25%;
    top: 40%;
    width: 100%;
    position: fixed;
    z-index: 1;
    background-color: #FFF;
}
#text{
    width: 40%;
    height: 41px;
    border: solid 1px #39F;
    font-size:24px;
    padding: 0px;
    margin:-1px 0 0 0px;
}
#img_ipload{
  background:url(https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/soutu/img/camera_new_5606e8f.png) no-repeat;
}





</style>



