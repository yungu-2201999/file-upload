const div = document.querySelector('div');


// 1. 取消掉所有拖拽事件的默认行为
div.addEventListener('dragenter', (e) => {
  e.preventDefault();
})

div.addEventListener('dragover', (e) => {
  e.preventDefault();
})


// 2. 拖拽文件一般是在松开拖拽时进行处理
div.addEventListener('drop', async (e) => {
  e.preventDefault();
  console.log("拿到拖入的文件", e.dataTransfer)
  const items = e.dataTransfer.items;
  console.log("items:", items);
  //   const result = [];
  for (const item of items) {
    // type 如果为空则表示是文件夹
    console.log("item:", item);
    const entry = item.webkitGetAsEntry();// 文件句柄
    console.log("entry", entry);
    function getFiles(entry, res = []) {
      if (entry.isFile) {
        // 处理文件，拿到file文件
        entry.file(file => {
          // 处理文件
          console.log(file)
          result.push(file)
        })
      } else {
        // 处理文件夹：拿到文件夹中的file文件
        const reader = entry.createReader();
        reader.readEntries(entries => {
          console.log("dir entries:", entries)
          entries.forEach(itm => {
            getFiles(itm, res)
          })
        })
      }
    }
    getFiles(entry);
  }
  
  console.log("最终文件列表",result)
})
