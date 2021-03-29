import React, { useState, useEffect } from 'react'
import Axios from "../axios"
import Item from './Item';

// material-ui imports **
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(1),
  },
  display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
}));

function ItemList() {

    const classes = useStyles();

    const [videosData, setVideosData] = useState([]);
    const [total, setTotal] = useState(1);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(20)
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async (page, pageSize) => {
        setIsLoading(true);
        const response = await Axios.get(`/?page=${page}&pageSize=${pageSize}`)
        setVideosData(response.data.data);
        setTotal(response.data.total);
        setPage(response.data.page);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData(page, pageSize);
    }, [])

    const handlePaginationChange = (e, newPage) => {
       fetchData(newPage, pageSize);
    }

    if(isLoading) return ( <CircularProgress style={{ position:"fixed", top:"50%", bottom: "50%", marginLeft:"50%", marginRight:"50%" }} /> );
    return (
        <div style={{margin:"10px"}}>
            <Grid container className={classes.root} spacing={1}>
                {videosData.map((document, i) => (
                    <Grid key={i} item xs={6} md={2} lg={2} >
                        <Item item={document} />
                    </Grid>
                ))}
            </Grid>
            <div style={{backgroundColor:"white", padding:"10px",marginTop:"10px", borderRadius:"5px", textAlign:"center"}}>
                <Pagination 
                  onChange={handlePaginationChange}
                  defaultPage={1}  
                  page={page}
                  count={Math.ceil(total / pageSize)} 
                  color="secondary" />
            </div>
        </div>
    )
}

export default ItemList
