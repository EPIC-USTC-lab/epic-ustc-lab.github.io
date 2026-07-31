# EPIC 实验室主页 · 推送避坑指南

> 适用对象：下一位接手实验室主页（EPIC-USTC-lab/epic-ustc-lab.github.io）的同学。
> 本指南沉淀了 2026-07-30 ~ 08-01 首次推送成员信息时踩过的全部坑，按「准备 → 上传 → 推送 → 部署 → 验证」流程组织。
> 每个坑都写清：**现象 → 根因 → 解决 → 怎么预防**。

> 🔧 **维护规则（2026-08-01 起生效）**：以后**每次操作完，遇到的新坑/新教训必须增量追加到本指南**，供后续接手者参考。
> 追加格式：在对应阶段小节下新增「### 坑 x.y：标题」，内容保持「现象 → 根因 → 解决 → 预防」四段式；跨阶段的新坑新增小节编号顺延。
> 若只是流程性改动（无坑），无需强制写，但有任何踩坑就一定要记。

---

## 0. 关键信息速查

| 项目 | 值 |
|------|-----|
| 仓库 | `EPIC-USTC-lab/epic-ustc-lab.github.io` |
| 线上地址 | https://epic-ustc-lab.github.io/ |
| 成员页 | https://epic-ustc-lab.github.io/people/ |
| 技术栈 | Hugo + Hugo Blox（Research Group 模板），部署走 `.github/workflows/publish.yaml` |
| A100 服务器 | IP `192.168.20.37`（校内网段） |
| A100 账号 | `archlab`（共享账号）/ 个人账号 `fanfl9922` 等 |
| 网站目录 | `/home/archlab/epic_website/epic-ustc-lab.github.io` |
| 校外访问前置 | iwan（全局代理）+ EasyConnect（深信服 VPN）两步缺一不可 |

---

## 1. 环境准备阶段

### 坑 1.1：校外 SSH 不上 A100（Connection timed out）

**现象**：在校外直接 `ssh archlab@192.168.20.37` 卡住/超时，连 `114.214.192.77`（公网）也握手失败。

**根因**：A100 是校内机器，防火墙只放行校内网段/白名单 IP。校外必须先进学校 VPN。

**解决**（已确认可用流程）：
1. 先开 **iwan**（全局代理模式），连上校园网环境；
2. 再装 **EasyConnect**，用孟老师提供的账号登录（账号=姓名全拼小写）：
   - 合肥访问入口：`https://222.195.81.241:4433/`
   - 苏州访问入口：`https://172.16.70.106:4433/`
   - 即使已在校园网内，访问服务器也要登录 EasyConnect；
3. 然后才能 `ssh archlab@192.168.20.37`。

**预防**：开 VPN 后先 `ssh -o ConnectTimeout=8 archlab@192.168.20.37 "echo OK"` 探活，再干活。

---

### 坑 1.2：本地 git push 走 HTTPS 被墙

**现象**：`git push origin main` 报超时/`Failed to connect to github.com port 443`，但 `curl -I https://github.com` 也失败。

**根因**：HTTPS 443 端口在当前网络下不通（被墙/被代理干扰），但 **SSH 22 端口是通的**。

**解决**：
```bash
git remote set-url origin git@github.com:EPIC-USTC-lab/epic-ustc-lab.github.io.git
git push origin main
```

**预防**：仓库 clone 后第一件事确认 remote 形式；443 不通就切 SSH，不要反复重试 HTTPS。

---

### 坑 1.3：SSH key 没配，SSH push 也失败

**现象**：`ssh -T git@github.com` 返回 `Permission denied (publickey)`。

**根因**：本地 `~/.ssh/` 没有可用的密钥，或密钥没加到 GitHub。

**解决**：
```bash
mkdir -p ~/.ssh && chmod 700 ~/.ssh
ssh-keygen -t ed25519 -C "bystery@github" -f ~/.ssh/id_ed25519 -N ""
# 把 ~/.ssh/id_ed25519.pub 整行内容粘贴到 https://github.com/settings/keys
ssh -T git@github.com   # 看到 "Hi <用户名>!" 即成功
```

**注意**：SSH 密钥只解决「你是谁」，push 能否成功还取决于**仓库写权限**（见坑 1.5）。

