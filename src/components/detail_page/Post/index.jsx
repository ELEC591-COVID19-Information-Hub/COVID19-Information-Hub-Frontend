import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Button,
    CardActions,
    Divider,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Post = (props) => {
    // props: post,comment
    //
    const handleAddComment = (value) => {
        console.log(value)
        const data = {
            id: Math.max(...props.comments.map(comment => comment.id) + 1),
            author: 'Jerry',
            pid: props.post.id,
            content: value
        }

        props.comments.push(data)
        props.setComments([...props.comments])
        setNewComment('')
    }
    let [newComment, setNewComment] = React.useState("")
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{props.post.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.post.content}
                    </Typography>
                    <br/>
                    {props.comments.map((comment, index) => {
                        return (
                            <Stack spacing={1} key={index}>
                                <Divider/>
                                <Typography>
                                    {comment.content}
                                </Typography>
                                <Typography variant={'body2'} align={"right"}>
                                    ---- By {comment.author}
                                </Typography>
                            </Stack>
                        )
                    })}
                    <TextField name={"newComment"} className={"w-full"} placeholder={"Add your comment here"}
                               value={newComment}
                               onChange={(event => setNewComment(event.target.value))} multiline rows={3}>
                    </TextField>
                    <br/>
                    <CardActions>
                        <Button id='add-comment-btn' size="small"
                                onClick={() => {
                                    if (newComment !== '') {
                                        handleAddComment(newComment)
                                    }

                                }}>Send</Button>

                        <Button size="small" color={"error"} onClick={() => {
                            setNewComment("");
                        }}>Cancel</Button>

                    </CardActions>
                </AccordionDetails>

            </Accordion>
        </div>
    )
}

