app.controller("map_ctrl", function($scope)
{
	$scope.init = function()
	{
		$scope.map_container = document.getElementById("map_container");
		$scope.logs = document.getElementById("logs");

		for (var y = 0; y < 15; ++y)
		{
			for (var x = 0; x < 15; ++x)
			{
				var cell = document.createElement("span");
				cell.className = "cell";
				cell.classList.add($scope.color_zone(x, y));
				cell.innerHTML = String.fromCharCode(65 + y) + x;
				cell.style.width = $scope.map_container.clientWidth / 15 + "px";
				cell.style.height = $scope.map_container.clientWidth / 15 + "px";
				cell.style.lineHeight = $scope.map_container.clientWidth / 15 + "px";
				$scope.map_container.appendChild(cell);
			}
		}
	}

	$scope.mousemove = function(x, y)
	{
		$scope.posx = Math.floor(x / $scope.map_container.clientWidth * 1500);
		$scope.posy = Math.floor(y / $scope.map_container.clientHeight * 1500);

		if (x < $scope.map_container.clientWidth - 100)
			$scope.logs.style.left = x + "px";
		else
			$scope.logs.style.left = x - $scope.logs.clientWidth + "px";

		if (y < $scope.map_container.clientHeight - 100)
			$scope.logs.style.top = y + 32 + "px";
		else
			$scope.logs.style.top = y - 32 - $scope.logs.clientHeight + "px";
	}

	$scope.enter = function()
	{
		$scope.logs.style.display = "block";
	}

	$scope.leave = function()
	{
		$scope.logs.style.display = "none";
	}

	$scope.toggle_grid = function()
	{
		if ($scope.grid)
			$scope.map_container.classList.add("grid");
		else
			$scope.map_container.classList.remove("grid");
	}

	$scope.toggle_positions = function()
	{
		if ($scope.positions)
			$scope.map_container.classList.add("positions");
		else
			$scope.map_container.classList.remove("positions");
	}

	$scope.toggle_territories = function()
	{
		if ($scope.territories)
			$scope.map_container.classList.add("territories");
		else
			$scope.map_container.classList.remove("territories");
	}

	$scope.toggle_locked = function()
	{
		if ($scope.locked)
			$scope.map_container.classList.add("locked");
		else
			$scope.map_container.classList.remove("locked");
	}

	$scope.color_zone = function(x, y)
	{
		if (y == 0 && x <= 7) return ("NW"); if (y == 0 && x >= 9) return ("NE");
		if (y == 1 && x <= 7) return ("NW"); if (y == 1 && x >= 9) return ("NE");
		if (y == 2 && x <= 7) return ("NW"); if (y == 2 && x >= 8) return ("NE");
		if (y == 3 && x <= 6) return ("NW"); if (y == 3 && x >= 9) return ("NE");
		if (y == 4 && x <= 6) return ("NW"); if (y == 4 && x >= 9) return ("NE");
		if (y == 5 && (x <= 4 || x == 6 || x == 7)) return ("NW"); if (y == 5 && x >= 8) return ("NE");
		if (y == 6 && x <= 2) return ("NW"); if (y == 6 && (x == 10 || x == 11)) return ("NE");

		if (y == 6 && (x == 3 || x == 4 || x == 5)) return ("SW");
		if (y == 7 && x <= 5) return ("SW");
		if (y == 8 && x <= 5) return ("SW"); if (y == 8 && x >= 6 && x <= 10) return ("SE");
		if (y == 9 && x <= 4) return ("SW"); if (y == 9 && x >= 6) return ("SE");
		if (y == 10 && x <= 5) return ("SW"); if (y == 10 && x >= 6) return ("SE");
		if (y == 11 && x <= 5) return ("SW"); if (y == 11 && x >= 6) return ("SE");
		if (y == 12 && x <= 5) return ("SW"); if (y == 12 && x >= 6) return ("SE");
		if (y == 13 && x <= 5) return ("SW"); if (y == 13 && x >= 6) return ("SE");
		if (y == 14 && x <= 5) return ("SW"); if (y == 14 && x >= 6) return ("SE");

		return ("locked");
	}
});
