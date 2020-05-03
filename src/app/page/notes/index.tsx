import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../../store/notes/actions";
import { selectNotes } from "../../../store/notes/selectors";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";

const Notes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes);
  }, [dispatch]);

  const notes = useSelector(selectNotes);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={"height-98 w-100"}
      spacing={3}
    >
      {!!notes &&
      notes.map(el => {
        return (
          <Grid item>
            <Card>
              <CardContent>
                <Typography variant="body2" component="p">
                  {el.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
      <Button variant="contained">Default</Button>
    </Grid>
  );
};
export default Notes;
