import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchAssets()
  }, [])

  const fetchAssets = async () => {
    try {
      // In a real app, you would fetch data from an API here
      // For this example, we'll use mock data
      const mockData = [
        { symbol: "AAPL", name: "Apple Inc.", price: 150.25, change: 2.5 },
        { symbol: "GOOGL", name: "Alphabet Inc.", price: 2750.8, change: -0.3 },
        { symbol: "MSFT", name: "Microsoft Corporation", price: 305.15, change: 1.2 },
        { symbol: "AMZN", name: "Amazon.com Inc.", price: 3380.5, change: -1.5 },
        { symbol: "FB", name: "Facebook, Inc.", price: 330.75, change: 0.8 },
      ]

      setAssets(mockData)
      setLoading(false)
    } catch (e) {
      console.error("An error occurred while fetching the data:", e)
      setError("Failed to fetch asset data. Please try again later.")
      setLoading(false)
    }
  }

  if (loading) return <div className="loading">Loading assets...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Trading App</h1>
      </header>
      <main>
        <ul className="asset-list">
          {assets.map((asset) => (
            <li key={asset.symbol} className="asset-item">
              <h2>
                {asset.symbol} - {asset.name}
              </h2>
              <p>Price: ${asset.price.toFixed(2)}</p>
              <p className={asset.change >= 0 ? "positive-change" : "negative-change"}>
                Change: {asset.change > 0 ? "+" : ""}
                {asset.change.toFixed(2)}%
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App



