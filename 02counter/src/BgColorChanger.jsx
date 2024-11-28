import React, { useCallback, useEffect, useRef, useState } from 'react'

export function BgColorChanger(props) {

    const [color, setColor] = useState("olive");
    const [length, setLength] = useState(8);
    const [numInclued, setNumInclued] = useState(false);
    const [charInclued, setCharInclued] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numInclued) str += "0123456789";
        if(charInclued) str += "!@#$%^&*()-_+=[]{}<>?";

        for(let i = 1; i <= length; i++) {
            let charIndex = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(charIndex);
        }
        setPassword(pass);
    }, [length, numInclued, charInclued, setPassword]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numInclued, charInclued, passwordGenerator]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0, 5);
        window.navigator.clipboard.writeText(password);
    }, [password]);
    
    return (
        <div className="w-screen h-screen duration-200" style={{backgroundColor: color}}>
            
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
                <h1 className="text-2xl text-white text-center my-3">Password Generator</h1>
                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input 
                        type='text'
                        value={password}
                        className='outline-none w-full py-1 px-3'
                        placeholder='password'
                        readOnly 
                        ref={passwordRef}
                    />
                    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input 
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e)=>
                                {setLength(e.target.value)}
                            }
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input 
                            type='checkbox'
                            defaultChecked={numInclued}
                            id='numInput'
                            onChange={() => 
                                {setNumInclued((prev)=>!prev)}
                            } 
                        />
                        <label htmlFor="numInput">Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input 
                            type='checkbox'
                            defaultChecked={charInclued}
                            id='charInput'
                            onChange={() => 
                                {setCharInclued((prev) => !prev)}
                            } 
                        />
                        <label htmlFor="charInput">Characters</label>
                    </div>
                </div>
            </div>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={() => setColor("green")}>Green</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>Blue</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}} onClick={() => setColor("purple")}>Purple</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}} onClick={() => setColor("grey")}>Grey</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}} onClick={() => setColor("black")}>Black</button>
                    <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}} onClick={() => setColor("white")}>White</button>
                </div>
            </div>
        </div>
    )
}
