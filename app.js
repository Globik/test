var express=require('express');
var path=require('path');
var app=express();
const mongoose=require("mongoose");
const dburl="mongodb://globi:globi@127.0.0.1:27017/admin?authSourse=globi";
const opts = {
	useNewUrlParser: true,
	//reconnectTries: Number.MAX_VALUE,
	//reconnectInterval: 500,
	connectTimeoutMS: 10000,
	 useUnifiedTopology: true 
	}
app.set('port',3000);
//app.use('static',express.static(path.join(__dirname,'./html')));
app.use(express.static('html'));
var server=app.listen(app.get('port'),function(){
var port=server.address().port;
console.log("soll on port: ", port);

mongoose.connect(dburl, opts).then(function(){
console.log('mongodb connected');	
}).catch(function(err){
	console.log('db err: ', err);
	});
});
// sudo docker build . --network host -t suka
//1ae23e905c4d
//6777e01dafa8
// 172.17.0.0
// sudo docker run -d -p 3000:3000 --network="host" suka 
// sudo docker stop 8ee94695abf1
