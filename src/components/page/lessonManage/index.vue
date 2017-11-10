<template>
<!-- @click="gotoEditer" -->
  <div class="lessonCard" >
      <div class="lessonCard-top">
          <el-input
            placeholder="请输入内容"
            v-model="searchContent">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-button class="btn">确认</el-button>
          <template v-for="(sort,idx) in sorts">
            <div :class="{'commen-style':commenStyle,'highLight':sort.ifHeighLight}" :key="idx" @click="toggleHighLight(idx)">{{sort.name}}<i class="el-icon-d-caret"></i></div>
          </template>
          <div class="allBook"><el-dropdown>
            <span class="el-dropdown-link">
                全部课程<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <template v-for="(book,idx) in books">
                    <el-dropdown-item :key="idx">{{book}}</el-dropdown-item>
                </template>
            </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="min">
            <el-checkbox v-model="lessonCard.checkMid">期中限时优惠</el-checkbox>
          </div>
          <div class="end">
             <el-checkbox v-model="lessonCard.checkEnd">期末限时优惠</el-checkbox>
          </div>
      </div>
      <div class="lessonCard-content">
          <div class="card-item">
              <div class="wrap-border">
                    <div class="card-adsFlag"></div>
                    <div class="postal-card">
                           <div class="card-left">
                               <!-- <img :src="card.img" alt=""> -->
                               <div class="book-bg" style="background:#eee;"></div>
                           </div>
                           <div class="card-right" style="width:100%;">
                               <div class="cardRight-top" style="background:#eee;width:100%;height:15px;margin-bottom:20px;"></div>
                               <div class="cardRight-middle" style="background:#eee;width:80%;height:15px;margin-bottom:20px;"></div>
                               <div class="cardRight-bottom" style="background:#eee;width:50%;height:15px;margin-bottom:20px;"></div>
                               <div class="cardRight-bottom" style="background:#eee;width:45%;height:30px;"></div>
                           </div>
                       </div>
                       <div class="wrapCard-tottom">
                            <div class="rightSide-border" style="border:none;line-height:50px;font-size:16px;color:#319bd7">
                                <i class="el-icon-plus"></i><span style="display:inline-block;padding-left:10px;color:#319bd7">新增课程</span>
                            </div>
                       </div>
              </div>
          </div>
          <template v-for="(card,idx) in cards">
              <div class="card-item" :key="idx">
                  <div class="wrap-border">
                       <div class="card-adsFlag">
                            <template v-if="card.ADsFlag==1">
                                <img src="../../../assets/publishing.png" alt="">
                            </template>
                            <template v-else-if="card.ADsFlag==2">
                                <img src="../../../assets/published.png" alt="">
                            </template>
                            <template v-else>
                                <img src="../../../assets/unPublish.png" alt="">
                            </template>
                       </div>
                       <div class="postal-card">
                           <div class="card-left">
                               <!-- <img :src="card.img" alt=""> -->
                               <div class="book-bg" :style="{backgroundImage:`url(${card.img})`}"></div>
                           </div>
                           <div class="card-right">
                               <div class="cardRight-top">
                                   {{card.description}}
                               </div>
                               <div class="cardRight-middle">
                                   {{card.keywords}}
                               </div>
                               <div class="cardRight-bottom">
                                   <div class="price">价格：{{card.price}}</div>
                                   <div class="tip">{{card.tip}}</div>
                               </div>
                           </div>
                       </div>
                       <div class="wrapCard-tottom">
                           <div class="caseNum">
                               <div class="borders rightSide-border">
                                    <span>  关卡数</span>
                                    <span class="num"> {{card.caseNum}}</span>
                               </div>
                           </div>
                           <div class="wordsNum">
                                <div class="borders">
                                    <span> 单词数</span>
                                    <span class="num"> {{card.wordsNum}}</span>
                               </div>
                           </div>
                       </div>
                  </div>
              </div>
          </template>
      </div>
  </div>
</template>

