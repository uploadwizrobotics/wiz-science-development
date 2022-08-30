import './Feed.css'
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { endContext } from "../../../Parser/ParsePage.js";
import scrollToDummy from '../../../Transitions/ScrollTo'
import LoadMore from "../../../Transitions/Continue/LoadMore.js";

const Feed = (props) => {

    const header = props.header;
    const emojiArr = props.options;

    const [end, setEnd] = React.useContext(endContext);
    const [loadMore, setLoadMore] = useState(false);
    const pagetype = props.pagetype;

    useEffect(() => {
        $(document).ready(function() {
            $(emojiArr).each(function(i) {
                var toAppend =
                    "<li class='food-item'><span>" +
                    emojiArr[i].icon +
                    "</span><span>" +
                    emojiArr[i].name +
                    "</span>" +
                    "</li>";
                $(".food-choices").append(toAppend);
            });
        });
        
        $(".food-choices").on("click", ".food-item", function() {
            var item = $(this).find("span:first-child");
            $(".chosen-items li:empty:first").text(item.text());
        });
        
        $(".chosen-items li").on("click", function() {
            $(this).text("");
        });
        
        $(".js-feed").on("click", function() {
            var score = 0;
            $(".chosen-items li:not(:empty)").each(function() {
                var text = $(this).text();
                $.grep(emojiArr, function(e, i) {
                    if (e.icon === text) {
                        score = score + parseInt(emojiArr[i].score);
                    }
                });
            });
            
            var randomNumber = Math.floor(Math.random() * 4);
        
            var positive = [
                "Wooooow!",
                "Yaaay, such yummy things.",
                "Thaaanks.",
                "Wow, what do you want? A medal?"
            ];
            var neutral = [
                "We need to get foodings.",
                "You just about made it.",
                "Oh nooooo.",
                "Tough."
            ];
            var negative = [
                "Why do you feed me such disgusting things?",
                "So terrible you are.",
                "Bad luck.",
                "Why is life so cruel to the young, handsome, Daniel?"
            ];
        
            if (score > 5) {
                $(".response").html("🎉 The human is satisfied! 🎉");
                $(".response-dialog").html(positive[randomNumber]);
                $(".avatar__mouth").attr("class", "avatar__mouth happy");
                setLoadMore(true);
                scrollToDummy();
            } else if (score <= 5 && score > 0) {
                $(".response").html("Daniel barely ate 😔");
                $(".response-dialog").html(neutral[randomNumber]);
                $(".avatar__mouth").attr("class", "avatar__mouth neutral");
            } else if (score <= 0) {
                $(".response").html("Daniel is starving ☠️");
                $(".response-dialog").html(negative[randomNumber]);
                $(".avatar__mouth").attr("class", "avatar__mouth sad");
            }
        });
        
        $(".js-reset").on("click", function() {
            $(".chosen-items li, h5").text("");
            $(".response-dialog").html('Feed me!');
            $(".avatar__mouth").attr("class", "avatar__mouth");
        });
    
    
        /*var emojiArr = [
            { icon: "3x", score: "-3", name: "3x" },
            { icon: "4x", score: "-2", name: "4x" },
            { icon: "5x+3", score: "-3", name: "5x+3" },
            { icon: "6x", score: "-4", name: "6x" },
        ];*/
    }, []);

    if (loadMore === true && !end) {
        console.log('It is in here!');
        LoadMore();
        setLoadMore(false);
    }

    return (
        <div className='feed'>
            <Grid container spacing={2}>
                <aside className="instructions">
                    {header}
                </aside>
                <Grid item style={{ flexGrow: "1" }}>
                    <div className="control-center">
                       { (pagetype === 'Lesson') && 
                        <><h4>Your chosen items:</h4><ul className="chosen-items">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul></> }
                { (pagetype === 'Lesson') && 
                    <div><a className="js-feed">Feed me!</a><a className="js-reset">Reset</a></div>
                }
                            <div className="avatar">
                                <div className="avatar__hair"></div>
                                <div className="avatar__head">
                                    <div className="avatar__eyes left"></div>
                                    <div className="avatar__eyes right"></div>
                                    <div className="avatar__mouth"></div>
                                </div>
                                <div className="avatar__ears left"></div>
                                <div className="avatar__ears right"></div>
                                <div className="avatar__coat">
                                    <div className="avatar__shirt"></div>
                                </div>
                            </div>
                            <h5 className="response"></h5>
                            <p>Daniel says: "<span className="response-dialog">Feed me!</span>"</p>
                        </div>
                </Grid>
                <Grid item xs={8}>
                    <main className="food-choices" />
                </Grid>
            </Grid>
        </div>
    );
}

export default Feed;