<template>			
	<div id="searchResult">
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
		
		<div class="form-group" >
			<div class="input-group" style="left:15%; top:20px">  
				<label>Rank Search<input type="radio" v-model="SearchType" value="rank"/></label>
				<label>Boolen Search<input type="radio" v-model="SearchType" value="boolen"/></label>
			</div>

			<div class="input-group" style="width:40%; left:15%; top:20px">
			<input type="text" placeholder="input query" v-model="query"  class="form-control" v-on:keyup.enter="submit" >

			<span class="input-group-btn">
				<button type="submit" class="btn btn-secondary" v-on:click="submit">Search</button>
			</span>
			
			</div>
		</div>


		
	  <div class="qadiv">
		<p class="result_number">{{ tips_qa }}</p>
		<p class="item_description"><b>{{ qa.ans }}</b> </p>
		<p class="item_description" v-html="qa.text"> </p>
		<!-- <a id="title" v-bind:href="qa.url" target="_blank" class="item_title">{{ qa.title}}</a> -->
		<li id="small_url_content"><a v-bind:href="qa.doc.url" id="small_url" target="_blank">{{ qa.doc_id }} {{ qa.doc.url }}</a></li>
		<li id="date">&nbsp{{ qa.doc.timestamp }}</li>
	  </div>
	
	<div class="leftdiv">
	  <div class="result">
		<p class="result_number">{{ tips_time }}</p>
		<p class="result_number">{{ tips_summary }}</p>
		<div v-for="item in summary">
			<p class="item_description">{{ item.text }}</p>
			<p v-for="doc in item.doc_ids">
				<a   target="_blank" style="font-size: 2px" v-bind:href="ranksearch[doc].url"> rank:{{ doc }}, {{ ranksearch[doc].url}}</a>
			 </p>
			<!-- <br/><br/> -->
		</div>
	  </div>
	  
	  <div class="result">
		<p class="result_number">{{ tips }}</p>
		  <div v-for="item in part_response">
			<!-- <a id="title" v-bind:href="item.url" target="_blank" class="item_title">{{ item.title}}</a> -->
			<li id="small_url_content"><a v-bind:href="item.url" id="small_url" target="_blank">{{ item.url }}</a></li>
			<li id="date">&nbsp{{ item.timestamp }}</li>
			<p class="item_description">{{ item.text.slice(0,500)+'...' }}</p>
			<p> &nbsp </p>
		</div>
		</div>
	
	  <div id="footer">
		  <button v-if="show_button" v-for="n in parseInt(length/10)+1" v-on:click="page_select=n">{{n}}</button>
	  </div>
	</div>
	</div>
	
</template>

