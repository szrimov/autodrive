export default {
  methods: {
    animate(ref, ms, animateClassName) {
      if (Array.isArray(this.$refs[ref])) {
        setTimeout(() => {
          animateClassName.forEach((element) => {
            this.$refs[ref].map((item) => item.classList.remove(element));
          });
        }, ms);
      } else {
        setTimeout(() => {
          animateClassName.forEach((element) => {
            this.$refs[ref].classList.remove(element);
          });
        }, ms);
      }
      if (Array.isArray(this.$refs[ref])) {
        animateClassName.forEach((element) => {
          this.$refs[ref].map((item) => (item.className += ' ' + element));
        });
      } else {
        animateClassName.forEach((element) => {
          this.$refs[ref].className += ' ' + element;
        });
      }
    },
  },
};
