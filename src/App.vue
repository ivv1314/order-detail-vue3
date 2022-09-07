<template>
  <div class="w-full h-full layout-page pt-5">
    <div class="mx-5 px-16 py-5 bg-white rounded-xl overflow-hidden <md:px-4">
      <div>
        <div class="text-xl font-semibold">商品：</div>
        <div class="text-xl mt-1 font-semibold">PAYMENTLINK</div>
      </div>
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="w-100 h-full object-cover <sm:h-60 <sm:w-auto m-auto"
            src="./assets/vue.svg"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8 flex-1">
          <FormItem label="数量:" value="10" />
          <FormItem label="数量:" value="10" />
          <FormItem label="数量:" value="10" />
          <FormItem label="数量:" value="10" />
        </div>
      </div>
    </div>
    <div class="mt-5 flex mx-5 justify-end <md:justify-start">
      <button class="text-white rounded px-10 py-3 button <md:w-full">
        提交
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import FormItem from './components/FormItem.vue';
export default defineComponent({
  components: {
    FormItem
  },
  setup() {
    return {};
  }
});
</script>

<style>
.layout-page {
  min-height: 100vh;
  background: #eef0f3;
}
.button {
  background: #1787f9;
}
</style>
