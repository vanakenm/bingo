import logo from './logo.svg';
import './App.css';

function App() {
  let problems = [[
    "Character encodings",
    "Too many levels of indirection",
    "Badly named variable",
    "Timezone fun",
    "Bad memory allocation",
  ],[
    "Type conversion",
    "Race condition",
    "Never ending loop",
    "Rounding error",
    "Rounding error",
    "Off by one error",
  ],[
    "Rounding error",
    "Rounding error",
    "Joker",
    "Rounding error",
    "Rounding error",
  ], [
    "Rounding error",
    "Rounding error",
    "Rounding error",
    "Rounding error",
    "Rounding error",
  ], [
    "Rounding error",
    "Rounding error",
    "Rounding error",
    "Rounding error",
    "Rounding error"
  ]
  ]
  return (
   <div>
    <h1 className="text-4xl text-center my-10">Programmer problems bingo</h1>
    <div className="w-full mx-5">
      <table className="m-auto">
        {problems.map((p) => {
          return (
            <tr className="">
            {p.map((c) => {
              return (<td className="p-2 pt-6 pb-6 align-middle text-center  border-solid border-4 border-light-blue-500">{c}</td>)
            })}
          </tr>
            )
        })}
      </table>
    </div>
    </div>
  );
}

export default App;
