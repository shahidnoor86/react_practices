import React from 'react'

export function Card({title, section="-", age="-"}) {
    

    return (
        <div className="flex flex-col rounded-xl  p-4 mb-4"
          style={{
            border: '0.88px solid',
    
            backdropFilter: 'saturate(180%) blur(14px)',
            background: ' #ffffff0d',
          }}
        >
          <div>
            <img
              src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
              alt="nft-gif"
              width="400"
              height="400"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col  rounded-b-xl py-4 ">
            <div className="flex justify-between">
              <h1 className="font-bold font-RubikBold">{title}</h1>
              <h3 className="font-semibold font-RubikBold">Age</h3>
            </div>
            <div className="flex  justify-between font-mono">
              <p>{section}</p>
              <p>{age}</p>
            </div>
          </div>
        </div>
    )
}
