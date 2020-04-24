// Some browsers are still in the process of updating to support
// the standards for Web Components (custom elements, shadow dom, etc).
// In the mean time, polyfills simulate the missing browser capabilities
// as closely as possible. Right now for example, only new Edge (v. >= 79)
// that support web components. So old Edge that most user have,
// can't run web component.
// https://caniuse.com/#search=webcomponents
// https://www.webcomponents.org/polyfills
import '@webcomponents/webcomponentsjs';
