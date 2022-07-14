import React, { useContext, useState } from 'react'
import '../styles/Graph.css'
import data from '../data/accident.json'
import { LocalContext } from '../context/localContext'

function Graph() {
    const localContext = useContext(LocalContext);
    let accidentList = [];

    const [accident1, setAccident1] = useState();
    const [accident2, setAccident2] = useState();
    const [accident3, setAccident3] = useState();
    const [accident4, setAccident4] = useState();
    const [accident5, setAccident5] = useState();

    const clickGraph = (idx) => {
        data.map((item) => {
            if (item.지역 === localContext.local) {
                accidentList.push(parseInt(item.도로교통));
                accidentList.push(parseInt(item.화재));
                accidentList.push(parseInt(item.등산));
                accidentList.push(parseInt(item.수난));
                accidentList.push(parseInt(item.붕괴));

                accidentList.sort(function (a, b) {
                    return b - a;
                });
            }
        })
        data.map((item) => {
            accidentList.map((accidentItem) => {
                // if(item.)
            })
        })
    }

    const showData = (idx) => {
        accidentList = [];
        data.map((item) => {
            if (item.지역 === localContext.local) {
                accidentList.push(parseInt(item.도로교통));
                accidentList.push(parseInt(item.화재));
                accidentList.push(parseInt(item.등산));
                accidentList.push(parseInt(item.수난));
                accidentList.push(parseInt(item.붕괴));

                accidentList.sort(function (a, b) {
                    return b - a;
                });
            }
            console.log(item[0]);
        })
        let a = idx - 1;
        if (idx === 0) {
            setAccident1(accidentList[idx] + '건');
        }
        else if (idx === 1) {
            setAccident2(accidentList[idx] + '건');
        }
        else if (idx === 2) {
            setAccident3(accidentList[idx] + '건');
        }
        else if (idx === 3) {
            setAccident4(accidentList[idx] + '건');
        }
        else if (idx === 4) {
            setAccident5(accidentList[idx] + '건');
        }
    }

    const deleteAccident = (idx) => {
        if (idx === 0) {
            setTimeout(() => setAccident1(''), 2500);
        }
        else if (idx === 1) {
            setTimeout(() => setAccident2(''), 2500);
        }
        else if (idx === 2) {
            setTimeout(() => setAccident3(''), 2500);
        }
        else if (idx === 3) {
            setTimeout(() => setAccident4(''), 2500);
        }
        else if (idx === 4) {
            setTimeout(() => setAccident5(''), 2500);
        }
    }

    // console.log(data);
    return (
        <div>
            <div class="graph_wrap">
                <div class="col">
                    <a href='#fir'><div class="bar" onMouseOver={(e) => { showData(0) }} onMouseLeave={(e) => { deleteAccident(0) }}></div></a> 
                    <div class="acdnt">
                        교통사고 {accident1}
                    </div>
                </div>
                <div class="col">
                    <a href='#sec'><div class="bar" onMouseOver={(e) => { showData(1) }} onMouseLeave={(e) => { deleteAccident(1) }}></div></a>
                    <div class="acdnt">
                        화재 {accident2}
                    </div>
                </div>
                <div class="col">
                    <a href='#thi'><div class="bar" onMouseOver={(e) => { showData(2) }} onMouseLeave={(e) => { deleteAccident(2) }}></div></a>
                    <div class="acdnt">
                        등산 {accident3}
                    </div>
                </div>
                <div class="col">
                    <a href='#fou'><div class="bar" onMouseOver={(e) => { showData(3) }} onMouseLeave={(e) => { deleteAccident(3) }}></div></a>
                    <div class="acdnt">
                        수난 {accident4}
                    </div>
                </div>
                <div class="col">
                    <a href='#fif'><div class="bar" onMouseOver={(e) => { showData(4) }} onMouseLeave={(e) => { deleteAccident(4) }}></div></a>
                    <div class="acdnt">
                        붕괴 {accident5}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graph