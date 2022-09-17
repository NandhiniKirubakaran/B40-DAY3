var json = [
    {
      "id": 001,
      "first_name": "Nandhini",
      "last_name": "Kirubakaran",
      "email": "knaphasri@gmail.com"
},
{
      "id": 002,
      "first_name": "Kamal",
      "last_name": "Karthik",
      "email": "kamal123@gmail.com"
}];
//for loop
for (var i=0; i<json.length; i++){
    var obj = json[i];
    console.log(obj.id);
    console.log(obj.first_name);
    console.log(obj.last_name);
    console.log(obj.email);
}
//for Each
json.forEach(function(obj) {
    console.log(obj.first_name);
});
//for in
for (var key in json){
    if (json.hasOwnProperty(key)){
        console.log(json[key].id);
    }
}
//for of
let text = "";
for (let x of json[key].email){
    text += x;
}
    console.log(text);

