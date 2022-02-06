import $ from 'jquery';
import velocity from 'velocity-animate';
import { add } from './modules/math';

const result = add(1, 2);

console.log(result);

$('body').append(result);
velocity($('h1'), 'fadeIn', { duration: 2000, loop: true });