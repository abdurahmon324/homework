const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

const styles = {
    logo: {
        with: "100%",
        padding: "2rem 0",
        textAlign: "center"
    },
    logoImg: {
        width: "300px",
    },
    grid: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "1rem 0"
    },
    box: {
        width: "300px",
        border: "2px solid #002",
        background: "#fff",
        borderRadius: ".5rem",
    },
    header: {
        textAlign: "center",
        borderBottom: "2px solid #002"
    },
    img: {
        margin: "3rem 0",
        width: "7rem",
    },
    body: {
        padding: "2rem"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textEnd:{
        marginTop:"2rem"
    }
}

const gridItem = React.createElement('div', { className: 'item', key: 2 }, [
    React.createElement('div', { className: "box", style: styles.box, key: 1 }, [
        React.createElement('div', { classname: "header", style: styles.header }, [
            React.createElement('img', { src: "./images/img.png", style: styles.img })
        ]),
        React.createElement('div', { classname: "body", style: styles.body }, [
            React.createElement('div', { style: styles.title }, [
                React.createElement('div', { style: styles.text }, [
                    React.createElement('h1', null, "Pokemons"),
                    React.createElement('p', null, "Grass, Poisons")
                ]),
                React.createElement("i", { className: "fa-solid fa-heart" })
            ]),
            React.createElement('h1', {style:styles.textEnd}, "6.9kg   99 age"),
        ])
    ])
])

const grid = React.createElement('div', { className: "grid", style: styles.grid }, [
    gridItem,
    gridItem,
    gridItem,
    gridItem,
])

const wrapper = React.createElement('div', { className: 'container', key: 2 }, [
    React.createElement('div', { className: "logo", style: styles.logo, key: 1 }, [
        React.createElement('img', { src: "./images/pokemon_logo 1.png", style: styles.logoImg, alt: "img_1" })
    ]),
    grid,
    grid
])

root.render(wrapper)