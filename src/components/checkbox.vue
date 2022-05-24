<template>
  <div class="hello">
    <el-row>
      <!-- `checked` 为 true 或 false -->
      <el-checkbox v-model="checked">备选项</el-checkbox>
    </el-row>
    <el-row>
      <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
      <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
    </el-row>
    <el-row>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </el-row>
    <el-row>

    </el-row>
    <el-row>

    </el-row>
    <el-row>

    </el-row>
    <el-row>

    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      msg: '',
      checked: true,
      checked1: false,
      checked2: true,
      checkList: ['选中且禁用', '复选框 A']
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
