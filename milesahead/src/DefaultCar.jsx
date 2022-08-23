import React from 'react';
import { useState } from 'react';

const Car = () => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [colour, setColour] = useState("");
    const [year, setYear] = useState();

    return (
        <>
            <h1>Car </h1>
    
            <p>{brand},{model}</p>
            <p>{colour}</p>
            <p>{year}</p>

            <form>
                <label> Brand:</label>
                <input name="brand"
                    type="text"
                    value={brand}
                    onChange={e => setBrand(e.target.value)} />

                <label> Model:</label>
                <input name="model"
                    type="text"
                    value={model}
                    onChange={e => setModel(e.target.value)} />

                <label> Colour:</label>
                <input name="colour"
                    type="text"
                    value={colour}
                    onChange={e => setColour(e.target.value)} />

                <label> Year:</label>
                <input name="year"
                    type="text"
                    value={year}
                    onChange={e => setYear(e.target.value)} />
                <br />
            </form>
        </>
    );
}

export default Car;