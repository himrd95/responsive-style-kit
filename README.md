# 📦 responsive-style-kit

A TypeScript-based utility toolkit for responsive React apps. It provides viewport-based scaling utilities to make your UI automatically adapt to different screen sizes without media queries. Works with both styled-components and vanilla React.

## ✨ Features

- ✅ Dynamic scaling of width, height, fontSize, and directional spacing (margins/padding)
- 🎯 Built with TypeScript
- ⚛️ Includes `useResponsive` and `useResponsiveDimension` hooks
- 🌐 Based on a customizable base design resolution (default: 360×722)
- 🎨 Optional styled-components integration
- 🔄 Automatic window resize handling with debouncing
- 🎭 Flexible element type support with `as` prop
- 🎨 Shared theme context for consistent scaling
- ⚡️ Optimized performance with memoization
- 🌐 SSR support
- 📏 Smart vertical/horizontal scaling for margins and padding

---

## 📥 Installation

```bash
npm install responsive-style-kit
```

> For styled-components integration, you'll need to install `styled-components@6` separately.

---

## ⚙️ How It Works

The package uses a base design resolution (360×722 by default) and scales your values based on the current viewport dimensions. It provides both a React context for global scaling and utility functions for direct usage. All components and hooks automatically handle window resizing with debouncing for optimal performance.

The scaling is direction-aware:
- Horizontal dimensions (width, left/right margins/padding) scale based on viewport width
- Vertical dimensions (height, top/bottom margins/padding) scale based on viewport height
- Font sizes scale based on viewport width by default

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

### 2. Using with Vanilla React

```tsx
import { useResponsiveDimension, DIMENSION_TYPE } from 'responsive-style-kit';

const MyComponent = () => {
  const width = useResponsiveDimension(DIMENSION_TYPE.HORIZONTAL, 200);
  const height = useResponsiveDimension(DIMENSION_TYPE.VERTICAL, 100);
  const fontSize = useResponsiveDimension(DIMENSION_TYPE.HORIZONTAL, 16);

  return (
    <div 
      style={{ 
        width,
        height,
        fontSize
      }}
    >
      Responsive Content
    </div>
  );
};
```

### 3. Using with Styled-Components

```tsx
import { responsiveElement } from 'responsive-style-kit';
import styled from 'styled-components';

// Basic usage
const Container = styled(responsiveElement)`
  background: #f0f0f0;
`;

// With custom element type and directional spacing
const Card = styled(responsiveElement).attrs({ as: 'article' })`
  background: white;
  border-radius: 8px;
`;

const MyComponent = () => {
  return (
    <>
      <Container 
        width={200} 
        height={100}
        marginLeft={20}
        marginRight={20}
        marginTop={16}
        marginBottom={16}
      >
        Responsive Box
      </Container>
      <Card 
        width={300}
        height={200}
        paddingLeft={24}
        paddingRight={24}
        paddingTop={32}
        paddingBottom={32}
        fontSize={14}
      >
        Card Content
      </Card>
    </>
  );
};
```

### 4. Using the Responsive Hook Directly

```tsx
import { useResponsive } from 'responsive-style-kit';

const MyComponent = () => {
  const { scaleWidth, scaleHeight, vw, vh } = useResponsive();
  
  return (
    <div style={{
      width: 200 * scaleWidth,
      height: 100 * scaleHeight,
      marginTop: 16 * scaleHeight,
      marginLeft: 20 * scaleWidth
    }}>
      Responsive Content
    </div>
  );
};
```

### 5. Custom Base Viewport

```tsx
import { ResponsiveThemeProvider } from 'responsive-style-kit';

const customViewport = {
  width: 375,  // iPhone X width
  height: 812  // iPhone X height
};

const App = () => (
  <ResponsiveThemeProvider viewport={customViewport}>
    <YourApp />
  </ResponsiveThemeProvider>
);
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

These values can be customized through the `ResponsiveThemeProvider` props.

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

<!-- START_NPM_STATS -->
<!-- This section is updated automatically every Monday -->
![npm](https://img.shields.io/npm/dw/responsive-style-kit?label=weekly%20downloads)
<!-- END_NPM_STATS -->