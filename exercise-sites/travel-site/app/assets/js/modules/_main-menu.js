import $ from 'jquery';

class MainMenu {

	constructor(){

		this.menuIcon = $('.site-header__menu-icon');
		this.menuIconMiddleBar = $('.site-header__menu-icon__bar-middle');
		this.menuContent = $('.site-header__menu-content');
		this.menuContentLi = $('.site-header__menu-content li');
		this.menuContentA = $('.site-header__menu-content a');
		this.siteheader = $('.site-header');
		this.events();
		
	}

	events(){

		this.menuIcon.click(this.toggleTheMenu.bind(this));

	}

	toggleTheMenu(){

		this.menuIcon.toggleClass("site-header__menu-icon--clicked");
		this.menuIconMiddleBar.toggleClass("menu-icon__middle-bar-clicked");
		this.menuContent.toggleClass("site-header__menu-content--open");
		this.menuContentLi.toggleClass("primary-nav__li--open");
		this.menuContentA.toggleClass("primary-nav__a--open");
		this.siteheader.toggleClass("site-header--background");

	}
}

export default MainMenu;