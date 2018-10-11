var actRes;

getActRes = () => {
    fetch("https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json")
    .then(data=>data.json())
    .then((data)=>{
        actRes = data;
    })
}

var teams = {
	1: "Russia",
	2: "Saudi Arabia",
	3: "Egypt",
	4: "Uruguay",
	5: "Portugal",
	6: "Spain",
	7: "Morocco",
	8: "Iran",
	9: "France",
	10: "Australia",
	11: "Peru",
	12: "Denmark",
	13: "Argentina",
	14: "Iceland",
	15: "Croatia",
	16: "Nigeria",
	17: "Brazil",
	18: "Switzerland",
	19: "Costa Rica",
	20: "Serbia",
	21: "Germany",
	22: "Mexico",
	23: "Sweden",
	24: "South Korea",
	25: "Belgium",
	26: "Panama",
	27: "Tunisia",
	28: "England",
	29: "Poland",
	30: "Senegal",
	31: "Colombia",
	32: "Japan"
}
