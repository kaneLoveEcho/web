<template>
  <div class="hello">
    <el-row>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </el-row>
    <el-row>

    </el-row>
    <el-row>

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
  name: 'inputnumber',
  data() {
    return {
      msg: '',
      num: 1

    }
    
  },
  methods: {
      handleChange(value) {
        console.log(value);
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