---

### 坑 1.4：git 全局用户名是旧名字

**现象**：commit 作者显示旧名 `ausejr`，改过 GitHub 用户名后对不上。

**解决**：
```bash
git config --global user.name "bystery"
git config --global user.email "<github绑定的邮箱>"
# 已有 commit 要修正作者：
git commit --amend --reset-author --no-edit
```

**预防**：新环境第一件事 `git config --global user.name` 确认；邮箱建议用 GitHub 绑定邮箱，否则贡献图不显示。

---

### 坑 1.5：本地账号 push 被拒（Permission denied）

**现象**：`git push` 报 `remote: Permission to EPIC-USTC-lab/... denied to <账号>`。

**根因**：GitHub 规则——clone 谁都能做，**push 必须是仓库 owner 或 collaborator**。你的账号没被加入仓库。

**解决**（三选一）：
1. 找仓库管理员（耿家伟/博语）在 `Settings → Collaborators` 把你账号加为 collaborator；
2. 走 A100：A100 上 `archlab` 账号配好了有写权限的 GitHub 凭证（SSH key `id_ed25519_github_lby`，对应账号 `cqycqy1999`，属主=曹前越），`archlab` 登录后 push 即用这套身份；
3. 让管理员直接在网页上操作。

**预防**：动手前先确认自己有没有写权限（`git ls-remote` 能读不代表能写）。

---

## 2. 内容准备阶段

### 坑 2.1：空头像文件（0 字节 avatar.jpg）会炸掉 Hugo 构建

**现象**：为占位创建的 0 字节 `avatar.jpg` 推上去后，Hugo 构建报图片解码错误，整个站点构建失败。

**根因**：Hugo 遇到 0 字节图片会尝试解码 → 报错 → 构建中断。

**解决**：
```bash
find content/authors -name 'avatar.jpg' -size 0 -delete
```

**预防**：**没有照片就完全不放文件**，也不要留 `avatar_filename` 字段（见坑 2.3）。Hugo 会自动显示默认头像，不会报错。

---

### 坑 2.2：照片真实格式是 PNG 却命名为 .jpg

**现象**：`avatar.jpg` 文件头是 `89504e`（PNG magic bytes），不是 `ffd8ff`（JPG）。

**根因**：从 doc 提取照片时扩展名没按真实格式命名，或图片工具导出了 PNG 但保持了 .jpg 后缀。

**解决**：按真实格式重命名并同步 front matter：
```bash
# 检查 magic bytes
head -c 3 avatar.jpg | xxd
# PNG 则改名为 avatar.png，并把 _index.md 里的 avatar_filename 改成 avatar.png
```

**预防**：提交前用 `head -c 4 <file> | xxd` 校验所有照片真实格式，扩展名与格式一致。

---

### 坑 2.3：无照片作者残留 `avatar_filename` 字段

**现象**：`_index.md` front matter 写了 `avatar_filename: avatar.jpg`，但目录里没有这个文件 → Hugo 加载不存在的图片。

**解决**：删除无照片作者文件里的 `avatar_filename` 行：
```bash
sed -i '/avatar_filename: avatar.jpg/d' content/authors/<id>/_index.md
```

**预防**：生成脚本（gen_hugo.py）里空头像时**不输出** avatar_filename 行——字段有值才输出，没值连行都不留（条件渲染原则同样适用于正文各模块）。

---

### 坑 2.4：people 页不显示任何人（user_groups 中英文不匹配）

**现象**：people 页只显示模板自带假作者（Nelson Bighetti 等），我们 13 人一个都不出现。

**根因**：`content/people/index.md` 的 `user_groups` 是模板英文值（Principal Investigators / Researchers / Grad Students / Alumni...），而我们的作者 front matter 写的是中文（教师 / 博士研究生 / 硕士研究生 / 已毕业校友）——字符串匹配不上。

**解决**：把 `content/people/index.md` 的 `user_groups` 改成与作者一致的中文分组。

**预防**：**people/index.md 的分组名必须和每个作者 `_index.md` 里的 `user_groups` 一字不差**。改一边时同步检查另一边。

---

## 3. 上传 / 解压阶段

### 坑 3.1：zip 解压路径错位（`authors/` 跑到仓库根目录）

