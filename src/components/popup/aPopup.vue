<template>
  <div
    @click.self="closePopup"
    v-if="opened"
    class="absolute top-0 left-0 flex justify-center items-center w-[100vw] h-[100vh] bg-a-gray-bg"
  >
    <div
      class="relative px-[27.5px] w-2/4 bg-a-white sm:w-9/12 md:w-1/2 lg:w-2/4 py-2 mx-auto rounded-[8px]"
    >
      <i
        @click="closePopup"
        class="material-icons close absolute top-[10px] right-[10px] cursor-pointer text-6 text-a-gray-dark"
      ></i>
      <slot>slot</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    opened: {
      type: Boolean,
      require: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
  },
};
</script>

<style lang="scss"></style>
