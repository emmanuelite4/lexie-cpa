import { helper } from '@ember/component/helper';

function lt(args) {
  let [prop1, prop2] = args;
  return prop1 < prop2;
}

export default helper(lt);
