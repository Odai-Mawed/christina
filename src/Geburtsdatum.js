import React from 'react';

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';


export const MobileDatePickerContainer = styled('div')(({theme})=>({
    [theme.breakpoints.up('md')] : {
        display: 'none'
    },
    width: 'fit-content',
}));

export const DesktopDatePickerContainer = styled('div')(({theme})=>({
    [theme.breakpoints.down('md')] : {
        display: 'none'
    },
    width: 'fit-content',
}));


function Geburtsdatum(){
    const [value, setValue] = React.useState(new Date());

    return(
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePickerContainer>
                    <MobileDatePicker
                    label="Date mobile"
                    value={value}
                    inputFormat="dd/MM/yyyy"
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </MobileDatePickerContainer>
                <DesktopDatePickerContainer>
                    <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="dd/MM/yyyy"
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    value={value}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </DesktopDatePickerContainer>
            </LocalizationProvider>
        </>
    )
};

export default Geburtsdatum;