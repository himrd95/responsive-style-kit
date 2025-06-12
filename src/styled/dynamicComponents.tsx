import styled, { css, DefaultTheme } from "styled-components";
import { useResponsiveContext } from "../theme/ResponsiveThemeProvider";
import { scaleValue } from "../utils/scale";

interface ResponsiveStyleProps {
  width?: number;
  height?: number;
  fontSize?: number;
  margin?: number;
  padding?: number;
}

interface ThemeProps {
  theme?: {
    scale?: "width" | "height";
  } & DefaultTheme;
}

export const createResponsiveStyle = (props: ResponsiveStyleProps, scale: number) => css`
  ${props.width !== undefined && `width: ${scaleValue(props.width, scale)}px;`}
  ${props.height !== undefined && `height: ${scaleValue(props.height, scale)}px;`}
  ${props.fontSize !== undefined && `font-size: ${scaleValue(props.fontSize, scale)}px;`}
  ${props.margin !== undefined && `margin: ${scaleValue(props.margin, scale)}px;`}
  ${props.padding !== undefined && `padding: ${scaleValue(props.padding, scale)}px;`}
`;

export const DynamicBox = styled.div<ResponsiveStyleProps & ThemeProps>`
  ${({ theme, ...props }) => {
    const responsive = useResponsiveContext();
    const scale = theme?.scale === "height" ? responsive.scaleHeight : responsive.scaleWidth;
    return createResponsiveStyle(props, scale);
  }}
`;
