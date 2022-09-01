<template>
  <div class="w-full h-full layout-page pt-5">
    <div class="mx-5 px-16 py-5 bg-white rounded-xl overflow-hidden <md:px-4">
      <div>
        <div class="text-xl font-bold">商品：</div>
        <div class="text-xl mt-0.5">PAYMENTLINK</div>
      </div>
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="w-100 h-full object-cover <sm:h-60 <sm:w-auto m-auto"
            src="./assets/vue.svg"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8">
          <div
            class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
          >
            Case study
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Finding customers for your new business</a
          >
          <p class="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
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
<style>
.layout-page {
  min-height: 100vh;
  background: #eef0f3;
}
.button {
  background: #1787f9;
}
</style>
