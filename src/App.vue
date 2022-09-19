<template>
  <div class="container px-[80px] sm:px-[10px] md:px-[40px] lg:px-[80px]">
    <a-button
      :name="'Заказать в Москву'"
      :type="'button'"
      class="mr-[20px] mt-[20px] bg-a-blue hover:bg-a-blue-hover sm:mt-[10px] sm:w-full sm:mr-0"
      @btnClick="openPopup(this.options[0])"
    />
    <a-button
      :name="'Заказать в Санкт-Петербург'"
      :type="'button'"
      class="bg-a-green hover:bg-a-green-hover sm:mt-[10px] sm:w-full"
      @btnClick="openPopup(this.options[1])"
    />
  </div>
  <a-popup v-if="userData" @closePopup="closePopup" :opened="opened">
    <p v-html="userData"></p>
  </a-popup>
  <a-popup v-else-if="errors" @closePopup="closePopup" :opened="opened">
    <p v-html="errors"></p>
  </a-popup>
  <div
    v-else
    @click.self="closePopup"
    v-show="opened"
    class="popup absolute top-0 left-0 flex justify-center items-center w-[100vw] h-[100vh] bg-a-gray-bg"
  >
    <form
      ref="form"
      @submit.prevent="postUser"
      class="relative pl-[23.5px] pr-[27.5px] bg-a-white max-w-[793px] w-full mx-[10px] rounded-[8px] sm:mx-[10px] sm:px-[20px] sm:w-full md:max-w-[669px] md:mx-[10px] md:pl-[24px] md:pr-[20px]"
    >
      <i
        @click="closePopup"
        class="material-icons absolute top-[10px] right-[10px] text-2xl text-a-gray-bg cursor-pointer"
        >close</i
      >
      <h1 class="mt-6 text-2xl leading-6 text-a-black">Заказать звонок</h1>
      <div
        class="mt-[23px] flex justify-between max-w-[742px] mx-auto flex-wrap sm:mt-[36px] md:mt-[29px]"
      >
        <div
          class="sm:w-full sm:hidden sm:max-w-full md:max-w-[190px] md:hidden"
        >
          <p class="font-medium text-base leading-5 text-a-gray-dark">Имя*</p>
          <div class="relative">
            <input
              class="inp mt-[4px]"
              :class="{
                'is-valid-input': v$.fullName.$dirty,
                'is-invalid-input animate__animated animate__shakeX':
                  v$.fullName.$dirty && v$.fullName.$invalid,
              }"
              type="text"
              placeholder="Иван Иванов"
              v-model="fullName"
              @blur="this.v$.fullName.$touch()"
            />
            <span
              v-if="v$.fullName.$dirty && v$.fullName.required.$invalid"
              class="is-invalid-message"
              :class="{
                'animate__animated animate__zoomIn':
                  v$.fullName.$dirty && v$.fullName.required.$invalid,
              }"
            >
              Обязательное поле
            </span>
            <span
              v-if="v$.fullName.minLength.$invalid"
              class="is-invalid-message"
              :class="{
                'animate__animated animate__zoomIn':
                  v$.fullName.minLength.$invalid,
              }"
            >
              Минимум 2 буквы
            </span>
            <span
              v-if="v$.fullName.maxLength.$invalid"
              class="is-invalid-message"
              :class="{
                'animate__animated animate__zoomIn':
                  v$.fullName.maxLength.$invalid,
              }"
            >
              Максимум 20 букв
            </span>
          </div>
        </div>
        <div class="sm:w-full sm:mt-[20px] sm:max-w-full md:max-w-[190px]">
          <p class="font-medium text-base leading-5 text-a-gray-dark">
            Телефон*
          </p>
          <div class="relative">
            <input
              class="inp mt-[4px]"
              type="tel"
              v-maska="'+7 (###) ###-##-##'"
              placeholder="+7 (___) ___-__-__"
              v-model="phoneNumber"
              :class="{
                'is-valid-input': v$.phoneNumber.$dirty,
                'is-invalid-input animate__animated animate__shakeX':
                  v$.phoneNumber.$dirty && v$.phoneNumber.$invalid,
              }"
              @blur="this.v$.phoneNumber.$touch()"
            />
            <span
              v-if="v$.phoneNumber.minLength.$invalid"
              class="is-invalid-message"
              :class="{
                'animate__animated animate__zoomIn':
                  v$.phoneNumber.minLength.$invalid,
              }"
            >
              Не валидный номер
            </span>
            <span
              v-if="v$.phoneNumber.$dirty && v$.phoneNumber.required.$invalid"
              class="is-invalid-message"
              :class="{
                'animate__animated animate__zoomIn':
                  v$.phoneNumber.$dirty && v$.phoneNumber.required.$invalid,
              }"
            >
              Обязательное поле
            </span>
          </div>
        </div>
        <div
          class="hidden sm:w-full sm:mt-[20px] sm:block sm:max-w-full md:max-w-[190px] md:block"
        >
          <p class="font-medium text-base leading-5 text-a-gray-dark">Имя*</p>
          <div class="relative">
            <input
              class="inp mt-[4px]"
              :class="{
                'is-valid-input': v$.fullName.$dirty,
                'is-invalid-input animate__animated animate__shakeX':
                  v$.fullName.$dirty && v$.fullName.$invalid,
              }"
              type="text"
              placeholder="Иван Иванов"
              v-model="fullName"
              @blur="this.v$.fullName.$touch()"
            />
            <span
              v-if="v$.fullName.$dirty && v$.fullName.required.$invalid"
              class="is-invalid-message"
              :class="{
                'animate__animated animate__zoomIn':
                  v$.fullName.$dirty && v$.fullName.required.$invalid,
              }"
            >
              Обязательное поле
            </span>
            <span
              v-if="v$.fullName.minLength.$invalid"
              class="is-invalid-message"
              :class="{
                'animate__animated animate__zoomIn':
                  v$.fullName.minLength.$invalid,
              }"
            >
              Минимум 2 буквы
            </span>
            <span
              v-if="v$.fullName.maxLength.$invalid"
              class="is-invalid-message"
              :class="{
                'animate__animated animate__zoomIn':
                  v$.fullName.maxLength.$invalid,
              }"
            >
              Максимум 20 букв
            </span>
          </div>
        </div>
        <div class="sm:w-full sm:mt-[20px] sm:max-w-full md:max-w-[190px]">
          <p class="font-medium text-base leading-5 text-a-gray-dark">Email*</p>
          <div class="relative">
            <input
              class="inp mt-[4px]"
              type="text"
              placeholder="you@example.com"
              v-model="email"
              :class="{
                'is-valid-input': v$.email.$dirty,
                'is-invalid-input animate__animated animate__shakeX':
                  v$.email.$dirty && v$.email.$invalid,
              }"
              @blur="this.v$.email.$touch()"
            />
            <span
              v-if="v$.email.$dirty && v$.email.required.$invalid"
              class="is-invalid-message"
              :class="{
                'animate__animated animate__zoomIn':
                  v$.email.$dirty && v$.email.required.$invalid,
              }"
            >
              Обязательное поле
            </span>
            <span
              v-if="v$.email.$dirty && v$.email.email.$invalid"
              class="is-invalid-message"
              :class="{
                'animate__animated animate__zoomIn':
                  v$.email.$dirty && v$.email.email.$invalid,
              }"
            >
              Не валидный email
            </span>
          </div>
        </div>
        <div
          class="max-w-[170px] w-full sm:block sm:max-w-full sm:mt-[20px] sm:mr-0 md:mt-[20px] md:mr-[10px] md:max-w-[406px] md:hidden"
        >
          <p class="font-medium text-base leading-5 text-a-gray-dark">Город*</p>
          <a-select
            class="font-medium text-base text-a-gray-dark"
            :options="options"
            :selectedOption="selectedOption"
            @selectOption="selectOption"
          />
        </div>
        <div
          class="hidden sm:hidden w-full md:flex justify-between items-end mt-5 mb-[33px]"
        >
          <div class="w-full max-w-[406px] mr-[10px]">
            <p class="font-medium text-base leading-5 text-a-gray-dark">
              Город*
            </p>
            <a-select
              class="font-medium text-base text-a-gray-dark"
              :options="options"
              :selectedOption="selectedOption"
              @selectOption="selectOption"
            />
          </div>
          <div class="w-full max-w-[186px]">
            <a-button
              :disabled="isInvalid"
              :name="'Отправить'"
              :type="'submit'"
              class="w-full bg-a-green-light hover:bg-a-green-light-hover"
              :class="{
                'disabled:bg-a-green-light-disabled disabled:cursor-not-allowed':
                  isInvalid || isLoading,
              }"
            />
          </div>
        </div>
      </div>
      <div
        class="text-end mt-[18px] sm:block sm:mt-[20px] md:-mt-[38px] md:hidden"
      >
        <a-button
          :disabled="isInvalid"
          :name="'Отправить'"
          :type="'submit'"
          class="max-w-[170px] w-full mt-0 mb-[27px] bg-a-green-light hover:bg-a-green-light-hover sm:w-full sm:max-w-full sm:mb-[22px] md:mb-[33px] md:max-w-[186px] md:w-full"
          :class="{
            'disabled:bg-a-green-light-disabled disabled:cursor-not-allowed':
              isInvalid || isLoading,
          }"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength } from '@vuelidate/validators';
