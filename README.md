# G-EE-coffee-tasting

一个用来写浮夸中文咖啡品鉴日记的 Codex Skill。给出一两个风味词，就能顺着同类风味和可能伴随的香气写出一篇约 550–850 字的日记。可以指定篇幅，也可以补充冲煮参数、温度变化、口感和余韵。

## 用 npm 安装

需要 Node.js 18 或更新版本，以及此私有仓库的读取权限。如果已用 GitHub CLI 登录，可以用 `gh auth setup-git` 让 Git 使用该登录。

一条命令安装到 Codex 的用户技能目录：

```sh
npx --yes --package="git+https://github.com/HillbillySun/G-EE-coffee-tasting.git" -- g-ee-coffee-tasting install
```

也可以先通过 npm 全局安装命令，再运行安装命令：

```sh
npm install -g "git+https://github.com/HillbillySun/G-EE-coffee-tasting.git"
g-ee-coffee-tasting install
```

默认安装到 `~/.agents/skills/g-ee-coffee-tasting`，供所有本地 Codex 项目使用。在项目根目录运行 `g-ee-coffee-tasting install --project` 可以只装给当前项目。更新时重新运行对应的 npm 安装和 Skill 安装命令。

已经克隆或下载这个仓库时，也可以直接用 Codex 打开仓库根目录。仓库自带项目级 Skill。

## 调用示例

```text
用 $g-ee-coffee-tasting 写这支豆子的品鉴日记。巴拿马水洗瑰夏，茉莉花、麝香葡萄、白桃、白茶、蜜橘。写得浮夸一点。
```

[Codex 本地 Skill 文档](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills)