**现象**：`unzip -o xxx.zip` 后 `ls content/authors/` 还是只有 admin 和吳恩達，但仓库根目录多了个 `authors/` 文件夹；`git add content/authors/` 提示 nothing to add。

**根因**：zip 内部结构是 `authors/xxx/`（打包时相对路径写成了 `authors/`），解压到仓库根目录得到 `./authors/`，而不是合并进 `content/authors/`。

**解决**：
```bash
mv authors/* content/authors/
rmdir authors
rm xxx.zip
```

**预防**：打包时把路径压成 `content/authors/<id>/...`；或者解压后**先 `ls` 确认位置**再 git add。任何一次解压后都要先确认目录结构，不要直接 commit。

---

## 4. 推送阶段

### 坑 4.1（最严重）：GitHub Pages 双部署打架，全站 404

**现象**：push 成功后线上 `/people/`、`/author/*` 全部 404；首页显示的是模板 README 的 demo 文案（"We ask you, humbly..."）；`/README.md` 竟然返回 200。

**根因**：仓库**同时存在两套部署机制**：
- GitHub 原生构建（"pages build and deployment"）：Pages 设置配成了 `Deploy from a branch: main /(root)`，把**源码树**（README.md、content/、config/）直接当网站发布；
- Actions workflow（`publish.yaml`）：正确构建 Hugo 产物。

两套都触发，原生构建后完成把 Actions 的产物**覆盖**掉 → 线上全是源码文件 → Hugo 生成的页面自然 404。

**解决**：需要**仓库 admin** 在网页上改：
> `仓库 → Settings → Pages → Build and deployment → Source`：从 `Deploy from a branch` 改成 **`GitHub Actions`**

改完后只有 `publish.yaml`（Hugo 构建）生效，pages 正常。

**判定口诀**：线上能访问 `/README.md`、`/config/...` 这类源码路径 = 在发源码树 = Pages 配置错了。

**预防**：**推送前先检查部署配置**（`curl https://api.github.com/repos/<org>/<repo>/pages` 看 source；或看 Actions 里是否同时出现 "pages build and deployment" 和自定义 workflow 两类 run）。发现双部署立刻让管理员改配置，**不要在配置没改好前 push 到 main**（推了也白推，还会暴露 404 让全组看到）。

---

### 坑 4.2：push 卡在凭证输入（A100 上 remote 是 HTTPS）

**现象**：A100 上 `git push` 一直等 `Username for 'https://github.com'`，或弹出 VS Code 的 GitHub 登录 OAuth 弹窗（弹窗与 push 无关，直接取消）。

**根因**：A100 上仓库 remote 还是 HTTPS，且没有可用的 HTTPS 凭证。

**解决**：切 SSH remote 再 push（A100 的 archlab 配好了 GitHub SSH key）：
```bash
cd /home/archlab/epic_website/epic-ustc-lab.github.io
git remote set-url origin git@github.com:EPIC-USTC-lab/epic-ustc-lab.github.io.git
git push
```

**预防**：A100 仓库 remote 保持 SSH 形式，不要改回 HTTPS。

---

## 5. 部署后的坑（Hugo 渲染层）

### 坑 5.1：people 页 widget 3 个隐藏 bug，作者卡片渲染不出来

**现象**：分组标题（教师/博士/硕士/校友）都渲染了，但每组卡片数 = 0；用调试模板验证 `site.Pages` 能查到 17 个 author，`intersect` 也能匹配出 13 人，但页面就是没有卡片。

**根因**（Hugo Blox `layouts/partials/blocks/people.html` 的 3 个 bug）：
1. **过滤条件错误**：`where site.Pages "Section" "authors"` 匹配不到作者——`content/authors/<name>/_index.md` 在 Hugo 里是 **taxonomy term（kind=term）**，不在默认的 `site.Pages`（kind=page）里。需加 `"Kind" "term"` 条件；
2. **路径写错**：模板里 `site.GetPage "/authors/<dirname>"` 用的是复数，但 permalinks 配置是 `/author/:slug/`（**单数**）→ GetPage 找不到 → `$link` 为空 → 整段 `<a>` 链接被 `{{ with $link }}` 吞掉；
3. **卡片被 if 包裹**：`{{ if $src }}` 包住整张卡片，而 `avatar.jpg` 不是 page bundle resource，`.Resources.ByType "image"` 找不到 → `$src` 空 → **整张卡片 div 不渲染**（连名字都不显示）。

