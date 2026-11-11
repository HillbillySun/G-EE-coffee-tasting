# G-EE-coffee-tasting

一个用来写浮夸中文咖啡品鉴日记的 Codex Skill。给出一两个风味词，就能顺着同类风味和可能伴随的香气写出一篇约 550–850 字的日记。可以指定篇幅，也可以补充冲煮参数、温度变化、口感和余韵。

## 本地使用

用 Git 克隆仓库，或在 GitHub 仓库页面选择 **Code → Download ZIP** 后解压。仓库自带 `.agents/skills` 目录，用 Codex 打开仓库根目录即可在该项目里使用。私有仓库的下载和克隆需要仓库访问权限。

### 在所有 Codex 项目中使用

在下载后的仓库根目录运行下面的命令。更新时拉取或下载新版，再执行一次。

**macOS / Linux**

```sh
target="$HOME/.agents/skills/g-ee-coffee-tasting"
mkdir -p "$target" && cp -R .agents/skills/g-ee-coffee-tasting/. "$target/"
```

**Windows PowerShell**

```powershell
$target = Join-Path $HOME '.agents/skills/g-ee-coffee-tasting'
New-Item -ItemType Directory -Force -Path $target | Out-Null
Copy-Item -Path '.agents/skills/g-ee-coffee-tasting/*' -Destination $target -Recurse -Force
```

## 调用示例

```text
用 $g-ee-coffee-tasting 写这支豆子的品鉴日记。巴拿马水洗瑰夏，茉莉花、麝香葡萄、白桃、白茶、蜜橘。写得浮夸一点。
```

这个 Skill 由 Markdown 指令和示例组成，可以直接在本地 Codex 使用，无需另外安装依赖。

[Codex 本地 Skill 文档](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills)
