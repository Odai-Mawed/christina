import { styled } from '@mui/material/styles';


export const CostumFragebogenFrage = styled('p')(({theme})=>({
    fontWeight: '700',
    color: 'white',
    margin: 'auto',
    fontSize: '40px',
    padding: '40px'
}));



function FragebogenFrage(props) {
    return(
        <>
            <CostumFragebogenFrage>
                {props.children}
            </CostumFragebogenFrage>
        </>
    )
};



export default FragebogenFrage;