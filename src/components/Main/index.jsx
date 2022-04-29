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
import {get, post} from "../../util";


export const Main = (props) => {
    let [date, setDate] = React.useState(new Date('2020-06-04'));
    const [detailPageOpen, setDetailPageOpen] = React.useState(false)
    let [detailsState, setDetailsState] = React.useState('TX');
    let [comments, setComments] = React.useState([]);
    let [posts, setPosts] = React.useState([])
    let updatePosts = (state) => {
        get("/articles/" + state).then(res => {
            console.log(res)
            setPosts([...res])
        })

    }
    const handleClickOpen = () => {
        setDetailPageOpen(true);
    };

    const handleClose = () => {
        setDetailPageOpen(false);
    };


    return (
        <div>

            <Stack>
                <Grid item xs={4} style={{textAlign: "center"}}>
                    <Map date={date.toISOString().slice(0, 10)}
                         data={data.filter((data) => data.date === date.toISOString().slice(0, 10))}
                         setDetailsState={(name) => {
                             setDetailsState(name)
                             updatePosts(name)
                         }} handleClickOpen={handleClickOpen}/>
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
                        handleAddPost={(newPost) => {
                            console.log(newPost)
                            post('/article', newPost).then(r => {
                                console.log('updating')
                                updatePosts(detailsState);
                            })
                        }}
                        updatePosts={r => {
                            updatePosts(detailsState)
                        }}
                        currentUser={props.currentUser}
            />
        </div>
    )

}
