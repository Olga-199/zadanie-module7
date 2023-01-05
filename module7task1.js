const user = {
	name: 'Olga',
	faymilia: 'Kozlova'
}; 

function db(usr) {
	for (let key in usr) {
		
		 if (usr.hasOwnProperty(key)) {

			console.log(`${key}: ${usr[key]}`); 
		};   
	 
	};
	
};
db(user);