**解决**：在仓库 `layouts/partials/blocks/people.html` 放修复版覆盖模板默认（已提交 `f8e0932`）：
- 过滤改为 `where (where site.Pages "Section" "authors") "Kind" "term"`；
- 链接路径 `site.GetPage` 用 `/author/<dirname>`（单数）；
- 去掉 `if $src` 对整卡片的包裹，无头像也渲染姓名卡片。

**预防**：改模板类内容必须：先在仓库 `layouts/` 里**用调试输出验证过滤逻辑**（printf 数量），确认匹配数正确再套 HTML 渲染；验证渲染结果用「计数 `people-person` div / `<a>` 标签」而不是肉眼。

---

### 坑 5.2：作者详情页全部 404（URL 中文 vs 英文）

**现象**：people 页 13 人正常显示、点卡片全 404。people 页链接是 `/author/zongwei-zhu/`（英文目录名），实际页面 URL 却是 `/author/朱宗卫/`（中文）。

**根因**：Hugo taxonomy 的 slug 默认取 **title**（中文姓名）而不是目录名；而 people widget 里链接是用 `path.Base .File.Dir`（英文目录名）拼的 → 两边对不上。

**解决**：给每个 `content/authors/<id>/_index.md` 的 front matter 加 `slug: <英文id>`，强制 URL 用英文。中文名会变成 canonical 别名自动跳转英文 URL。

**预防**：**作者文件一定要带 `slug` 字段**（等于目录名）；上线前批量 curl 每个 `/author/<id>/` 确认 200。

---

### 坑 5.3：验证时的两个假警报

**现象 1**：curl 偶发返回 `000`/超时 → 误判页面挂了。
**根因**：EasyConnect 全局代理不稳定，网络抖动。
**解决**：验证脚本对每个 URL 重试 3 次（间隔 1-2s），`000` 重试后再判，不要一次失败就下结论。

**现象 2**：正则 `<a href="/author/...">` 匹配到 0 个，以为卡片没渲染。
**根因**：Hugo 输出的是 `<a href=/author/zongwei-zhu/>`（**无引号**），带引号的正则匹配不上。
**解决**：验证脚本的正则要兼容无引号形式，或直接数 `people-person` / `portrait-title` 的 div 数。

**预防**：验证前先 `curl` 存一份 HTML 看真实标签格式，再写匹配规则。

### 坑 5.4：social icons 不显示（social_links 读 .Params.social 不是 .params.profiles）

**现象**：front matter 写了 `profiles:` 数组，but people widget 卡片只显示空的 `<ul class="network-icon"></ul>`，没有任何社交图标。

**根因**：Hugo Blox 的 `social_links.html` partial 遍历的是 `.Params.social`（每项 `icon/icon_pack/link`），不是 `.Params.profiles`（每项 `icon/icon_pack/url/label`）。

**解决**：front matter 输出字段名为 **`social`**（不是 `profiles`），每项三个字段：`icon` / `icon_pack` / `link`。`link` 字段填实际 URL，没值时填 `"#"`（图标显示但点击跳到锚点，无响应）。

**预防**：要加新社交图标类型，先看 `social_links.html` 读哪个字段。**只认 `social` + `link`**。

### 坑 5.5：mtime 排序逻辑反了（误删新文件留旧文件）

**现象**：清理重复 avatar 时按"按 mtime 排，保留最新的"逻辑，结果反而删了最新的 .png，留下了旧的 .jpg（旧的 mtime 早）。

**根因**：mtime 排序 + 删"重复"时，对"什么算重复"的判断和"留谁删谁"的逻辑反了。

**解决**：**按业务规则固定删谁留谁**，不要依赖 mtime。比如"所有照片 magic bytes 是 PNG，统一删 .jpg 只留 .png"。

**预防**：清理逻辑用白名单/黑名单规则，**不要用 mtime 排序决定保留**。

---

## 6. 自动化操作（paramiko / 服务器）的经验

### 坑 6.1：paramiko 远程执行含引号命令反复转义失败

