import AnimationEnd from "./directive"

const install = function(Vue) {
  Vue.directive('animationEnd', AnimationEnd);
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install); // eslint-disable-line
  window.$animationEnd = AnimationEnd;
}

AnimationEnd.install = install;
export default AnimationEnd;