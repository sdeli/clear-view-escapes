import $ from 'jquery';					
import { MainMenu } from './modules/_main-menu.js';
import { FixedHeader } from './modules/_main-menu.js';
import RevealOnScroll from './modules/_reveal-on-scroll.js';


var mainMenu = new MainMenu();
var fixedHeader = new FixedHeader();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "85%");


