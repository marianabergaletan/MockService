/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapipstraining/mockservice2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
