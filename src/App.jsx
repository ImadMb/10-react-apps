import QrCode from './QrCode.jsx'
import AccordionExercice from './AccordionExercice.jsx'
import RandomColor from './RandomColor.jsx'
import StarSelection from './StarSelection.jsx'
import LoadMore from './LoadMore.jsx'
import Tree from './Tree.jsx'
import ScrollIndicator from './ScrollIndicator.jsx'
import TabHandler from './TabHandler'
import ModalHandler from './ModalHandler'
import TicTacToe from './TicTacToe'




function App() {

return (
    <div className="app-container">
        <h2>REACT SMALL PROJECTS</h2>
        <AccordionExercice />
        <RandomColor />
        <StarSelection numberOfStars={5} />
        <LoadMore />
        <Tree />
        <QrCode />
        <ScrollIndicator />
        <TabHandler />
        <ModalHandler />
        <TicTacToe />


    </div>
)
}

export default App
