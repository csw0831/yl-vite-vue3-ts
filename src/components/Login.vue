<template>
  <div></div>
  <div class="navbar-container">
    <div v-if="!isMobile" class="big-navbar"></div>
    <div v-else class="small-navbar"></div>
  </div>
</template>

<script setup>
const isMobile = ref(window.innerWidth < 768)
const updateWindowSize = () => {
  isMobile.value = window.innerWidth < 768
}
// 使用watch来监听窗口大小变化（也可以使用其他方式）
watch(
  () => window.innerWidth,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
    updateWindowSize()
  },
  { immediate: false }
)
onMounted(() => {
  window.addEventListener("resize", updateWindowSize)
})
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowSize)
})
</script>
<style lang="scss" scoped>
// 也可以使用媒体查询来设置一些样式
@media (max-width: 768px) {
  .navbar {
    background: rgb(255, 255, 255);
  }
}
</style>
