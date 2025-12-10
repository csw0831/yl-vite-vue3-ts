<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      {{ aa }}
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>
<script setup lang="ts">
import ApiService from "@/services/api"
// import { ref } from "vue";
ApiService.createUser({ pid: 77037918, user_lang: "zh-CN" })
defineProps<{ msg: string }>()
const count = ref(0)
const aa = ref()
const counts = reactive({})
// const countsss = reactive({

// });

// const aa = "123"
console.log(counts, "---")
</script>

<style scoped lang="scss">
.read-the-docs {
  user-select: none;
  color: #888;
  .asd {
    color: #888;
  }
}
</style>
