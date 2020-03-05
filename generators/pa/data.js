//Line Listing
var SHL = {name:"深卡綫 Shimakaze Line ", short:"SHL", color:"dark_aqua"};
var SOL = {name:"飛渡外環綫 Stagecoach Outer Loop ", short:"SOL", color:"dark_red"};
var REL = {name:"樂園綫 Resort Line ", short:"REL", color:"light_purple"};
var KOL = {name:"越海綫 Koshiumi Line ", short:"KOL", color:"red"};
var CSL = {name:"環海綫 Coastal Line ", short:"CSL", color:"blue"};
var GCL = {name:"飛渡田園綫 Garden City Line ", short:"GCL", color:"green"};
var EWL = {name:"東西綫 East West Line", short:"EWL", color:"green"};
var CDL = {name:"張底綫 Cheung Dai Line", short:"CDL", color:"gold"};
var WHL = {name:"黃浩廉綫 Wong Ho Lim Line", short:"WHL", color:"dark_green"};
var NEX = {name:"新手特快 Newcommer's Express", short:"NEX", color:"blue"};
var NAL = {name:"南埔綫 Nampoa Line", short:"NPL", color:"dark_purple"};
var NSL = {name:"南北綫 North South Line", short:"NSL", color:"aqua"};
var PRL = {name:"第一綫 Primum Line", short:"PRL", color:"red"};
var HOL = {name:"北陸綫 Hokuriku Line", short:"HOL", color:"dark_purple"};

//Station Listing
var STA = {name:"飛渡市 Stagecoach", interchange:[NSL,PRL,NAL,NEX,CDL,SHL]};
var DAK = {name:"達卡 Dat Ka", interchange:[CDL,WHL,EWL,NEX,SHL]};
var SHI = {name:"深卡島 Shimakaze", interchange:[]};
var SHC = {name:"深卡城 Shimakaze City", interchange:[SOL,REL,SHL,KOL]};
var SHN = {name:"沙草灣 Savanna Bay", interchange:[SOL,KOL,SHL]};
var SBC = {name:"技術城 SBC", interchange:[]};
var SHG = {name:"深卡關閘 Shimakaze Gateway", interchange:[CSL,HOL,SHL]};
var HOY = {name:"何遙 Ho Yiu", interchange:[GCL,SHL]};
var OMT = {name:"奄列城 Omevarte Town", interchange:[CDL,KOL]};
var CHY = {name:"政逸 Ching Yat", interchange:[CSL,CDL,KOL]};
var ARA = {name:"荒島 Arashima", interchange:[SOL,HOL,KOL]};

SHL.stations = [STA,DAK,SHI,SHC,SHN,SBC,SHG];
KOL.stations = [OMT,CHY,SHC,SHN,ARA];
