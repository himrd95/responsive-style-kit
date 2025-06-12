export declare enum DIMENSION_TYPE {
    HORIZONTAL = "HORIZONTAL",
    VERTICAL = "VERTICAL"
}
export declare function getViewportScale(): {
    scale: number;
    width: number;
    height: number;
};
export declare function resolveDimension(type: DIMENSION_TYPE, value: number): string;
export declare function useResponsiveScale(): {
    scale: number;
    width: number;
    height: number;
};
//# sourceMappingURL=useResponsiveScale.d.ts.map