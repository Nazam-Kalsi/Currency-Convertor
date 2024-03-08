import { useState } from "react";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/currencyinfo";

function App() {
  let [amount, setAmount] = useState("");
  let [from, setFrom] = useState("usd");
  let [convertedAmount, setConvertedAmount] = useState("");
  let [to, setTo] = useState("inr");

  let data = useCurrencyInfo(from);
  let options = Object.keys(data);

  let swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  function converter() {
    setConvertedAmount(amount * data[to]);
  }
  return (
    <div className="w-full flex items-center  flex-col gap-12 h-lvh bg-blue-400/50 p-12">
      <div className="text-6xl font-bold text-white">
        CURRENCY CONVERTOR 
      </div>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="w-full mb-1">
            <Input
              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              currenctOptions={options}
              selectCurrency={from}
              onCurrencyChange={(from) => setFrom(from)}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <Input
              label="To"
              amount={convertedAmount}
              selectCurrency={to}
              currenctOptions={options}
              onCurrencyChange={(to) => setTo(to)}
              onAmountChange={(convertedAmount) =>
                setConvertedAmount(convertedAmount)
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            onClick={converter}
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;
