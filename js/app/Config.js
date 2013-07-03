define([//
//
], function() {

	var Config = function() {
		/*
		 * insert the instagram api url here.
		 * https://api.instagram.com/v1/users/self/feed/
		 * http://skolion-services.dev.futurecom.ch/api/instagram/
		 */
		var apiURL = "https://api.instagram.com/v1/users/self/feed/";

		/*-------------------------*/

		/*
		 * insert the required access token. you can get a valid access token
		 * here: http://instagram.com/developer/authentication
		 */
		var accessToken = "414294402.953c6f7.cde2dd40e16b4bafa48812d3abea429e";

		/*-------------------------*/

		/*
		 * max number of items to display before it loops
		 */
		var maxItems = 150;

		/*-------------------------*/

		/*
		 * display time of one element
		 */
		var refreshTime = 8;

		/*------------------------------------------------------*/

		var getApiURL = function() {
			return apiURL;
		};

		var getAccessToken = function() {
			return accessToken;
		};

		/*------------------------------------------------------*/

		var getMaxItems = function() {
			return maxItems;
		};

		var getRefreshTime = function() {
			return refreshTime;
		};

		/*------------------------------------------------------*/
		// Return
		return {
			getApiURL : getApiURL,
			getAccessToken : getAccessToken,
			getMaxItems : getMaxItems,
			getRefreshTime : getRefreshTime
		};
	};

	/*------------------------------------------------------*/
	// Return
	return new Config();
});