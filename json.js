// 1.

var obj1 = {name :"Person 1", age: 5};
obj2 = {age:5, name: "Person 1"};

console.log( (obj1, obj2)) ;


var requests = new XMLHttpRequest()

// 2. and 3. used API given in session bcoz task api did not work

url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

requests.open("GET",url)
requests.send()
console.log(requests);
requests.onload = function(){
    var data = JSON.parse(requests.response);
    
     for(i=0;i<data.length;i++){
         console.log(data[i].name)
         console.log(data[i].region)
         console.log(data[i].subregion)
         console.log(data[i].population)
         console.log(data[i].flag)
     }
}

