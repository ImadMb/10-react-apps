import { useState, useContext, useEffect } from 'react'

function TicTacToe() {

    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState("");


    function handleGame(index) {
        const gameButtons = document.querySelectorAll(".game-btn");
        setTurn(turn === "X" ? "O" : "X");
        if (gameButtons[index].innerHTML === '' && winner === "")
            gameButtons[index].innerHTML = turn;

        checkWin(gameButtons);
    }

    function checkWin(gameButtons) {
        const buttons = [...gameButtons];

        // console.log(buttons[0].innerHTML);
        
        if(buttons[0].innerHTML === buttons[1].innerHTML && buttons[2].innerHTML === buttons[1].innerHTML && buttons[1].innerHTML !== '') {
            setWinner(buttons[0].innerHTML);
        }
        else if(buttons[3].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[5].innerHTML && buttons[5].innerHTML !== '') {
            setWinner(buttons[3].innerHTML);
            
        }
        else if(buttons[6].innerHTML === buttons[7].innerHTML && buttons[7].innerHTML === buttons[8].innerHTML && buttons[8].innerHTML !== '') {
            setWinner(buttons[6].innerHTML);
            
        }
        else if(buttons[0].innerHTML === buttons[3].innerHTML && buttons[3].innerHTML === buttons[6].innerHTML && buttons[6].innerHTML !== '') {
            setWinner(buttons[0].innerHTML);
            
        }
        else if(buttons[1].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[7].innerHTML && buttons[7].innerHTML !== '') {
            setWinner(buttons[1].innerHTML);
            
        }
        else if(buttons[2].innerHTML === buttons[5].innerHTML && buttons[5].innerHTML === buttons[8].innerHTML && buttons[8].innerHTML !== '') {
            setWinner(buttons[2].innerHTML);
            
        }
        else if(buttons[0].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[8].innerHTML && buttons[8].innerHTML !== '') {
            setWinner(buttons[0].innerHTML);
            
        }
        else if(buttons[2].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[6].innerHTML && buttons[6].innerHTML !== '') {
            setWinner(buttons[2].innerHTML);
            
        }
    }

    function resetGame() {
        const gameButtons = document.querySelectorAll(".game-btn");
        const buttons = [...gameButtons];
        buttons.map((btn) => {
            btn.innerHTML = "";
        });
        setWinner("");

    }
    
    // useEffect(() => {
    //     if(winner !== '')
    //         return <h3>{winner} is the </h3>
        
    // }, [winner]);


    return <div>

        <div className="game-container">
            <div className="row">
                <div className="column"><button className='game-btn' onClick={() => handleGame(0)}></button></div>
                <div className="column"><button className='game-btn' onClick={() => handleGame(1)}></button></div>
                <div className="column"><button className='game-btn' onClick={() => handleGame(2)}></button></div>
            </div>
            <div className="row">
                <div className="column"><button className='game-btn' onClick={() => handleGame(3)}></button></div>
                <div className="column"><button className='game-btn' onClick={() => handleGame(4)}></button></div>
                <div className="column"><button className='game-btn' onClick={() => handleGame(5)}></button></div>
            </div>
            <div className="row">
                <div className="column"><button className='game-btn' onClick={() => handleGame(6)}></button></div>
                <div className="column"><button className='game-btn' onClick={() => handleGame(7)}></button></div>
                <div className="column"><button className='game-btn' onClick={() => handleGame(8)}></button></div>
            </div>
        </div>
        {winner !== "" ? <h2 onClick={resetGame} align="center" style={{marginTop:"10px"}} >Winner is {winner}</h2> : null}
    </div>
}

export default TicTacToe