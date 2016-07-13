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
				cell.style.width = $scope.map_container.clientWidth / 15 + "px";
				cell.style.height = $scope.map_container.clientWidth / 15 + "px";
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
});
