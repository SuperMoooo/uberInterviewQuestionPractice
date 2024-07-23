import Shape from './Shape';

const BOX_DATA = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
];

function App() {
    return (
        <>
            <Shape boxData={BOX_DATA} />
        </>
    );
}

export default App;
