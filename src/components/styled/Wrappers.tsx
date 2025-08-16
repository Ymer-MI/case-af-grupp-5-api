import styled from 'styled-components'

type WrappersProps = {
    height?: number
}

export const Section = styled.section`
    @media (width >= 48rem) {
        max-width: 80%;
    }`

export const IMGWrapper = styled.div<WrappersProps>`
    @media (width >= 48rem) {
        height: ${(props) => props.height ?? 20}rem;
    }`