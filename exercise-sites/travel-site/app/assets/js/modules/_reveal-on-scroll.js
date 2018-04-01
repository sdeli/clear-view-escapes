import $ from 'jquery';
import waypoints from '../../../../../../node_modules/waypoints/lib/noframework.waypoints.js';

class RevealOnScroll {

	constructor(els, offset){
		this.itemsToReveal = els;
		this.offcetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints(){
		var that = this
		this.itemsToReveal.each(function(index, item){
			new Waypoint({
				element: item,
				handler: function(){
					$(item).addClass("reveal-item--is-visible");
				},
				offset: that.offcetPercentage
			}) //Waypont

		}) //each
	} // createWayponts

} // class RevealOnScroll

export default RevealOnScroll;