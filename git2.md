git分支
      有时为了避免开发中影响到生产，所以需要生成git分支
      git的存储模式是一种类似于文件的快照

如何产生git分支  （git branch testing）
      1、进入git界面，点击分支   右侧有个新建分支
         写入分支的名称 ， 已经根据那个路径建的分支  ，然后点击创建即可

git的存储流程
      1.原始文件进行修改后，点击保存， 会在vscode的git版本控制器中显示出来
      2.此时点击可以选中更改的目录进行提交， 即上面有个对号  。或者取消保存
      3.此时提交后并没有提交到服务器上，只是提交到了本地上面
      4.点击对号后面的 ... 可以选择暂存所以更改此时才会报存到服务器上面
      5.如何更改分支 ，点击页面下方的蓝色区域。可以进行分支的切换。   （git checkout testing）
        origin/v2 表示的是服务器上面的分支   v2表示的是本地的分支 

如何获取分支上面的源码
     1.新建目录
         mkdir CRM 
     2.目录初始化
         git init
     3.添加远程仓库
         git clone http://192.168.164.49:8080/tfs/MOBILETEAM/_git/CRM
     4.获取项目源码
         git pull
      5.推送本地分支给服务器
         git.push 

创建新分支并且切换到当前分支
    $ git branch iss53
    $ git checkout iss53
 
如果你正在开发，使用的分支是iss53，现在有大bug，需要马上在原分支上修改，怎么办
    1.要注意没有提交的修改，否者会与检出的分支冲突，可以使用下面的命令
      $ git checkout master
      Switched to branch 'master'

     2.修改紧急bug
         建立一个紧急bug分支  
           $ git checkout -b hotfix
Switched to a new branch 'hotfix'
$ vim index.html
$ git commit -a -m 'fixed the broken email address'
[hotfix 1fb7853] fixed the broken email address
 1 file changed, 2 insertions(+)
 
     3.分支合并  （git merge）
       $ git checkout master
       Switched to branch 'master'
       $ git merge iss53
       Merge made by the 'recursive' strategy.
       index.html |    1 +
       1 file changed, 1 insertion(+)
 
     

     4.继续工作是需要删除紧急bug分支
      git branch -d ***



git分支的使用，已经分支指针的指向切换
    1、创建分支
        git branch 分支名
    2、查看分支
        git branch / git branch -a
    3、切换分支（更改分支指向）
       git checkout 分支名
       git branch -a    //此时会出现所以分支名，已经现在切换在的那个分支

分支的切换和创建可以一个命令完成
       git checkout -b 分支名
      

分支的合并
     1、合并分支的方法有 git merge / git rebase
        合并分为快速合并和普通合并（快速合并：合并后看不出曾经做过合并）
        （普通合并：合并后的历史会有分支记录）  
     
     2、快速合并（把develop合并到master分支）
         git checkout master  //指向master分支
         git merge develop   //合并分支           （cat ** linux命令查看文件内容的）

     3、普通合并 （--no-ff 参数表示禁止使用快速合并）
         git checkout develop                     添加当前目录的所有文件到暂存区
         git add .                                git add .     
         git commit -m "注释"     //提交          添加指定文件到暂存区
         git checkout master                      git add [file1] 
         git merge --no-ff -m "通过普通合并develop分支" develop
          
     4、查看合并情况 
         git log --graph -all 

解决合并冲突
  
     在不太分支上面修改了同一个文件，此时提交时会出现冲突
      
     入下例子 
       //在master分支上修改了note_3.txt文件 
       git add note_3.txt 
       git commit -m "master修改了分支"
          //切换到develop分支在次修改nite_3.txx
       git checkout develop
       git add note_3.txt   
       git commit -m "develop分支修改了文件"
         //合并到master下
       git checkout master
       git merge develop    //合并失败，需要解决冲突才能提交合并请求
         结果显示  conflict(content):merge confict in note_3.txt 内容合并冲突   
        
       解决：需要手动更给合并内容
            
       git log --graph --pretty=oneline --abbrev-commit 可以查看整个版本线的状态

删除分支
      git branch -d 分支名

恢复误删分支
      git log --branches="分支名"      //结果显示commit *********
      git branch develop 版本ID         //commit 后面的前9为数组 

切换分支是保存未commit 的更改
      























         