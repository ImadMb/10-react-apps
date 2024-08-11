import { useState, useEffect } from 'react'


function LoadMore() {

    const [count, setCount] = useState(0);
    const [showButton, setShowButton] = useState(true);
    const [fetchedData, setFetchedData] = useState();

    async function fetchProducts() {
        const response = await fetch(`https://dummyjson.com/products?limit20&skip=${count * 20}`);
        const data = await response.json();

        if (data && data.products && data.products.length) {
            setFetchedData(data);
        }

    }

    useEffect(() => {
        fetchProducts();

        if (count === 9)
            setShowButton(false);
    }, [count]);


    return (
        <div className="load-more-container">
            <div className='load-more'>

                {
                    fetchedData ? fetchedData.products.map((prods) => {
                        return <p key={prods.title} >{prods.title}</p>
                    }) : <p>could not load products</p>
                }

                <button disabled={!showButton} onClick={() => setCount(c => c + 1)} >Click me</button>
                {
                    !showButton ? <p>no more products</p> : null
                }
            </div>
        </div>
    )
}

export default LoadMore;