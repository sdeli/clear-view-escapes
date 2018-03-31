import $ from 'jquery';

class MainMenu {

	constructor(){

		this.menuIcon = $('.site-header__menu-icon');
		this.events();
		
	}

	events(){

		this.menuIcon.click(this.toggleTheMenu.bind(this));

	}

	toggleTheMenu(){

		this.menuIcon.toggleClass("site-header__hide-menu-content--is-visible")

	}
}

export default MainMenu;