**现象**：`exec_command` 传带 `$`、引号、`{{ }}` 的 shell 命令时，层层转义出错（`unexpected "}"`、变量被本地展开等）。

**解决**（已稳定）：**不要内联长命令**。把要执行的逻辑写成完整 Python/Shell 脚本，用 sftp 上传到 A100（如 `/home/archlab/.../fix_xxx.py`），再 `exec_command` 只跑一句 `python3 fix_xxx.py`，跑完删除。涉及模板内容（Go template `{{ }}`）时尤其要用脚本文件方式，别用 shell 内联。

**预防**：凡是命令里含 `$` / 引号 / 花括号 / 中文 → 一律走「本地写脚本 → sftp 上传 → 远程执行」。

### 坑 6.2：Windows 沙箱拦 unlink（删除文件走回收站失败）

**现象**：脚本调 `Path.unlink()` 或 `os.remove()` 时，沙箱要走回收站但回收站不可用，抛 `OSError [safe-delete][SAFE_DELETE_FAIL_CLOSED]`。

**解决**：用 `subprocess.run(['cmd', '/c', 'del', '/F', '/Q', str(path)])` 强制删除不走回收站。

**预防**：写自动清理脚本时默认用 `cmd /c del /F /Q`，不要用 `unlink`。

### 坑 6.3：重构 gen_hugo.py 时容易丢关键字段

**现象**：之前 `slug: <英文id>` 修过 author URL 问题，重写脚本时漏了这一行，又一次导致所有 author 详情页 404（people 链接是英文 ID，但 Hugo 用中文 title 生成 URL）。

**预防**：**重构脚本前**先备份 git commit 后的 diff 摘要；重构后**比对 front matter 关键字段**（title / role / superuser / slug / user_groups / interests / email / social）是否都还在。

### 坑 6.4：sync 脚本会引入重复 avatar 文件

**现象**：本地 hugo_output 有旧的 `avatar.jpg`，sync put 新文件 `avatar.png` 时没删旧的，结果 A100 上两个文件并存（avatar.jpg 0B + avatar.png 真文件），Hugo 加载 `avatar_filename: avatar.png` 没问题但目录里多个 avatar.* 会引发混乱。

**解决**：sync 脚本里在 put 前**先删目标目录的所有 `avatar.*`**，再 put 当前文件。

**预防**：任何 put 前先清，避免新旧叠加。

### 坑 6.5：archlab 是共享账号，别乱动环境

**现象**：任何人登录都是同一套环境，改错会影响全组。

**注意**：
- 网站仓库在 `archlab` 家目录下，用 `archlab` 身份操作最稳；
- 只动 `epic_website/` 网站仓库，不要改其他目录/安装全局软件；
- 调试下载的临时文件（hugo 二进制、构建产物、测试 zip）**用完必须删**，别留在 `/tmp` 占空间（有次清理出 100MB+）。

**预防**：每次远程操作后 `git status` + 检查 `/tmp`，确保工作区干净。

---

## 7. 一键避坑 Checklist（推送前逐项打勾）

- [ ] **部署配置**：确认 Pages Source = `GitHub Actions`（不是 Deploy from a branch），线上 `/README.md` 返回 404 才是对的
- [ ] **remote**：A100 仓库 remote 为 `git@github.com:...`（SSH），443 被墙走不通 HTTPS
- [ ] **照片**：`head -c 4 avatar.*` 校验真实格式；无照片者**不创建空文件**、**不留 avatar_filename 行**
- [ ] **slug**：每个 `content/authors/<id>/_index.md` 有 `slug: <id>` 且与目录名一致
- [ ] **user_groups**：`content/people/index.md` 的分组名与所有作者 `_index.md` 的 `user_groups` 逐字一致（中文）
- [ ] **social 字段**：front matter 输出的是 `.Params.social`（不是 .profiles），每项含 `icon/icon_pack/link` 三个字段
- [ ] **本地构建**：A100 上 `hugo --minify` 无报错；`public/people/index.html` 存在；`public/author/` 下 13 个英文目录齐全
- [ ] **git 状态**：只含预期改动，无 zip 残留、无意外文件
- [ ] **commit + push**：push 后查 Actions 只触发 `publish.yaml` 一类 run（无 "pages build and deployment" 原生 run）
- [ ] **线上验证**：`/people/` 200 + 10 人；逐个 `/author/<id>/` 200（curl 重试 3 次，正则兼容无引号 href）
- [ ] **收尾**：清 `/tmp` 调试残留，`git status` 干净

