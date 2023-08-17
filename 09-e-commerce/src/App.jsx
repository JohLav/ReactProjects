import ProductsList from "./components/ProductsList.jsx";
import FloatingCartButtons from "./components/FloatingCartButtons.jsx";

function App() {
    return (
        <>
            <div className="min-h-screen bg-slate-800">
                <div className="max-w-4xl mx-auto pt-14">
                    <ProductsList />
                </div>
            </div>
            <FloatingCartButtons />
        </>
    );
}

export default App;
