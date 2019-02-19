<template>
    <ul>
      <treeItem v-for="item in model" :selectItem="selectItem" @selectItem="getSelect" @doubleClick="doubleClick" :model="item" :key="item" >
      </treeItem>
    </ul>
</template>

<script>
import treeItem from './TreeComItem'

  export default {
    name: 'home',
    data () {
      return {}
    },
    props: ['model','selectItem'],
    components: {
      treeItem
    },
    methods: {
        getSelect(e){
          this.$emit('selectItem',e);
        },
        doubleClick(e){
          this.$emit('doubleClick',e);
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul
  {
    margin: 0px;
    padding: 0px;
  }
</style>
