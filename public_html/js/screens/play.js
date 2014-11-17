game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;
                
                me.levelDirector.loadLevel("level04");

                var player = me.pool.pull("Mario", 0, 420, {});
                me.game.world.addChild(player, 3);
                
                me.input.bindKey(me.input.KEY.RIGHT, "right");
                /*me.input.bindKey(me.input.KEY.LEFT, "left");*/

		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
});
