import React, { useEffect, useState } from 'react';

export default function Shape({ boxData }) {
    const data = boxData.flat(Infinity);
    const [boxesClicked, setBoxesClicked] = useState([]);
    const [orderClicked, setOrderClicked] = useState([]);

    // CHECK IF THE BOX IS CLICKED AND IF IT IS NOT HIDDEN THEN ADD IT TO ORDER AND BOXES CLICKED
    const handleBoxClick = (e) => {
        const box = e.target;
        if (boxesClicked.includes(box) || box.classList.contains('boxHidden')) {
            return;
        }
        setOrderClicked((prev) => [...prev, box]);
        box.classList.toggle('bgGreen');
        setBoxesClicked((prev) => [...prev, box]);
    };

    // CHECK IF ALL BOXES ARE CLICKED AND IF THEY ARE THEN START ANIMATION
    useEffect(() => {
        if (boxesClicked.length === 7) {
            startAnimation();
        }
    }, [boxesClicked]);

    // TOGGLE THE BG GREEN IN ORDER THEY WERE CLICKED
    const startAnimation = () => {
        orderClicked.forEach((box, index) => {
            setTimeout(() => {
                box.classList.toggle('bgGreen');
            }, index * 500);
        });
        setBoxesClicked([]);
        setOrderClicked([]);
    };

    return (
        <div className="boxes">
            {data.map((boxValue, index) => {
                const hidden = !boxValue && 'boxHidden';
                return (
                    <div
                        onClick={handleBoxClick}
                        key={boxValue + '-' + index}
                        className={`box ${hidden}`}
                    ></div>
                );
            })}
        </div>
    );
}
