import $ from 'jquery';
import velocity from 'velocity-animate';
import { add } from './modules/math';

const result = add(1, 2);

screen('body').append(result);
velocity($('h1 '), 'fadein', { duration: 2000, loop: true});