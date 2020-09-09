<template>
  <input
    v-isNumeric
    ref="input"
    :style="{width: width + 'px'}"
    v-model="value"
    placeholder="7"
    @focus="$emit('focused')"
    @blur="$emit('blured')"
    @keyup="adjustSize"/>
</template>

<script>
import styleConstants from '../../common/constants';

export default {
  name: 'NumericInput',
  data: () => ({
    value: '',
    width: styleConstants.INPUT_MIN_WIDTH,
  }),
  methods: {
    adjustSize() {
      const newSize = (this.value.length * styleConstants.INPUT_CHAR_WIDTH);
      if (newSize > styleConstants.INPUT_MIN_WIDTH) {
        this.width = newSize;
      } else {
        this.width = styleConstants.INPUT_MIN_WIDTH;
      }
      if (this.isNumeric(this.value)) {
        const startPos = this.$refs.input.selectionStart;
        const whitePrevCount = this.value.split(' ').length - 1;
        const val = this.value.split(' ').join('');
        this.value = this.parseToSpaced(val);
        const whiteCount = this.value.split(' ').length - 1;
        this.$nextTick(() => {
          this.setCursorPosition(this.$refs.input, startPos + (whiteCount - whitePrevCount));
        });
      } else {
        this.value = this.value.slice(0, this.value.length - 1);
        this.width = this.width - styleConstants.INPUT_CHAR_WIDTH <= styleConstants.INPUT_MIN_WIDTH
          ? styleConstants.INPUT_MIN_WIDTH
          : this.width - styleConstants.INPUT_CHAR_WIDTH;
      }
    },
    setCursorPosition(el, pos) {
      el.focus();
      el.setSelectionRange(pos, pos);
    },
    parseToSpaced(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    },
    isNumeric(value) {
      return /^[0-9\s]*$/.test(value);
    },
  },
  props: {
  },
};
</script>

<style scoped>
  input {
    cursor: pointer;
    border: 0;
    outline: 0;
    color: #2c2c30;
    background: transparent;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #c9c9cf;
    font-size: 14px;
    width: 50px;
    height: 25px;
    font-weight: bold;
  }

  input:focus {
    border-bottom: 1px solid #2540ff;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #c9c9cf;
    opacity: 1; /* Firefox */
  }

  input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #c9c9cf;
  }

  input::-ms-input-placeholder { /* Microsoft Edge */
    color: #c9c9cf;
  }
</style>
