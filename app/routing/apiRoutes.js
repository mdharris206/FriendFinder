
var friendsData = require("../data/friends");
console.log(friendsData);

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {
    console.log(req.body)
    /*
      Take current user scores array
      Loop through the other existing users scores array
      Calculate the difference each time
      Store that difference value 
      Compare difference value for lowest and replace if lower
      return the lowest value for best match
      send that back to display on page      
    */
    let scores = req.body.scores;
    let minDiff = 40;
    let match;
    
    for(let i =0; i < friendsData.length; i++ ){
        console.log(friendsData[i].scores);
        let arraySum = 0; 

      for(let j = 0; j < friendsData[i].scores.length; j++ ){

        arraySum += friendsData[i].scores[j];
        
        console.log(
          friendsData[i].scores[j]);
      };
      if(minDiff > arraySum){
        minDiff = arraySum;
        match = friendsData[i];
      };
    };

    res.send(match.name +" "+match.photo);

  });

 
};
