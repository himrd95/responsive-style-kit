# 📦 responsive-style-kit

A TypeScript-based utility toolkit for responsive React apps using `styled-components`. It provides viewport-based scaling utilities to make your UI automatically adapt to different screen sizes without media queries.

## ✨ Features

- ✅ Dynamic scaling of width, height, fontSize, margin, padding
- 🎯 Built with TypeScript and `styled-components`
- ⚛️ Includes `useResponsive` hook for viewport-based scaling
- 🌐 Based on a customizable base design resolution (default: 360×722)
- 🎨 Theme integration with styled-components
- 🔄 Automatic window resize handling

---

## 📥 Installation

```bash
npm install responsive-style-kit
```

> `styled-components` and `react` must be installed in your project. The package supports `styled-components@6` and `react@18+`.

---

## ⚙️ How It Works

The package uses a base design resolution (360×722 by default) and scales your values based on the current viewport dimensions. It provides both a React context for global scaling and utility functions for direct usage.

---

## 📚 Usage

### 1. Setup the Provider

```tsx
import { ResponsiveThemeProvider } from 'responsive-style-kit';

const App = () => {
  return (
    <ResponsiveThemeProvider>
      <YourApp />
    </ResponsiveThemeProvider>
  );
};
```

### 2. Using the DynamicBox Component

```tsx
import { DynamicBox } from 'responsive-style-kit';

const MyComponent = () => {
  return (
    <DynamicBox
      width={200}
      height={100}
      fontSize={16}
      margin={20}
      padding={16}
    >
      Responsive Content
    </DynamicBox>
  );
};
```

### 3. Using the Responsive Hook

```tsx
import { useResponsiveContext } from 'responsive-style-kit';

const MyComponent = () => {
  const { scaleWidth, scaleHeight, vw, vh } = useResponsiveContext();
  
  // Use the scaling values as needed
  return (
    <div style={{
      width: 200 * scaleWidth,
      height: 100 * scaleHeight
    }}>
      Responsive Content
    </div>
  );
};
```

### 4. Custom Styled Components

```tsx
import styled from 'styled-components';
import { useResponsiveContext } from 'responsive-style-kit';

const CustomBox = styled.div`
  ${({ theme }) => {
    const responsive = useResponsiveContext();
    const scale = theme?.scale === "height" ? responsive.scaleHeight : responsive.scaleWidth;
    return `
      width: ${200 * scale}px;
      height: ${100 * scale}px;
    `;
  }}
`;
```

---

## 🎨 Theming

The package integrates with styled-components theming system. You can specify whether to scale based on width or height:

```tsx
const theme = {
  scale: "width" // or "height"
};

const App = () => (
  <ThemeProvider theme={theme}>
    <ResponsiveThemeProvider>
      <YourApp />
    </ResponsiveThemeProvider>
  </ThemeProvider>
);
```

---

## 🛠 Base Dimensions

The default base design dimensions are:

- **Width**: 360px
- **Height**: 722px

These values are defined in the `useResponsive` hook and can be modified as needed.

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
