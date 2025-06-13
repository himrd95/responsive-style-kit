import styled, { css, DefaultTheme } from "styled-components";
import { DIMENSION_TYPE, resolvedDimension } from "../utils/dimensions";

interface ResponsiveStyleProps {
  width?: number;
  height?: number;
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

interface ThemeProps {
  theme?: {
    scale?: "width" | "height";
  } & DefaultTheme;
}

export const createResponsiveStyle = (props: ResponsiveStyleProps) => css`
  ${props.width !== undefined && `width: ${resolvedDimension(DIMENSION_TYPE.HORIZONTAL, props.width)};`}
  ${props.height !== undefined && `height: ${resolvedDimension(DIMENSION_TYPE.VERTICAL, props.height)};`}
  ${props.fontSize !== undefined && `font-size: ${resolvedDimension(DIMENSION_TYPE.HORIZONTAL, props.fontSize)};`}
  
  /* Horizontal margins and paddings */
  ${props.marginLeft !== undefined && `margin-left: ${resolvedDimension(DIMENSION_TYPE.HORIZONTAL, props.marginLeft)};`}
  ${props.marginRight !== undefined && `margin-right: ${resolvedDimension(DIMENSION_TYPE.HORIZONTAL, props.marginRight)};`}
  ${props.paddingLeft !== undefined && `padding-left: ${resolvedDimension(DIMENSION_TYPE.HORIZONTAL, props.paddingLeft)};`}
  ${props.paddingRight !== undefined && `padding-right: ${resolvedDimension(DIMENSION_TYPE.HORIZONTAL, props.paddingRight)};`}
  
  /* Vertical margins and paddings */
  ${props.marginTop !== undefined && `margin-top: ${resolvedDimension(DIMENSION_TYPE.VERTICAL, props.marginTop)};`}
  ${props.marginBottom !== undefined && `margin-bottom: ${resolvedDimension(DIMENSION_TYPE.VERTICAL, props.marginBottom)};`}
  ${props.paddingTop !== undefined && `padding-top: ${resolvedDimension(DIMENSION_TYPE.VERTICAL, props.paddingTop)};`}
  ${props.paddingBottom !== undefined && `padding-bottom: ${resolvedDimension(DIMENSION_TYPE.VERTICAL, props.paddingBottom)};`}
`;

export const DynamicBox = styled.div<ResponsiveStyleProps & ThemeProps>`
  ${({ theme, ...props }) => createResponsiveStyle(props)}
`;
