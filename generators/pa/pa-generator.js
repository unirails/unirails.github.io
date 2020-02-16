let STA = "飛渡市 Stagecoach";
let DAK= "達卡 Dat Ka";
let SHI = "深卡島 Shimakaze";
let SHC = "深卡城 Shimakaze City";
let SHN = "沙草灣 Savanna Bay";
let SBC = "技術城 SBC";
let SHG = "深卡關閘 Shimakaze Gateway";
let HOY = "何遙 Ho Yiu";
let SHL = "深卡綫 Shimakaze Line"
let OHA = "梁主席萬歲 Oleung Hit Airplane"

let shlStations = [STA,DAK,SHI,SHC,SHN,SBC,SHG,HOY,OHA];
let shlStationCount = shlStations.length;
// let stationListDisplay = document.getElementById("stationList").innerHTML

for (let i = 0; i < shlStationCount; i++) {
  console.log(shlStations[i]);
  let existingHTML = document.getElementById("stationList").innerHTML;
  let stationNameHeader = "<h2>" + shlStations[i] + "</h2>";
  if (shlStations[i-1] === null) {
    console.log("no previous station");
  };
  let announcementString = '<div class="form-group"><textarea class="form-control"rows="5" readonly>\ntellraw @a ["",{"text":"&bsol;n"},{"text":"----=[ ","bold":true,"color":"gold"},{"text":"' + SHL + '","color":"red"},{"text":" ]=----","bold":true,"color":"gold"},{"text":"&bsol;n"},{"text":"▽ ","color":"dark_gray"},{"text":"' + shlStations[i-1] + '","color":"dark_gray"},{"text":"&bsol;n"},{"text":"▼ ","color":"green"},{"text":"' + shlStations[i] +'","bold":true,"color":"yellow"},{"text":"&bsol;n"},{"text":"▽ ","color":"green"},{"text":"' + shlStations[i+1] + '","color":"gray"},{"text":"&bsol;n"},{"text":"▽ ","color":"green"},{"text":"' + shlStations[i+2] + '","color":"gray"},{"text":"&bsol;n"}]</textarea></div>'
  document.getElementById("stationList").innerHTML = existingHTML + stationNameHeader + announcementString;
}
