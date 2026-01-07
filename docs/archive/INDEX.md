# Archive - Demo 页面索引

这个目录包含了各种 demo 页面和原型，与 Exchange 功能无关，已归档以便后续查找。

## 📁 归档内容

### Portfolio - 品牌设计作品集
**路径**: `archive/portfolio/`  
**入口**: [index.html](../../archive/portfolio/index.html)  
**描述**: 品牌设计机构的作品集展示页面，包含服务介绍、项目展示、客户评价等模块。  
**技术**: 纯 HTML + CSS  
**运行**: 直接在浏览器打开 `index.html`

**文件**:
- `index.html` - 主页面
- `styles.css` - 样式表

---

### Rocket Landing - 太空旅行商业化
**路径**: `archive/rocket/`  
**入口**: [rocket-landing.html](../../archive/rocket/rocket-landing.html)  
**描述**: NovaLaunch 太空旅行公司的落地页，展示火箭发射、轨道巡航、载荷服务等。  
**技术**: HTML + CSS（Montserrat 字体）  
**运行**: 直接在浏览器打开 `rocket-landing.html`

**文件**:
- `rocket-landing.html` - 主页面
- `rocket-style.css` - 样式表

---

### Bookshop - 在线书店克隆
**路径**: `archive/bookshop/`  
**入口**: [bookshop-clone.html](../../archive/bookshop/bookshop-clone.html)  
**描述**: Bookshop.org 风格的电子书商店界面，包含搜索、分类、购物车等功能。  
**技术**: HTML + CSS（IBM Plex 字体）  
**运行**: 直接在浏览器打开 `bookshop-clone.html`

**文件**:
- `bookshop-clone.html` - 主页面
- `bookshop-style.css` - 样式表

---

### Travel App - 旅行应用原型
**路径**: `archive/travel/`  
**入口**: [travel-app.html](../../archive/travel/travel-app.html)  
**描述**: 移动端旅行应用原型，使用 React + Tailwind CSS 构建。  
**技术**: React 18 + Tailwind CSS（CDN）  
**运行**: 直接在浏览器打开 `travel-app.html`

**特性**:
- 响应式移动端设计
- 模拟手机容器（414px 宽度）
- 目的地浏览、搜索等功能

**文件**:
- `travel-app.html` - 单文件应用（内嵌 React）

---

### Wallhaven - 图片浏览器
**路径**: `archive/wallhaven/`  
**入口**: [wallhaven-view.html](../../archive/wallhaven/wallhaven-view.html)  
**描述**: Wallhaven 风格的图片浏览界面，支持瀑布流布局。  
**技术**: HTML + React JSX  
**运行**: 直接在浏览器打开 `wallhaven-view.html`

**文件**:
- `wallhaven-view.html` - 主页面
- `WallhavenImageView.jsx` - React 组件（可能需要构建）

---

### Misc - 其他页面
**路径**: `archive/misc/`  
**描述**: 其他独立的测试页面或原型。

**文件**:
- `index2.html` - 独立页面
- `index3.html` - 独立页面

---

## 🚀 快速启动

所有 HTML 页面都可以直接在浏览器中打开，无需构建或服务器：

```bash
# 方式 1: 直接双击 HTML 文件

# 方式 2: 使用本地服务器（推荐，避免 CORS 问题）
cd archive/portfolio
python3 -m http.server 8000
# 然后访问 http://localhost:8000/index.html
```

## 📝 注意事项

1. **相对路径**: 所有 CSS 引用都使用相对路径，移动后仍可正常工作
2. **CDN 依赖**: 部分页面使用 CDN 加载字体、图标、React 等，需要网络连接
3. **图片资源**: 部分页面引用外部图片 URL（Supabase、CryptoLogos 等）
4. **浏览器兼容**: 建议使用现代浏览器（Chrome、Firefox、Safari）

## 🔗 相关链接

- [Exchange 功能文档](../exchange/README.md) - 主要业务功能
- [项目文档首页](../README.md) - 文档导航
- [根目录](../../) - 返回项目根目录

---

**归档日期**: 2026-01-07  
**归档原因**: 与 Exchange 核心功能无关，整理项目结构

