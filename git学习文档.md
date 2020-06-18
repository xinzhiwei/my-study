## 使用git前初始化仓库
## 在要上传的文件目录点击右键-- git bash here 
git init -y

git add .
git commit -m "111"

git log
git log --oneline

## 回退到指定版本的代码
  ## 回退到上一次版本的代码
git reset --hard Head~0

git reset --hard ca3cc90（ca3cc90为版本号）
git reflog  查看以前所有的操作

## 创建分支 （默认为master主分支）
git branch **  // 创建分支
git branch     // 查看当前分支
git checkout **  // 切换分支
git merge **         // 合并分支

## 删除分支
## 1. 切换到master分支，才可以删除**分支
git branch -d ** 

## 分支冲突
## 2个人都修改了某一部分，合并/提交时会出现冲突，需手动处理
## 处理后的内容需要重新再提交一次
## 1.认为判断进行合并 例子如下
   ## <<<<<<< HEAD 表示当前最新提交
   ## 手动合并时，保留第一个人或者第二个人提交的内容
## 然后把 <<< HEAD ====  >>>> dev 内容删除，重新提交即可
   <<<<<<<  HEAD 
   ********第一个人修改的
   =======
   ********第二个人修改的
   >>>>>>> dev 

##  使用GitHub拉代码 GitHub不是git，是一个网站
##  GitHub 允许通过git上传代码的功能 http://github.com

## 提交代码到github（当作git服务器来用）
## git push 远程仓库地址 远程仓库分支 第一次使用需要输入github账号密码
+ 示例：`git push https://github.com/xinzhiwei/my-study.git  master`   // 当前代码上传到远程的master分支上面  

## 获取远程仓库的代码 
## git pull 远程地址 远程仓库分支
+ 示例：`git pull https://github.com/xinzhiwei/my-study.git  master `
+ 会把远程分支的数据得到:(*注意本地--要初始化一个仓库*) 会合并不会想git clone一样覆盖本地数据

## git clone 远程仓库地址  第一次拉代码的时候会使用
- `git clone [地址]`
+ 会得到远程仓库相同的数据，如果多次执行会覆盖本地内容

## 使用use SSH 上传代码（不需输入用户密码，就可以验证上传者身份）
  - 公钥 私钥 二者之间是有关联的 
  + 生成公钥和私钥

## 多人合作开发是出现自己与服务器版本不一致
  自己应该先pull 服务器代码在push （如先push的话，无法修改服务器冲突，
  pull的话只是本地冲突，自己可以修改冲突，再把最新版本推送到服务器）