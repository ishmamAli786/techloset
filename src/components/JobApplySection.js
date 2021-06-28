import React from 'react';
import './JobApplySection.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Cards from './Cards';

export default function JobApplySection() {
    return (
        <>
        <div className="main_section">
            <div>
            <h1 className="mainh1"> <span className="clr">Are You Ready To</span> <span className="clrs">Join Our Team?</span></h1>
            </div>
            <Grid container>
            <Grid item xs={4} style={{marginTop:"40px"}}>
                <Box px={40}>
                <Cards name={"Data Scientist"}/>
                </Box>
               </Grid>
               <Grid item xs={4} style={{marginTop:"40px"}}>
                <Box px={40}>
                <Cards name={"Product Designer"} title={"(UX BASED)"}/>
                </Box>
               </Grid>
            </Grid>

            <Grid container>
            <Grid item xs={4} style={{marginTop:"40px"}}>
                <Box px={40}>
                <Cards name={"Wordpress Developer"} title={"(Intern)"}/>
                </Box>
               </Grid>
               <Grid item xs={4} style={{marginTop:"40px"}}>
                <Box px={40}>
                <Cards name={"Technical Support Enginer"}/>
                </Box>
               </Grid>
            </Grid>
            <Grid container>
            <Grid item xs={4} style={{marginTop:"40px"}}>
                <Box px={40}>
                <Cards name={"Junior Graphic Designer"}/>
                </Box>
               </Grid>
               <Grid item xs={4} style={{marginTop:"40px"}}>
                <Box px={40}>
                <Cards name={"Digital Marketer"} title={"(SEO EXPERT)"}/>
                </Box>
               </Grid>
            </Grid>
        </div>
        </>
    )
}
