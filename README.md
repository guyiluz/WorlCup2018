# WorlCup2018
 # API for groups and teams :
 https://worldgns2018.herokuapp.com/groups
 
  # API for Users: 
Add new user :
Post a json to 
 https://worldgns2018.herokuapp.com/api/addUser

exmple:{"email":test@test.com,name:"Bob"}
*** Change res to userData
if user exist:

{
        newUser:false,
        id:id,
        userBet:[]
          }

if user is new:

{
        newUser:true,
        id:id,
          }

Get all the users :

https://worldgns2018.herokuapp.com/api/usersList



# Save user input results 



https://worldgns2018.herokuapp.com/api/setRes


exmple:{
	"id": "user id ec dfgds465f4g6erfg",
	"result": {
		"top16": [],
		"top8": [],
		"top4": [],
		"top2": [],
		"top1": "string"
}
}


123456








