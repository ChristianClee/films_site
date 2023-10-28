/// <reference types="react-scripts" />
import type * as CSS from 'csstype';


declare module 'csstype' {
  interface Properties {
    '--starFill'?: string;
    '--sizeSrar'?: string;
  }
}
