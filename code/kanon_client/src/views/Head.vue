<template>
  <div
    class="flex items-center h-40px bg-#000 c-#747474 opacity-80 fixed w-100%"
  >
    <div
      v-for="(item, index) in types"
      :key="index"
      class="ml-6 cursor-pointer head-type relative"
      :class="nowRouterPath === item.path ? 'head-type-selected' : ''"
      :data-text="item.name"
      @click="() => router.push(item.path)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
//根据路由设置选中的值
const nowRouterPath = ref<string>("");
const types = ref<{ name: string; path: string }[]>([
  { name: "首页", path: "/home" },
  { name: "同人", path: "/fanFiction" },
  { name: "直播日历", path: "/LiveCalendar" },
  { name: "切片视频", path: "/SlicedVideo" },
  { name: "历程", path: "/course" },
  { name: "歌曲", path: "/song" },
]);
watchEffect(() => {
  nowRouterPath.value = router.currentRoute.value.path;
});
</script>

<style scoped lang="less">
.head-type-selected::before {
  content: " ";
  display: inline-block;
  width: 100%;
  height: 2px;
  background-color: #ffa827;
  position: absolute;
  top: calc(100% + 4px);
  border-radius: 2px;
}
.head-type::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #ffa827;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}
.head-type:hover::after {
  width: 100%;
  transition: all 0.3s;
}
</style>
