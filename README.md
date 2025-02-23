
# 智能视频解析助手

📺 多平台视频解析工具 | 支持明暗主题切换 | 开箱即用

[Demo](https://jx.ddmm.cloudns.biz)

## 功能特性
- 🚀 支持抖音/B站/腾讯视频等主流平台
- 🌓 一键切换白天/黑夜模式
- ⚙️ 5+ 备用解析接口自由选择
- ⌨️ 支持回车键快捷解析
- 📱 响应式布局适配移动端
- 💾 自动记忆用户主题偏好

## 快速开始
1. 点击右上角「Use this template」按钮克隆仓库
2. 访问 [Vercel](https://vercel.com) 并导入仓库
3. 无需额外配置，自动完成部署

## 本地运行
```bash
# 通过Python快速启动
python3 -m http.server 8000

# 或使用serve包
npx serve
```

## 注意事项
1. 解析接口来自第三方服务，稳定性取决于接口提供方
2. 请遵守各视频平台的版权政策
3. 首次加载可能需要3-5秒初始化

## 部署架构
```
前端部署 -> Vercel Edge Network
       ↘
解析请求 -> 第三方解析接口
```

## 许可证
本项目基于 [MIT License](LICENSE) 开放使用
```

