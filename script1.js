
const file1 = document.getElementById('file1');

file1.addEventListener('change', function() {
  // 拿到files对象之后就能进行上传操作。
  console.log(file1.files)
})
