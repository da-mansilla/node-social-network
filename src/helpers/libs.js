const helpers = {};

helpers.randomNumber = ()=>
{
	const possible = 'abcdefghijklmnñopqrstuvwxyz0123456789';
	var randomNumber = 0;
	for (let i = 0; i < 6; i++)
	{
		randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return randomNumber;
}
module.exports= helpers;