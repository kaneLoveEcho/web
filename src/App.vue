<template>
  <el-container style="height: 800px; ">
    <el-aside :width="isUnfold ? '64px' : '200px'" style="background-color:#333744;float: left;">
      <div style="width:100%;background-color:#2f4050;height: 60px;float:left">
        <a style="cursor:pointer" href="/" target="_self">
          <el-image class="logo" :src="logo" fit="fill"></el-image>
        </a>
        <div class="system_name">{{ name }}</div>
      </div>
      <el-menu background-color="#333744" style=" border:0;float: left;width: 100%;" text-color="#fff"
        active-text-color="#409EFF" :collapse="isUnfold" :collapse-transition="false" :router="true"
        :default-openeds="openList">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i><span>导航一</span></template>
          <el-menu-item-group>
            <template slot="title">basic</template>
            <el-menu-item index="/button">按钮</el-menu-item>
            <el-menu-item index="/link-button">link按钮</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="form">
            <el-menu-item index="/radio">Radio 单选框</el-menu-item>
            <el-menu-item index="/checkbox">复选框</el-menu-item>
            <el-menu-item index="/input">输入框</el-menu-item>
            <el-menu-item index="/inputnumber">计数器</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i><span>导航二</span></template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="/inputnumber">计数器</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i><span>导航三</span></template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="/inputnumber">计数器</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <i class="el-icon-s-fold" v-show="!isUnfold" style="cursor:pointer;" @click="toggleCollapse"></i>
        <i class="el-icon-s-unfold" v-show="isUnfold" style="cursor:pointer;" @click="toggleCollapse"></i>
        <div style="float:right;">
          <el-image class="userImage" :src="userInfo && userInfo.image" fit="fill">
          </el-image>
          <el-dropdown style="cursor: pointer;" @command="handleCommand">
            <span class="userInfo">{{ userInfo && userInfo.name }}
              <i class="el-icon-caret-bottom" style="margin-right: 15px"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="quit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>
        <!-- Main页面 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import storage from '@/api/storage'
export default {
  name: 'App',
  data() {
    return {
      openList: ["1"],
      logo: require('@/assets/logo.png'),
      name: 'xxx系统',
      isUnfold: storage.get('isUnfold') === 'true',
      userInfo: {
        name: '张双福',
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  },
  methods: { // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      storage.set('isUnfold', !this.isUnfold)
      this.isUnfold = !this.isUnfold
    },
    handleCommand(command) {
      this.$message('已经退出系统 ' + command);
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

.logo {
  width: 40px;
  margin: 12px;
  float: left;
  /* margin-top:16px; */
}

.system_name {
  color: white;
  line-height: 60px;
  /* margin-top:6px; */
}

.userImage {
  width: 35px;
  height: 35px;
  float: left;
  margin: 12px;
  border-radius: 30px;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-row {
  margin-bottom: 20px;
}

.el-aside {
  color: #333744;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
