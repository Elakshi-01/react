import React from "react";
import { useId } from "react";

function Input({label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className=""}){

const id=useId();
    return (
<div  className={`bg-white p-3 rounded-lg text-sm flex ${className}`}  >
<div className="w-1/2">
<label   htmlFor={id}           className="text-black/40 mb-2 inline-block">{label}</label>

<input 
il={id}
className="outlint-none w-full bg-transparent py-1.5"
placeholder="Amount"
disabled={amountDisable}
value={amount}
onChange={(e)=>{
    onAmountChange && onAmountChange(Number(e.target.value))
}}
type="number" />
</div>

<div className="w-1/2 flex flex-wrap justify-end text-right">    

<p    className="text-black/40 mb-2 w-full">Currency type</p>

<select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"

disabled={currencyDisableDisable}
value={selectCurrency}

onChange={(e)=>{
    onCurrencyChange && onCurrencyChange(e.target.value)
}}

>


{currencyOption.map((c)=>(
    <option  key={c}            value={c}>{c}</option>
))}





<option value="usd">usd</option>

</select>
 </div>
</div>
    )
}

export default Input;