<template>
    <div>
        <div class="f_l" style="width:300px;background:#333;">
            <treeCom @selectItem="getSelect" :selectItem="selectItem" :model="treeList" ></treeCom>
        </div>
        <div class="f_l" style="width:780px;margin-left:20px;background:#fff;">
            <div>search</div>
            <div>table</div>
            <div>分页</div>
        </div>
    </div>
</template>
<script>
// import lessonService from '../../../config/services/application.service'
import treeCom from '../../../components/treeCom/TreeCom'
export default {
    data () {
        return {
            treeList: [],
            selectItem: {}
        }
    },
    created () {
        this.GetdeptTrees()
    },
    mounted: function () {
        this.treeLoading = true;
    },
    methods: {
        GetdeptTrees: function(params) {
            var v = this
            if (!params) params = {}
            v.$http.get('/static/data/deptView/deptTrees.json',params).then(function(r){
                v.treeList = r.data;
                if (v.treeList&&v.treeList.length>0){
                    v.selectItem = v.treeList[0];
                    v.selectItem['open'] = true;
                    v.treeLoading = false;
                }
            })
            /*lessonService.deptTrees(params).then(function(r){
                v.treeList = r.data;
                if (v.treeList&&v.treeList.length>0){
                    v.selectItem = v.treeList[0];
                    v.selectItem['open'] = true;
                    v.treeLoading = false;
                }
            })*/
        },
        getSelect(e){
            this.selectItem = e;
        }
    },
    components: {
        treeCom
    }
}
</script>