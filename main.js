$.validator.addMethod( "noWhiteSpace", function( value, element ) {
	return this.optional( element )
	|| /^\S+$/i.test( value );
}, "You can't use white spaces" );

$.validator.addMethod( "lettersOnly", function( value, element ) {
	return this.optional( element ) 
	|| /^[a-z]+$/i.test( value );
}, "Letters only please" );

$.validator.addMethod('strongIp', function(value) {
	var ip="^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
    "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
    "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
    "([01]?\\d\\d?|2[0-4]\\d|25[0-5])$";
	
	return value.match(ip);
}, 'Invalid IP address');

$.validator.addMethod(
    "customDateValidator",
    function(value, element) {
        // put your own logic here, this is just a (crappy) example
        return value.match(/^\d\d?\.\d\d?\.\d\d\d\d$/);
    },
    "Please enter a date in the format dd.mm.yyyy."
);

$ (function() {
	$('#formSection').validate({
		
		rules: {
			name: {
				required:true,
				noWhiteSpace:true,
				lettersOnly:true,
				
			},
			email: {
				required:true,
				email:true,
			},
			date: {
				required:true,
				customDateValidator:true,
			},
			ip:{
				required:true,
				strongIp:true,
			}
		},
		messages: {
			name: {
				required:"You must fill this field",
				lettersOnly:"You can use letters only",
			},
			ip: {
				required:"You must fill this field",
				strongIp:"IP is invalid. Write as the example: '192.168.0.3.'"
			}
		}
	});
});

