import styled from 'styled-components'

// Each one of these EXPORT are one COMPONENT
export const Container = styled.div`
    h1 {
        text-align:center;
        margin: 4rem 0;
    }
    
`

//We could use a folder, in larger projects, just to organize each one of these components
export const MovieList = styled.ul `
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`

export const Movie = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        transition: .5s;
    }
    a:hover {
        transform: scale(1.1);
    }
    img {
        width: 180px;
        border-radius: .5rem;
        margin-bottom: 1.5rem;
        &:hover{
            border: solid #fff 2px;
        }
    }
    span {
        text-align: center;
        font-weight: bold;
        font-size: 120%;
    }
`