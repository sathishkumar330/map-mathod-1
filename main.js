const sathish=[
 {
	 first_name:'mike',
	 last_name:'sheridan'
 },
 {
	 first_name:'tim',
	 last_name:'lee'
 },
 {
	 first_name:'john',
	 last_name:'carte'
 }     
 ];
  var b=[];
sathish.map(function(a){
	b.push(`You Name ${a.first_name} ${a.last_name}`);
 
 
}	
 
 );
  console.log(b);