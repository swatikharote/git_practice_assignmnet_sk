function prime(num){
	let flag = false;
	for(let i = 2;i<num;i++){
		if(num%i==0){
			flag = true;
		}
	}
	if(flag){
		console.log('');
	}else{
		console.log('Not Prime');
	}
}