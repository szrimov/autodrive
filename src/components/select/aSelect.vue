<template>
  <div class="select relative bg-a-white" :class="{ select_active: isVisible }">
    <div
      class="h-[38px] mt-[4px] px-[14px] py-[9px] flex items-center font-normal text-sm border-2 border-a-gray-light rounded-[6px] text-a-black cursor-pointer"
      @click="filterOptions(selectedOption)"
    >
      {{ selectedOption.name }}
    </div>
    <div
      ref="select"
      class="select__items absolute z-[998] top-9 left-0 w-full bg-a-white mt-2 font-normal text-sm"
      v-show="isVisible"
    >
      <div
        class=""
        v-for="option in filteredOptions"
        :key="option.id"
        @click="selectOption(option)"
      >
        <p
          class="px-3 py-2 border-b-[1px] border-b-a-gray-light cursor-pointer hover:bg-a-gray-light"
        >
          {{ option.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import animateMixin from '../../mixins/animateMixin';
export default {
  mixins: [animateMixin],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selectedOption: {
      type: Object,
      default() {
        return '';
      },
    },
  },
  data() {
    return {
      isVisible: false,
      filteredOptions: [],
    };
  },
  methods: {
    selectOption(option) {
      this.$emit('selectOption', option);
    },
    filterOptions(selectedOption) {
      this.isVisible = !this.isVisible;
      this.animate('select', 550, ['animate__animated', 'animate__bounceIn']);
      this.filteredOptions = this.options.filter(
        (el) => el.name !== selectedOption.name
      );
    },
    hideSelect() {
      this.isVisible = false;
    },
  },
  mounted() {
    document.addEventListener('click', () => this.hideSelect(), true);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect);
  },
};
</script>

<style lang="scss">
.select::before {
  content: url('../../assets/icons/select-arrow.svg');
  display: block;
  width: 10px;
  height: 6px;
  position: absolute;
  top: 5px;
  right: 13px;
}

.select_active::before {
  top: 25px;
  right: 13px;
  transform: rotate(180deg);
}
.select__items {
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.animate__animated.animate__bounceIn {
  --animate-duration: 600ms;
}
</style>
