
/* The link to the model (database) is stated here at the beggiing and its functionality implemented as part of the controllers */
const fetchURL = require("fetch").fetchUrl;
const FetchStream = require("fetch").FetchStream;

const URL = "http://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0101/";
const fetch = new FetchStream(URL);

exports.getData = (req, res, next) => {
	fetch.on("data", function (body) {
		let parseBody = JSON.parse(body);
		let oneVar = parseBody[0]["text"];
		//res.status(200).render(parseBody);
		//res.status(200).render(body);
    res.status(200).send({oneVar});
	});
	
};
