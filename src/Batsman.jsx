import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const[sixes, setSixes] = useState(0);

    const handleSingle = () =>{
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }
    const handleSix= () =>{
        const updateRuns = runs + 6;
        const updatedSix = sixes + 1;
        setSixes(updatedSix)
        setRuns(updateRuns);
    }

    return (
        <div>
            <h3>Player : Bangla Batsman</h3>
            {
                <p>Six : {sixes}</p>
            }
            {
                runs > 50 && <p>You score: 50</p>
            }
            <h1>Score : {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}