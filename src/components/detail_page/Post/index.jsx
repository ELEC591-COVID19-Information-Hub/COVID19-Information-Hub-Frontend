import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Post = (props) => {
    // props: post,comment
    //
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{props.post.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.post.content}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

