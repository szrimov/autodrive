<template>
  <button :type="type" class="btn" ref="submit" @click="btnClick">
    {{ name }}
  </button>
</template>

<script>
import animateMixin from '../../mixins/animateMixin';

export default {
  mixins: [animateMixin],
  props: {
    name: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
  },
  methods: {
    btnClick() {
      this.$emit('btnClick');
    },
  },
};
</script>

<style lang="scss">
.btn {
  @apply px-[17px] py-[9px] rounded-[6px] font-medium text-a-white text-base leading-5;
}
.animate__animated.animate__rubberBand {
  --animate-duration: 300ms;
}
</style>
