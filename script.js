var form = { 
    first: null,
    last: null,
    age: null,
    birthDate: null,
    eyecolor: null,
    eligble: function(self){
        if (this.age <= 13){
            return "too Young to drive, Give it a few more Years.";
            }
        else if(this.age > 13 && this.age < 18){
            return "not old enough for a full license but you are eligible for a Permit.";
            }
        else{
            return "eligible to Drive, you should take the Test.";
            }
        },
    results: function() {
         document.getElementById("text").innerHTML ="<h3>Hello " + this.first+ " " + this.last +", After Analyzing your information, We concluded You are " + this.eligble()+"</h3><h3>Thank You for Taking the Survey</h3>";
    }
    
    };
    
document.getElementById('form').style=" display:none; ";
document.getElementById('finished').style=" display:none; ";


document.getElementById('start').addEventListener('click', function() {
    document.getElementById('begin').style="padding-top:5%;";
    fade("form", "start",300);
});

document.getElementById('end').addEventListener('click', function() {
      var inputs = document.getElementById("drivingForm"); 
      
      form.first = inputs.firstName.value;
      form.last = inputs.lastName.value;
      form.age = inputs.age.value;
      form.birthDate = inputs.bDate.value;
      form.eyeColor = inputs.eyeColor.value;
      
      if(form.age < 13 || form.age > 99 || form.first === null || form.birthDate === null || form.age === null){
          }
      else{
          form.results();
          }
      fade("finished", "form", 200);
}); 
document.getElementById('restart').addEventListener('click', function() {
    document.getElementById('drivingForm').reset();
    fade("start", "finished", 0);
    document.getElementById('begin').style="padding-top:15%;";
    
});
function fade(fadeInId, fadeOutId, timer){
    setTimeout(function() {
            document.getElementById(fadeOutId).style="opacity:0;";
        }, timer);
    setTimeout(function() {
            document.getElementById(fadeOutId).style="display:none;";
        }, timer+1100);
    setTimeout(function() {
            document.getElementById(fadeInId).style="display:flex;";
        }, timer+1200);
    setTimeout(function() {
            document.getElementById(fadeInId).style="opacity:1";
        }, timer+1300);
    }
