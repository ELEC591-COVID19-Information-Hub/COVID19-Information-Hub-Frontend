import React from "react";
import {Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography} from "@mui/material";
import './index.css'
import CloseIcon from '@mui/icons-material/Close';
import {Title} from "@mui/icons-material";
import {Post} from "./Post";

export const DetailPage = (props) => {
    // props: state, data: {"date", "case", "death"}
    // props: Posts: [{id, title, content, author}] Comments: [{id, post_id, content, author}]

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
                    {props.posts.map((value, index) => {
                        return (
                            <Post key={index} post={value}
                                  comment={props.comments.filter(comment => comment.pid === value.id)}/>
                        )
                    })}
                </Stack>
            </DialogContent>
        </Dialog>
    )

}
