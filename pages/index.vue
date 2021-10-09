<template>
  <div>
    <button @click="bindToAbout">00</button>
    <button @click="jiangluo">*</button>
    <el-button type="primary" @click="bindQiFei">起飞</el-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-input
      v-model="input2"
      placeholder="请输入内容"
      @input="bindsss"
    ></el-input>
    <a href="/about">about</a>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
    <el-button type="text" @click="open1">点击打开 Message Box</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      input2: '请输入内容',
    }
  },
  
  methods: {
    bindToAbout() {
      this.$router.push('/about')
    },
    bindQiFei() {
      console.log('🌊', this.input)
    },
    jiangluo() {
      console.log(this.input2)
    },
    bindsss() {
      console.log(this.input2)
    },
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: (action) => {
          this.$message({
            type: 'info',
            message: `action: ${action}`,
          })
        },
      })
    },
    open1() {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern:
          /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确',
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value,
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入',
          })
        })
    },
  },
}
</script>
<style>
</style>