import AButton from './components/button/aButton.vue';
import ASelect from './components/select/aSelect.vue';
import animateMixin from './mixins/animateMixin.js';
import APopup from './components/popup/aPopup.vue';
import { mapGetters } from 'vuex';

export default {
  components: { ASelect, AButton, APopup },
  mixins: [animateMixin],
  data() {
    return {
      fullName: '',
      phoneNumber: '',
      email: '',
      v$: useVuelidate(),
      opened: false,
      options: [
        { id: 1, name: 'Москва' },
        { id: 2, name: 'Санкт-Петербург' },
        { id: 3, name: 'Казань' },
      ],
      selectedOption: { name: 'Москва', id: 1 },
    };
  },
  validations() {
    return {
      fullName: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(20),
      },
      phoneNumber: { required, minLength: minLength(18) },
      email: { required, email },
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(['userData', 'errors', 'isLoading']),
    validPhoneNumber() {
      return this.phoneNumber
        .split('')
        .filter((el) => el !== ' ' && el !== '(' && el !== ')' && el !== '-')
        .join('');
    },
    isInvalid() {
      return (
        this.v$.fullName.$invalid ||
        this.v$.phoneNumber.$invalid ||
        this.v$.email.$invalid
      );
    },
  },
  methods: {
    postUser() {
      this.$store.dispatch('postUser', {
        name: this.fullName,
        phone: this.validPhoneNumber,
        email: this.email,
        city_id: this.selectedOption.id,
      });
    },
    openPopup(option) {
      this.opened = true;
      this.selectedOption = option;
      this.animate('form', 550, ['animate__animated', 'animate__bounceInUp']);
    },
    closePopup() {
      this.fullName = '';
      this.email = '';
      this.phoneNumber = '';
      this.opened = false;
      this.v$.$reset();
      this.$store.commit('reset');
    },
    selectOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<style lang="scss">
.inp {
  @apply max-w-[170px] h-[38px] font-normal text-sm text-a-gray px-[14px] py-[9px] border-2 border-a-gray-light rounded-[6px]
  sm:max-w-full
  sm:w-full
  md:max-w-full
  md:w-full;
}

.is-valid-input {
  @apply border-indigo-400 outline-indigo-400;
}
.is-invalid-input {
  @apply border-rose-400 outline-rose-400 text-rose-400 placeholder:text-rose-400;
}
.is-valid-message {
  @apply absolute -top-4 left-2 mt-3 font-medium text-xs text-rose-400 bg-white block px-1;
}
.is-invalid-message {
  @apply absolute -top-4 left-2 mt-3 font-medium text-xs text-rose-400 bg-white block px-1;
}
.animate__animated.animate__zoomIn {
  --animate-duration: 200ms;
}
.animate__animated.animate__bounceInUp {
  --animate-duration: 600ms;
}
.animate__animated.animate__shakeX {
  --animate-duration: 200ms;
}
</style>
