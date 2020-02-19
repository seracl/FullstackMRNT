
const fs = require("fs");
const path = require('../util/path');

const FetchStream = require("fetch").FetchStream;

const URL = "http://api.scb.se/OV0104/v1/doris/en/ssd/";

const fetch = new FetchStream(URL);

exports.getData = (req, res, next) => {
	fetch.on("data", function (body) {
		let parseBody = JSON.parse(body);
		res.status(200).send({parseBody});		
	});
	
};
