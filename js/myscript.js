function setVisibility(id) {
	if(document.getElementById('mouseRegion').value=='Hide Account Details'){
		document.getElementById('mouseRegion').value = 'Show Account Details';
		document.getElementById(id).style.display = 'none';
	}else{
		document.getElementById('mouseRegion').value = 'Hide Account Details';
		document.getElementById(id).style.display = 'inline';
		}
	}

// Form validation code will come here.
function validate()
    {
      
         if( document.paymentForm.CardName.value == "" )
         {
            alert( "Please provide your name!" );
            document.paymentForm.CardName.focus() ;
            return false;
         }
         
         if( document.paymentForm.CardType.value == "-1" )
         {
            alert( "Please provide your card type!" );
            return false;
         }

         if( document.paymentForm.CardNumber.value == "" ||
         isNaN( document.paymentForm.CardNumber.value ) ||
         document.paymentForm.CardNumber.value.length != 16 )
         {
            alert( "Please provide your card number which is 16 digit number." );
            document.paymentForm.CardNumber.focus() ;
            return false;
         }

        if( document.paymentForm.ExpireMonth.value == "-1" )
         {
            alert( "Please provide expire month!" );
            return false;
         }

        if( document.paymentForm.ExpireYear.value == "-1" )
         {
            alert( "Please provide expire year!" );
            return false;
         }

        if( document.paymentForm.CVVNumber.value == "" ||
         isNaN( document.paymentForm.CVVNumber.value ) ||
         document.paymentForm.CVVNumber.value.length != 3)
         {
            alert( "Please provide your CVV number which is 3 digit number." );
            document.paymentForm.CVVNumber.focus() ;
            return false;
         }
         
        return( true );
      }
   //-->

   
