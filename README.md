# 📦 responsive-style-kit

A tiny utility toolkit for responsive React apps using `styled-components`. It provides viewport-based scaling utilities (like `vw`/`vh` but smarter) to make your UI automatically adapt to different screen sizes without media queries.

## ✨ Features

- ✅ Dynamic scaling of width, height, fontSize, margin, padding, etc.
- 🎯 Designed for use with `styled-components` or inline styles
- ⚛️ Comes with a `useResponsiveSize` React hook
- 🌐 Based on a customizable base design resolution (default: 360×722)
- 🎨 Theme integration ready

---

## 📥 Installation

```bash
npm install responsive-style-kit --legacy-peer-deps
```

> `styled-components` and `react` must be installed in your project. The package supports `styled-components@6` and `react@18+`.

---

## ⚙️ How It Works

The package uses a base design resolution (360×722 by default) and scales your values based on the current viewport dimensions. This works similarly to `vw/vh` but gives you fine-tuned control with pixel-based units.

---

## 📚 Usage

### 1. React Hook: `useResponsiveSize`

```tsx
import { useResponsiveSize } from 'responsive-style-kit';

const MyBox = () => {
  const { width, height, fontSize } = useResponsiveSize({
    width: 200,
    height: 100,
    fontSize: 16
  });

  return (
    <div style={{ width, height, fontSize, background: '#eee' }}>
      Responsive Box
    </div>
  );
};
```

### 2. Styled Components Utility: `dynamicSize`

```tsx
import styled from 'styled-components';
import { dynamicSize } from 'responsive-style-kit';

const Card = styled.div`
  width: ${dynamicSize(300)};
  height: ${dynamicSize(150)};
  font-size: ${dynamicSize(18)};
  padding: ${dynamicSize(16)};
  border-radius: ${dynamicSize(12)};
  background-color: #fafafa;
`;
```

> 💡 `dynamicSize(value)` returns a CSS value that auto-scales based on viewport size.

---

## 🎨 Theming (Optional)

If you're using `ThemeProvider`, you can inject `dynamicSize` into your styled-components theme:

```tsx
// theme.ts
import { dynamicSize } from 'responsive-style-kit';

export const theme = {
  spacing: {
    sm: dynamicSize(8),
    md: dynamicSize(16),
    lg: dynamicSize(24)
  },
  fontSizes: {
    body: dynamicSize(14),
    heading: dynamicSize(20)
  }
};
```

```tsx
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.heading};
`;
```

---

## 🧪 Local Development

To run and test locally (if you've cloned the repo):

```bash
npm install
npm run dev
```

Or to build the library:

```bash
npm run build
```

---

## 📦 Publishing (Maintainers Only)

To publish an update to npm:

```bash
npm version patch|minor|major
npm publish
```

---

## 🛠 Base Dimensions

The default base design dimensions are:

- **Width**: 360px
- **Height**: 722px

You can customize this in a future version. (Feature request welcome!)

---

## 🤝 Contributing

Feel free to submit issues or open pull requests for improvements, examples, or docs.

---

## 📝 License

MIT License © 2025 [himrd95](https://github.com/himrd95)

---

## 📎 Related

- [styled-components](https://styled-components.com)
- [react](https://reactjs.org)
