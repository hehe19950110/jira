import React, { ReactNode } from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

export class ErrorBoundary extends React.Component<React.PropsWithChildren<{fallbackRender:FallbackRender}>,{error: Error | null}> {   
// React.PropsWithChildren<{fallbackRender:FallbackRender}>,传入属性 是除了children以外所有的属性，即type PropsWithChildren<P> = P & { children?: ReactNode | undefined }; 
  
  state = { error: null};

  // 当ErrorBoundary的子组件抛出异常，这里会接收到并且调用，返回的值 会被赋给state
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}