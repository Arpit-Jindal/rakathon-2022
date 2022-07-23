import { useEffect, useState, useRef } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import MuiTypography from '@mui/material/Typography';
import MainCard from 'ui-component/cards/MainCard';

import AnimateButton from 'ui-component/extended/AnimateButton';

// ==============================|| DEFAULT DASHBOARD ||============================== //

import mainGraph from '../../../images/main_graph.jpeg';
import datasetSimilarity from '../../../images/datasetSimilarity.png';
import algoGraph from '../../../images/algoGraph.png';
import loadingAnimation from '../../../images/loadingAnimation.gif';

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const inputRef = useRef(null);
    const [screenNumber, setScreenNumber] = useState('screen1');

    const getContent = () => {
        if (screenNumber === 'screen1') {
            return (
                <MainCard title="Upload Data">
                    <Grid item xs={12}>
                        <Grid item xs={12} sm={6}>
                            <Grid container direction="column" spacing={1}>
                                <Box border="1px dashed gray" height={200} mb={3} p={10}>
                                    <Grid item>
                                        <MuiTypography variant="body1" gutterBottom textAlign="center" color="#B4B4B4">
                                            Drag &amp; Drop or Upload the data(.csv)
                                        </MuiTypography>
                                    </Grid>
                                </Box>
                                <AnimateButton>
                                    <input
                                        type="file"
                                        accept=".csv"
                                        style={{ visibility: 'hidden' }}
                                        ref={inputRef}
                                        onChange={() => {
                                            setScreenNumber('animation');
                                            setTimeout(() => {
                                                setScreenNumber('screen2');
                                            }, 6000);
                                        }}
                                    />
                                    <Button
                                        fullWidth
                                        size="large"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => inputRef.current.click()}
                                    >
                                        Upload
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            );
        } else if (screenNumber === 'screen2') {
            return (
                <>
                    <Box textAlign="center">
                        <img src={mainGraph} alt="main graph" width={800} marginBottom={5} />
                        <Box>
                            <AnimateButton>
                                <Button
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        setScreenNumber('animation');
                                        setTimeout(() => {
                                            setScreenNumber('screen3');
                                        }, 6000);
                                    }}
                                >
                                    Find Similar Dataset
                                </Button>
                            </AnimateButton>
                        </Box>
                    </Box>
                </>
            );
        } else if (screenNumber === 'screen3') {
            return (
                <>
                    <MuiTypography fontWeight={700} fontSize={20} marginBottom={5} textAlign="center">
                        This dataset is 82.4% similar to Spam Detection dataset in the database.
                    </MuiTypography>
                    <Box textAlign="center">
                        <Box marginBottom={5}>
                            <img width={400} src={algoGraph} alt="algoGraph" />
                        </Box>
                        <Box>
                            <img width={800} src={datasetSimilarity} alt="datasetSimilarity" />
                        </Box>
                    </Box>
                </>
            );
        } else {
            return (
                <Box textAlign="center">
                    <img src={loadingAnimation} alt="main graph" width={700} />
                </Box>
            );
        }
    };
    return getContent();
};

export default Dashboard;
