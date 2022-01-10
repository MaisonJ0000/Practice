import { chain, map } from 'lodash';

const a = [1];
const b = chain(a).map(r => r + 1).value();