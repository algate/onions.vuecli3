<template>
  <li>
    <div :class="[{active:isSelected},{itemClass:true}]" @click="selectNode" @dblclick="doubleClick" >
      <img :src="clickicon" @click.stop="toggle" :style="{visibility: (isFolder?'visible':'hidden')}" />
      <span class="nodeTitle" :style="{fontSize:(isChildren?'12px':'18px'),color:(isSelected?'#fff':'#b2b2b2')}"
            :title="model.title" >{{model.title | cutFun(11)}}</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <treeCom
        class="item"
        v-for="model in model.nodes"
        :model="model" :isChildren="true" :selectItem="selectItem" @doubleClick="childDouble" @selectItem="childSelect" :key="model">
      </treeCom>
    </ul>
  </li>
</template>

<script>
  import packUp from '../../assets/icon/pack-up.png';
  import packUp2 from '../../assets/icon/pack-up2.png';
  import deploy1 from '../../assets/icon/deploy1.png';
  import deploy2 from '../../assets/icon/deploy2.png';

export default {
  name: 'treeCom',
  props: ['model','selectItem','isChildren'],
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder() {
      return this.model.nodes &&
        this.model.nodes.length
    },
    clickicon(){
        return this.open?(this.isSelected?packUp2:packUp):(this.isSelected?deploy2:deploy1);
    },
    isSelected(){
        return this.model==this.selectItem;
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    selectNode(e){
      this.$emit('selectItem',this.model);
    },
    doubleClick(e)
    {
      this.$emit('doubleClick',this.model);
    },
    childSelect(node)
    {
      this.$emit('selectItem',node);
    },
    childDouble(node)
    {
      this.$emit('doubleClick',node);
    }
  },
  mounted(){
    this.open = ('open' in this.model)?this.model.open:false;
  },
  filters: {
    cutFun(text, max){
      if (text && text.length > max)
        return text.substring(0, max) + "...";
      else
        return text;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  ul,li{
    list-style: none;
  }

  ul
  {
    padding-left: 20px;
  }

  .nodeTitle
  {
    color: #b2b2b2;
    margin-left: 10px;
  }

  .active
  {
    background: #2dabff;
    color: #fff;
  }

  .itemClass
  {
    cursor: pointer;
    padding: 10px 0px 10px 20px;
  }
</style>
