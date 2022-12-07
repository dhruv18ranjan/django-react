import { Search } from "@material-ui/icons";
import React, { useState } from "react";

/* REACT BOOTSTRAP */
import { Button, Form } from "react-bootstrap";

/* REACT ROUTER DOM */
import { useHistory } from "react-router-dom";

function SearchBox() {
  /* STATE */
  const [keyword, setKeyword] = useState("");

  let history =
    useHistory(); /* CAN'T DIRECTLY USE HISTORY AS IT'S NOT AN ACTUAL PAGE SO CAN'T DESTRUCTURE PROPS */

  /* HANDLER */
  const submitHandler = (e) => {
    e.preventDefault();

    // WHEN USER HITS SUBMIT, REDIRECT TO HOME PAGE TO SEE PRODUCTS AND APPEND ?keyword=...IN URL
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      // IF WE HIT SUBMIT WITHOUT KEYWORD, WE DON'T WANT THE USER TO GET REDIRECTED IN THAT CASE RATHER STAY ON WHATEVER PAGE HE WAS
      history.push(history.push(history.location.pathname));
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <input style={{padding:"20px",color:"black",width:"200px",height:"40px", border:"solid black 1px",borderRadius:"10px",marginRight:"10px"}} 
        type="text"
        name="q"
        placeholder="search"
        onChange={(e) => setKeyword(e.target.value)}
        
      ></input>

      <Button type="submit" style={{borderRadius:"35px",color:"black",backgroundColor:"transparent"}}  className="p-2 mx-sm-2">
      <Search style={{color:"black",fontSize:"30 px"}} />
      </Button>
    </Form>
  );
}

export default SearchBox;
