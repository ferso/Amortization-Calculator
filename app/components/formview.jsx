import React from 'react';
export default class FormView extends React.Component{
	onBlurEvent(event) {
		// console.log(event.target.value);

		var iamount 	= document.getElementById('calcultaror-amount');
		var iperiods   = document.getElementById('calcultaror-periods');
		var irate   	= document.getElementById('calcultaror-rate');
		var iinterest  = document.getElementById('calcultaror-interest');
		var itotal     = document.getElementById('calcultaror-total');
		var imontly    = document.getElementById('calcultaror-monthly');

		var amount 	 = iamount.value.length  == 0 ? 0 : parseFloat(iamount.value);
		var periods  = iperiods.value.length == 0 ? 0 : parseFloat(iperiods.value);
		var rate  	 = irate.value.length    == 0 ? 0 : parseFloat(irate.value);

      //------------------------------------------------------------------------

        if( rate === 0 || rate === 0.0 ){

          var rate = 0;
          // nper = representa el número de pagos aún por hacerse en el préstamo
          var nper = periods;
          // pv   = refiere esencialmente al valor actual, que es esencialmente el monto principal pendiente, o monto sin interés, del préstamo.
          var pv   = amount;
          // fv   = el cual significa el valor futuro, que es la cantidad de dinero después de pagar el préstamo en su totalidad
          var fv   = 0;
          // type = simplemente especifica si los pagos vencen al principio o al final de un mes
          var type = 0;

          //------------------------------------------------------------------------

          // PMT Result
          var fe =  pv / periods;
          // total with financement
          var ft = pv;
          // interest total
          var ti = ft - pv;

        }else{

          // rate = representa la tasa de interés
          var rate = (( rate / 12 ) / 100);
          // nper = representa el número de pagos aún por hacerse en el préstamo
          var nper = periods;
          // pv   = refiere esencialmente al valor actual, que es esencialmente el monto principal pendiente, o monto sin interés, del préstamo.
          var pv   = amount;
          // fv   = el cual significa el valor futuro, que es la cantidad de dinero después de pagar el préstamo en su totalidad
          var fv   = 0;
          // type = simplemente especifica si los pagos vencen al principio o al final de un mes
          var type = 0;

          //------------------------------------------------------------------------

          // first factor
          var fi        = Math.pow((1+ rate) , nper) * rate;
          // second factor
          var fa        = Math.pow((1+ rate) , nper) - 1;
          // PMT Result
          var fe        = (pv * (fi / fa));
          // total with financement
          var ft = ( fe * nper );
          // interest total
          var ti = ft - pv;

        }

        //finals values
        var monthly_payment = parseFloat(fe);
        var interest        = parseFloat(ti);
        var total_financed  = parseFloat(amount) + parseFloat(interest);

        // console.log( {period:monthly_payment.toFixed(2), interest:interest.toFixed(2), total: total_financed.toFixed(2), rate:rate } );

        iinterest.value = interest.toFixed(2);
        itotal.value    = total_financed.toFixed(2)
        imontly.value   = monthly_payment.toFixed(2);
   }
   render(){
    return  <form action="">
	    <div className="row">
	    	<div className="col-md-4">
		    	<fieldset className="form-group">
		    		<label>Amount</label>
					<input type="text" id="calcultaror-amount" className="form-control" placeholder="0.00" onBlur={this.onBlurEvent} />
		    	</fieldset>
	    	</div>

	    	<div className="col-md-4">
		    	<fieldset className="form-group">
		    		<label>Months</label>
					<input type="text" id="calcultaror-periods" className="form-control" placeholder="0" onBlur={this.onBlurEvent} />
		    	</fieldset>
	    	</div>

	    	<div className="col-md-4">
		    	<fieldset className="form-group">
		    		<label>Rate</label>
					<input type="text" id="calcultaror-rate" className="form-control" placeholder="0.0%" onBlur={this.onBlurEvent} />
		    	</fieldset>
	    	</div>
	    </div>
	    <div className="row">
		    	<div className="col-md-4">
			    	<fieldset className="form-group">
			    		<label>Total Interest</label>
						<input type="text" id="calcultaror-interest" className="form-control" placeholder="0.00" />
			    	</fieldset>
		    	</div>
		    	<div className="col-md-4">
			    	<fieldset className="form-group">
			    		<label>Monthly</label>
						<input type="text" id="calcultaror-monthly" className="form-control" placeholder="0.00" />
			    	</fieldset>
		    	</div>
		    	<div className="col-md-4">
			    	<fieldset className="form-group">
			    		<label>Total Debt</label>
						<input type="text" id="calcultaror-total" className="form-control" placeholder="0.00" />
			    	</fieldset>
	    		</div>
	    </div>
    	</form>	    
  	}
}