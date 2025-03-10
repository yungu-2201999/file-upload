# file-upload

1. 实现选择多个文件上传
2. 实现选择上传文件夹
3. 实现拖拽上传文件

todo：
进一步封装优化拖拽逻辑【预期使用】Promise让结果可控。


上传网络相关知识点：可以使用xhr或者fetch
1. 多文件上传
```
1使用FormData【multiple/form-data】
2但文件上传
```
2. 实现进度跟踪
```javascript
xhr.upload.addEventListener('progress', function(e) {

})
（fetch无法跟踪）
```
3. 取消上传
```

xhr.abort()

(对于fetch)
AbortController
```
