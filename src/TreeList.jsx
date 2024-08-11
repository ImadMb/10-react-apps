import TreeItem from "./TreeItem.jsx"

function TreeList({ data }) {

    // console.log("second", data);

    return (
        <div className="tree-container">
            <ul>
                {
                    data.map((list) =>
                        <TreeItem list={list} />
                    )
                }
            </ul>
        </div>
    )
}

export default TreeList