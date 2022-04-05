import React from "react";
import {
    Button,
    CardActions,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import './index.css'
import CloseIcon from '@mui/icons-material/Close';
import {Title} from "@mui/icons-material";
import {Post} from "./Post";
import ReactEcharts from 'echarts-for-react';
import name2abbr from '../../data/name-abbr.json'

export const DetailPage = (props) => {
    // props: state, data: {"date", "case", "death"}
    // props: Posts: [{id, title, content, author}] Comments: [{id, post_id, content, author}]

    let covidData = props.covidData.filter(data => name2abbr[data.state] === props.state).sort((a, b) => new Date(a) - new Date(b))
    let [newPostContent, setNewPostContent] = React.useState('')
    let handleAddPost = (value) => {

        const data = {
            id: Math.max(...props.posts.map(post => post.id)) + 1,
            author: 'Jerry',
            content: value,
            state: props.state,
            title: 'New post by Jerry'
        }
        props.handleAddPost(data)
        setNewPostContent('')
    }
    const data = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                label: {
                    backgroundColor: "#6a7985"
                }
            }
        },
        legend: {
            data: ["Infected", "Dead"]
        },
        dataZoom: [
            {
                type: "slider",
                height: 8,
                bottom: 20,
                borderColor: "transparent",
                backgroundColor: "#e2e2e2",
                handleIcon:
                    "M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z", // jshint ignore:line
                handleSize: 20,
                handleStyle: {
                    shadowBlur: 6,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2,
                    shadowColor: "#aaa"
                }
            },
            {
                type: "inside"
            }
        ],
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            data: covidData.map(data => data.date),
            show: true,
            axisLabel: {
                color: "gray",
                fontWeight: "bold",
                rotate: 90,
                interval: 6
            }
        },
        yAxis: {
            type: "value",
            axisLabel: {
                color: "gray",
                inside: true
            }
        },
        series: [
            {
                name: "Cases",
                type: "bar",
                smooth: true,
                data: covidData.map((data, index) => index === 0 ? data.cases : data.cases - covidData[index - 1].cases),
                symbol: "none",
                color: "#0000ff"
            },
            {
                name: "Death",
                type: "bar",
                smooth: true,
                data: covidData.map(data => data.deaths),
                symbol: "none",
                color: "#FF4500"
            }
        ]
    };
    return (
        <Dialog open={props.open} onClose={props.onClose} fullWidth={true} maxWidth={'md'}>

            <DialogTitle className={'dialogTitle'}>
                Details and posts for {props.state}
                <IconButton onClick={props.onClose}>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent>

                <Stack spacing={2}>
                    <ReactEcharts
                        style={{
                            height: "600px",
                            width: "100%"
                        }}
                        option={data}
                    />
                    {props.posts.map((value, index) => {
                        return (
                            <Post key={index} post={value}
                                  comments={props.comments.filter(comment => comment.pid === value.id)}
                                  setComments={props.setComments}
                            />
                        )
                    })}
                    <Divider/>
                    <TextField name={"newPost"} className={"w-full"} placeholder={"Add your post here"}
                               value={newPostContent}
                               onChange={(event => setNewPostContent(event.target.value))} multiline rows={3}>
                    </TextField>
                    <br/>
                    <CardActions>
                        <Button id='add-post-btn' size="small"
                                onClick={() => {
                                    if (newPostContent !== '') {
                                        handleAddPost(newPostContent)
                                    }

                                }}>Send</Button>

                        <Button size="small" color={"error"} onClick={() => {
                            setNewPostContent("");
                        }}>Cancel</Button>

                    </CardActions>
                </Stack>
            </DialogContent>
        </Dialog>
    )

}
