import React from "react";
import {Map} from "../Map";
import data from "../../data/us-states.json";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider} from "@mui/lab";
import {Box, Grid, Stack, TextField} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {DetailPage} from "../detail_page";
import PostData from "../../data/post.json"
import commentData from '../../data/comments.json'

export const Main = () => {
    let [date, setDate] = React.useState(new Date('2020-06-04'));
    const [detailPageOpen, setDetailPageOpen] = React.useState(false)
    let [detailsState, setDetailsState] = React.useState('TX');
    let [comments, setComments] = React.useState(commentData);
    let [posts, setPosts] = React.useState(PostData)
    const handleClickOpen = () => {
        setDetailPageOpen(true);
    };

    const handleClose = () => {
        setDetailPageOpen(false);
    };

    // const date = "2022-01-30"
    console.log(date)
    return (
        <div>

            <Stack>
                <Grid item xs={4} style={{textAlign: "center"}}>
                    <Map date={date.toISOString().slice(0, 10)}
                         data={data.filter((data) => data.date === date.toISOString().slice(0, 10))}
                         setDetailsState={setDetailsState} handleClickOpen={handleClickOpen}/>
                </Grid>


                <Stack direction="row" spacing={2} justifyItems={"center"} justifyContent={"center"}
                       alignItems={"center"}>
                    <ArrowBackIcon fontSize={"large"} onClick={() => {
                        let temp = new Date(date)
                        temp.setDate(date.getDate() - 1)
                        setDate(temp)
                    }}/>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Choose date to display"
                            value={date}
                            minDate={new Date('2017-01-01')}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            // date={date}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <ArrowForwardIcon fontSize={"large"} onClick={() => {
                        let temp = new Date(date)
                        temp.setDate(date.getDate() + 1)
                        setDate(temp)
                    }}/>
                </Stack>
            </Stack>
            <DetailPage open={detailPageOpen} onClose={handleClose} state={detailsState}
                        posts={posts.filter(post => post.state === detailsState)}
                        comments={comments}
                        setComments={setComments}
                        covidData={data}
                        setPosts={setPosts}
            />
        </div>
    )

}