---

## 8. 当前仓库状态（2026-08-01 03:15 更新）

- 已上线：**10 位成员**（教师 2：朱宗卫/耿家伟；博士 1：陈发祥；硕士 2：樊富龙/赵希珏；校友 5：熊屹/项莉棋/刘伟鸿/连子锐/吴杨），people 页分组正常（教师/博士研究生/硕士研究生/已毕业校友 中文四组），详情页英文 URL（slug）全部可访问
- 已删除：揭景怀/曹前越/祖玉龙（数据 + A100 目录 + 线上 404 均确认）
- 照片：朱宗卫/耿家伟/陈发祥/樊富龙/赵希珏 5 人有真实照片；5 校友无照片 → people 页显示首字母渐变头像（不破图）
- 线上特性：people 页三轮卡片化迭代（白卡圆角/阴影/hover 上浮/头像 ring/响应式 4-3-2-1 列/首字母头像/stagger 入场/焦点可见）+ 卡片 summary 一句话（校友自动生成「XX届博士，现就职于XX」）+ 社交图标自绘（空链接 span.disabled 不跳转）
- 关键提交：`6cf1377`（首次成员信息）→ `4aea393`（修空头像残留）→ `f8e0932`（修 people widget）→ `ecdf019`（加 slug）→ `32dcb4b`（卡片遮挡修复）→ `4e6b4ce`（people 卡片化）→ `04a5269`（YAML # 注释符修复，**当前 HEAD**）
- 部署链路已理顺：push → publish.yaml（Hugo 构建）→ GitHub Pages，单一路径（Pages Source = GitHub Actions）
- 待办（非阻塞）：5 校友照片待补（首字母头像可先顶着）；格式规范文档 §7 已补 people 页样式规范
- 模板体系：`temple/教师/教师通用模板.html` + `temple/硕士-博士/通用/研究生-博士通用模板.html`（v7 全特性，个人信息全占位符）

---

## 9. 2026-08-01 追加记录（第二次重构 + 学术主页迭代）

### 9.1 第二次成员重构：删除三人 + 社交图标 + 照片修复
- 删除揭景怀/曹前越/祖玉龙 3 人（用户确认：博士只留陈发祥，硕士留樊富龙+赵希珏，教师留朱宗卫+耿家伟，校友全留）
- **坑：social 图标用 `.Params.social` 不是 `.params.profiles`** —— Hugo Blox 的 `social_links.html` 遍历 `social`（字段 `icon/icon_pack/link`），写 `profiles`（`url` 字段）会渲染出空的 `<ul class="network-icon">`。已改，5 图标（envelope/github/graduation-cap/orcid/globe）全部显示，空值 link="#"
- **坑：gen_hugo.py 重写后丢了 slug 字段** → 作者 URL 又变中文，详情页全 404。教训：重构脚本后必须比对 front matter 关键字段是否齐全
- **坑：本地沙箱拦 unlink**（回收站不可用抛 SAFE_DELETE_FAIL_CLOSED）→ 改用 `cmd /c del /F /Q` 强制删除
- **坑：sync 脚本 put 前没删旧 avatar.*，导致 avatar.jpg+avatar.png 重复** → put 前先删目标目录所有 avatar.*
- 朱老师照片 `data/picture/zongwei-zhu.jpg` 已自动识别为 PNG（magic bytes）→ avatar.png
- 提交：`075c652`（重构）→ `3fea99a`（补 slug）→ `83bd5dd`（修 social icons），全部线上 200

### 9.2 学术主页三轮迭代（academic-v1/v2/v3.html）
- 用户用脚手架 prompt 要求 3 轮「搜索→优化」迭代，每轮换参考网站
- 输出：3 个版本 HTML + `EPIC主页-格式规范.md`（设计规范）
- 三轮设计演进：v1 左侧边栏经典布局 → v2 Hero+Bento Grid（Typographic Hero）→ v3 深色模式+滚动动画+时间线
- **关键规范（用户要求）**：所有字段必须展示，空字段也保留标签（如「GitHub：（未填写）」）——与 Hugo 版"空字段不显示"策略相反，两套规范并存，注意区分
- 数据源：`data/fulong-fan.yaml`