<script>
export default {
    //data中放入属性，就像小程序中的data一样
    data(){
        return{
            lessonCard:{
                checkMid:false,
                checkEnd:false
            },
            searchContent:"",
            books:["一年级","二年级","三年级","四年级","五年级","六年级"],
            sorts:[
                {name:"时间",ifHeighLight:false},
                {name:"销量",ifHeighLight:false},
                {name:"价格",ifHeighLight:false},
                {name:"浏览",ifHeighLight:false},
            ],
            commenStyle:true,
            cards:[
                {ADsFlag:"1",img:'http://via.placeholder.com/100x150',description:"PEPPrimaryEnglishStudentsis book 义务教育课程实验系列教科 书（新版）老师特别辑 必考单词大 合集撒的的速度速度的速度速度速度的速度桉树",keywords:"英语 六年级 期中考试",price:"5.00",tip:"期中限时优惠",caseNum:19,wordsNum:241},
                {ADsFlag:"2",img:'http://via.placeholder.com/100x150',description:"PEPPrimaryEnglishStudentsis book 义务教育课程实验系列教科 书（新版）老师特别辑 必考单词大 合集撒的的速度速度的速度速度速度的速度桉树",keywords:"英语 六年级 期中考试",price:"2.00",tip:"期末限时优惠",caseNum:19,wordsNum:241},
                {ADsFlag:"3",img:'http://via.placeholder.com/100x150',description:"PEPPrimaryEnglishStudentsis book 义务教育课程实验系列教科 书（新版）老师特别辑 必考单词大 合集撒的的速度速度的速度速度速度的速度桉树",keywords:"英语 六年级 期中考试",price:"3.00",tip:"期中限时优惠",caseNum:19,wordsNum:241},
                {ADsFlag:"2",img:'http://via.placeholder.com/100x150',description:"PEPPrimaryEnglishStudentsis book 义务教育课程实验系列教科 书（新版）老师特别辑 必考单词大 合集撒的的速度速度的速度速度速度的速度桉树",keywords:"英语 六年级 期中考试",price:"8.00",tip:"期末限时优惠",caseNum:19,wordsNum:241},
                {ADsFlag:"2",img:'http://via.placeholder.com/100x150',description:"PEPPrimaryEnglishStudentsis book 义务教育课程实验系列教科 书（新版）老师特别辑 必考单词大 合集撒的的速度速度的速度速度速度的速度桉树",keywords:"英语 六年级 期中考试",price:"7.00",tip:"期中限时优惠",caseNum:19,wordsNum:241}
            ]
        }
    },
    // 所有的方法放在methods
    methods: {
        gotoEditer(){
            this.$router.push('/manage/lessonBriefEdit')
        },
        toggleHighLight(index){
            this.sorts[index].ifHeighLight=!this.sorts[index].ifHeighLight;
        }
    },
    // 所有的过滤器放在filters
    filters: {

    },
    //所有的data中的属性都可以二次格式化处理
    computed: {

    },
    // DOM创建时,调用的钩子函数
    created(){

    },
    //页面加载完成时进行的回调
    mounted () {

    },
    //页面销毁时进行的回调
    destroyed () {

    }
}
</script>

<style scoped>
    .lessonCard{
        width: 100%;
        padding: 20px;
        padding-top: 0;
        box-sizing: border-box
    }

    /* 顶部通栏 */
    .lessonCard .lessonCard-top{
        width: 100%;
        padding: 10px;
        background-color: #fff;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 20px;
    }
    .el-input {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 258px;
    }
    .lessonCard-top .btn{
        margin-left: 10px;
    }
    .lessonCard-top .commen-style,.lessonCard-top .allBook{
        margin-left: 20px;
    }
    .lessonCard-top .highLight{
        color: #319bd7;
    }
    .lessonCard-top .min,
     .lessonCard-top .end{
        margin-left: 40px;
    }

    /* 卡片展示区 */
    .lessonCard-content{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:flex-start;
        align-items:flex-start;
        align-content:flex-start;
        width:100%;
        box-sizing: border-box;
        padding-right: 180px;
        background-color: #fff;
    }
    .lessonCard-content .card-item{
        width:50%;
        text-align:center;
        padding:20px;
        box-sizing: border-box;
        background-color: #fff;
    }
    .lessonCard-content .card-item .wrap-border{
        box-shadow: 0 0px 10px rgba(0,0,0,0.2);
        position: relative;
    }
    .lessonCard-content .card-item .wrap-border .card-adsFlag{
        position: absolute;
        top: 0;
        left: -5px;
    }
    img{
        display: block;
    }
    .lessonCard-content .card-item .wrap-border .postal-card{
        padding: 0 20px;
        padding-top: 25px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        box-sizing: border-box;
        margin-bottom: 50px;
    }
    .lessonCard-content .card-item .wrap-border .postal-card .card-left{
        width: 100%;
        padding:0 20px;
        border: 1px solid #eee;
        margin-right: 20px;
    }
    .lessonCard-content .card-item .wrap-border .postal-card .card-left .book-bg {
        width: 100%;
        height:100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .lessonCard-content .card-item .wrap-border .postal-card .card-right{
       font-size: 13px;
       color: #333;
       text-align: left;
       line-height: 25px;
    }
    .lessonCard-content .card-item .wrap-border .postal-card .card-right .cardRight-middle{
        line-height: 60px;
        font-size: 12px;
        color: #666;
    }
    .lessonCard-content .card-item .wrap-border .postal-card .card-right .cardRight-bottom{
        /* line-height: 60px; */
        font-size: 16px;
        color: #333;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .lessonCard-content .card-item .wrap-border .postal-card .card-right .cardRight-bottom .tip{
        border: 1px solid #e88c12;
        border-radius: 4px;
        font-size: 10px;
        line-height: 18px;
        padding: 0 2px;
        margin-left: 20px;
    }
    .lessonCard-content .card-item .wrap-border .wrapCard-tottom{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 30px 0;
        background-color: #f4fafd;
    }
    .lessonCard-content .card-item .wrap-border .wrapCard-tottom>div{
        width: 50%;
    }
    .lessonCard-content .card-item .wrap-border .wrapCard-tottom div.caseNum{
        width: 50%;
    }
    .lessonCard-content .card-item .wrap-border .wrapCard-tottom div span{
        line-height: 30px;
        font-size: 12px;
        color: #999;
    }
    .lessonCard-content .card-item .wrap-border .wrapCard-tottom div span.num{
        line-height: 30px;
        font-size: 18px;
        color: #333;
    }
    .rightSide-border{
        border-right: 1px solid #ddd;
        height:60px;
        box-sizing: border-box;
    }
    .lessonCard-content .card-item .wrap-border .wrapCard-tottom .borders span{
        display: block;
    }
</style>
