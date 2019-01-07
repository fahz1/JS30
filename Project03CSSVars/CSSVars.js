const inputs = document.querySelectorAll('.controls input');
const handleUpdate = function () {
  console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate.bind(input)));

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// console.log(`test`);
// document.querySelectorAll('.controls input').forEach(input => inout.addEventListener('change', handleUpdate));