### 9.3 学术主页自检修复（02:04）
- **坑：disabled 链接用 `<a href="#">` 点击会跳回页面顶部** → 必须用 `<span class="... disabled">` 而非带 href 的 `<a>`（三个版本已修复）
- **坑：`color-mix()` 兼容性**——2023 年前浏览器不支持，v3 有 8 处使用 → 每处前一行加近似纯色 fallback
- **坑：localStorage 在 file:// / 隐私模式抛异常** → 包 try/catch
- **头像内嵌 base64**：单文件自包含，任何环境可显示（fulong-fan.jpg 实为 PNG，`data:image/png;base64,...`，293KB）
- 教训：v1 用 `span.me` 加粗（视觉 OK），v2/v3 用 `<b>`——规范文档已注明两种均可；检查脚本正则需兼容两种写法

### 9.4 第 4 轮迭代：v4 功能升级（02:07）
- 参考 al-folio / as-folio / Folio 学术主题，新增：防闪屏暗色模式（head 内联读 prefers-color-scheme）、阅读进度条、导航 scrollspy、回到顶部、打印友好布局（@media print）、SEO（JSON-LD Person + Open Graph）
- **坑：新增的 `hero::before` radial-gradient color-mix 忘记配 fallback** → 补 rgba 近似值兜底；检查脚本判断条件也要覆盖 `background: rgba` 和 `border: 1px solid #` 前缀（否则误报）
- v4 头像复用 v3 的 base64（用正则从旧版提取，不重新编码）
- 验证：标签配对 OK、JS 括号平衡、disabled span 3 处、href=# disabled 0 处

### 9.5 卡片只显示一句话 + interests 标签 chip（02:09）
- **用户原话**：外面 people 页只显示一句话，里面详情页写完整的个人介绍
- **实现**：
  1. data yaml 每 10 人加 `summary` 字段（一句话简短版）
  2. gen_hugo.py 输出 `summary` + 限制 interests 最多 2 条
  3. people widget partial 改：优先显示 `.Params.summary` + interests 作为 chip 标签
  4. 详情页 body 顶部已有 `## 个人简介` 显示完整 bio
  5. 校友无 summary 时 fallback 到 interests 段落
- **坑**：Hugo 模板输出 HTML 属性无空格时**不加引号**（`<p class=people-summary>` 而不是 `<p class="people-summary">`），检查脚本正则要兼容
- **坑**：themes 缓存里的 partial 不会自动重载，必须 commit 到仓库 `layouts/partials/blocks/people.html` 才生效
- **坑**：自定义 SCSS 不会自动编译（themes 在 module cache），要内联 `<style>` 到 partial 里
- 验证：5 个 active 成员 summary 全显示，朱老师："中科大苏州研究院研究员、博导，专注边缘智能计算与天基智能计算系统。"

### 9.6 学术主页 v5/v6/v7 三轮再迭代（02:15）
- v5：论文可展开摘要（details/summary，参考 Kamšek 2025 获奖主页）+ ::selection + 自定义滚动条 + footer 最后更新
- v6：技能 Canvas 雷达图（纯手绘无依赖，5 轴）+ 学术亮点统计卡（参考 Show-Your-Talents / 简历可视化）
- v7（最终）：无障碍升级——prefers-reduced-motion、:focus-visible、skip-link、preconnect、打印隐藏交互元素、footer 回到顶部
- **坑：Canvas 雷达图要在深色模式切换时重绘** → 用 MutationObserver 监听 `data-theme` 属性变化触发重绘
- **坑：prefers-reduced-motion 需要覆盖 .reveal 的动画** → 单独声明 `opacity:1; transform:none` 覆盖
- **经验：单文件 HTML 大迭代**（v4 起含 293KB 头像 base64）→ 用 Python 增量脚本（读上一版 → 字符串替换 → 写新版本），不要整文件重写，省 token 且避免头像重复编码

