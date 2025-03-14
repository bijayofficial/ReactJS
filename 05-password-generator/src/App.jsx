import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isnumber, setIsnumber] = useState(false);
  const [isChar, setIschar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isnumber) str += "0123456789";
    if (isChar) str += "!\\@#$%&*?/|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isnumber, isChar, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select(); // while copying select the password
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password);
  }, [password, length]);
  useEffect(() => {
    passwordGenerator()}, [isChar, isnumber, length, passwordGenerator]
  );
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-500">
        <h1 className="text-4xl text-center bg-neutral-500">
          Password Generator
        </h1>

        <div className="flex shadow-sm rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
            type="button"
            className="outline-none  bg-blue-700 px-3 py-1 m-0 rounded-lg shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-0">
            <input
              type="range"
              min={8}
              max={30}
              id="lengthVar"
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="lengthVar"> Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-0.5">
            <input
              type="checkbox"
              defaultChecked={isChar}
              id="characterAllowed"
              onChange={() => {
                setIschar((prev) => !prev);
              }}
            />
            <label htmlFor="characterAllowed">Character</label>
          </div>
          <div className="flex items-center gap-x-0.5">
            <input
              type="checkbox"
              defaultChecked={isnumber}
              id="numberAllowed"
              onChange={() => {
                setIsnumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberAllowed">Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