<script>
export default {
  name: 'searchResult',
  props: ['parentQuery'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      query: this.parentQuery.query,
	  SearchType: this.parentQuery.SearchType,
      page_select: 1,
      tips: '请输入要搜索的内容',
      show_button: false,
      response: {},
	  summary : [],
	  tips_summary:'',
	  qa:{doc:""},
	  tips_qa:'',
	  tips_time:'',
	  ranksearch:[],
    }
  },
  computed:{
  	length: function(){
  		var len=0
  		for(let item in this.ranksearch){
  			len++
  		}
  		return len
  	},
  	part_response: function(){
  		var part=[]
  		for(let start = (this.page_select-1)*10;start<this.page_select*10;start++){
  			if(start<this.length){
  				part.push(this.ranksearch[start])
  			}
  		}
		// console.log(part)
  		return part
  	}
  },
  methods: {
	highLightFun: function(text, begin, end){
		// console.log(begin)
		// console.log(end)
		let str1 = text.slice(0,begin)
		let str2 = text.slice(begin, end)
		let str3 = text.slice(end)
		let result = str1 + '<b>' + str2 + '</b>' + str3;
		// console.log(result)
		return result
	},
  	submit: function(){

  		this.tips='正在查询...'
		this.ranksearch = []
		this.qa={doc:""},
		this.tips_qa=""
		this.tips_summary=""
		this.summary={}
		this.tips_time=''
  		var qs = require('qs');
  		let url=''
		if (this.SearchType=='rank'){
			url = "http://111.186.2.142:25565/db/100/"+this.query
		}
		else{
			url = "http://111.186.2.142:25565/db/1000/"+this.query
		}
		// console.log("查询的url为:");
		// console.log(url);
		// console.log(this.SearchType)
		this.$axios({
			method: "get",
			params: {},  
			url: url
      	}).then(response=>{
			
			// console.log(response);
  			this.show_button=true
  			this.response=response.data
			this.ranksearch = this.response.result
			this.tips_time = '共耗时'+this.response.time.toFixed(3)+'s.'
  			this.tips=this.SearchType+' 检索到前'+this.length+'个内容'

			if (this.SearchType=='rank'){
				this.qa = response.data.answer
				this.qa = {
					'ans':response.data.answer.ans,
					'text':this.highLightFun(response.data.answer.context.text,response.data.answer.context.start, response.data.answer.context.end),
					'doc': this.ranksearch[response.data.answer.doc_id],
					'doc_id':'rank:'+response.data.answer.doc_id
				}


				this.tips_qa='智能问答生效, 结果如下'
				this.summary=[]
				// console.log(response.data.summary)
				// console.log(response.data.summary['summaries'])
				// console.log(response.data.summary['summaries'].length)
				let len = response.data.summary['summaries'].length
				for (let i=0;i<len;++i){
					// console.log(i)
					this.summary.push({
						"text":response.data.summary['summaries'][i],
						"doc_ids":response.data.summary['classes'][i],
					})
				}
				// this.summary = response.data.summary
				this.tips_summary='搜索到'+this.summary.length+'条相关事件,摘要如下'
				
			}
			
  		})
  		.catch(error=>{
  			this.tips='快速查询失败, 请检查网络连接'
			if (this.SearchType=='rank'){
			this.tips_qa='生成智能问答失败, 请检查网络连接'
			this.tips_summary='生成摘要失败, 请检查网络连接'
			}
			
  			// console.log(error)
  		})
  		
  	},
  },
  mounted(){
	if(this.query==""||this.query==null||this.query==undefined){
		return 
	}
	this.submit()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hightLight{
	color: red;
}
#searchResult{
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}
#header{
    margin-top: 0;
    padding: 0;
    width: 100%;
    height: 80px;
    background-color: #FFF;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
}

.leftdiv{
	height: auto;
    width: 40%;
    position: relative;
    left: -10%;
	float:left;
	display:inline;
}
.result{
    height: auto;
    margin-top: 20px;
    position: relative;
}

.qadiv{
    height: auto;
    width: 25%;
    margin-top: 40px;
    position: relative;
    left: 65%;
	float:left;
	display:inline;
}

.result_number{
	color: gray;
	font-size: 16px;
}
.result a{
    font-size: 18px;
    color: #0000FF;
}
.result p{
    margin:2px;
}
/*#result li{
    display: inline-block;
    font-size: 12px;
    color: #666666;
}*/
#small_url_content{
	display: inline-block;
}
#date{
	display: inline-block;
    font-size: 12px;
    color: #666666;
}
#result li a{
	display:block;/*内联对象需加*/
    width:15em;
    word-break:keep-all;/* 不换行 */
    white-space:nowrap;/* 不换行 */
    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    font-size: 12px;
    text-decoration: none;
    color: #008B00;
}
#footer{
	position: relative;
	left: 0%;
}
#footer button{
	margin-right:20px;
	font-size: 15px;
	background-color: #FFF;
	border:solid 1px #FFF;
	padding: 10px 14px 10px 14px;
	color: #191970;
}
#footer button:hover{
	border:solid 1px #39F;
	cursor: hand;
}
.item_description{
	word-wrap:break-word
}

</style>
