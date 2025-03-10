const file2 = document.querySelector('#file2');

file2.addEventListener('change', function() {
  console.log("拿到后可以通过判断文件的type来判断文件类型")
  console.log(file2.files);
})
