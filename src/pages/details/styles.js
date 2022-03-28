import styled from 'styled-components'

export const Container = styled.div `
    padding: 8rem 0;

    h1 {
        margin: 3rem 0;
    }
    img {
        width: 300px;
        border-radius: 1rem;
    }
    .movie {
        display: flex;
        justify-content: center;
        align-items: center;
        .details {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 4rem;
            max-width: 50%;
            span {
                line-height: 120%;
                margin-bottom: 1rem;
                font-size: 110%;
            }
            .date {
                opacity: .5;
            }
            button {
                padding: .8rem 2rem;
                background-color: #F45050;
                border-radius: 10px;
                font-size: 100%;
                color: #fff;
                border: none;
                margin-top: 1rem;
                transition: all .5s;
                &:hover {
                    background-color: #F69393;
                }
            }
        }
    }
`