var Fireworks = function(){};

Fireworks.prototype.starFirework = function(color){};


(function(){
	
	var _buildEffect = function(type, color){
		builder = org.bukkit.FireworkEffect.builder();

		//need to invoke with method this way because with is a javascript keyword.
		builder["with"](type);
		builder["withColor"](org.bukkit.Color.ORANGE);

		return builder.build();	
	};
	var _blastFireworkWithEffectAtMousePos = function(fireworkEffect){
		var craftLocation = getPlayerPos();
		var worldName = craftLocation.world.name;
		var mc_world = org.bukkit.Bukkit.getWorld(worldName);
		
		var bukkit_location = new org.bukkit.Location(mc_world, 
			craftLocation.x, 
			craftLocation.y,
			craftLocation.z,
			craftLocation.yaw,
			craftLocation.pitch);

		//create a vector with magnitude 30 in the direction the player was facing.
		var direction_as_vector = bukkit_location.getDirection().normalize().multiply(30);
		
		//add 30 unit vector players location to get point 30 units away that the player is facing.
		bukkit_location.add(direction_as_vector);

		var firework = mc_world.spawn(bukkit_location, org.bukkit.entity.Firework);
		var data = firework.getFireworkMeta();
		data.addEffect(fireworkEffect);
		data.setPower(1);
		firework.setFireworkMeta(data);
	};
	
	var _starFirework = function(color){
		effect = _buildEffect(org.bukkit.FireworkEffect.Type.STAR);
		_blastFireworkWithEffectAtMousePos(effect);
	};

	Fireworks.prototype.starFirework = _starFirework;

})();