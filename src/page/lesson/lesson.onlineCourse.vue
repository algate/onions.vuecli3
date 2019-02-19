<template>
    <div>
        <div class="lesson_online_container">
            <!-- <section>
                <div class="lc_oc_nav_label">
                    <div class="o_h">
                        <b class="f_l" style="padding:8px">阶段</b>
                        <ul class="oc_navl_scl f_l">
                            <li class="{'navl_scl_cur':grade.curLi}" v-for="grade in gradeList" model="keywords.applicationstage" click="getGrade(grade)">{{grade.name}}</li>
                        </ul>
                    </div>
                    <div class="o_h">
                        <b class="f_l" style="padding:8px">学科</b>
                        <ul class="oc_navl_tea f_l">
                            <li class="{'navl_tea_cur':subject.curLi}" v-for="subject in subjectList" model="keywords.ctype" click="getSubject(subject)">{{subject.name}}</li>
                        </ul>
                    </div>
                    <div class="o_h">
                        <b class="f_l" style="padding:8px">状态</b>
                        <ul class="oc_navl_tea f_l">
                            <li class="{'navl_tea_cur':status.curLi}" v-for="status in statusList" model="keywords.status" click="getStatus(status)">{{status.name}}</li>
                        </ul>
                    </div>
                </div>
            </section> -->
            <section>
                <div class="lc_oc_screen">
                    <div class="oc_screen_if">
                        <a :class="{'screen_if_cur':order.curLi}" href="javascript:;" model="keywords.orderby" v-for="order in orderList" click="getOrderby(order)" v-bind:key="order.type">{{order.name}}</a>
                    </div>
                    <div class="oc_screen_search">
                        <input type="text" class="z-input customInput" style="vertical-align:middle;margin:0;"
                        placeholder="课程名、教师名" model="keywords.cname"/>
                        <i class="icon_search" click="findOnlineCurriculumList()" style="color:#fff;font-size:28px;vertical-align:middle;margin-left: -42px;"></i>
                    </div>
                </div>
            </section>
            <section>
                <ul class="lc_oc_list">
                    <li class="oc_list_item" v-for="(course, index) in courseList" v-bind:key="index">
                        <div class="oc_list_img">
                            <a href=""><img src="assets/img/logo_v16_9.png"/></a>
                        </div>
                        <div class="oc_list_info"><a href="" click="getClickData(course.id)" class="disBlock">
                            <p class="ellipsis"><b>{{course.cname}}</b></p>
                            <p class="size12 color9199a1 marT5">{{course.username}}<span class="f_r colorffa42d">{{course.pjpoint?course.pjpoint:'暂无评'}}分</span></p>
                            <div class="size12 colorb1b6ba marT9"><span class="marR15">点播：{{course.conut?course.conut:'0'}}</span>|<span class="marL15">选修：{{course.studentSum}}</span></div>
                        </a></div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
// import lessonService from '../../config/services/lesson.service'
export default {
    data () {
        return {
            orderList: [
                {type:'lastupdatedate',name:'最新发布'},
                {type:'conut',name:'热门课程'},
                {type:'pjpoint',name:'评分从高到低'}
            ],
            courseList: []
        }
    },
    created () {
        this.findOnlineCurriculumList({"keywords":{"source":2,"ctype":"","applicationstage":"","orderby":"lastupdatedate","cname":""},"page":{"totalItems":0,"maxSize":8,"pageSize":16,"pageIndex":1,"numPages":4,"previousText":"上页","nextText":"下页","firstText":"首页","lastText":"尾页"}})
        // this.code({'value':'subject'})
    },
    methods: {
        findOnlineCurriculumList: function(params) {
            var v = this
            if (!params) params = {}
            this.$axios.get('mock/findOnlineCurriculumList.json',params).then(function(r){
                v.courseList = r.data.data;
                console.log(r);
            })
        }
    },
}
</script>
