export default function (el, binding) {
  if (!(/^[0-9\s]*$/.test(el.value))) {
    const newValue = el.value.replace(/[^0-9\s]/g, '');
    el.value = newValue;
    binding.value = el.value;
  }
}
