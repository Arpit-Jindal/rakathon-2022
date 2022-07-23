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

import graph6 from '../../../images/6_graphs.png';
import energyGraph from '../../../images/energy_graph.jpeg';
import loadingAnimation from '../../../images/loadingAnimation.gif';

const Hardware = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const inputRef = useRef(null);
    const [screenNumber, setScreenNumber] = useState('screen1');

    const getContent = () => {
        if (screenNumber === 'screen1') {
            return (
                <>
                    <Box textAlign="center">
                        <img src={graph6} alt="6 graph" width={1400} />
                    </Box>

                    <AnimateButton>
                        <Button
                            fullWidth
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
                            Optimize
                        </Button>
                    </AnimateButton>
                </>
            );
        } else if (screenNumber === 'screen3') {
            return (
                <>
                    <Box textAlign="center">
                        <img width={1200} src={energyGraph} alt="energyGraph" />
                    </Box>
                    <Box display="flex" alignItems="baseline" marginLeft={30}>
                        <MuiTypography fontWeight={500} fontSize={30} marginTop={10}>
                            After optimization energy consumption has been reduced by
                        </MuiTypography>
                        <MuiTypography marginLeft={2} fontWeight={900} fontSize={40}>
                            30%
                        </MuiTypography>
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

export default Hardware;
