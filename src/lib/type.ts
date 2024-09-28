declare module 'react-typed' {
    import { Component } from 'react';
  
    interface TypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      loop?: boolean;
    }
  
    class Typed extends Component<TypedProps> {}
  
    export default Typed;
  }