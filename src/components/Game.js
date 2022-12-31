import Menu from '../components/Menu';
import Tetris from '../components/Tetris';
import { useGameOver } from '../hooks/useGameOver';

export default function Game ({ rows, columns }) {

    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => {
        resetGameOver();
    }

    return (
        <div className="Game">
            { gameOver ? 
                ( 
                    <Menu onClick={start}/>
                ) 
                : 
                (
                    <Tetris rows={rows} columns={columns} setGameOver={setGameOver}/>
                )
            }
        </div>
    )

}