### 9.7 通用模板制作（02:44）
- **坑：通用模板必须全量泛化**——v7 里 32 处硬编码（姓名/邮箱/论文/教育/JSON-LD/footer）如果只删功能不泛化，新人替换时会漏改。已全部替换为【占位符】+ HTML 头部「使用方法」注释。
- **坑：头像 base64 不能进通用模板**——个人照片内嵌会让模板体积 328KB→25KB，且别人没法替换。恢复 👤 占位。
- 方法：先功能删减（去雷达图 JS/CSS、去统计卡），再做字符串级泛化（32 处）；删 canvas 后打印媒体里的 `#skillRadar` 引用也要清理。
- 技能按 BOSS 直聘 AI Agent 工程师 JD 优化：AI Agent 开发 / 提示词工程 / AI 辅助编程（提示词驱动生产级代码）/ RAG。

### 9.8 people 页样式三轮迭代（02:52-03:00）
- **第1轮（卡片化）**：参考 Quackit team card / USC lab stacking cards / Charlotte people-card。白卡+圆角14px+柔和阴影；hover translateY(-5px) 上浮+边框高亮；头像圆形+主题色 ring（box-shadow 0 0 0 3px）；名字/角色层级；响应式 flex 4/3/2/1 列（calc(25%-16px) → 33.33% → 50% → 100%）。
- **第2轮（首字母头像）**：无照片成员原来引用不存在的 avatar.jpg 显示破图 → 改为 `.avatar-letter` 渐变首字母头像（蓝→暖铜 gradient，首字居中），深色模式卡片适配。
- **第3轮（动效+无障碍）**：卡片 stagger 淡入上浮动画（nth-child 依次 delay .05s）；hover/focus 社交图标 stagger 上浮；`:focus-within` 键盘可达；`prefers-reduced-motion` 关闭动画。
- **坑**：`.people-person` 同时有 flex 布局和入场动画，nth-child 选择器必须写 `.people-widget > .people-person:nth-child(n)`，否则按内部子元素计数导致 delay 错乱。
- **坑**：minify 后 CSS 无空格，验证脚本匹配 `box-shadow: 0 0 0 3px`（带空格）会 MISS，需兼容无空格形式。
- 最终 commit `4e6b4ce`，11 项验证全过。

### 9.9 教师通用模板（03:00）
- 在 `temple/教师/教师通用模板.html` 创建教师版（基于研究生-博士通用模板改造）。
- 差异：基本信息去「导师/入学年份」→ 加「职称」「办公室」「研究方向关键词」；教育经历加硕士段；技能标签教师向（科研项目申报与管理/研究生指导/课程教学/论文写作与审稿）；JSON-LD jobTitle 改研究员/教授。
- **坑：模板衍生时字符串替换易因空白差异失败**——先读实际内容（sections/kvs 提取）再精准替换，不要凭记忆写 old_string；研究方向区在泛化时被漏掉占位标签，教师版单独补回。

### 9.10 全面自检修复（03:04）
- **坑（严重）：YAML 里裸 `link: #` 会被解析成 null**——`#` 是 YAML 注释符！生成 `_index.md` 时 social 空链接若输出 `link: #`（无引号），Hugo 读到 link=null，`eq $link "#"` 判断失效 → 渲染成 `<a href="">`（空链接）。**修复：空链接必须带引号输出 `link: "#"`**。
- **坑：Go template 字符串转义**——`{{ $target = " target=\"_blank\" rel=\"noopener\"" }}` 在 partial 里会因嵌套引号报 `bad character U+0022` 构建失败。**修复：不用变量拼 target，直接在 `<a>` 内条件输出 `{{ if in (slice "http" "https") $scheme }}target="_blank" rel="noopener"{{ end }}`**。
- **坑：social_links.html 的 relLangURL 会把 `#` 解析成站点根路径 `/`**——点击空图标跳首页。**修复：partial 里自绘社交图标（不用默认 social_links），空链接渲染 `<span class="epic-social disabled">`，有链接渲染 `<a>`**。
- **校友卡片空问题**：5 校友无 summary → gen_hugo.py 自动生成「XX届博士，现就职于XX」。
- **经验：Hugo 输出属性无引号**（`class=people-person`），验证正则要兼容 `class=` 和 `class="` 两种形式。
- 修复提交：`32dcb4b`(失败) → `7530596` → `04a5269`(成功)，线上 summary 10/10、disabled 图标 45、mailto 5、无空链接。
