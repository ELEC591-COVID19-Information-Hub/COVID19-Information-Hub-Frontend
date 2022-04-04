import React from "react";
import {Map} from "../Map";
import data from "../../data/us-states.json";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider} from "@mui/lab";
import {Box, Grid, Stack, TextField} from "@mui/material";

export const Main = () => {
    const [date, setDate] = React.useState(new Date('2022-01-01'));
    // const date = "2022-01-30"
    const selectedDay = (val) => {
        console.log(val.toISOString().slice(0, 10))
    };

    return (
        <div>

            <Stack>
                <Grid item xs={4} style={{textAlign: "center"}}>
                    <Map date={date.toISOString().slice(0, 10)}
                         data={data.filter((data) => data.date === date.toISOString().slice(0, 10))}/>
                </Grid>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="For desktop"
                        value={date}
                        minDate={new Date('2017-01-01')}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        date={date}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Stack>

        </div>
    )

}
