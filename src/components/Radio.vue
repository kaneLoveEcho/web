<template>
  <div class="hello">
    <el-row>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </el-row>
    <el-row>
      <el-radio disabled v-model="radioEnable" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radioEnable" label="选中且禁用">备选项</el-radio>
    </el-row>
    <el-row>
      <el-radio-group v-model="radioGroup">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-radio-group v-model="radio1">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-radio-group v-model="radio2" size="medium">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-radio-group v-model="radio3" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" disabled></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-radio-group v-model="radio4" disabled size="mini">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
      <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
    </el-row>
    <el-row>
      <el-radio v-model="radio2" label="1" border size="medium">备选项1</el-radio>
      <el-radio v-model="radio2" label="2" border size="medium">备选项2</el-radio>
    </el-row>
    <el-row>
      <el-radio-group v-model="radio3" size="small">
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border disabled>备选项2</el-radio>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-radio-group v-model="radio4" size="mini" disabled>
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border>备选项2</el-radio>
      </el-radio-group>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'radio',
  data() {
    return {
      radio: 1,
      radioEnable: '选中且禁用',
      radioGroup: 3,
      radio1: '上海',
      radio2: '上海',
      radio3: '上海',
      radio4: '上海'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
