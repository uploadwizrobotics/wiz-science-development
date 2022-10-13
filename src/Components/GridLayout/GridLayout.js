import React from "react";
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { styled } from '@mui/material/styles';
import Math from '../../Formatting/Math';
import NL from "../NumberLine/NL.js";
import Note from "../Notes/Note.js";
import "./GridLayout.css"
export const otherTextContext = React.createContext();
export const showMoreTextContext = React.createContext();
export const listTextContext = React.createContext();
export const indexTextContext = React.createContext();

export default function GridLayout(props) {

    const counter = React.useRef(0);
    counter.current = counter.current + 1; 
    const text = props.text
    console.log(text)
    const length = text ? text.length : 0;
    const header = props.header;
    const image = props.image;
    const alt = props.alt;
    const width = props.width;
    const height = props.height;
    const zoom = props.zoom;
    const columnDimensions = props.columnDimensions
    var showImage = false;
    var arrayLoop = [];
    var indexarr = [];



    for (var i=0;i<length;i++){
        if (text[i] === ""){
            arrayLoop.push(image.shift())
        } else{
            arrayLoop.push(text[i])
        }
    }
    for (var i=0;i<length;i++){
        indexarr.push(i)
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "white",
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: "none"
      }));
      // For showing local images
      function isImage(stringval) {
        if (stringval.includes("png") || stringval.includes("gif") || stringval.includes("jpg")
        || stringval.includes("jpeg") || stringval.includes("svg") || stringval.includes("webp")){
            return (
                true
            )
        } else{
            return (false)
        }
      }

    const TextType = () => {
            return(
                <Box sx = {{flexGrow:1}}>
                <Grid container spacing={10} padding = {0}>
                    {indexarr.map(index => {
                        if (typeof arrayLoop[index] !== "object" && (arrayLoop[index].substring(0,5) === "https" || isImage(arrayLoop[index]) === true)){
                            return(
                            <Grid item = {true} xs = {columnDimensions[index]} sm = {columnDimensions[index]} md = {columnDimensions[index]}>
                            <Item>
                                <img src = {arrayLoop[index]} width = {width}/>
                            </Item>
                        </Grid>)
                            }
                        else if (typeof arrayLoop[index] === "object") {
                            if (arrayLoop[index].Example === 'Number Line') {
                                const max = text.Max;
                                const min = text.Min;
                                const step = text.Step;
                                const init = text.Initial;
                                const data = text.Data;
                                const useType = text.UseType;
                                return (
                                    <Grid item = {true} xs = {columnDimensions[index]} sm = {columnDimensions[index]} md = {columnDimensions[index]}>
                                    <Item>
                                    <NL max={max} min={min} step={step} init={init} useType={useType}/>
                                        <br />
                                        <p>{(data) && (data.constructor === ({}).constructor) ? <Math inline={data.Content} /> : <div dangerouslySetInnerHTML={{ __html: data }} />}</p>              
                                    </Item>
                                    </Grid>)
                                ;
                            }
                            else if (arrayLoop[index].Example === 'Note') {
                                console.log(arrayLoop[index].Image)
                                return (
                                    <Grid item = {true} xs = {columnDimensions[index]} sm = {columnDimensions[index]} md = {columnDimensions[index]}>
                                    <Item>
                                        <Note text={arrayLoop[index].Content} image={arrayLoop[index].Image}/>            
                                    </Item>
                                    </Grid>)
                    
                            }
                    }
                        else{
                            return(
                            <Grid item = {true} xs = {columnDimensions[index]} sm = {columnDimensions[index]} md = {columnDimensions[index]}>
                            <Item>
                            <div dangerouslySetInnerHTML={{ __html: arrayLoop[index] }} />
                            </Item>
                        </Grid>)
                        }
                        })
                    }
                </Grid>
                </Box>
            )
        }

    return(
        <div className = 'grid'>
        {header && <h1>{header}</h1>}
            { text && <TextType /> }
    </div>
    )
}